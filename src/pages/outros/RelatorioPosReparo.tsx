 
import '../../css/caldeira.css';
import { TextareaAutosize, Box, TextField, InputLabel, Select, MenuItem, FormControl, SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import './styles.css';
import HtmlEditor from './edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import LoupeIcon from '@mui/icons-material/Loupe';
import GridOnIcon from '@mui/icons-material/GridOn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapButton } from 'react-bootstrap-button';

import App from './fileupload';
 
import Button from '@mui/material/Button';
import {   Pies } from './pie';
 
  
     
export default function RelatorioPosReparo() {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    alert(event.target.value as string);


  };


 
  return (
    <div className="App">

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

 <TextField color='success' label='Cliente'   variant="outlined"></TextField> 
 <TextField color='success' label='Local' variant="outlined"></TextField> 
 <TextField color='success' label='Evento' variant="outlined"></TextField> 

 <br/><br/>

 <TextField color='success' label='Equipamento' variant="outlined"></TextField> 
 <TextField color='success' label='TAG' variant="outlined"></TextField>

 <br/><br/>

 <TextField color='success' label='Responsável pela inspeção' variant="outlined"></TextField> 
 <TextField color='success' label='Responsável pela manutençãos' variant="outlined"></TextField>

 <br/><br/>
 
 <TextField color='success' label='Local do problema' variant="outlined"></TextField>

 <br/><br/>
 {/* Hello World

 <TextareaAutosize aria-label="minimum height" minRows={5} placeholder="Problemas encontrados" />

 <TextareaAutosize aria-label="minimum height" minRows={5} placeholder="Recomendações de Reparo" />
<p id="pe">Hello World!</p>
*/}




</Box>
    
 
 <br/>

 
 <label>Problemas Observados:</label>
   <HtmlEditor />  
   <br/> <br/> 
   <label>Recomendações de Reparos:</label>
   <HtmlEditor />  
   <br/> <br/> 

  <App/>
  <br/> <br/> 


  <br/> <br/>

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
<BootstrapButton variant="primary">Enviar</BootstrapButton>{' '}

<br/> <br/>
<div style={{height:"30vh",position:"relative", marginBottom:"1%", padding:"1%"}}>
<Pies/><Pies/><Pies/>
</div>
    </div>
    
  );
}
 