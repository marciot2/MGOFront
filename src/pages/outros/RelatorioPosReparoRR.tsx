import '../../css/caldeira.css';
import * as React from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ptBR } from "date-fns/locale";

import DatePicker from 'react-datepicker';
import { Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, Input } from '@mui/material';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import ArticleIcon from '@mui/icons-material/Article';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import axios from 'axios';

import { BACKEND } from '../../config';

interface RRBase {
  denominacao: string;
  tag: string;
  empresa: string;
  equipamento: string;
  area: string;
  noTAG: string;
  numero: string;
  tipoInspecao: string;
  dataInspecao: string;
  responsavelInspecao: string;
  descricaoReparo: string;
  ensaios: string;
  status: string;
  idRelatorioReparo?: string | number;
}

export default function RelatorioPosReparo() {
  // Arquivos
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorFiles, setErrorFiles] = useState<string>('');
  const { id, idRNCs } = useParams<{ id?: string; idRNCs?: string }>(); // id = base (ex.: idDadosExcel), idRNCs = id do próprio RNC
  // Params
  // id = normalmente o id do RNC (base para carregar dados do RR)
 
const [isComboCF, setIsComboCF] = useState<boolean>(false);
  // Identificador do próprio RR (após salvar ou quando já existir)
  const [idRelatorioReparo, setIdRelatorioReparo] = useState<string>('');

  // Campos (sempre controlados)
  const [status, setStatus] = useState<string>('LIBERADO'); // único status permitido
  const [numero, setNumero] = useState<string>('');
  const [errorNumero, setErrorNumero] = useState<string>('');
const [valueCF, setValueCF] = useState<string>('');


  const [denominacao, setDenominacao] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [noTAG, setNoTAG] = useState<string>(''); // mantido caso seja necessário enviar no upload
  const [empresa, setEmpresa] = useState<string>('');
  const [responsavelInspecao, setResponsavelInspecao] = useState<string>('');
  const [tipoInspecao, setTipoInspecao] = useState<string>('');
  const [dataInspecao, setDataInspecao] = useState<Date | null>(new Date()); // nunca undefined
  const [area, setArea] = useState<string>('');                  // fonte de verdade
  const [equipamento, setEquipamento] = useState<string>('');    // RR usa equipamento = area

  const [descricaoReparo, setDescricaoReparo] = useState<string>('.');
  const [ensaios, setEnsaios] = useState<string>('.');

  // Editores
  const editorDesc = useRef(null);
  const editorEnsaios = useRef(null);
  const joditConfig = { readonly: false };

  // --- Helpers de validação ---
  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ?? '';
    setNumero(value);
    if (value.trim() === '') {
      setErrorNumero('Número não pode ser em branco ou nulo');
    } else if (!/^\d+$/.test(value)) {
      setErrorNumero('Número deve conter apenas dígitos');
    } else {
      setErrorNumero('');
    }
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus((event.target.value as string) ?? 'LIBERADO');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  // --- Arquivos (S3) ---
  const handleRefreshFile = async (idForFiles?: string) => {
    const idToUse = idForFiles ?? idRelatorioReparo;
    if (!idToUse) return;
    setLoading(true);
    setErrorFiles('');
    try {
      const response = await axios.get<string[]>(`${BACKEND}/RR/buscafile/${idToUse}`);
      setFiles(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error('Erro ao buscar os arquivos', err);
      setErrorFiles('Erro ao buscar os arquivos');
    } finally {
      setLoading(false);
    }
  };

  const handleUploadS3 = async () => {
    if (!selectedFile || !idRelatorioReparo) return;

    const formData = new FormData();
    formData.append('files', selectedFile);
    formData.append('id', idRelatorioReparo);
    formData.append('tipo', 'RR');
    formData.append('tag', tag ?? '');
    formData.append('noTAG', noTAG ?? '');

    try {
      const uploadUrl = `${BACKEND}/RR/S3/salvar`;
      const response = await axios.post(uploadUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (response.status === 200) {
        await handleRefreshFile(idRelatorioReparo);
      }
    } catch (error) {
      console.error('Erro no upload do arquivo:', error);
    }
  };

  // --- Persistência ---
  const saveRR = () => {
    // RR e RNC: equipamento deve ser igual a area
    const equipamentoFinal = area ?? '';
    setEquipamento(equipamentoFinal);

    // Validações mínimas
    if ((status ?? '').trim() === '') return alert('Selecione um Status!!!');
    if ((numero ?? '').trim() === '' || !!errorNumero) return alert('Número do documento inválido!!!');
    if ((responsavelInspecao ?? '').trim() === '') return alert('Informe o responsável pela inspeção!!!');
    if ((descricaoReparo ?? '.').trim() === '.') return alert('Informe a descrição do reparo!!!');
    if ((ensaios ?? '.').trim() === '.') return alert('Informe os ensaios utilizados!!!');
    if ((area ?? '').trim() === '') return alert('Informe a Área!!!');

    try {
      const formData = {
        
        id,                             // mantém referência base
        status,
        equipamento: equipamentoFinal,  // equipamento = area
        tag,
        idRelatorioReparo,
        numero,
        area,
        tipoInspecao,
        dataInspecao,
        noTAG,
        empresa,
        denominacao,
        responsavelInspecao,
        descricaoReparo,
        ensaios,
      };

      axios.put(`${BACKEND}/RRs/save`, formData).then(
        async (response) => {
          if (response.status === 200) {
           
          alert('Relatório de Reparo salvo com sucesso!!!');
            }
            
          
        },
        (error) => console.log(error)
      );
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };



 useEffect(() => {
    const fetchFiles = async () => {
      try {
        if (idRelatorioReparo) {
          const response = await axios.get<string[]>(`${BACKEND}/RR/buscafile/${idRelatorioReparo}`);
          setFiles(Array.isArray(response.data) ? response.data : []);
        }
      } catch (error) {
        console.error('Erro ao carregar arquivos:', error);
      }
    };

    if (idRelatorioReparo) fetchFiles();

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRNCs, idRelatorioReparo]);











  const exportWord = () => {
    // RR e RNC: equipamento = area
    const equipamentoFinal = area ?? '';
    setEquipamento(equipamentoFinal);

    try {
      const formData = {
        id,
        status,
        area,
        denominacao,
        tipoInspecao,
        dataInspecao,
        empresa,
        tag,
        equipamento: equipamentoFinal,
        numero,
        descricaoReparo,
        ensaios,
        responsavelInspecao,
      };

      axios.post(`${BACKEND}/RR/enviar`, formData).then(
        (response) => {
          if (response.status === 200) alert('Documento gerado com sucesso!!!');
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
      url: `${BACKEND}/downloadRR`,
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

  // --- Carregamento inicial por id (do RNC) ---
  useEffect(() => {
    if (id) {

     axios.get<RRBase>(`${BACKEND}/RR/carregar/${id}`)
     .then((response)=> {
          const dados = response.data as RRBase;
           
          setIdRelatorioReparo(id);
          setNumero(dados?.numero ?? '');
          setTag(dados?.tag ?? '');
          setEquipamento(dados?.area ?? '');
          setArea(dados?.area ?? '');
          setDenominacao(dados?.denominacao ?? '');
          const baseNoTAG = dados?.noTAG ?? '';
          setNoTAG(baseNoTAG);
          setValueCF(baseNoTAG);
          setResponsavelInspecao(dados?.responsavelInspecao ?? '');
          checkTagFor(dados?.tag ?? '');
          setTipoInspecao(dados?.tipoInspecao ?? '');
          setEmpresa(dados?.empresa ?? '');
          setDescricaoReparo(dados?.descricaoReparo ?? '');
          setEnsaios(dados?.ensaios ?? '');
          // idRelatorioNaoConformidade é definido após salvar
        })
        .catch((error) => console.log('Erro ao buscar dados base do RNC', error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);





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









  return (
    <div className="App">
      <br />
      
      Código do Relatório de Reparo: {idRelatorioReparo }
      <br />
      <br />
      <h3>RELATÓRIO PÓS REPARO (Aprovação) - RR</h3>
      <h5>PREENCHIDO PELO PRESTADOR DE SERVIÇO TERCEIRIZADO</h5>

      <br />
      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' } }} noValidate autoComplete="off">
        <TextField
          color="success"
          label="Doc. nº"
          variant="outlined"
          onChange={handleNumeroChange}
          error={!!errorNumero}
          helperText={errorNumero || ' '}
          value={numero ?? ''}
        />

        <FormControl fullWidth>
          <InputLabel id="status-rr-label">Status</InputLabel>
          <Select
            labelId="status-rr-label"
            id="status-rr"
            value={status ?? 'LIBERADO'}
            label="Status"
            onChange={handleStatusChange}
          >
            <MenuItem value={'LIBERADO'}>Liberado</MenuItem>
          </Select>
        </FormControl>

        <br />
        <br />

        <TextField
          value={denominacao ?? ''}
          helperText="Denominação"
          disabled
          onChange={(e) => setDenominacao(e.target.value ?? '')}
        />

        <TextField
          value={tag ?? ''}
          helperText="TAG"
          disabled
          onChange={(e) => setTag(e.target.value ?? '')}
        />

        <TextField
          value={area ?? ''}
          helperText="Área"
          disabled
          onChange={(e) => setArea(e.target.value ?? '')}
        />

        <br />
        <br />

        <TextField
          color="success"
          label="Tipo de inspeção"
          variant="outlined"
          value={tipoInspecao ?? ''}
          onChange={(e) => setTipoInspecao(e.target.value ?? '')}
        />

       <DatePicker
          selected={dataInspecao}
          onChange={(d: Date | null) => setDataInspecao(d ?? null)}
          dateFormat="dd/MM/yyyy"
          locale={ptBR}
          className="custom-datepicker"
        />

        <TextField
          label="Empresa"
          value={empresa ?? ''}
          helperText="Empresa"
          disabled
          onChange={(e) => setEmpresa(e.target.value ?? '')}
        />

        <TextField
          color="success"
          label="Responsável pela inspeção"
          variant="outlined"
          value={responsavelInspecao ?? ''}
          onChange={(e) => setResponsavelInspecao(e.target.value ?? '')}
        />
      </Box>

      <br />

      <label>Descrição do reparo:</label>
      <JoditEditor
        ref={editorDesc}
        value={descricaoReparo ?? '.'}
        config={joditConfig}
        onBlur={(newContent: string) => setDescricaoReparo(newContent ?? '.')}
        onChange={() => {}}
      />

      <br />
      <br />
      <label>Ensaios utilizados para aprovação:</label>
      <JoditEditor
        ref={editorEnsaios}
        value={ensaios ?? '.'}
        config={joditConfig}
        onBlur={(newContent: string) => setEnsaios(newContent ?? '.')}
        onChange={() => {}}
      />

      <br />
      <br />

      <Button name="btnSalvar" variant="contained" startIcon={<SaveIcon />} onClick={saveRR}>
        Salvar
      </Button>

      <Button name="btnWord" variant="contained" disabled color="success" startIcon={<ArticleIcon />} onClick={exportWord}>
        Exportar .DOCX
      </Button> 

      <Button name="btnGerar" variant="contained" disabled color="info" startIcon={<ArticleIcon />} onClick={baixarWord}>
        Baixar .DOCX
      </Button>

      <br />
      <br />

      <label>Incluir relatórios: </label>
      <br />
      <br />

      <Input id="file-upload" type="file" onChange={handleFileChange} sx={{ mb: 1 }} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUploadS3}
          disabled={!selectedFile || !idRelatorioReparo}
          startIcon={<CloudUploadIcon />}
          style={{ textTransform: 'none', padding: '18px 50px' }}
        >
          Enviar Arquivo
        </Button>
      </div>

      <button onClick={() => handleRefreshFile()}>Atualizar arquivo</button>
      <br />
      <br />

      {loading && <div>Carregando...</div>}
      {!!errorFiles && <div style={{ color: 'red' }}>{errorFiles}</div>}

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
