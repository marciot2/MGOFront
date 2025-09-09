
import '../../css/caldeira.css';
import { Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, Input, Menu, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Snackbar, Alert, Link } from '@mui/material';
import * as React from 'react';
import './styles.css';
import DatePicker from 'react-datepicker';
import { BACKEND } from "../../config";
import { FRONTEND } from "../../config";

import { ptBR } from 'date-fns/locale';


import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SaveIcon from '@mui/icons-material/Save';
import BaixarIcon from '@mui/icons-material/IosShare';
import WordIcon from '@mui/icons-material/TextSnippet';

import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import App from './fileupload';

import Button from '@mui/material/Button';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import { UploadFile } from '@mui/icons-material';
import 'react-datepicker/dist/react-datepicker.css';


interface RI {
  equipamento: string;
  tag: string;
  eempresa: string;
  denominacao: string;



};



export default function RelatorioCancelamento() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
 
 const [motivo, setMotivo] = useState('.');
const [responsavelCancelamento,setResponsavelCancelamento] = useState('');
  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [tipoInspecao, setTipoInspecao] = useState('');
  const [empresa, setEmpresa] = useState('');

  const [idDadosExcel, setIdDadosExcel] = React.useState<number | undefined>(undefined);

  const [idRI, setIdRI] = useState<string>('');
  const [links, setLinks] = useState<string[]>([]);
  const [isComboDG, setIsComboDG] = useState(false);
  const [isComboCF, setIsComboCF] = useState(false);
  const [isComboCR, setIsComboCR] = useState(false);
  const [isComboFC, setIsComboFC] = useState(false);

  const [valueDG, setValueDG] = useState<string>();
  const [valueCR, setValueCR] = useState<string>();

  

  const [valueCF, setValueCF] = useState<string>();
  const [valueFC, setValueFC] = useState<string>();

  const [isDisabled, setIsDisabled] = useState(true);

  const [idRelatorioCancelado, setIdRelatorioCancelado] = React.useState<number>(0);
  const [age, setAge] = React.useState('');
  const [data, setData] = useState<RI>();
  const [equipamento, setEquipamento] = useState<string | undefined>(data?.equipamento || '');
  const [denominacao, setDenominacao] = useState<string | undefined>(data?.denominacao || '');
  const [tag, setTag] = useState(data?.tag);
  const [status, setStatus] = useState(''); 
  const [area, setArea] = useState<string | undefined>(data?.equipamento || '');
  const [statusCancelado, setStatusCancelado] = useState('');
  

  const [numero, setNumero] = useState('');
  const [dataInspecao, setDataInspecao] = useState<Date | null>(new Date());
 
 
  const [evento, setEvento] = useState('PG 2024');
  const [noTAG, setNoTAG] = useState('');
 
  const [dadosExcel, setdadosExcel] = useState<string>('');
  const { id } = useParams();
  const { idRIs } = useParams();
  const [error, setError] = useState<string>();

  const [arrayCR, setArrayCR] = useState([
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
  ]

  );

  const [arrayDG, setArrayDG] = useState([
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

  const [arrayFC, setArrayFC] = useState([
    { label: '       ', value: '          ' },
    { label: 'Base 1', value: 'Base_1' },
    { label: 'Base 2', value: 'Base_2' },
    { label: 'Base 3', value: 'Base_3' },
    { label: 'Base 4', value: 'Base_4' },
    { label: 'Base 5', value: 'Base_5' }
  ]);


  const [arrayStatus, setArrayStatus] = useState([
    
    { label: 'Cancelado', value: 'CANCELADO' },
    
  ]);
  const [arrayCF, setArrayCF] = useState([
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



  const RNC = () => {

    if (Number(idRelatorioCancelado) > 0) {


      window.open(FRONTEND + "/prestador/Rnc/" + idRelatorioCancelado + "/" + id + "/" + noTAG);

    } else {

      alert("É necessário um Relatório de Cancelamento Salvo" + idRelatorioCancelado);
    }

  };


  const handleUploadS3 = async () => {
    if (selectedFile) {
      const formData = new FormData();


      formData.append('id', idRelatorioCancelado + "");

      formData.append('idRelatorioCancelado', idRelatorioCancelado + "");

      formData.append('files', selectedFile);

      formData.append('tipo', 'RI');
      formData.append('tag', tag + "");
      formData.append('noTAG', noTAG);

      try {
        // Substitua com a URL do seu endpoint de upload
        const uploadUrl = BACKEND + '/RI/S3/salvar';

        const response = await axios.post(uploadUrl, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Arquivo enviado com sucesso:', response.data);
        // Adicione aqui mais lógica após o upload ser bem sucedido

        if (response.status === 200) {
          console.log('OPA', response.status);
          handleRefreshFile();

        }





      } catch (error) {
        console.error('Erro no upload do arquivo:', error);
        // Adicione aqui sua lógica de tratamento de erro
      }
    }
  };



  const saveRC = () => {
  
  setIdDadosExcel(Number(id));
     
  if (statusCancelado.trim() === '') {
    alert('Selecione um Status!!!');
} else if (numero.trim() === '') {
    alert('Número documento inválido!!!');
} else if ((isComboCF === true || isComboCR === true || isComboDG || isComboFC) && noTAG.trim()  === '') {
    alert('Selecione uma opção na lista Caldeira de Recuperação!!!');
} else if (tipoInspecao.trim()  === '') {
  alert('Informe o tipo de Inspeção!!!');
} else if (motivo.trim()  === '.') {
  alert('Informe o motivo!!!');
} else if (responsavelCancelamento.trim()  === '') {
  alert('Informe o Responsável pelo cancelamento!!!');
}  else if (idDadosExcel == 0) {
  alert('Código da Área não encontrada!!!');
}else  {    


    try {
      const formData = {
        tipoInspecao,
        id,
        status,
        statusCancelado,
        equipamento,
        tag,
        dataInspecao,
        numero,
        motivo,
        responsavelCancelamento,
        area,       
        evento,
       empresa,
        
    
 
        denominacao,
        idDadosExcel,
        noTAG

      };
      console.info(numero);

      axios.post(BACKEND + '/RC/save', formData)


        .then((response) => {
          console.log(response);

          if (response.status === 200) {

            setIdRelatorioCancelado(response.data);
            { alert("Relatório de Cancelamento Salvo com sucesso!!!") };
            setIsDisabled(false);

          }

        }, (error) => {
          console.log(error);
        });



      // Trate a resposta do servidor conforme necessário
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }

  }


  };



  /** EXPORTA DADOS PARA WORD */
  const ExportWord = () => {





    try {
      const formData = {
        idDadosExcel,
        noTAG,
        id,
        status,
        statusCancelado,
        equipamento,
        tag,
        dataInspecao,
        numero,
       motivo,
       responsavelCancelamento,
       tipoInspecao,
       denominacao,
       empresa,
       area,
        evento

        
      };
      console.info(numero);

      axios.post(BACKEND + '/RC/enviar', formData)


        .then((response) => {
          console.log(response);

          if (response.status === 200) {


            { alert("Documento criado com sucesso!!!") };

          }


        }, (error) => {
          console.log(error);
        });





      // Trate a resposta do servidor conforme necessário
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }






  };




  const baixartWord = () => {
    axios({
      method: 'get',
      url: BACKEND + '/downloadRC',
      responseType: 'arraybuffer',
      timeout: 5000 // Define o tipo de resposta como arraybuffer
    })
      .then(response => {
        if (response.status === 200) {
          const url = URL.createObjectURL(new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'arquivo.docx'); // Define o nome do arquivo e a extensão corretamente
          document.body.appendChild(link);
          link.click();
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatusCancelado(event.target.value as string);





  };

  

  const handleLocalProblemaChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;

    if (value.trim() === '') {
      setError('Local do problema não pode ser em branco ou nulo');
    } else {
      setError('');
      setNumero(value);
    }

  }


  const handleProblemaObservadoChange = (e: React.ChangeEvent<HTMLInputElement>) => {


    const value = e.target.value;

    if (value.trim() === '') {
      setError('Problemas observados não pode ser em branco ou nulo');
    } else {
      setError('');
      setNumero(value);
    }

  }


  const handleRecomendacaoReparoChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }



  const handleNumeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
       setNumero(e.target.value);
  

  };





  const handleChangeCR = (event: SelectChangeEvent) => {



    setNoTAG(event.target.value as string);





  };

  const handleChangeDG = (event: SelectChangeEvent) => {

    
    setNoTAG(event.target.value as string);



  };

  const handleChangeFC = (event: SelectChangeEvent) => {



    setNoTAG(event.target.value as string);



  };


  const handleChangeCF = (event: SelectChangeEvent) => {


    setNoTAG(event.target.value as string);

  };

  useEffect(() => {


    if (id) {
      axios.get(BACKEND + `/dadosExcel/dadosPorID/${id}`)
        .then(response => {
          setData(response.data);
          setTag(response.data.tag);
          setEquipamento(response.data.equipamento);
          setDenominacao(response.data.denominacao);
          setArea(response.data.equipamento);      
          setIdDadosExcel(Number(id));
          setEmpresa(response.data.eempresa);
          checkTagFor(response.data.tag);   


        })
        .catch(error => {
          console.log('Erro ao buscar empresas', error);
        });

    }
  },
    [id]);

    const checkTagFor = (tag: any) => {
      if (tag.includes('CR')) {
        setIsComboFC(true);
        setIsComboDG(true);
        setIsComboCF(true);
        setIsComboCR(false);
        
      }
      if (tag.includes('DG')) {
        setIsComboFC(true);
        setIsComboDG(false);
        setIsComboCF(true);
        setIsComboCR(true);
        
      }

      if (tag.includes('FC')) {
        setIsComboFC(false);
        setIsComboDG(true);
        setIsComboCF(true);
        setIsComboCR(true);
        
      }
      if (tag.includes('CF')) {
        setIsComboFC(true);
        setIsComboDG(true);
        setIsComboCF(false);
        setIsComboCR(true);
        
      }


    };
 

  const handleRefreshFile = async () => {
    setLoading(true);

    try {
      const response = await axios.get<string[]>(BACKEND + `/RI/buscafile/${idRelatorioCancelado}`);
      setFiles(response.data);
    } catch (err) {

    } finally {
      setLoading(false);
    }
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdRI(event.target.value);
  };





  const editor1 = useRef(null);
  const editor2 = useRef(null);



  const config =
  {
    readonly: false,
    editor: '',
    width: "100%"
  }










  return (



    <div >
      Código interno do Equipamento: {id}
      <br /><br />
      Código do Relatório de Cancelamento: {idRelatorioCancelado}<br /><br />
      <h3>RELATÓRIO DE NÃO LIBERAÇÃO DO EQUIPAMENTO PARA INSPEÇÃO - RELATÓRIO DE CANCELAMENTO</h3>
      <h5>   PREENCHIDO PELO PRESTADOR DE SERVIÇO TERCERIZADO* </h5>
      <br />
      <br />

      <br />


      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
      >

<TextField color='success' label='Relatório nº' variant="outlined" onChange={handleNumeroChange} error={!!error}
          helperText={error}> </TextField>

<TextField
          
          value={data?.tag}
          helperText="TAG"

          onChange={(e) => setTag(e.target.value)}
          onFocus={(e) => setTag(e.target.value)}
        />




<TextField
          
          value={data?.denominacao}
          helperText="Denominação"
          onLoad={(e: React.ChangeEvent<HTMLInputElement>) => setDenominacao(e.currentTarget.value)}
          onChange={(e) => setDenominacao(e.target.value)}
          onFocus={(e) => setDenominacao(e.target.value)}

        />


<TextField
          
          value={data?.equipamento}
          helperText="Área"
          onLoad={(e: React.ChangeEvent<HTMLInputElement>) => setEquipamento(e.currentTarget.value)}
          onChange={(e) => setEquipamento(e.target.value)}
          onFocus={(e) => setEquipamento(e.target.value)}

        />


<TextField color='success' label='Tipo de inspeção' variant="outlined" onChange={(e) => setTipoInspecao(e.target.value)}></TextField> 
 

        <DatePicker
          selected={dataInspecao}
          onChange={(date) => setDataInspecao(date)}
          dateFormat="dd/MM/yyyy"
          className="custom-datepicker"
          locale={ptBR}
          
        />
       


  


<TextField color='success' label='Responsável de cancelamento' variant="outlined" onChange={(e) => setResponsavelCancelamento(e.target.value)}></TextField> 
 


        <FormControl fullWidth>




          <InputLabel id="demo-simple-select-label">Status: </InputLabel>


          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={statusCancelado}
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

        <TextField color='success' label='Cliente' value={"Eldorado Brasil"} disabled variant="outlined"></TextField>
        <TextField color='success' label='Local' value={"Três Lagoas-MS"} disabled variant="outlined"></TextField>
        <TextField name='lblEvento' label='Evento' color='success' value={"PG 2024"} disabled variant="outlined"></TextField>
 

        <TextField
          
          value={empresa}
          helperText="Empresa"

          onChange={(e) => setEmpresa(e.target.value)}
          onFocus={(e) => setEmpresa(e.target.value)}
        />


        

        <br /><br />




        <label> Caldeira de Recuperação:  <br /> </label>
        <br />

        <Select className='combocr'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueCR}
          disabled={isComboCR}
          label="Age"
          onChange={handleChangeCR}
        >
          {arrayCR.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}

        </Select>

        <br /><br />




        <label>Digestor: </label>
        <br />

        <Select className='comboDG'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueDG}
          label="Age"
          onChange={handleChangeDG}
          disabled={isComboDG}
        >
          {arrayDG.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>


        <br />

        <label>Forno de Cal: </label>
        <br />

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueFC}
          label="Age"
          disabled={isComboFC}
          onChange={handleChangeFC}
        >
          {arrayFC.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

        <br />

        <label>Caldeira Força: </label>
        <br />


        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueCF}
          label="Age"
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

 
      <br /> <br />



      <label>Problemas Observados:</label>

<JoditEditor

  ref={editor1}
  value={motivo}
  config={config}
  onBlur={(newContent: string) => setMotivo(newContent)}
  onChange={(newContent: string) => { }}
   />



      <Button name="btnSalvar " variant="contained" startIcon={<SaveIcon />} onClick={saveRC}>
        Salvar
      </Button>


      <Button name="btnWord" variant="contained" color="success" startIcon={<WordIcon />} onClick={ExportWord}>
        Exportar .DOCX
      </Button>

      <Button name="btnGerar" variant="contained" color="info" startIcon={<BaixarIcon />} onClick={baixartWord}>
        Baixar .DOCX
      </Button>


      <Button name="btnRNC" variant="contained" color="error" disabled={isDisabled} startIcon={<OpenInNewIcon />} onClick={RNC}>
        Voltar
      </Button>

      <br /> <br />






      <br /> <br />

      <label>Incluir Documentos: </label>
      <br /> <br /><br />

      <InputLabel htmlFor="file-upload"> </InputLabel>
      <Input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        sx={{ mb: 1 }}
      />







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


      <button onClick={handleRefreshFile}>Carregar arquivos</button>
      <br /> <br />
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <a href={file} target="_blank" rel="noopener noreferrer">
              {file}
            </a>
          </li>
        ))}
      </ul>

    </div>


  );
}
