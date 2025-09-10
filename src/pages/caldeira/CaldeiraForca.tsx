 import React, { useEffect, useState } from 'react';

 
 
import Caldeira from '../../images/CaldeiraForca/CaldeiraForca.png' 
 import { BACKEND } from '../../config';
 
import { FRONTEND } from '../../config';
 
import '../../css/caldeiraforca.css';
 import CinzaD from '../../images/CINZAD.png';
 import AmareloD from '../../images/AMARELOD.png';
import VerdeD from '../../images/VERDED.png';
import VermelhoD from '../../images/VERMELHOD.png';
type Props = {};

const CaldeiraForca = (props: Props) => {
  
 

/*Esquerda Caldeira */
const [naoIniciadoshsecundarioBT, setNaoIniciadoSHSecundarioBT] = useState<string | null>(null);

 
  
const [naoIniciadoFornalha, setNaoIniciadoFornalha] = useState<string | null>(null);
 

const [naoIniciadoLeitoFluidizado, setNaoIniciadoLeitoFluidizado] = useState<string | null>(null);
 




/*Direita Calderia */ 
 
const [naoIniciadoShSecundarioAT, setNaoIniciadoShSecundarioAT] = useState<string | null>(null);
const [canceladoShSecundarioAT, setCanceladoShSecundarioAT] =  useState(Number);
const [rrRncShSecundarioAT, setRrRncShSecundarioAT] = useState<string>('');
const [riShSecundarioAT, setRiShSecundarioAT] =  useState(Number);


const [naoIniciadoShPrimarioAT, setNaoIniciadoShPrimarioAT] = useState<string | null>(null);
const [canceladoShPrimarioAT, setCanceladoShPrimarioAT] = useState(Number);
const [rrRncShPrimarioAT, setRrRncShPrimarioAT] = useState<string>('');
const [riShPrimarioAT, setRiShPrimarioAT] =  useState(Number);


const [naoIniciadoShPrimarioBT, setNaoIniciadoShPrimarioBT] = useState<string | null>(null);
const [canceladoShPrimarioBT, setCanceladoShPrimarioBT] = useState(Number);
const [rrRncShPrimarioBT, setRrRncShPrimarioBT] = useState<string>('');
const [riShPrimarioBT, setRiShPrimarioBT] =  useState(Number);

const [naoIniciadoEvaporador, setNaoIniciadoEvaporador] = useState<string | null>(null);
const [canceladoEvaporador, setCanceladoEvaporador] = useState(Number);
const [rrRncEvaporador, setRrRncEvaporador] = useState<string>('');
const [riEvaporador, setRiEvaporador] =  useState(Number);


const [naoIniciadoEconomizador, setNaoIniciadoEconomizador] = useState<string | null>(null);
const [canceladoEconomizador, setCanceladoEconomizador] = useState(Number);
const [rrRncEconomizador, setRrRncEconomizador] = useState<string>('');
const [riEconomizador, setRiEconomizador] =  useState(Number);


 
   
  useEffect(() => {
    const fetchData = async () => {
      try {
      const response1 = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Secundario_BT`);
      const data1 = await response1.text(); 
      setNaoIniciadoSHSecundarioBT(data1);  
  

        const response2 = await fetch(`${BACKEND}/RI/semaforoTodos/Fornalha`);
        const data2 = await response2.text();  
        setNaoIniciadoFornalha(data2); 

        
        const response3 = await fetch(`${BACKEND}/RI/semaforoTodos/Leito_Fluidizado`);
        const data3 = await response3.text(); 
       setNaoIniciadoLeitoFluidizado(data3);

        const response4 = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Secundario_AT`);
        const data4 = await response4.text(); 
        setNaoIniciadoShSecundarioAT(data4);


        const response5 = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Primario_AT`);
        const data5 = await response5.text();  
       setNaoIniciadoShPrimarioAT(data5);


        const response6 = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Primario_BT`);
        const data6 = await response6.text();  
        setNaoIniciadoShPrimarioBT(data6);

        const response7 = await fetch(`${BACKEND}/RI/semaforoTodos/Evaporador`);
        const data7 = await response7.text();   
        setNaoIniciadoEvaporador(data7);

        const response8 = await fetch(`${BACKEND}/RI/semaforoTodos/Economizador`);
        const data8 = await response8.text();  
        setNaoIniciadoEconomizador(data8);

  
         


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

 
 
  






 let imageShSecundarioBT;  
if (naoIniciadoshsecundarioBT === "NAO_INICIADO") {
  imageShSecundarioBT = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoshsecundarioBT  === "EM_ANDAMENTO") {  
  imageShSecundarioBT = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoshsecundarioBT === "NÃO_CONFORMIDADE") {
  imageShSecundarioBT = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoshsecundarioBT=== "LIBERADO") {  
  imageShSecundarioBT = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
} 

  
  

 let imageFornalha;  
if (naoIniciadoFornalha === "NAO_INICIADO") {
  imageFornalha = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoFornalha === "EM_ANDAMENTO") {  
  imageFornalha = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoFornalha === "NÃO_CONFORMIDADE") {
  imageFornalha = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoFornalha === "LIBERADO") {  
  imageFornalha = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
} 
 




 let imageLeitoFluidizado;  
if (naoIniciadoLeitoFluidizado === "NAO_INICIADO") {
  imageLeitoFluidizado = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;  
} 

if (naoIniciadoLeitoFluidizado === "EM_ANDAMENTO") {  
 imageLeitoFluidizado = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;   
} 

if (naoIniciadoLeitoFluidizado === "NÃO_CONFORMIDADE") {
  imageLeitoFluidizado = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 

if (naoIniciadoLeitoFluidizado === "LIBERADO") {  
  imageLeitoFluidizado = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}
 





 let imageShSecundarioAT;  
if (naoIniciadoShSecundarioAT === "NAO_INICIADO") {
  imageShSecundarioAT = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoShSecundarioAT === "EM_ANDAMENTO") {  
  imageShSecundarioAT = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoShSecundarioAT === "NÃO_CONFORMIDADE") {
  imageShSecundarioAT = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoShSecundarioAT  === "LIBERADO") {  
  imageShSecundarioAT = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
}  


 
 
 


 


 let imageShPrimarioAT;  
if (naoIniciadoShPrimarioAT === "NAO_INICIADO") {
  imageShPrimarioAT = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoShPrimarioAT === "EM_ANDAMENTO") {  
  imageShPrimarioAT = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoShPrimarioAT === "NÃO_CONFORMIDADE") {
  imageShPrimarioAT = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoShPrimarioAT === "LIBERADO") {  
  imageShPrimarioAT = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
}  



 






 let imageShPrimarioBT;  
if (naoIniciadoShPrimarioBT === "NAO_INICIADO") {
  imageShPrimarioBT = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoShPrimarioBT === "EM_ANDAMENTO") {  
  imageShPrimarioBT = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoShPrimarioBT === "NÃO_CONFORMIDADE") {
  imageShPrimarioBT = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoShPrimarioBT === "LIBERADO") {  
  imageShPrimarioBT = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
}  










 let imageEvaporador;  
if (naoIniciadoEvaporador === "NAO_INICIADO") {
  imageEvaporador = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoEvaporador === "EM_ANDAMENTO") {  
  imageEvaporador = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoEvaporador === "NÃO_CONFORMIDADE") {
  imageEvaporador = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoEvaporador === "LIBERADO") {  
  imageEvaporador = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
}  






 let imageEconomizador;  
if (naoIniciadoEconomizador === "NAO_INICIADO") {
  imageEconomizador = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (naoIniciadoEconomizador === "EM_ANDAMENTO") {  
  imageEconomizador = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoEconomizador === "NÃO_CONFORMIDADE") {
  imageEconomizador = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoEconomizador === "LIBERADO") {  
  imageEconomizador = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
}  


 





 return (
  <div>
    
    <div className="containerForca">
  <div className="caldeiraForca"><img src={Caldeira}/></div>
   
  <div className="a3cf">
    
  
  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Secundario_BT`} target="_blank">  {imageShSecundarioBT}   </a>  
    <p className='cfesquerda'><b>SH Secundário BT    </b>   </p>
  

  </div>
   
  <div className="a7cf"> 


  <a href={`https://eldorado.pg2025.com.br/relatorios/Fornalha`} target="_blank"> {imageFornalha}  </a>
  <p className='cfesquerda'>    <b>Fornalha    </b>  </p> 


  </div>
  
  <div className="a9cf">

  <a href={`https://eldorado.pg2025.com.br/relatorios/Leito_Fluidizado`} target="_blank">  {imageLeitoFluidizado}  </a>
  <p className='cfesquerda'>    <b>Leito Fluidizado</b> </p>
 


  </div>
  
   

 
  <div className="s4cf">
 
  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Secundario_AT`} target="_blank">  {imageShSecundarioAT}  </a>
  <p className='cfdireita'>    <b>SH Secundário AT</b> </p>
 

   

</div>
  <div className="s5cf"> 
  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Primario_AT`} target="_blank">  {imageShPrimarioAT}  </a>
  <p className='cfdireita'>    <b>SH Primário AT</b> </p>

  
 </div>
  <div className="s6cf">
  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Primario_BT`} target="_blank">  {imageShPrimarioBT}  </a>
  <p className='cfdireita'>    <b>SH Primário BT</b> </p>
 </div>
  <div className="s7cf">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Evaporador`} target="_blank">  {imageEvaporador}  </a>
  <p className='cfdireita'>    <b>Evaporador</b> </p>
 </div>
 
 <div className="s8cf">
 <a href={`https://eldorado.pg2025.com.br/relatorios/Economizador`} target="_blank">  {imageEconomizador}  </a>
  <p className='cfdireita'>    <b>Economizador</b> </p>
 </div>
 
   
</div>





 </div>


  );
};

export default CaldeiraForca;

 
