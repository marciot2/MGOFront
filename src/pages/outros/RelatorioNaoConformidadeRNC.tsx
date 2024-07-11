import CloudUploadIcon from '@mui/icons-material/CloudUpload'; 
import '../../css/caldeira.css';
import {  Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, Input } from '@mui/material';
import * as React from 'react';
import './styles.css';
 import ArticleIcon from '@mui/icons-material/Article';
import SaveIcon from '@mui/icons-material/Save';
import {   useParams } from 'react-router-dom';

import BuildIcon from '@mui/icons-material/Build';
 
import {BACKEND} from "../../config"; 
import Button from '@mui/material/Button';
 
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';

 
  

interface Rnc {
  equipamento: string;
  tag: string;
  eempresa: string;
  denominacao: string;
  noTAG: string;
  status: string;
  area: string;
  tipoInspecao: string;
  dataInspecao: string;
  responsavelInspecao: string;
  recomendacaoReparo: string;
  condicaoEncontrada: string;
  idRelatorioNaoConformidade: string;


};


     
export default function RelatorioNaoConformidade() {
  

  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
   



  const { idRelatorioInspecao } = useParams();
  
   
  const [isDisabled, setIsDisabled] = useState(true);

  const [age, setAge] = React.useState('');
  const [data, setData] = useState<Rnc>();
  const [denominacao, setDenominacao] = useState(data?.denominacao);
  const [tag, setTag] = useState(data?.tag);
  

  
 

  const [status, setStatus] =useState<string | undefined>(data?.status || '');
  const [numero,setNumero] = useState('');
  const [date,setDate] = useState('');
  const [tipoInspecao, settipoInspecao] = useState('');
  const [area,setArea] = useState('');
  const [dataInspecao, setdataInspecao] = useState('');
  const [equipamento, setEquipamento] = useState(data?.equipamento);
  const [idRelatorioNaoConformidade, setidRelatorioNaoConformidade] = React.useState('');
  const [recomendacaoReparo, setrecomendacaoReparo] = useState('.');
  const [localProblema, setlocalProblema] = useState('');
 
  const [condicaoEncontrada, setCondicaoEncontrada] = useState('.');
  const [responsavelInspecao, setresponsavelInspecao] = useState('');
  const [empresa, setEmpresa] = useState('MKS');
  const [dadosExcel, setdadosExcel] = useState<string>('');
  const { id } = useParams();
  const { noTAG } = useParams();
  
  const [relatorioInspecaoID, setRelatorioInspecaoID] = useState(Number(idRelatorioInspecao));
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
        setSelectedFile(event.target.files[0]);
    }
};
  const saveRNC = () => {
 
  
  
    try {
      const formData = {
        relatorioInspecaoID,
        id,
        status, 
        equipamento,
        tag,
        date,
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
  
  
  
  
   };
   

  const RR = () => {


    if (id != ""){


     
      
      window.open("http://localhost:3000/prestador/RRs/"+idRelatorioNaoConformidade+"/"+noTAG);

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
        date,
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
    axios.get(BACKEND+`/RNC/carregaRNCs/${id}`)
        .then(response => {
            setData(response.data);
            setTag(response.data.tag);
            setEmpresa('MKS');
            setDenominacao(response.data.denominacao);
            setArea(response.data.area);
            setresponsavelInspecao(response.data.eempresa);
            setNumero(response.data.numero);
            setStatus(response.data.status);
            settipoInspecao(response.data.tipoInspecao);
            setdataInspecao(response.data.dataInspecao);
            setidRelatorioNaoConformidade(response.data.idRelatorioNaoConformidade);
            setRelatorioInspecaoID(response.data.relatorioInspecaoID);
            
        })
        .catch(error => {
            console.log('Erro ao buscar empresas', error);
        });        
        handleRefreshFile(); 
}},   
[id]);
      
 


 
const editor1 = useRef(null);
const editor2 = useRef(null);



const config = 
{
readonly: false,
editor: '' 
} 
  


const handleRefreshFile = async () => {
  setLoading(true);
  setError(null);
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








 
  return (

 

    <div className="App">
   Dados Equipamentos: {id}
   <br/>
   Relatório de Inspeção: {idRelatorioInspecao} 
   <br/> 
   Relatório de Não Conformidade: {idRelatorioNaoConformidade}
   <br/>
             <h3>RELATÓRIO DE NÃO CONFORMIDADE - RNC</h3>
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
                 
<TextField color='success' value={numero} helperText='Doc. nº' variant="outlined" onChange={(e) => setNumero(e.target.value)}> </TextField>       

<FormControl fullWidth>
       
    


<InputLabel id="demo-simple-select-label">Status</InputLabel>
<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
      
    <MenuItem value={'NÃO_CONFORMIDADE'}>Não Conformidade</MenuItem>
    <MenuItem value={'LIBERADO'}>Liberado</MenuItem>
   
  </Select>
  </FormControl>
 <br/><br/>

 <TextField color='success' label='Cliente' value={"Eldorado Brasil"} disabled  variant="outlined"></TextField> 
 <TextField color='success' label='Local' value={"Três Lagoas-MS"} disabled variant="outlined"></TextField> 
 
 
 <br/><br/>
 
  
  
 <TextField   
          helperText="Área" 
          value={data?.area}
           
          variant="outlined"  
          onChange={(e) => setArea(e.target.value)} 
          onFocus={(e) => setArea(e.target.value)} 
          
        />

<TextField   
      
          value={data?.tag}
          helperText="TAG"  
         
          onChange={(e) => setTag(e.target.value)} 
          onFocus={(e) => setTag(e.target.value)} 
        />
 
 
<TextField color='success'  value={data?.denominacao} helperText="Denominação"   variant="outlined" onChange={(e) => setEquipamento(e.target.value)}></TextField> 
 <br/><br/>
 <TextField color='success' value={data?.tipoInspecao} helperText='Tipo de inspeção' variant="outlined" onChange={(e) => settipoInspecao(e.target.value)}></TextField> 
 <TextField color='success' value={data?.dataInspecao} placeholder='99/99/9999' helperText='Data inspeção' variant="outlined" onChange={(e) => setdataInspecao(e.target.value)}></TextField>
 
 <TextField   
          label={data?.eempresa} 
          value="MKS"
          helperText="Empresa"  
        
          onChange={(e) => setEmpresa(e.target.value)} 
          onFocus={(e) => setEmpresa(e.target.value)} 
        />
 
 <TextField color='success' value={data?.dataInspecao} helperText='Responsável pela inspeção' variant="outlined" onChange={(e) => setresponsavelInspecao(e.target.value)}></TextField> 
 

 <br/><br/>
  



</Box>
    
 
 <br/>

 
 <label>Descrição da condição encontrada:</label>

 <JoditEditor
			 
       ref={editor1}
       value={data?.condicaoEncontrada || '.'}
       config={config}
       onBlur={(newContent: string) => setCondicaoEncontrada(newContent)}  
       onChange={(newContent: string) => {}}
     />

 

   
   <br/> <br/> 
   <label>Recomendação de Reparo:</label>
   <JoditEditor
			 
       ref={editor2}  
       value={data?.recomendacaoReparo || '.'}
       config={config}
       onBlur={(newContent: string) => setrecomendacaoReparo(newContent)}  
       onChange={(newContent: string) => {}}
     />
   <br/> <br/> 

   <Button name="btnSalvar "   variant="contained"   startIcon={<SaveIcon />} onClick={saveRNC}>
  Salvar 
</Button>


   <Button name="btnWord" disabled  variant="contained" color="success" startIcon={<ArticleIcon />} onClick={ExportWord}>
  Exportar .DOCX
</Button>

<Button name="btnGerar" disabled  variant="contained" color="info" startIcon={<ArticleIcon />} onClick={baixartWord}>
  Baixar .DOCX
</Button>
   
   
    
<Button name="btnRR" variant="contained" color="error"     startIcon={<BuildIcon />} onClick={RR}>
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


  <button onClick={handleRefreshFile}>Carregar arquivo</button>
    
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
 