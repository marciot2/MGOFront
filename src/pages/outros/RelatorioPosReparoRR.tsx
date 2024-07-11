import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save'; 
import '../../css/caldeira.css';
import {   Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent, Input } from '@mui/material';
import * as React from 'react';
import './styles.css';
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
import ArticleIcon from '@mui/icons-material/Article';  

import {BACKEND} from "../../config"; 
 
import Button from '@mui/material/Button';
 
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react';
import axios from 'axios';
 

interface Rr {
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
};
     


     
export default function RelatorioPosReparo() {
  


  const [files, setFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
   




  const [age, setAge] = React.useState('');
  const [data, setData] = useState<Rr>();
  const [eempresa, setEempresa] = useState('');
  const [denominacao, setDenominacao] = useState('');
  const [tag, setTag] = useState('');
  const [noTAG, setNoTAG] = useState('');
  const [status, setStatus] = useState<string | undefined>(data?.status || '');
  const [numero,setNumero] = useState(data?.numero);
  const [equipamento,setEquipamento] = useState('');

  const {idRelatorioNaoConformidade} = useParams();
  const [idRelatorioReparo,setidRelatorioReparo] = useState('');   
  const [ensaios,setEnsaios] = useState('.');
  const [tipoInspecao, settipoInspecao] = useState('');
  const [area,setArea] = useState('');
  const [dataInspecao, setdataInspecao] = useState('');
 
  const [recomendacaoReparo, setrecomendacaoReparo] = useState('.');
   
 
  const [descricaoReparo, setdescricaoReparo] = useState('.');
  const [responsavelInspecao, setresponsavelInspecao] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [dadosExcel, setdadosExcel] = useState<string>('');
  const { id } = useParams();
 


  const handleUploadS3 = async () => {
    if (selectedFile) {
        const formData = new FormData();
        formData.append('files', selectedFile);
        formData.append('id',idRelatorioReparo);
        formData.append('tipo','RR');
        formData.append('tag', tag || '');
        formData.append('noTAG', noTAG || '');

  
        try {
            // Substitua com a URL do seu endpoint de upload
            const uploadUrl = BACKEND+'/RR/S3/salvar';
             
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
  



  const saveRR = () => {
 
 {alert(">>>>"+area)}
  
    try {
      const formData = {
 
     idRelatorioNaoConformidade,
        id,
        status, 
        equipamento,
        tag,
        idRelatorioReparo,
        numero,
        area,
        tipoInspecao,
        dataInspecao, 
        noTAG,
        recomendacaoReparo,
        empresa, 
         descricaoReparo,
         ensaios,
        denominacao,
        responsavelInspecao,
           
  
        };
        console.info(numero);
  
        axios.post(BACKEND+'/RR/save',formData) 
          
        
        .then((response) => {
          console.log(response);
  
          if (response.status === 200) {
           
           setidRelatorioReparo(response.data);
            {alert("Relatório de Reparo Salvo com sucesso!!!")};
            
             
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
   
    setArea(equipamento);
    
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
        equipamento, 
        numero,
        descricaoReparo,
        ensaios, 
       
              
        responsavelInspecao
        };
        console.info(numero);
 
        axios.post(BACKEND+'/RR/enviar',formData) 
          
        
        .then((response) => {
          console.log(response);

          if (response.status === 200){

            {alert("Documento gerado com sucesso!!!")}

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
      url: BACKEND+'/downloadRR',
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
    axios.get(BACKEND+`/RR/carregaRRs/${id}`)
        .then(response => {
            setData(response.data);
            setDenominacao(response.data.denominacao);
            setTag(response.data.tag);
            setNoTAG(response.data.noTAG);
            setArea(response.data.area);
            setEmpresa(response.data.empresa);
            setNumero(response.data.numero);
            setStatus(response.data.status);
            setidRelatorioReparo(response.data.idRelatorioReparo);
            
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
     
    const response = await axios.get<string[]>(BACKEND+`/RR/buscafile/${idRelatorioReparo}`);
    setFiles(response.data);
  } catch (err) {
    setError('Erro ao buscar os arquivos');
  } finally {
    setLoading(false);
  }
};
 


 
const editor1 = useRef(null);
const editor2 = useRef(null);



const config = 
{
readonly: false,
editor: '' 
} 
  


 








const [selectedFile, setSelectedFile] = useState<File | null>(null);

const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files) {
      setSelectedFile(event.target.files[0]);
  }
};
 
  return (

 

    <div className="App">

   Dados Equipamentos: 
   <br/>
   Relatório de Inspeção:  
   <br/> 
   Relatório de Não Conformidade: {id}
   <br/>
   Relatório Pós reparo: {idRelatorioReparo}
   <br/>
   
          <h3>RELATÓRIO PÓS REPARO (Aprovação) - RR</h3>
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
  
                
<TextField color='success' value={data?.numero} helperText='Doc. nº' variant="outlined" onChange={(e) => setNumero(e.target.value)}> </TextField>       

<FormControl fullWidth>
       
    


<InputLabel id="demo-simple-select-label">Status</InputLabel>
<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
   <MenuItem value={'LIBERADO'}>Liberado</MenuItem>


   
  </Select>
  </FormControl>
 <br/> 
 <br/> 

  
 
 
 
  
 <TextField   
         
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

 
 
 

<TextField   
          label={data?.area} 
          value={data?.area}
          helperText="Área"  
          onChange={(e) => setArea(e.target.value)} 
          onFocus={(e) => setArea(e.target.value)} 
         
        />


 <br/><br/>
 <TextField color='success' value={data?.tipoInspecao} helperText='Tipo de inspeção' variant="outlined" onChange={(e) => settipoInspecao(e.target.value)}></TextField> 
 <TextField color='success' value={data?.dataInspecao} helperText='Data inspeção' variant="outlined" onChange={(e) => setdataInspecao(e.target.value)}></TextField>
  

 <TextField   
          label={data?.empresa} 
          value={data?.empresa}
          helperText="Empresa"  
          onChange={(e) => setEmpresa(e.target.value)} 
          onFocus={(e) => setEmpresa(e.target.value)} 
        />


 <TextField color='success' value={data?.responsavelInspecao} helperText='Responsável pela inspeção' variant="outlined" onChange={(e) => setresponsavelInspecao(e.target.value)}></TextField> 
 

 <br/><br/>
  



</Box>
    
 
 <br/>

 
 <label>Descrição do reparo:</label>

 <JoditEditor
			 
       ref={editor1}
       value={data?.descricaoReparo || '.'}
       config={config}
       onBlur={(newContent: string) => setdescricaoReparo(newContent)}  
       onChange={(newContent: string) => {}}
     />

 

   
   <br/> <br/> 
   <label>Ensaios utilizados para aprovação:</label>
   <JoditEditor
			 
       ref={editor2}  
       value={data?.ensaios || '.'}
       config={config}
       onBlur={(newContent: string) => setEnsaios(newContent)}  
       onChange={(newContent: string) => {}}
     />
   <br/> <br/> 
   <Button name="btnSalvar "   variant="contained"   startIcon={<SaveIcon />} onClick={saveRR}>
  Salvar 
</Button>
   <Button name="btnWord"    variant="contained" color="success" startIcon={<ArticleIcon />} onClick={ExportWord}>
  Exportar .DOCX
</Button>

<Button name="btnGerar"  variant="contained" color="info" startIcon={<ArticleIcon />} onClick={baixartWord}>
  Baixar .DOCX
</Button>
   
  <br/> <br/> 

       




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
   
 
    </div>



    <button onClick={handleRefreshFile}>Atualizar arquivo</button>
    
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
 