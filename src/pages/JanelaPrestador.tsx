import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import {BACKEND} from "../config";
import { log } from 'console';


interface DadosExcel {
  idDadosExcel: number;
  tag: string;
  equipamento: string;
  denominacao: string;
}

interface RI {
  idRelatorioInspecao: number;
  equipamento: string;
  denominacao: string;
  noTAG: string;
}

interface RNC {
  idRelatorioInspecao: number;
  idRelatorioNaoConformidade: number;
  equipamento: string;
  denominacao: string;
  noTAG: string;
}

const JanelaPrestador = () => {
  const [selectedId, setSelectedId] = useState<number>();
  const [tableData, setTableData] = useState<DadosExcel[]>([]);
  const [selectedRI, setSelectedRI] = useState<RI[]>([]);
  

  const handleTabelaDadosRelatorio = (ids: number) => {
    console.log('Ação 1 clicada para o ID:', ids);
    setSelectedId(ids);

    fetch(BACKEND+`/RI/carregaRI/${ids}`)
      .then((response) => response.json())
      .then((data) => setSelectedRI(data))
      .catch((error) => console.error('Erro ao carregar RI:', error));
  };

  const handleTabelaDadosExcel = (ids: number) => {
    console.log('Ação 1 clicada para o ID:', ids);
    setSelectedId(ids);
  };

  const handleTabelaRI = (idRIs: any) => {
   
    window.open(`http://localhost:3000/prestador/Ris/${idRIs}`);
  };
 

  const columnsDadosPG = [
    { field: 'idDadosExcel', headerName: 'ID' },
    { field: 'tag', headerName: 'TAG', width: 150 },
    { field: 'equipamento', headerName: 'Equipamento', width: 300 },
    { field: 'denominacao', headerName: 'Denominação', width: 300 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 150,
      renderCell: (params: { id: any }) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => handleTabelaDadosRelatorio(params.id)}
          >
            Selecionar
          </Button>
        </strong>
      ),
    },
  ];


 


  const columnsDadosRI = [
    { field: 'idRelatorioInspecao', headerName: 'ID' },
    { field: 'equipamento', headerName: 'Equipamento', width: 300 },
    { field: 'denominacao', headerName: 'Denominação', width: 300 },
    { field: 'noTAG', headerName: 'noTAG', width: 300 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 150,
      renderCell: (params: { id: any }) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => handleTabelaRI(params.id)}
          >
            Abrir RI
          </Button>
        </strong>
      ),
    },
  ];

  /* Abre uma nova janela com o DadosExcel - Novo RI*/
  const RI = () => {
    if (selectedId) {
      window.open(`http://localhost:3000/prestador/Ri/${selectedId}`);
    } else {
      alert('Selecione um registro na tabela acima para prosseguir');
    }
  };
 

  useEffect(() => {

   
    fetch(BACKEND+'/dadosExcel/listarTodos')
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div style={{ height: 380 }}>
      <DataGrid
        rows={tableData}
        columns={columnsDadosPG}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => row.idDadosExcel}
      />

      <Button
        id="btnRI"
        variant="contained"
        color="success"
        startIcon={<LibraryAddIcon />}
        onClick={RI}
      >
        Incluir RI
      </Button>

      <br />
      <br />

      <h3>Relatório de Inspeção:</h3>

      <DataGrid
        rows={selectedRI}
        columns={columnsDadosRI}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => row.idRelatorioInspecao}
      />
 
    </div>
  );
};

export default JanelaPrestador;
