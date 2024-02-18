 
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import GridOnIcon from '@mui/icons-material/GridOn';
import React from 'react';
import '../../css/dados.css';
import Table from './table';

     
export default function Filtro() {
  
  const handleButtonClickAmarelo = () => {
    
    if (document.getElementById("divVerde").value = "green"){
      document.getElementById("divVermelho").style.backgroundColor = "grey";
      document.getElementById("divAmarelo").style.backgroundColor = "yellow";

    } 


    


  };
 

  const handleButtonClickVerde = () => {
  
    document.getElementById("divAmarelo").style.backgroundColor = "grey";
    document.getElementById("divVermelho").style.backgroundColor = "grey";
    document.getElementById("divVerde").style.backgroundColor = "green";


  };

  const handleButtonClickVermelho = () => {
    alert('Button clicked!')
    document.getElementById("divVerde").style.backgroundColor = "grey";
    document.getElementById("divAmarelo").style.backgroundColor = "grey";
    document.getElementById("divVermelho").style.backgroundColor = "red";


  };

  const handleButtonClickLimpar = () => {
 
    document.getElementById("divVerde").style.backgroundColor = "green";
    document.getElementById("divAmarelo").style.backgroundColor = "yellow";
    document.getElementById("divVermelho").style.backgroundColor = "red";


  };



  return (
    <div className="App">
 
 
 <br/>
 <div id="divAmarelo" title="IV - Inspeção Visual"  onClick={handleButtonClickAmarelo}>  </div>

 <div id="divVermelho" title="IV - Inspeção Visual"  onClick={handleButtonClickVermelho}>  </div>

 <div id="divVerde" title="IV - Inspeção Visual"  onClick={handleButtonClickVerde}>  </div>


  
 
<Button variant="contained" startIcon={<FilterListIcon  />} color="error" onClick={handleButtonClickLimpar}>
  Limpar filtro
</Button>

<Button variant="contained" startIcon={<FilterAltIcon/>} color="success">
  Todos
</Button>



<Button color="secondary" variant="contained" startIcon={<DoneOutlineIcon />}>
  Executar
</Button>



<Button color="inherit" variant="contained" startIcon={<PictureAsPdfIcon />}>
  Exportar PDF
</Button>

<Button color="inherit" variant="contained" startIcon={<GridOnIcon />}>
  Exportar Planilha
</Button>
<br/><br/><br/><br/>

<Table/>


      <div id="container">
      
         
          
          </div>
       
    </div>
  );
}
 