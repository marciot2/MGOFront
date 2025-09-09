import CloudUploadIcon from '@mui/icons-material/CloudUpload'; 
import '../../css/caldeira.css';
import {  Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, Input } from '@mui/material';
import * as React from 'react';
import './styles.css';
import HtmlEditor from './edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LoupeIcon from '@mui/icons-material/Loupe';
import GridOnIcon from '@mui/icons-material/GridOn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';
import SaveIcon from '@mui/icons-material/Save';
import {   useParams } from 'react-router-dom';

import BuildIcon from '@mui/icons-material/Build';
import App from './fileupload';
 
import 'react-datepicker/dist/react-datepicker.css';
import { ptBR } from "date-fns/locale";


import Button from '@mui/material/Button';
 
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import FileUploadGreenDocs from './fileuploadGreenDocs';
import {BACKEND} from "../../config"; 
import DatePicker from 'react-datepicker';
  

interface Rnc {
  equipamento: string;
  tag: string;
  eempresa: string;
  denominacao: string;
  noTAG: string;
  
   
};


     
export default function RelatorioNaoConformidade() {
  

  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState<string>();
  const [noTAG, setNoTAG] = useState('');


  const { idRelatorioInspecao } = useParams();
  
   const [tipoRelatorio, setTipoRelatorio] = useState('RNC');
  const [isDisabled, setIsDisabled] = useState(true);

  const [age, setAge] = React.useState('');
  const [data, setData] = useState<Rnc>();
  const [denominacao, setDenominacao] = useState(data?.denominacao);
  const [tag, setTag] = useState(data?.tag);
  

  


  const [status, setStatus] = useState('');
  const [numero,setNumero] = useState('');
  
    const [valueCF, setValueCF] = useState<string>();

  const [tipoInspecao, settipoInspecao] = useState('');
  const [area,setArea] = useState('');
  const [dataInspecao, setdataInspecao] = useState<Date | null>(new Date());
  const [valueCR, setValueCR] = useState<string>();

  const [isComboDG, setIsComboDG] = useState(false);
  const [isComboCF, setIsComboCF] = useState(false);
  const [isComboCR, setIsComboCR] = useState(false);
  const [isComboFC, setIsComboFC] = useState(false);
  const [equipamento, setEquipamento] = useState(data?.equipamento);


  const [idRelatorioNaoConformidade, setidRelatorioNaoConformidade] = React.useState('');
  const [recomendacaoReparo, setrecomendacaoReparo] = useState('.');
  const [localProblema, setlocalProblema] = useState('');
 
  const [condicaoEncontrada, setCondicaoEncontrada] = useState('.');
  const [responsavelInspecao, setresponsavelInspecao] = useState('');
  const [empresa, setEmpresa] = useState('MKS');
  const [dadosExcel, setdadosExcel] = useState<string>('');
  const { id } = useParams();
  
 
  const [relatorioInspecaoID, setidRelatorioInspecaoID] = useState(Number(idRelatorioInspecao));
  const [selectedFile, setSelectedFile] = useState<File | null>(null);


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




  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
        setSelectedFile(event.target.files[0]);
    }
};




const handleChangeCR = (event: SelectChangeEvent) => {



  setNoTAG(event.target.value as string);





};


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


  const saveRNC = () => {
 
 


    if (status.trim() === '') {
      alert('Selecione um Status!!!');
  } else if (numero.trim() === '') {
      alert('Número documento inválido!!!');
  } else if (tipoInspecao.trim()  === '') {
      alert('Informe o tipo de inspeção!!!');
  } else if (responsavelInspecao.trim()  === '') {
    alert('Informe o responsável pela inspeção!!!');
  }  else if (condicaoEncontrada.trim()  === '.') {
    alert('Informe a condição encontrada!!!');
  } else if (recomendacaoReparo.trim()  === '.') {
    alert('Informe as recomendações de reparo!!!');
  } else  {




  
    try {
      const formData = {
        relatorioInspecaoID,
        id,
        status, 
        equipamento,
        tag,
      
        numero,
        area,
        tipoInspecao,
        dataInspecao, 
        condicaoEncontrada,
        recomendacaoReparo,
        idRelatorioNaoConformidade,
       denominacao,
       empresa,  
         noTAG,
         tipoRelatorio,
        responsavelInspecao,
         
  
        };
        console.info(numero);
  
        axios.post(BACKEND+'/RNC/save',formData) 
          
        
        .then((response) => {
          console.log(response);
  
          if (response.status === 200) {
           
           setidRelatorioNaoConformidade(response.data);
            {alert("Relatório de Não conformidade Salvo com sucesso!!!"+idRelatorioNaoConformidade)};
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
   

  const RR = () => {


    if (id != ""){


     
      
      window.open("http://localhost:3000/prestador/RR/"+idRelatorioNaoConformidade);

    } else {

      alert("Selecione um registro na tabela acima para prosseguir"+id);

    }

    
  };


  /** EXPORTA DADOS PARA WORD */
  const ExportWord = () => {
   
  
    
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
        
        numero,
        condicaoEncontrada,
        recomendacaoReparo, 
        localProblema,
              
        responsavelInspecao
        };
        console.info(numero);
 
        axios.post(BACKEND+'/RNC/enviar',formData) 
          
        
        .then((response) => {
          console.log(response);
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
      url: BACKEND+'/downloadRNC',
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

  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
    setAge(event.target.value as string);
    

    

  };
   

   
  useEffect(() => {
     

    if (id) {
    axios.get(BACKEND+`/RNC/dados/${id}`)
        .then(response => {
            setData(response.data);
            
            setTag(response.data.tag);
            setEmpresa('MKS');
            setDenominacao(response.data.denominacao);
            setArea(response.data.equipamento);
             checkTagFor(response.data.tag);
          
            console.log('OK');

        })
        .catch(error => {
            console.log('Erro ao buscar empresas', error);
        });        

}},   
[id]);
      
 


    const checkTagFor = (tag: any) => {
     
      

      /*
      if (tag.includes('CF')) {
        setIsComboFC(true);
        setIsComboDG(true);
        setIsComboCF(false);
        setIsComboCR(true);
        
      }*/
if (tag === "3403-21-020-CF") {
        setIsComboCF(false); // desabilita o Select
      } else {
        setIsComboCF(true); // habilita o Select
      }




      
    };
 
const editor1 = useRef(null);
const editor2 = useRef(null);



const config = 
{
readonly: false,
editor: '' 
} 
  


const handleRefreshFile = async () => {
  setLoading(true);
  
  try {
    
    const response = await axios.get<string[]>(BACKEND+`/RNC/buscafile/${idRelatorioNaoConformidade}`);
    setFiles(response.data);
  } catch (err) {
    setError('Erro ao buscar os arquivos');
  } finally {
    setLoading(false);
  }
};
 
 

const handleUploadS3 = async () => {
  if (selectedFile) {
      const formData = new FormData();
      formData.append('files', selectedFile);
      formData.append('id',idRelatorioNaoConformidade);
      formData.append('tipo','RNC');

      formData.append('tag', tag || '');
      formData.append('noTAG', noTAG || '');



      try {
          // Substitua com a URL do seu endpoint de upload
          const uploadUrl = BACKEND+'/RNC/S3/salvar';
           
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


  const handleChangeCF = (event: SelectChangeEvent) => {


    setNoTAG(event.target.value as string);

  };


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


 
  return (

 

    <div className="App">
   Código do Equipamento: {id}
   <br/>  <br/> <br/>{/*
   Relatório de Inspeção: {idRelatorioInspecao}  
   <br/> 
   Relatório de Não Conformidade: {idRelatorioNaoConformidade} 
   <br/> */}
             <h3>RELATÓRIO DE NÃO CONFORMIDADE - RNC</h3>
    <h5>   PPREENCHIDO PELO PRESTADOR DE SERVIÇO TERCEIRIZADO </h5>

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
                 
<TextField color='success' label='Doc. nº' variant="outlined" onChange={handleNumeroChange} error={!!error}  helperText={error}> </TextField>       

<FormControl fullWidth>
       
    


<InputLabel id="demo-simple-select-label">Status</InputLabel>
<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Status"
          onChange={handleChange}
        >
    
    <MenuItem value={'NÃO_CONFORMIDADE'}>Não Conformidade</MenuItem>
   
   
  </Select>
  </FormControl>
 <br/><br/>

 <TextField color='success' label='Cliente' value={"Eldorado Brasil"} disabled  variant="outlined"></TextField> 
 <TextField color='success' label='Local' value={"Três Lagoas-MS"} disabled variant="outlined"></TextField> 
 
 
 <br/><br/>
 
  
  
 <TextField   
          helperText="Área"
          value={data?.equipamento}
           
          variant="outlined"  
          onChange={(e) => setEquipamento(e.target.value)} 
          onFocus={(e) => setEquipamento(e.target.value)} 
          
        />

<TextField   
      
          value={data?.tag}
          helperText="TAG"  
         
          onChange={(e) => setTag(e.target.value)} 
          onFocus={(e) => setTag(e.target.value)} 
        />
 
 
<TextField color='success'  value={data?.denominacao} helperText="Denominação"   variant="outlined" onChange={(e) => setEquipamento(e.target.value)}></TextField> 
 <br/><br/>
 <TextField color='success' label='Tipo de inspeção' variant="outlined" onChange={(e) => settipoInspecao(e.target.value)}></TextField> 
 
 <DatePicker
          selected={dataInspecao}
          onChange={(date) => setdataInspecao(date)}
          dateFormat="dd/MM/yyyy"
          locale={ptBR}
          className="custom-datepicker"
        />
 



 <TextField   
          label={data?.eempresa} 
          value="MKS"
          helperText="Empresa"  
        
          onChange={(e) => setEmpresa(e.target.value)} 
          onFocus={(e) => setEmpresa(e.target.value)} 
        />
 
 <TextField color='success' label='Responsável pela inspeção' variant="outlined" onChange={(e) => setresponsavelInspecao(e.target.value)}></TextField> 
 

 <br/><br/>
  

{/*
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
*/}

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


        <br /><br />

</Box>
    
 
 <br/>

 
 <label>Descrição da condição encontrada:</label>

 <JoditEditor
			 
       ref={editor1}
       value={condicaoEncontrada}
       config={config}
       onBlur={(newContent: string) => setCondicaoEncontrada(newContent)}  
       onChange={(newContent: string) => {}}
     />

 

   
   <br/> <br/> 
   <label>Recomendação de Reparo:</label>
   <JoditEditor
			 
       ref={editor2}  
       value={recomendacaoReparo}
       config={config}
       onBlur={(newContent: string) => setrecomendacaoReparo(newContent)}  
       onChange={(newContent: string) => {}}
     />
   <br/> <br/> 

   <Button name="btnSalvar "   variant="contained"   startIcon={<SaveIcon />} onClick={saveRNC}>
  Salvar 
</Button>


   <Button name="btnWord"  variant="contained" color="success" startIcon={<ArticleIcon />} onClick={ExportWord}>
  Exportar .DOCX
</Button>

<Button name="btnGerar" variant="contained" color="info" startIcon={<ArticleIcon />} onClick={baixartWord}>
  Baixar .DOCX
</Button>
   
   
    
<Button name="btnRR" variant="contained" color="error"  disabled={isDisabled}  startIcon={<BuildIcon />} onClick={RR}>
  Abrir RR
</Button>




  <br/> <br/>

  <label>Incluir relatórios: </label>
    
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
   
 <br/><br/>

 
  </div>


  <button onClick={handleRefreshFile}>Atualizar arquivo</button>
    
    <br/> <br/>
    <ul>
  {files.map((file, index) => {
    const fileName = file.split('/').pop(); // Pega o nome do arquivo
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
 