import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Tooltip from '@mui/material/Tooltip';
import { BACKEND } from '../config';
import { FRONTEND } from '../config';

// ===== Tipos =====
type TipoRelatorio = 'RI' | 'RNC' | 'RR';

interface DadosExcel {
  idDadosExcel: number;
  tag: string;
  equipamento: string;
  denominacao: string;
  noTAG?: string;
}

interface Relatorio {
  idRelatorioInspecao?: number;
  idRelatorioNaoConformidade?: number;
  idRelatorioReparo?: number;
  tipoRelatorio?: TipoRelatorio | null;

  equipamento?: string | null;
  area?: string | null;
  denominacao?: string | null;
  noTAG?: string | null;
  tag?: string | null;
  numero?: string | null;

  // calculados para o DataGrid
  idGrid?: string;
  equipamentoView?: string | null; // <- EXIBIR AQUI
}

// ===== Helpers =====
const inferTipoRelatorio = (row: Relatorio): TipoRelatorio | undefined => {
  if (row.tipoRelatorio === 'RI' || row.tipoRelatorio === 'RNC' || row.tipoRelatorio === 'RR') {
    return row.tipoRelatorio;
  }
  if (row.idRelatorioInspecao != null) return 'RI';
  if (row.idRelatorioNaoConformidade != null) return 'RNC';
  if (row.idRelatorioReparo != null) return 'RR';
  return undefined;
};

const resolveIdDoRelatorio = (
  row: Relatorio,
  tipo: TipoRelatorio | undefined
): number | undefined => {
  switch (tipo) {
    case 'RI':
      return row.idRelatorioInspecao;
    case 'RNC':
      return row.idRelatorioNaoConformidade;
    case 'RR':
      return row.idRelatorioReparo;
    default:
      return undefined;
  }
};

/** Normaliza a resposta do endpoint de relatórios:
 *  - Achata arrays aninhados [[...],[...],[...]]
 *  - Remove `id` genérico do backend
 *  - Infere `tipoRelatorio` se vier nulo
 *  - Cria `idGrid` único e estável
 *  - Calcula `equipamentoView`: RI -> equipamento, RNC/RR -> area
 */
const normalizarRelatoriosDisponiveis = (raw: any): Relatorio[] => {
  const flat: any[] = Array.isArray(raw) ? raw.flat() : [];
  return flat.map((item, idx) => {
    const { id, ...resto } = item ?? {};
    const tipo = inferTipoRelatorio(resto);
    const idDoRel = resolveIdDoRelatorio(resto, tipo);
    const idGrid = `${tipo ?? 'X'}-${idDoRel ?? `fallback-${idx}`}`;

    // calcula equipamentoView conforme regra
    const equipamentoView = (() => {
      if (tipo === 'RI') return resto.equipamento ?? resto.area ?? null;
      if (tipo === 'RNC' || tipo === 'RR') return resto.area ?? resto.equipamento ?? null;
      return resto.equipamento ?? resto.area ?? null;
    })();

    return {
      ...resto,
      tipoRelatorio: tipo,
      idGrid,
      equipamentoView,
    } as Relatorio;
  });
};

// ===== Componente =====
const JanelaPrestador: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>();
  const [tableData, setTableData] = useState<DadosExcel[]>([]);
  const [selectedReport, setSelectedReport] = useState<Relatorio[]>([]);
  const [btnRC, setBtnRC] = useState<boolean>(false);
  const [btnRNC, setBtnRNC] = useState<boolean>(false);
  const [btnRI, setBtnRI] = useState<boolean>(false);

  // Ação do botão "Selecionar" no primeiro grid
  const handleTabelaDadosRelatorio = (ids: number) => {
    setSelectedId(ids);
    setBtnRC(true);
    setBtnRI(true);
    setBtnRNC(true);
  };

  // Aberturas em nova aba
  const abrirRI = () => {
    if (selectedId) window.open(`${FRONTEND}/prestador/Ri/${selectedId}`, '_blank');
    else alert('Selecione um registro na tabela acima para prosseguir');
  };
  const abrirRR = () => {
    if (selectedId) window.open(`${FRONTEND}/prestador/RR/${selectedId}`, '_blank');
    else alert('Selecione um registro na tabela acima para prosseguir');
  };
  const abrirRNC = () => {
    if (selectedId) window.open(`${FRONTEND}/prestador/RNC/${selectedId}`, '_blank');
    else alert('Selecione um registro na tabela acima para prosseguir');
  };

  // Carregamento dos dados
  useEffect(() => {
    // GRID 1 — DadosExcel
//    fetch(`${BACKEND}/dadosExcel/listarTodos`)
    fetch(`${BACKEND}/dadosExcel/listarTodos`)
      .then((r) => r.json())
      .then((data: DadosExcel[]) => setTableData(data))
      .catch((e) => console.error('Erro ao carregar listarTodos:', e));

    // GRID 2 — Relatórios disponíveis (array de arrays)
    fetch(`${BACKEND}/dadosExcel/relatoriosDisponiveis`)
      .then((r) => r.json())
      .then((raw) => setSelectedReport(normalizarRelatoriosDisponiveis(raw)))
      .catch((e) => console.error('Erro ao carregar relatoriosDisponiveis:', e));
  }, []);

  // Colunas GRID 1 — DadosExcel (sem mudanças de regra aqui)
  const columnsDadosPG: GridColDef<DadosExcel>[] = [
    { field: 'idDadosExcel', headerName: 'ID', width: 90 },
    { field: 'tag', headerName: 'TAG', width: 150 },
    { field: 'noTAG', headerName: 'noTAG', width: 180 },
    { field: 'equipamento', headerName: 'Equipamento', width: 300 },
    { field: 'denominacao', headerName: 'Denominação', width: 300 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => handleTabelaDadosRelatorio(params.id as number)}
          >
            Selecionar
          </Button>
        </strong>
      ),
    },
  ];

  // Colunas GRID 2 — Relatórios (usa equipamentoView)
 const columnsDadosRel: GridColDef<Relatorio>[] = [
  { field: 'tipoRelatorio', headerName: 'Tipo', width: 120 },
  { field: 'tag', headerName: 'TAG', width: 150 },
  { field: 'noTAG', headerName: 'noTAG', width: 180 },
  { field: 'equipamentoView', headerName: 'Equipamento/Área', width: 260 },
  { field: 'denominacao', headerName: 'Denominação', width: 300 },
  {
    field: 'acao',
    headerName: 'Ações',
    width: 160,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      const tipo = inferTipoRelatorio(params.row);
      if (!tipo) return null;

      const idDoRel = resolveIdDoRelatorio(params.row, tipo);
      if (!idDoRel) return null;

      const rotas: Record<TipoRelatorio, string> = {
        RI: `${FRONTEND}/prestador/Ris/${idDoRel}`,
        RNC: `${FRONTEND}/prestador/RNCs/${idDoRel}`,
        RR: `${FRONTEND}/prestador/RRs/${idDoRel}`,
      };

      // Definição de estilos por tipo
      const buttonProps =
        tipo === "RI"
          ? { color: "success" as const }
          : tipo === "RNC"
          ? { color: "error" as const }
          : {
              sx: {
                backgroundColor: "blue",
                color: "white",
                mt: 1,
                "&:hover": { backgroundColor: "darkblue" },
              },
            };

      return (
        <Button
          variant="contained"
          size="small"
          {...buttonProps}
          onClick={() => window.open(rotas[tipo], "_blank")}
        >
          {tipo}
        </Button>
      );
    },
  },
];


  return (
    <div style={{ height: 380 }}>
      {/* GRID 1 — DADOS EXCEL */}
      <DataGrid
        rows={tableData}
        columns={columnsDadosPG}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => row.idDadosExcel}
      />

      {/* BOTÕES DE INCLUSÃO */}
      <Tooltip title="Incluir Relatório de Inspeção">
        <Button
          id="btnRI"
          variant="contained"
          color="success"
          startIcon={<LibraryAddIcon />}
          onClick={abrirRI}
          disabled={!btnRI}
          sx={{ mt: 1, mr: 1 }}
        >
          Incluir RI
        </Button>
      </Tooltip>

      <Tooltip title="Incluir Relatório de Não Conformidade">
        <Button
          id="btnRNC"
          variant="contained"
          color="error"
          startIcon={<LibraryAddIcon />}
          onClick={abrirRNC}
          disabled={!btnRNC}
          sx={{ mt: 1, mr: 1 }}
        >
          Incluir RNC
        </Button>
      </Tooltip>

      <Tooltip title="Incluir Relatório de Reparo">
        <Button
          id="btnRR"
          variant="contained"
          sx={{ backgroundColor: 'blue', color: 'white', mt: 1 }}
          startIcon={<LibraryAddIcon />}
          onClick={abrirRR}
          disabled={!btnRC}
        >
          Incluir RR
        </Button>
      </Tooltip>

      <br />
      <br />

      {/* GRID 2 — RELATÓRIOS DISPONÍVEIS */}
      <h3>Relatórios disponíveis:</h3>
      <DataGrid
        rows={selectedReport}
        columns={columnsDadosRel}
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => row.idGrid as string}
      />

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default JanelaPrestador;
