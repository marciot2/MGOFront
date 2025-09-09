 import React, { useEffect, useState } from 'react';

 
 
import Caldeira from '../../images/CaldeiraForca/CaldeiraForca.png' 
 
 
 
import '../../css/containerTAGs.css';
 import CinzaD from '../../images/CINZAD.png';
 import AmareloD from '../../images/AMARELOD.png';
import VerdeD from '../../images/VERDED.png';
import VermelhoD from '../../images/VERMELHOD.png';

import TQDescargaC from '../../images/TQDESCARGAC.png';
import TQDescargaF from '../../images/TQDESCARGAF.png';


type Props = {};

const CaldeiraForca = (props: Props) => {
  
 

/*Esquerda Caldeira */
const [naoIniciadoTAG340321001, setnaoIniciadoTAG340321001] = useState<string | null>(null);
  
const [naoIniciadoTAG340321002, setNaoIniciadoTAG340321002] = useState<string | null>(null);
 

 
  
 
 
   
  useEffect(() => {
    const fetchData = async () => {
      try {
      const response1 = await fetch('http://localhost:8081/RI/semaforoTodosTAG/3403-21-001');
      const data1 = await response1.text(); 
      setnaoIniciadoTAG340321001(data1);  
  

        const response2 = await fetch('http://localhost:8081/RI/semaforoTodosTAG/3403-21-002');
        const data2 = await response2.text();  
        setNaoIniciadoTAG340321002(data2); 

         
         


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();  

    const interval = setInterval(() => {
      fetchData();  
    }, 5000);  

    return () => clearInterval(interval); 
  }, []); 

 
 
  

 



 let imageTAG340321001;  
if (naoIniciadoTAG340321001 === "NAO_INICIADO") {
  imageTAG340321001 = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoTAG340321001 ==="EM_ANDAMENTO") {  
  imageTAG340321001 = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoTAG340321001 === "NÃO_CONFORMIDADE") {
  imageTAG340321001 = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoTAG340321001 === "LIBERADO") {  
  imageTAG340321001= <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
} 

  
  let imageTAG340321002;  
if (naoIniciadoTAG340321002 === "NAO_INICIADO") {
  imageTAG340321002 = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 

if (naoIniciadoTAG340321002 === "EM_ANDAMENTO") {  
  imageTAG340321002 = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 

if (naoIniciadoTAG340321002 === "NÃO_CONFORMIDADE") {
  imageTAG340321002 = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 

if (naoIniciadoTAG340321002 === "LIBERADO") {  
  imageTAG340321002 = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 



 





 return (
   
<div className="containerTAGS">
  <div className="tag1"><img src={TQDescargaC}/></div>
  <div className="tag2"><img src={TQDescargaF}/></div>
  <div className="sem1"><br/>
  
  <a href='http://localhost:3000/ SH_Secundario_BT' target="_blank">  {imageTAG340321001}   </a>  
    <p className='cfesquerda'><b>SH Secundário BT    </b>   </p>
    
    
    </div>
  <div className="sem2"><br/><img src={AmareloD}/></div>
  <div className="A1"></div>
  <div className="A2"></div>
  <div className="A3"></div>
  <div className="A4"></div>
  <div className="A5"></div>


 


{/*


    <div className="containerForca">
  <div className="caldeiraForca"><img src={Caldeira}/></div>
   
  <div className="a3cf">
    
  
  <a href='http://localhost:3000/relatorios/SH_Secundario_BT' target="_blank">  {imageShSecundarioBT}   </a>  
    <p className='cfesquerda'><b>SH Secundário BT    </b>   </p>
  

  </div>
   
  <div className="a7cf"> 


  <a href='http://localhost:3000/relatorios/Fornalha' target="_blank"> {imageFornalha}  </a>
  <p className='cfesquerda'>    <b>Fornalha    </b>  </p> 


  </div>
  
  <div className="a9cf">

  <a href='http://localhost:3000/relatorios/Leito_Fluidizado' target="_blank">  {imageLeitoFluidizado}  </a>
  <p className='cfesquerda'>    <b>Leito Fluidizado</b> </p>
 


  </div>
  
   

 
  <div className="s4cf">
 
  <a href='http://localhost:3000/relatorios/SH_Secundario_AT' target="_blank">  {imageShSecundarioAT}  </a>
  <p className='cfdireita'>    <b>SH Secundário AT</b> </p>
 

   

</div>
  <div className="s5cf"> 
  <a href='http://localhost:3000/relatorios/SH_Primario_AT' target="_blank">  {imageShPrimarioAT}  </a>
  <p className='cfdireita'>    <b>SH Primário AT</b> </p>

  
 </div>
  <div className="s6cf">
  <a href='http://localhost:3000/relatorios/SH_Primario_BT' target="_blank">  {imageShPrimarioBT}  </a>
  <p className='cfdireita'>    <b>SH Primário BT</b> </p>
 </div>
  <div className="s7cf">
  <a href='http://localhost:3000/relatorios/Evaporador' target="_blank">  {imageEvaporador}  </a>
  <p className='cfdireita'>    <b>Evaporador</b> </p>
 </div>
 
 <div className="s8cf">
  <a href='http://localhost:3000/relatorios/Economizador' target="_blank">  {imageEconomizador}  </a>
  <p className='cfdireita'>    <b>Economizador</b> </p>
 </div>
 
   
</div>

 */ }

</div>

 


  );
};

export default CaldeiraForca;

 
