import Inspecoes from '../../images/inspecoes.png';
import Desenhos from '../../images/Desenhos.png';
import Livros from '../../images/Livro_Registro.png';
import Memorial from '../../images/MemorialCalculo.png';
import RegistroFotografico from '../../images/RegistroFotografico.png';
import ART from '../../images/art.png';
import Databook from '../../images/databook.png';
import DispositivoSeguranca from '../../images/dispositivo_seguranca.png';
import IndicadoresPressao from '../../images/indicadores_pressao.png';

 


import React from 'react';
import '../../css/documentos.css';

 

  
  
     
export default function documentos() {
  
  const handleButtonClick = () => {
    alert('Button clicked!')
    document.getElementById("absolute").style.backgroundColor = "green";
  };
 

  return (
    <div className="App">
  <div id="container">
      
      
      
     
 
 <br/>
 
 
 
 
  



 
          


 


<br/><br/><br/><br/><br/><br/>



      
<img id="imgInspecoes" alt="inspecoes" src={Inspecoes}  />
<div id="divInpecoes" title="Inspeções"  onClick={handleButtonClick}> <br/> </div>

 <img id="imgDispSeg" alt="DispositivoSegurança"   src={DispositivoSeguranca} />
 <div id="divDipoSeg" title="Dispositivo de Segurança"  onClick={handleButtonClick}>  </div>

 <img id="imgIndPressao" alt="Inicador de Pressão"    src={IndicadoresPressao} />
 <div id="divIndPressao" title="Inidcadores de Pressão"  onClick={handleButtonClick}>  </div>

 <img id="imgLivro" alt="imgLivro"   src={Livros}   />
<div id="divLivro" title="Livros de Registro"  onClick={handleButtonClick}>  </div>

<img id="imgART" alt="art"   src={ART}   />
<div id="divART" title="ART"  onClick={handleButtonClick}>  </div>


<img id="imgDatabook" alt="Databook"   src={Databook}   />
<div id="divDatabook" title="Databook"  onClick={handleButtonClick}>  </div>
         
<img id="imgDesenhos" alt="Dedsenhos"  src={Desenhos}   />
<div id="divDesenhos" title="Desenhos"  onClick={handleButtonClick}>  </div>

<img id="imgMemoCalc" alt="Memorial de Cálculo"  src={Memorial}   />
<div id="divMemoCalc" title="Memorial de Cálculo"  onClick={handleButtonClick}>  </div>

<img id="imgRegFoto" alt="Registro Fotográfico"   src={RegistroFotografico}   />
<div id="divRegFoto" title="Registro Fotográfico"  onClick={handleButtonClick}>  </div>

         






          </div>
          </div>
   
  );
}
 