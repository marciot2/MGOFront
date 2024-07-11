 
import '../../css/caldeira.css';
import {  Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, Input, Menu, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Snackbar, Alert, Link } from '@mui/material';
import * as React from 'react';
import './styles.css';
 
import {BACKEND} from "../../config";  

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SaveIcon from '@mui/icons-material/Save';
import BaixarIcon from '@mui/icons-material/IosShare';
import WordIcon from '@mui/icons-material/TextSnippet';
import HtmlEditor from './edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LoupeIcon from '@mui/icons-material/Loupe';
import GridOnIcon from '@mui/icons-material/GridOn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import MuiAlert from '@mui/material/Alert';
import {   useParams } from 'react-router-dom';

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
  


interface RI {
  equipamento: string;
  tag: string;
  eempresa: string;
  denominacao: string;
  date: string;
  numero: string;
  statusRI: string;
  responsavelInspecao: string;
  responsavelManutencao: string; 
  localProblema: string;
  noTAG: string;
  problemasObservados: string;
  recomendacoesReparo: string;
  idRelatorioInspecao: string;
};


     
export default function RelatorioInspecao() {
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
 

const [files, setFiles] = useState<string[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
 

const [idDadosExcel, setIdDadosExcel] = useState<string>('1');

const [idRI, setIdRI] = useState<string>('');
const [links, setLinks] = useState<string[]>([]);
 

  const [valueDG, setValueDG] = useState<string>();

   


  const [valueCF, setValueCF] = useState<string>();
  const [valueFC, setValueFC] = useState<string>();

  const [isDisabled, setIsDisabled] = useState(true);

  
  const [age, setAge] = React.useState('');
  const [data, setData] = useState<RI>();
  const [equipamento, setEquipamento] = useState(data?.equipamento);
  const [denominacao, setDenominacao] = useState(data?.denominacao);
  const [tag, setTag] = useState('');
  const [status, setStatus] = useState('');

  const [numero,setNumero] = useState(data?.numero);
  const [date,setDate] = useState('');
  const [problemasObservados, setproblemasObservados] = useState<string>(data?.problemasObservados ?? '.');
  const [recomendacoesReparo, setrecomendacoesReparo] = useState<string>(data?.recomendacoesReparo ?? '.');
  const [localProblema, setlocalProblema] = useState('');
  const [evento, setEvento] = useState('PG 2024');
  const [noTAG, setNoTAG] = useState('');
  
  const [responsavelInspecao, setresponsavelInspecao] = useState(data?.responsavelInspecao);
  const [responsavelManutencao, setresponsavelManutencao] = useState('');
  const [dadosExcel, setdadosExcel] = useState<string>('');
  const { id } = useParams();
  const { idRIs } = useParams();
  const [statusRI, setStatusRI] = useState<string | undefined>(data?.statusRI || '');
  const [valueCR, setValueCR] = useState<string | undefined>(data?.noTAG || '');
  const [idRelatorioInspecao, setidRelatorioInspecao] =  useState(data?.idRelatorioInspecao);
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

const [arrayCF, setArrayCF] = useState([
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
  
const [arrayDG, setArrayDG] = useState ([
  { label: '       ', value: '          ' },
  { label: 'Base 1', value: 'Base_1' },
  { label: 'Base 2', value: 'Base_2' },
  { label: 'Base 3', value: 'Base_3' },
  { label: 'Base 4', value: 'Base_4' }
 
]);

 
const [arrayStatus, setArrayStatus] = useState ([
  { label: 'Não Conformidade', value: 'NÃO_CONFORMIDADE' },
  { label: 'Cancelado', value: 'CANCELADO' },
  { label: 'Liberado', value: 'LIBERADO' },
]);
const [arrayFC, setArrayFC] = useState ([
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
 
  if (Number(id) > 0){

       
    window.open("http://localhost:3000/prestador/Rncs/"+id+"/"+noTAG);

  } else {
    
    alert("É necessário um Relatório de Inspeção Salvo"+idRelatorioInspecao);
  }
  
};

 
const handleUploadS3 = async () => {
  if (selectedFile) {
      const formData = new FormData();
      formData.append('files', selectedFile);
      formData.append('id',id+'');
      formData.append('tipo','RI');
      formData.append('tag',data?.tag+"");
      formData.append('noTAG',noTAG);

      try {
          // Substitua com a URL do seu endpoint de upload
          const uploadUrl = BACKEND+'/RI/S3/salvar';
           
          const response = await axios.post(uploadUrl, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });

          console.log('Arquivo enviado com sucesso:', response.data);
          // Adicione aqui mais lógica após o upload ser bem sucedido
         
          if(response.status === 200)
          {
              console.log('OPA', response.status);
              handleRefreshFile();

           } 


         


      } catch (error) {
          console.error('Erro no upload do arquivo:', error);
          // Adicione aqui sua lógica de tratamento de erro
      }
  }
};


 
 const saveRI = () => {
 


  try {
    const formData = {
      idRelatorioInspecao,
      idDadosExcel,
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
      responsavelInspecao,
      statusRI,
      denominacao,
      noTAG

      };
      console.info(numero);

      axios.post(BACKEND+'/RI/save',formData) 
        
      
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
         
         setidRelatorioInspecao(response.data);
          {alert("Relatório de Inspeção Salvo com sucesso!!!")};
          setIsDisabled(false);
          
        }

      }, (error) => {
        console.log(error);
      });

 
     
    // Trate a resposta do servidor conforme necessário
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
  }




 };
 
 

  /** EXPORTA DADOS PARA WORD */
  const ExportWord = () => {
   


  
    
    try {
      const formData = {
       
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
        console.info(numero);
 
        axios.post(BACKEND+'/RI/enviar',formData) 
          
        
        .then((response) => {
          console.log(response);

          if (response.status === 200) {
         
         
            {alert("Documento criado com sucesso!!!")};
             
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
      url: BACKEND+'/download1',
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
    }})
    .catch(error => {
      console.error(error);
    });
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
 
    setStatusRI(event.target.value as string);
     
   

    

  };

  const handleChangeCR =  (event: SelectChangeEvent) => {

   
   
      setNoTAG(event.target.value as string);
    
 


  
  };

  const handleChangeDG = (event: SelectChangeEvent) => {
     
     
      setNoTAG(event.target.value as string);
     
   
  
  };

  const handleChangeFC = (event: SelectChangeEvent) => {

   
     
      setNoTAG(event.target.value as string);
     

  
  };


  const handleChangeCF =  (event: SelectChangeEvent) => {

 
    setNoTAG(event.target.value as string);
   
  };
   
  useEffect(() => {
   
    
    if (id) {
    axios.get(BACKEND+`/RI/carregaRIs/${id}`)
        .then(response => {
          
            setData(response.data);
            setStatusRI(response.data.statusRI);
            setNoTAG(response.data.noTAG);
            setresponsavelInspecao(response.data.eempresa);
            setidRelatorioInspecao(response.data.idRelatorioInspecao);
            setDate(response.data.date);
            setproblemasObservados(response.data.problemasObservados);
            setrecomendacoesReparo(response.data.recomendacoesReparo);
            setNumero(response.data.numero);
            setlocalProblema(response.data.localProblema);
            setDenominacao(response.data.equipamento);
            setEquipamento(response.data.denominacao);
            setTag(response.data.tag);
        })
        .catch(error => {
            console.log('Erro ao buscar empresas', error);
        }); 
        
       handleRefreshFile(); 

}},   
[id]);

 
   

const handleRefreshFile = async () => {
  setLoading(true);
  setError(null);
  try {
    const response = await axios.get<string[]>(BACKEND+`/RI/buscafile/${id}`);
    setFiles(response.data);
  } catch (err) {
    setError('Erro ao buscar os arquivos');
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
editor: '' 
} 
  

 

 



 
 
  return (

 

    <div >
  
  <br/><br/>
  Código do Relatório de Inspeção:  {id} <br/><br/>
    <h3>PROBLEMAS ENCONTRADOS DURANTE INSPEÇÃO - RELATÓRIO DE INSPEÇÃO - RI</h3>
    <h5>   PREENCHIDO PELO PRESTADOR DE SERVIÇO TERCERIZADO </h5>
<br/>
<br/>

<br/>         


<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
 
<TextField color='success'  helperText='Data' placeholder='99/99/9999'   value={data?.date} variant="outlined" onChange={(e) => setDate(e.target.value)}>                   </TextField>
                
<TextField color='success'  helperText='Doc. nº'   value={data?.numero} variant="outlined" onChange={(e) => setNumero(e.target.value)}> </TextField>       

<FormControl fullWidth>
       
    


<InputLabel id="demo-simple-select-label">Status: </InputLabel>
 

<Select className='Status'
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
 <br/><br/>

 <TextField color='success' label='Cliente' value={"Eldorado Brasil"} disabled  variant="outlined"></TextField> 
 <TextField color='success' label='Local' value={"Três Lagoas-MS"} disabled variant="outlined"></TextField> 
 <TextField name='lblEvento' label='Evento' color='success' value={"PG 2024"} disabled variant="outlined"></TextField> 
 
 <br/><br/>
 
  
 <TextField   
          label={data?.equipamento}
          value={data?.equipamento}
          helperText="Equipamento"  
          onChange={(e) => setEquipamento(e.target.value)} 
          onFocus={(e) => setEquipamento(e.target.value)} 
          
        />

          
 <TextField   
          label={data?.denominacao}
          value={data?.denominacao}
          helperText="Denominação"  
          onChange={(e) => setDenominacao(e.target.value)} 
          onFocus={(e) => setDenominacao(e.target.value)} 
          
        />

<TextField   
          label={data?.tag} 
          value={data?.tag}
          helperText="TAG"  
        
          onChange={(e) => setTag(e.target.value)} 
          onFocus={(e) => setTag(e.target.value)} 
        />

 

 <br/><br/>

 <TextField 
          color='success'
          
          value={data?.responsavelInspecao}
          helperText="Responsável pela Inspeção" 
          variant="outlined" 
          onChange={(e) => setresponsavelInspecao(e.target.value)}
          onFocus={(e) => setresponsavelInspecao(e.target.value)} 
          /> 

 
 <TextField color='success'   value={data?.responsavelManutencao}  helperText='Responsável pela manutenção' variant="outlined" onChange={(e) => setresponsavelManutencao(e.target.value)}></TextField>

 <br/><br/>
 
 <TextField color='success'  value={data?.localProblema} helperText='Local do problema' variant="outlined" onChange={(e) => setlocalProblema(e.target.value)}></TextField>

 <br/><br/> 
 
  <br/><br/> 
  



<label> Caldeira de Recuperação:  <br/> </label>
<br/> 
 
<Select className='CR'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={noTAG}
          label="Age"
          onChange={handleChangeCR}
        >
             {arrayCR.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}  
           
        </Select>

      <br/><br/>
 



<label>Digestor: </label>
<br/>

<Select disabled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueDG}
          label="Age"
          onChange={handleChangeDG}
        >
          {arrayDG.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>


<br/>

      <label>Forno de Cal: </label>
<br/>

<Select disabled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueFC}
          label="Age"
          onChange={handleChangeFC}
        >
          {arrayFC.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>

      <br/>

<label>Caldeira Força: </label>
<br/>


<Select disabled
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valueCF}
          label="Age"
          onChange={handleChangeCF}
        
        >
          {arrayCF.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>


</Box>
    
 
 <br/>

 
 <label>Problemas Observados:</label>

 <JoditEditor
			 
       ref={editor1}
       value={data?.problemasObservados || '.'}
       config={config}
       onBlur={(newContent: string) => setproblemasObservados(newContent)}  
       onChange={(newContent: string) => {}}
     />

 

   
   <br/> <br/> 
   <label>Recomendações de Reparos:</label>
   <JoditEditor
			 
       ref={editor2}
       value={data?.recomendacoesReparo || '.'}
       config={config}
       onBlur={(newContent: string) => setrecomendacoesReparo(newContent)}  
       onChange={(newContent: string) => {}}
     />
   <br/> <br/> 




<Button name="btnSalvar "   variant="contained"   startIcon={<SaveIcon />} onClick={saveRI}>
  Salvar 
</Button>


   <Button name="btnWord"   variant="contained" color="success" startIcon={<WordIcon />} onClick={ExportWord}>
  Exportar .DOCX
</Button>

<Button name="btnGerar"   variant="contained" color="info" startIcon={<BaixarIcon />} onClick={baixartWord}>
  Baixar .DOCX
</Button>

         
<Button name="btnRNC" variant="contained" color="error"     startIcon={<OpenInNewIcon />} onClick={RNC}>
  Abrir RNC
</Button>
   
  <br/> <br/> 

       




  <br/> <br/>

  <label>Incluir Documentos: </label>
  <br/> <br/><br/> 
 
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
        startIcon={<CloudUploadIcon/>}
        style={{ textTransform: "none", padding: "18px 50px" }}
    >
        Enviar Arquivo
    </Button>






</div> 


<button onClick={handleRefreshFile}>Carregar arquivos</button>
<br/> <br/>
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
 