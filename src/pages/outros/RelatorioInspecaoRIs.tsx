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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

interface RIBase {
  equipamento: string;
  tag: string;
  eempresa: string;
  denominacao: string;
}

export default function RelatorioInspecao() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const [idDadosExcel, setIdDadosExcel] = useState<number | undefined>(undefined);

  const [idRI, setIdRI] = useState<string>('');
  const [links, setLinks] = useState<string[]>([]);
  const [isComboDG, setIsComboDG] = useState(true);
  const [isComboCF, setIsComboCF] = useState(false);
  const [isComboCR, setIsComboCR] = useState(true);
  const [isComboFC, setIsComboFC] = useState(true);

  const [valueDG, setValueDG] = useState<string>();
  const [valueCR, setValueCR] = useState<string>();
  const [valueCF, setValueCF] = useState<string>();
  const [valueFC, setValueFC] = useState<string>();

  const [isDisabled, setIsDisabled] = useState(true);

  const [idRelatorioInspecao, setidRelatorioInspecao] = useState<string>();
  const [data, setData] = useState<RIBase>();
  const [equipamento, setEquipamento] = useState<string | undefined>(data?.equipamento || '');
  const [denominacao, setDenominacao] = useState<string | undefined>(data?.denominacao || '');
  const [tag, setTag] = useState<string | undefined>(data?.tag);
  const [status, setStatus] = useState('');
  const [statusRI, setStatusRI] = useState('');
  const [numero, setNumero] = useState('');
  const [date, setDate] = useState<Date | null>(new Date());
  const [problemasObservados, setproblemasObservados] = useState('.');
  const [recomendacoesReparo, setrecomendacoesReparo] = useState('.');
  const [localProblema, setlocalProblema] = useState('');
  const [evento, setEvento] = useState('PG 2024');
  const [noTAG, setNoTAG] = useState('');
  const [responsavelInspecao, setresponsavelInspecao] = useState<string | undefined>(data?.eempresa);
  const [responsavelManutencao, setresponsavelManutencao] = useState('');
  const [tipoRelatorio, setTipoRelatorio] = useState('RI');

  const { id, idRIs } = useParams();

  const [error, setError] = useState<string>();

  const [arrayCR] = useState([
    { label: '          ', value: '        ' },
    { label: 'Penthouse', value: 'Penthouse' },
    { label: 'Balão', value: 'Balao' },
    { label: 'SH Secundário', value: 'SH_Secundario' },
    { label: 'SH Terciário', value: 'SH_Terciario' },
    { label: 'SH Quartenário', value: 'SH_Quartenario' },
    { label: 'SH Primário I', value: 'SH_Primario_I' },
    { label: 'SH Primário II', value: 'SH_Primario_II' },
    { label: 'Screen', value: 'Screen' },
    { label: "Parede D'água", value: 'Parede_Dagua' },
    { label: "Piso", value: 'Piso' },
    { label: 'Válvula de Segurança', value: 'Valvula_de_Seguranca' },
    { label: 'Teto', value: 'Teto' },
    { label: 'Economizador I', value: 'Economizador_I' },
    { label: 'Economizador II', value: 'Economizador_II' },
    { label: 'Bank', value: 'Bank' },
    { label: 'Grid', value: 'Grid' },
    { label: 'Sopradores de Fuligem', value: 'Sopradores_de_Fuligem' },
    { label: 'Nariz', value: 'Nariz' },
    { label: 'Câmara Fria', value: 'Camara_Fria' },
    { label: 'Queimadores', value: 'Queimadores' },
    { label: 'Entradas de Ar Terciário', value: 'Entradas_de_Ar_Terciario' },
    { label: 'Entradas de Ar Secundário', value: 'Entradas_de_Ar_Secundario' },
    { label: 'Dutos e Ventiladores', value: 'Dutos_e_Ventiladores' },
    { label: 'Câmera de TV', value: 'Camera_de_TV' },
    { label: 'Bocas de visita', value: 'Bocas_de_visita' },
    { label: 'Entradas de Ar Primário', value: 'Entradas_de_Ar_Primario' },
    { label: 'Bicas de Smelt', value: 'Bicas_de_Smelt' },
    { label: 'Porão', value: 'Porao' }
  ]);

  const [arrayDG] = useState([
    { label: ' ', value: ' ' },
    { label: 'Rosca do Separador de Topo', value: 'Rosca_Separador_Topo' },
    { label: 'Tubo Central', value: 'Tubo_Central' },
    { label: 'Costado do Digestor', value: 'Costado_do_Digestor' },
    { label: 'Fundo do Digestor', value: 'Fundo_do_Digestor' },
    { label: 'Separador de Topo', value: 'Separador_de_Topo' },
    { label: 'Peneiras CD1', value: 'Peneiras_CD1' },
    { label: 'Peneiras CD2', value: 'Peneiras_CD2' },
    { label: 'Peneiras CD3', value: 'Peneiras_CD3' }
  ]);

  const [arrayFC] = useState([
    { label: '       ', value: '          ' },
    { label: 'Base 1', value: 'Base_1' },
    { label: 'Base 2', value: 'Base_2' },
    { label: 'Base 3', value: 'Base_3' },
    { label: 'Base 4', value: 'Base_4' },
    { label: 'Base 5', value: 'Base_5' }
  ]);

  const [arrayStatus] = useState([
    { label: 'Liberado', value: 'LIBERADO' },
    { label: 'Em andamento', value: 'EM_ANDAMENTO' },
  ]);

  const [arrayCF] = useState([
    { label: ' ', value: '   ' },
    { label: 'SH Secundário BT', value: 'SH_Secundario_BT' },
    { label: 'Fornalha', value: 'Fornalha' },
    { label: 'Leito Fluidizado', value: 'Leito_Fluidizado' },
    { label: 'SH Secundário AT', value: 'SH_Secundario_AT' },
    { label: 'SH Primário AT', value: 'SH_Primario_AT' },
    { label: 'SH Primário BT', value: 'SH_Primario_BT' },
    { label: 'Evaporador', value: 'Evaporador' },
    { label: 'Economizador', value: 'Economizador' }
  ]);

  const Voltar = () => {
    window.open(FRONTEND + "/prestador/janelaprincipal");
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setSelectedFile(event.target.files[0]);
  };

  const handleUploadS3 = async () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('id', (idRelatorioInspecao ?? '') + "");
    formData.append('idRelatorioInspecao', (idRelatorioInspecao ?? '') + "");
    formData.append('files', selectedFile);
    formData.append('tipo', 'RI');
    formData.append('tag', tag + "");
    formData.append('noTAG', noTAG);
    formData.append('tipoRelatorio', "RI");
    try {
      const uploadUrl = BACKEND + '/RI/S3/salvar';
      const response = await axios.post(uploadUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (response.status === 200) await handleRefreshFile(idRelatorioInspecao);
    } catch (error) {
      console.error('Erro no upload do arquivo:', error);
    }
  };

  const saveRI = () => {
    setIdDadosExcel(Number(id));
    if (statusRI.trim() === '') return alert('Selecione um Status!!!');
    if (numero.trim() === '') return alert('Número documento inválido!!!');
    if (noTAG.trim() === '') return alert('Selecione uma opção na lista Caldeira de Força!!!');
    if (responsavelManutencao.trim() === '') return alert('Informe o responsável pela manutenção!!!');
    if (localProblema.trim() === '') return alert('Informe o local do problema!!!');
    if (problemasObservados.trim() === '.') return alert('Informe o Problemas Observados!!!');
    if (recomendacoesReparo.trim() === '.') return alert('Informe as recomendações de reparo!!!');
    if (!id || Number(id) === 0) return alert('Código não encontrado!!!');

    try {


      console.log(idRelatorioInspecao);

      const formData = {
        idRelatorioInspecao,
        id,
        status,
        equipamento,
        tag,
        date,
        numero,
        problemasObservados,
        recomendacoesReparo,
        localProblema,
        evento,
        responsavelManutencao,
        tipoRelatorio,
        responsavelInspecao,
        statusRI,
        denominacao,
        idDadosExcel,
        noTAG
      };

      axios.put(BACKEND + '/RIs/save', formData)
        .then((response) => {
          if (response.status === 200) {
            setidRelatorioInspecao(response.data);
            alert("Relatório de Inspeção salvo com sucesso!!!");
            setIsDisabled(false);
          }
        }, (error) => console.log(error));
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  const ExportWord = () => {
    try {
      const formData = {
        idDadosExcel,
        noTAG,
        id,
        status,
        equipamento,
        tag,
        date,
        numero,
        problemasObservados,
        recomendacoesReparo,
        localProblema,
        evento,
        responsavelManutencao,
        responsavelInspecao
      };

      axios.post(BACKEND + '/RI/enviar', formData)
        .then((response) => {
          if (response.status === 200) alert("Documento criado com sucesso!!!");
        }, (error) => console.log(error));
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  const baixartWord = () => {
    axios({
      method: 'get',
      url: BACKEND + '/download1',
      responseType: 'arraybuffer',
      timeout: 5000
    })
      .then(response => {
        if (response.status === 200) {
          const url = URL.createObjectURL(new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'arquivo.docx');
          document.body.appendChild(link);
          link.click();
        }
      })
      .catch(error => console.error(error));
  };

  const handleChangeStatus = (event: SelectChangeEvent) => setStatusRI(event.target.value as string);

  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.trim() === '') {
      setError('Número não pode ser em branco ou nulo');
    } else if (!/^\d+$/.test(value)) {
      setError('Número deve conter apenas dígitos');
    } else {
      setError('');
      setNumero(value);
    }
  };

  const handleChangeCR = (event: SelectChangeEvent) => { setNoTAG(event.target.value as string); setValueCR(event.target.value as string); };
  const handleChangeDG = (event: SelectChangeEvent) => { setNoTAG(event.target.value as string); setValueDG(event.target.value as string); };
  const handleChangeFC = (event: SelectChangeEvent) => { setNoTAG(event.target.value as string); setValueFC(event.target.value as string); };
  const handleChangeCF = (event: SelectChangeEvent) => { const v = event.target.value as string; setNoTAG(v); setValueCF(v); };

  const handleRefreshFile = async (idForFiles?: string) => {
    const idToUse = idForFiles ?? idRelatorioInspecao;
    if (!idToUse) return;
    setLoading(true);
    try {
      const response = await axios.get<string[]>(BACKEND + `/RI/buscafile/${idToUse}`);
      setFiles(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const editor1 = useRef(null);
  const editor2 = useRef(null);
  const config = { readonly: false, editor: '' };

  const checkTagFor = (tg: any) => {
    if (!tg) return;
    if (tg.includes('CR')) { setIsComboFC(true); setIsComboDG(true); setIsComboCF(true); setIsComboCR(false); }
    if (tg.includes('DG')) { setIsComboFC(true); setIsComboDG(false); setIsComboCF(true); setIsComboCR(true); }
    if (tg.includes('FC')) { setIsComboFC(false); setIsComboDG(true); setIsComboCF(true); setIsComboCR(true); }
    if (tg === "3403-21-020-CF") { setIsComboCF(false); } else { setIsComboCF(true); }
  };

  const prefillFromRI = (ri: any) => {
    setidRelatorioInspecao(String(ri.idRelatorioInspecao));
    setNumero(ri.numero ?? '');
    setEvento(ri.evento ?? 'PG 2024');
    setEquipamento(ri.equipamento ?? '');
    setresponsavelInspecao(ri.responsavelInspecao ?? '');
    setresponsavelManutencao(ri.responsavelManutencao ?? '');
    setlocalProblema(ri.localProblema ?? '');
    setDate(ri.date ? new Date(ri.date) : new Date());
    setproblemasObservados(ri.problemasObservados ?? '.');
    setrecomendacoesReparo(ri.recomendacoesReparo ?? '.');
    setStatus(ri.status ?? '');
    setDenominacao(ri.denominacao ?? '');
    setTipoRelatorio(ri.tipoRelatorio ?? 'RI');
    setStatusRI(ri.statusRI ?? '');
    setNoTAG(ri.noTAG ?? '');
    setValueCF(ri.noTAG ?? '');
    setIdDadosExcel(Number(ri.idDadosExcel) || undefined);
    setTag(ri.tag ?? '');
    checkTagFor(ri.tag ?? '');
    setIsDisabled(false);
  };

  const loadRIById = async (targetId: string) => {
    if (!targetId) return;
    try {
      const url = `${BACKEND}/RI/carregar/${targetId}`; // <— endpoint informado
      const resp = await axios.get(url);
      if (resp?.status === 200 && resp.data) {
        const ri = resp.data;
        prefillFromRI(ri);
        await handleRefreshFile(String(ri.idRelatorioInspecao));
      }
    } catch (e) {
      console.warn('Falha ao carregar RI por idRelatorioInspecao em /RI/carregar/{id}', e);
    }
  };

useEffect(() => {
   
  if (id) {
    axios.get(BACKEND + `/RI/carregar/${id}`)
      .then(response => {
        const dados = response.data;
        setData(dados);
        setTag(dados.tag);
        setEquipamento(dados.equipamento);
        setDenominacao(dados.denominacao);
        setresponsavelInspecao(dados.eempresa);
        setIdDadosExcel(Number(id));
        setNumero(dados.numero);
        setresponsavelInspecao(dados.responsavelInspecao);
        setresponsavelManutencao(dados.responsavelManutencao);
        setlocalProblema(dados.localProblema);
        setNoTAG(dados.noTAG);
        setproblemasObservados(dados.problemasObservados);
        setrecomendacoesReparo(dados.recomendacoesReparo);
        setidRelatorioInspecao(dados.idRelatorioInspecao);
        setStatusRI(dados.statusRI);

        // ✅ Aqui está a correção fundamental:
        setValueCF(dados.noTAG); // Isso garante que o <Select> carregue com a opção correta
        checkTagFor(dados.tag);
        handleRefreshFile();
      })
      .catch(error => console.log('Erro ao buscar dadosExcel', error));
  }
}, [id]);


useEffect(() => {
  const fetchFiles = async () => {
    try {
      const response = await axios.get<string[]>(`${BACKEND}/RI/buscafile/${id}`);
      setFiles(response.data);
    } catch (error) {
      console.error("Erro ao carregar arquivos:", error);
    }
  };

  if (id) {
    fetchFiles();
  }

  if (idRIs) {
    loadRIById(String(idRIs));
  }
}, [id, idRIs]);







  return (
    <div>
    
      <br /> 
      Código do Relatório de Inspeção: {idRelatorioInspecao}<br /><br />
      <h3>PROBLEMAS ENCONTRADOS DURANTE A INSPEÇÃO – RELATÓRIO DE INSPEÇÃO – RI</h3>
      <h5>PREENCHIDO PELO PRESTADOR DE SERVIÇO TERCEIRIZADO</h5>
      <br />

      <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '50ch' }, }} noValidate autoComplete="off">
        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          dateFormat="dd/MM/yyyy"
          locale={ptBR}
          className="custom-datepicker"
        />

        <TextField
          color='success'
          label='Doc. nº'
          variant="outlined"
          onChange={handleNumeroChange}
          error={!!error}
          helperText={error}
          value={numero}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status: </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={statusRI}
            label="Status"
            onChange={handleChangeStatus}
          >
            {arrayStatus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <br /><br />

        <TextField color='success' label='Cliente' value={"Eldorado Brasil"} disabled variant="outlined" />
        <TextField color='success' label='Local' value={"Três Lagoas-MS"} disabled variant="outlined" />
        <TextField name='lblEvento' label='Evento' color='success' value={evento} disabled variant="outlined" />

        <br /><br />

        <TextField
          value={equipamento}
          disabled
          helperText="Equipamento"
          onChange={(e) => setEquipamento(e.target.value)}
        />

        <TextField
          value={denominacao}
          disabled
          helperText="Denominação"
          onChange={(e) => setDenominacao(e.target.value)}
        />

        <TextField
          value={tag}
          helperText="TAG"
          disabled
          onChange={(e) => { setTag(e.target.value); checkTagFor(e.target.value); }}
        />

        <br /><br />

        <TextField
          color='success'
          label='Responsável pela Inspeção'
          value={responsavelInspecao ?? ''}
          helperText="Responsável pela Inspeção"
          variant="outlined"
          onChange={(e) => setresponsavelInspecao(e.target.value)}
        />

        <TextField
          color='success'
          label='Responsável pela manutenção'
          variant="outlined"
          value={responsavelManutencao}
          onChange={(e) => setresponsavelManutencao(e.target.value)}
        />

        <br /><br />

        <TextField
          color='success'
          label='Local do problema'
          variant="outlined"
          value={localProblema}
          onChange={(e) => setlocalProblema(e.target.value)}
        />

        <br /><br />

        <label>Caldeira Força: </label>
        <br />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
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

      <label>Problemas Observados:</label>
      <JoditEditor
        ref={editor1}
        value={problemasObservados}
        config={config}
        onBlur={(newContent: string) => setproblemasObservados(newContent)}
        onChange={() => { }}
      />

      <br /> <br />
      <label>Recomendações de Reparos:</label>
      <JoditEditor
        ref={editor2}
        value={recomendacoesReparo}
        config={config}
        onBlur={(newContent: string) => setrecomendacoesReparo(newContent)}
        onChange={() => { }}
      />
      <br /> <br />

      <Button name="btnSalvar " variant="contained" startIcon={<SaveIcon />} onClick={saveRI}>
        Salvar
      </Button>

      <Button name="btnWord" variant="contained" color="success" startIcon={<WordIcon />} onClick={ExportWord}>
        Exportar .DOCX
      </Button>

      <Button name="btnGerar" variant="contained" color="info" startIcon={<BaixarIcon />} onClick={baixartWord}>
        Baixar .DOCX
      </Button>

     
      <br /> <br />

      <label>Incluir Documentos: </label>
      <br /> <br /><br />

      <Input id="file-upload" type="file" onChange={handleFileChange} sx={{ mb: 1 }} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUploadS3}
          disabled={!selectedFile}
          startIcon={<CloudUploadIcon />}
          style={{ textTransform: "none", padding: "18px 50px" }}
        >
          Enviar Arquivo
        </Button>
      </div>

      <button onClick={() => handleRefreshFile()}>Carregar arquivos</button>
      <br /> <br />

      <ul>
        {files.map((file, index) => {
          const fileName = file.split('/').pop();
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
