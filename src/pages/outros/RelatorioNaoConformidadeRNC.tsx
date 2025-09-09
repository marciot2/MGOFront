import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import '../../css/caldeira.css';
import { Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, Input } from '@mui/material';
import * as React from 'react';
import './styles.css';
import DatePicker from 'react-datepicker';
import { BACKEND } from "../../config";
import { FRONTEND } from "../../config";

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SaveIcon from '@mui/icons-material/Save';
import BaixarIcon from '@mui/icons-material/IosShare';
import WordIcon from '@mui/icons-material/TextSnippet';

import { useParams } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from "date-fns/locale";
import Button from '@mui/material/Button';

interface RncBase {
  equipamento: string;
  tag: string;
  eempresa: string;
  denominacao: string;
  noTAG: string;
  area: string;
  numero: string;
  tipoInspecao: string;
  responsavelInspecao: string;
  condicaoEncontrada: string;
  recomendacaoReparo : string;
  id: string
}

export default function RelatorioNaoConformidade() {
  // Arquivos
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // IDs e params
  const { id, idRNCs } = useParams<{ id?: string; idRNCs?: string }>(); // id = base (ex.: idDadosExcel), idRNCs = id do próprio RNC
  const [idRelatorioNaoConformidade, setIdRelatorioNaoConformidade] = useState<string>('');

  // Dados base
  const [dataBase, setDataBase] = useState<RncBase | undefined>(undefined);
  const [equipamento, setEquipamento] = useState<string>('');
  const [area, setArea] = useState<string>('');
  const [denominacao, setDenominacao] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [noTAG, setNoTAG] = useState<string>('');

  // Combos habilitados/desabilitados conforme TAG
  const [isComboCF, setIsComboCF] = useState<boolean>(false);
  const [valueCF, setValueCF] = useState<string>('');

  // Campos do formulário
  const [status, setStatus] = useState<string>('NÃO_CONFORMIDADE'); // único status permitido aqui
  const [numero, setNumero] = useState<string>('');                 // sempre string
  const [dataInspecao, setDataInspecao] = useState<Date | null>(new Date()); // nunca undefined

  const [condicaoEncontrada, setCondicaoEncontrada] = useState<string>('.');
  const [recomendacaoReparo, setRecomendacaoReparo] = useState<string>('.');
  const [tipoInspecao, setTipoInspecao] = useState<string>('');
  const [responsavelInspecao, setResponsavelInspecao] = useState<string>('');
  const [empresa, setEmpresa] = useState<string>('MKS');
  const [tipoRelatorio] = useState<string>('RNC');

  // Controle UI
  const [isDisabledRR, setIsDisabledRR] = useState<boolean>(true);
  const [errorNumero, setErrorNumero] = useState<string>('');

  // Opções
  const arrayCF = [
    { label: ' ', value: '   ' },
    { label: 'SH Secundário BT', value: 'SH_Secundario_BT' },
    { label: 'Fornalha', value: 'Fornalha' },
    { label: 'Leito Fluidizado', value: 'Leito_Fluidizado' },
    { label: 'SH Secundário AT', value: 'SH_Secundario_AT' },
    { label: 'SH Primário AT', value: 'SH_Primario_AT' },
    { label: 'SH Primário BT', value: 'SH_Primario_BT' },
    { label: 'Evaporador', value: 'Evaporador' },
    { label: 'Economizador', value: 'Economizador' }
  ];

  // Navegação
  const Voltar = () => window.open(FRONTEND + "/prestador/janelaprincipal");

  // Upload
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleUploadS3 = async () => {
    if (!selectedFile || !idRelatorioNaoConformidade) return;

    const formData = new FormData();
    formData.append('files', selectedFile);
    formData.append('id', idRelatorioNaoConformidade);
    formData.append('tipo', 'RNC');
    formData.append('tag', tag ?? '');
    formData.append('noTAG', noTAG ?? '');
    formData.append('tipoRelatorio', 'RNC');

    try {
      const uploadUrl = BACKEND + '/RNC/S3/salvar';
      const response = await axios.post(uploadUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 200) {
        await handleRefreshFile(idRelatorioNaoConformidade);
      }
    } catch (error) {
      console.error('Erro no upload do arquivo:', error);
    }
  };

  // Salvar
  const saveRNC = () => {
    // Validações simples
    if ((status ?? '').trim() === '') return alert('Selecione um Status!!!');
    if ((numero ?? '').trim() === '') return alert('Número do documento inválido!!!');
    if ((responsavelInspecao ?? '').trim() === '') return alert('Informe o responsável pela inspeção!!!');
    if ((condicaoEncontrada ?? '.').trim() === '.') return alert('Informe a condição encontrada!!!');
    if ((recomendacaoReparo ?? '.').trim() === '.') return alert('Informe as recomendações de reparo!!!');
    if ((noTAG ?? '').trim() === '') return alert('Selecione uma opção na lista Caldeira de Força!!!');
    if (!id || Number(id) === 0) return alert('Código base não encontrado!!!');

    try {
      const formData = {
        idRelatorioNaoConformidade,
        id, // referência base (ex.: idDadosExcel)
        status,
        equipamento,
        tag,
        numero,
        area: equipamento,
        tipoInspecao,
        dataInspecao,  
        condicaoEncontrada,
        recomendacaoReparo,
        
        denominacao,
        empresa,
        noTAG,
        tipoRelatorio,
        responsavelInspecao
      };

      axios.put(BACKEND + '/RNCs/save', formData).then(
        (response) => {
          if (response.status === 200) {
           
           
            alert('Relatório de Não Conformidade salvo com sucesso!!!');
            setIsDisabledRR(false);
          }
        },
        (error) => console.log(error)
      );
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  // Gerar DOCX
  const ExportWord = () => {
    try {
      const formData = {
        id,
        status,
        area: equipamento,
        denominacao,
        tipoInspecao,
        dataInspecao,
        empresa,
        tag,
        numero,
        condicaoEncontrada,
        recomendacaoReparo,
       
        responsavelInspecao
      };

      axios.post(BACKEND + '/RNC/enviar', formData).then(
        (response) => {
          if (response.status === 200) alert('Documento criado com sucesso!!!');
        },
        (error) => console.log(error)
      );
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  const baixarWord = () => {
    axios({
      method: 'get',
      url: BACKEND + '/downloadRNC',
      responseType: 'arraybuffer',
      timeout: 5000,
    })
      .then((response) => {
        if (response.status === 200) {
          const url = URL.createObjectURL(
            new Blob([response.data], {
              type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            })
          );
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'arquivo.docx');
          document.body.appendChild(link);
          link.click();
          link.remove();
        }
      })
      .catch((error) => console.error(error));
  };

  // Helpers
  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus((event.target.value as string) ?? 'NÃO_CONFORMIDADE');
  };

  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ?? '';
    setNumero(value); // mantém SEMPRE controlado
    if (value.trim() === '') {
      setErrorNumero('Número não pode ser em branco ou nulo');
    } else if (!/^\d+$/.test(value)) {
      setErrorNumero('Número deve conter apenas dígitos');
    } else {
      setErrorNumero('');
    }
  };

  const handleChangeCF = (event: SelectChangeEvent) => {
    const v = (event.target.value as string) ?? '';
    setNoTAG(v);
    setValueCF(v);
  };

  const handleRefreshFile = async (idForFiles?: string) => {
    const idToUse = idForFiles ?? idRelatorioNaoConformidade;
    if (!idToUse) return;
    setLoading(true);
    try {
      const response = await axios.get<string[]>(BACKEND + `/RNC/buscafile/${idToUse}`);
      setFiles(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error('Erro ao buscar os arquivos', err);
    } finally {
      setLoading(false);
    }
  };

  const editor1 = useRef(null);
  const editor2 = useRef(null);
  const config = { readonly: false };

  // Desabilita combo quando for exatamente a TAG CF
  const checkTagFor = (tg: string) => {
    if (!tg) {
      setIsComboCF(false);
      return;
    }
    if (tg === '3403-21-020-CF') {
      setIsComboCF(true);  // DESABILITA combo (regra CF)
    } else {
      setIsComboCF(false); // Habilita combo
    }
  };

  // Prefill a partir de um RNC já existente (quando carregar por id do próprio RNC)
  const prefillFromRNC = (rnc: any) => {
    const idR = String(rnc.idRelatorioNaoConformidade ?? rnc.id ?? '');
    setIdRelatorioNaoConformidade(idR);

    setNumero(String(rnc.numero ?? ''));
    setEquipamento(String(rnc.equipamento ?? rnc.area ?? ''));
    setResponsavelInspecao(String(rnc.responsavelInspecao ?? ''));
    setTipoInspecao(String(rnc.tipoinspecao ?? ''));
    setDataInspecao(rnc.dataInspecao ? new Date(rnc.dataInspecao) : new Date());
    setCondicaoEncontrada(String(rnc.condicaoEncontrada ?? rnc.condicaoEncontradaHtml ?? '.'));
    setRecomendacaoReparo(String(rnc.recomendacaoReparo ?? rnc.recomendacaoReparoHtml ?? '.'));
    setStatus(String(rnc.status ?? 'NÃO_CONFORMIDADE'));
    setDenominacao(String(rnc.denominacao ?? ''));
    setNoTAG(String(rnc.noTAG ?? ''));
    setValueCF(String(rnc.noTAG ?? ''));
    setTag(String(rnc.tag ?? ''));
    checkTagFor(String(rnc.tag ?? ''));
    setEmpresa(String(rnc.empresa ?? 'MKS'));
    setIsDisabledRR(false);
  };

  const loadRNCById = async (targetId: string) => {
    if (!targetId) return;
    try {
      const url = `${BACKEND}/RNC/carregar/${targetId}`;
      const resp = await axios.get(url);
      if (resp?.status === 200 && resp.data) {
        const rnc = resp.data;
        prefillFromRNC(rnc);
        await handleRefreshFile(String(rnc.idRelatorioNaoConformidade ?? rnc.id ?? ''));
      }
    } catch (e) {
      console.warn('Falha ao carregar RNC por id em /RNC/carregar/{id}', e);
    }
  };

  // Carrega dados base por id (equipamento/tag/denominação etc.)
  useEffect(() => {
    if (id) {
      axios
        .get<RncBase>(BACKEND + `/RNC/carregar/${id}`)
        .then((response) => {
          const dados = response.data as RncBase;
          setDataBase(dados);
          setIdRelatorioNaoConformidade(id);
          setNumero(dados?.numero ?? '');
          setTag(dados?.tag ?? '');
          setEquipamento(dados?.area ?? '');
          setArea(dados?.area ?? '');
          setDenominacao(dados?.denominacao ?? '');
          const baseNoTAG = dados?.noTAG ?? '';
          setNoTAG(baseNoTAG);
          setValueCF(baseNoTAG);
          setResponsavelInspecao(dados?.eempresa ?? '');
          checkTagFor(dados?.tag ?? '');
          setTipoInspecao(dados?.tipoInspecao ?? '');
          setResponsavelInspecao(dados?.responsavelInspecao ?? '');
          setCondicaoEncontrada(dados?.condicaoEncontrada ?? '');
          setRecomendacaoReparo(dados?.recomendacaoReparo ?? '');
          // idRelatorioNaoConformidade é definido após salvar
        })
        .catch((error) => console.log('Erro ao buscar dados base do RNC', error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Carrega arquivos e/ou RNC específico se idRNCs vier na rota
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        if (idRelatorioNaoConformidade) {
          const response = await axios.get<string[]>(`${BACKEND}/RNC/buscafile/${idRelatorioNaoConformidade}`);
          setFiles(Array.isArray(response.data) ? response.data : []);
        }
      } catch (error) {
        console.error('Erro ao carregar arquivos:', error);
      }
    };

    if (idRelatorioNaoConformidade) fetchFiles();

    if (idRNCs) {
      loadRNCById(String(idRNCs));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRNCs, idRelatorioNaoConformidade]);

  // Abertura do RR a partir do RNC salvo
  const abrirRR = () => {
    if (idRelatorioNaoConformidade) {
      window.open(`${FRONTEND}/prestador/RR/${idRelatorioNaoConformidade}`);
    } else {
      alert('Salve o RNC para prosseguir com o RR.');
    }
  };

  return (
    <div className="App">
      <br />
      Código do RNC: {idRelatorioNaoConformidade || '(novo)'}<br /><br />
      <h3>RELATÓRIO DE NÃO CONFORMIDADE - RNC</h3>
      <h5>PREENCHIDO PELO PRESTADOR DE SERVIÇO TERCEIRIZADO</h5>
      <br />

      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' } }} noValidate autoComplete="off">
        <DatePicker
          selected={dataInspecao}
          onChange={(d: Date | null) => setDataInspecao(d ?? null)}
          dateFormat="dd/MM/yyyy"
          locale={ptBR}
          className="custom-datepicker"
        />

        <TextField
          color="success"
          label="Doc. nº"
          variant="outlined"
          onChange={handleNumeroChange}
          error={!!errorNumero}
          helperText={errorNumero || ' '}
          value={numero ?? ''} // garante controlado
        />

        <FormControl fullWidth>
          <InputLabel id="status-rnc-label">Status</InputLabel>
          <Select
            labelId="status-rnc-label"
            id="status-rnc"
            value={status ?? 'NÃO_CONFORMIDADE'}
            label="Status"
            onChange={handleChangeStatus}
          >
            <MenuItem value={'NÃO_CONFORMIDADE'}>Não Conformidade</MenuItem>
          </Select>
        </FormControl>

        <br /><br />

        <TextField color="success" label="Cliente" value={"Eldorado Brasil"} disabled variant="outlined" />
        <TextField color="success" label="Local" value={"Três Lagoas-MS"} disabled variant="outlined" />

        <br /><br />

        <TextField
          value={equipamento ?? ''}
          helperText="Equipamento"
          disabled
          onChange={(e) => setEquipamento(e.target.value ?? '')}
        />

        <TextField
          value={tag ?? ''}
          helperText="TAG"
          disabled
          onChange={(e) => { const t = e.target.value ?? ''; setTag(t); checkTagFor(t); }}
        />

        <TextField
          value={denominacao ?? ''}
          helperText="Denominação"
          disabled
          onChange={(e) => setDenominacao(e.target.value ?? '')}
        />

        <br /><br />

        <TextField
          color="success"
          label="Tipo de inspeção"
          variant="outlined"
          value={tipoInspecao ?? ''}
          onChange={(e) => setTipoInspecao(e.target.value ?? '')}
        />

        <TextField
          color="success"
          label="Responsável pela inspeção"
          variant="outlined"
          value={responsavelInspecao ?? ''}
          onChange={(e) => setResponsavelInspecao(e.target.value ?? '')}
        />

        <TextField
          color="success"
          label="Empresa"
          disabled
          variant="outlined"
          value={empresa ?? ''}
          onChange={(e) => setEmpresa(e.target.value ?? '')}
        />

        <br /><br />

        <label>Caldeira Força: </label>
        <br />
        <Select
          labelId="cf-select-label"
          id="cf-select"
          value={valueCF ?? ''}
          label="Caldeira Força"
          disabled={isComboCF}
          onChange={handleChangeCF}
        >
          {arrayCF.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>

      <br />

      <label>Descrição da condição encontrada:</label>
      <JoditEditor
        ref={editor1}
        value={condicaoEncontrada ?? '.'}
        config={config}
        onBlur={(newContent: string) => setCondicaoEncontrada(newContent ?? '.')}
        onChange={() => {}}
      />

      <br /> <br />
      <label>Recomendação de Reparo:</label>
      <JoditEditor
        ref={editor2}
        value={recomendacaoReparo ?? '.'}
        config={config}
        onBlur={(newContent: string) => setRecomendacaoReparo(newContent ?? '.')}
        onChange={() => {}}
      />
      <br /> <br />

      <Button name="btnSalvar" variant="contained" startIcon={<SaveIcon />} onClick={saveRNC}>
        Salvar
      </Button>

      <Button name="btnWord" variant="contained" color="success" startIcon={<WordIcon />} onClick={ExportWord}>
        Exportar .DOCX
      </Button>

      <Button name="btnGerar" variant="contained" color="info" startIcon={<BaixarIcon />} onClick={baixarWord}>
        Baixar .DOCX
      </Button>

      

      <br /> <br />

      <label>Incluir documentos: </label>
      <br /><br />

      <Input id="file-upload" type="file" onChange={handleFileChange} sx={{ mb: 1 }} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUploadS3}
          disabled={!selectedFile || !idRelatorioNaoConformidade}
          startIcon={<CloudUploadIcon />}
          style={{ textTransform: "none", padding: "18px 50px" }}
        >
          Enviar Arquivo
        </Button>
      </div>

      <button onClick={() => handleRefreshFile()}>Carregar arquivos</button>
      <br /> <br />

      {loading && <div>Carregando...</div>}

      <ul>
        {files.map((file, index) => {
          const fileName = (file?.split('/')?.pop() ?? 'arquivo');
          return (
            <li key={index}>
              <a href={file} target="_blank" rel="noopener noreferrer">
                {fileName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
