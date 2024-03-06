 
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
 
 
import {   useParams } from 'react-router-dom';


import App from './fileupload';
 
import Button from '@mui/material/Button';
 
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import JoditEditor from 'jodit-react';
import FileUploadGreenDocs from './fileuploadGreenDocs';
 
  

interface RI {
  equipamento: string;
  tag: string;
};


     
export default function RelatorioInspecao() {
  
  const [age, setAge] = React.useState('');
  const [data, setData] = useState<RI>();
  
  
  
  const { id } = useParams();
 
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    alert(event.target.value as string);


  };
   

   
  useEffect(() => {
     

    if (id) {
    axios.get(`http://localhost:8081/dadosExcel/dadosPorID/${id}`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log('Erro ao buscar empresas', error);
        });        

}},   
[id]);
   
      
 
const editor1 = useRef(null);
const editor2 = useRef(null);
const [content1, setContent1] = useState('.');
const [content2, setContent2] = useState('.');


const config = 
{
readonly: false,
editor: '' 
} 
  

 
  return (

 

    <div className="App">
   DADOS: {id}
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
 
<TextField color='success' label='Data' placeholder='99/99/9999' variant="outlined">                   </TextField>
                
<TextField color='success' label='Doc. nº' variant="outlined"> </TextField>       

<FormControl fullWidth>
       
    


<InputLabel id="demo-simple-select-label">Status</InputLabel>
<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Status"
          onChange={handleChange}
        >
    <MenuItem value={1}>Verde</MenuItem>
    <MenuItem value={2}>Amarelo</MenuItem>
    <MenuItem value={3}>Vermelho</MenuItem>
  </Select>
  </FormControl>
 <br/><br/>

 <TextField color='success' label='Cliente' value={"Eldorado Brasil"} disabled  variant="outlined"></TextField> 
 <TextField color='success' label='Local' value={"Três Lagoas-MS"} disabled variant="outlined"></TextField> 
 <TextField color='success' label='Evento' variant="outlined"></TextField> 

 <br/><br/>
 
  
 <TextField   
          label={data?.equipamento} 
          defaultValue={data?.equipamento}
          helperText="Equipamento" disabled
        />

<TextField   
          label={data?.tag} 
          defaultValue={data?.tag}
          helperText="TAG" disabled
        />

 

 <br/><br/>

 <TextField color='success' label='Responsável pela inspeção' variant="outlined"></TextField> 
 <TextField color='success' label='Responsável pela manutenções' variant="outlined"></TextField>

 <br/><br/>
 
 <TextField color='success' label='Local do problema' variant="outlined"></TextField>

 <br/><br/>
  



</Box>
    
 
 <br/>

 
 <label>Problemas Observados:</label>

 <JoditEditor
			 
       ref={editor1}
       value={content1}
       config={config}
       onBlur={(newContent: string) => setContent1(newContent)}  
       onChange={(newContent: string) => {}}
     />


   
   <br/> <br/> 
   <label>Recomendações de Reparos:</label>
   <JoditEditor
			 
       ref={editor2}
       value={content2}
       config={config}
       onBlur={(newContent: string) => setContent2(newContent)}  
       onChange={(newContent: string) => {}}
     />
   <br/> <br/> 

  <App/>
  <br/> <br/> 

       




  <br/> <br/>

  <label>Incluir relatórios: </label>
  <FileUploadGreenDocs></FileUploadGreenDocs>
  <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>

  <Button variant="contained" color="info" startIcon={<PictureAsPdfIcon />}>
  + Adcionar Laudo
</Button>
<Button variant="contained" color="info" startIcon={<GridOnIcon />}>
  + Adicionar Planilha
</Button>

<Button variant="contained" color="warning">
  + Não Liberado para inspeção
</Button>



<Button variant="contained" color="success" startIcon={<LoupeIcon />}>
  Novo RI
</Button>

<Button variant="contained" color="success" startIcon={<LibraryAddIcon />} >
  Novo RNC
</Button>

<Button variant="contained" color="success" startIcon={<AddCircleIcon />}>
  Novo RR
</Button>
<br/> <br/>

<Button variant="contained" color="success" startIcon={<AddCircleIcon />}>



  Novo RR
</Button><br/> <br/>
 

<br/> <br/>
<div style={{height:"30vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
 
</div>
    </div>
    
  );
}
 