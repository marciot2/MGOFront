import React, { useEffect, useState } from 'react';
import Digestor from '../../images/Digestor/Digestor.png';
import AmareloD from '../../images/AMARELOD.png';
import VerdeD from '../../images/VERDED.png';
import VermelhoD from '../../images/VERMELHOD.png';
import '../../css/digestor.css';

type Props = {};
 



const CaldeiraIndex = (props: Props) => {



  const [roscaSeparadorTopoporaoAll, setRoscaSeparadorTopoporaoAll] = useState(null);
  const [tuboCentralAll, setTuboCentralAll] = useState(null);
  const [costadoDigestorAll, setCostadoDigestorAll] = useState(null);
  const [fundoDigestorAll, setFundoDigestorAll] = useState(null);
  
  const [separadorTopoAll, setSeparadorTopoAll] = useState(null);
  const [peneirasCD1All, setPeneirasCD1All] = useState(null);
  const [peneirasCD2All, setPeneirasCD2All] = useState(null);
  const [peneirasCD3All, setPeneirasCD3All] = useState(null);
  
  
   
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('http://localhost:8081/RI/semaforoTodos/Rosca_Separador_Topo/LIBERADO');
        const data1 = await response1.json(); 
        setRoscaSeparadorTopoporaoAll(data1);  
  
        const response2 = await fetch('http://localhost:8081/RI/semaforoTodos/Tubo_Central/LIBERADO');
        const data2 = await response2.json(); 
        setTuboCentralAll(data2); 
  
        const response3 = await fetch('http://localhost:8081/RI/semaforoTodos/Costado_do_Digestor/LIBERADO');
        const data3 = await response3.json(); 
        setCostadoDigestorAll(data3);
  
        const response4 = await fetch('http://localhost:8081/RI/semaforoTodos/Fundo_do_Digestor/LIBERADO');
        const data4 = await response4.json(); 
        setFundoDigestorAll(data4);
  
        const response5 = await fetch('http://localhost:8081/RI/semaforoTodos/Separador_de_Topo/LIBERADO');
        const data5 = await response5.json(); 
        setSeparadorTopoAll(data5);
  
  
        const response6 = await fetch('http://localhost:8081/RI/semaforoTodos/Peneiras_CD1/LIBERADO');
        const data6 = await response6.json(); 
        setPeneirasCD1All(data6);
  
  
        const response7 = await fetch('http://localhost:8081/RI/semaforoTodos/Peneiras_CD2/LIBERADO');
        const data7 = await response7.json(); 
        setPeneirasCD2All(data7);
  
        const response8 = await fetch('http://localhost:8081/RI/semaforoTodos/Peneiras_CD3/LIBERADO');
        const data8 = await response8.json(); 
        setPeneirasCD3All(data8);
  
       
  
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
  
   
  let imageRoscaSeparadorTopoporao;
  if (roscaSeparadorTopoporaoAll === 1) {
    imageRoscaSeparadorTopoporao = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  } else {
    imageRoscaSeparadorTopoporao = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
  }


  let imageTuboCentral;
  if (tuboCentralAll === 1) {
    imageTuboCentral = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  } else {
    imageTuboCentral = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
  }


  let imageCostadoDigestor;
  if (costadoDigestorAll === 1) {
    imageCostadoDigestor = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  } else {
    imageCostadoDigestor = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
  }


  let imageFundoDigestor;
  if (fundoDigestorAll === 1) {
    imageFundoDigestor = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  } else {
    imageFundoDigestor = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
  }


  let imageSeparadorTopo;
  if (separadorTopoAll === 1) {
    imageSeparadorTopo = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
  } else {
    imageSeparadorTopo = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
  }


  let imagePeneirasCD1;
  if (peneirasCD1All === 1) {
    imagePeneirasCD1 =  <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
  } else {
    imagePeneirasCD1 = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
  }


  let imagePeneirasCD2;
  if (peneirasCD2All === 1) {
    imagePeneirasCD2 =  <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
  } else {
    imagePeneirasCD2 = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
  }

  let imagePeneirasCD3;
  if (peneirasCD3All === 1) {
    imagePeneirasCD3 =  <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
  } else {
    imagePeneirasCD3 = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
  }




  return (
    <div>
       

       <div className="container11">
  <div className="s111">
  <br/> <br/> <br/>  
    
  <a href='http://localhost:3000/relatorios/Rosca_Separador_Topo' target="_blank">  {imageRoscaSeparadorTopoporao}   </a>  
   
   <p className='tpiso1'><b>Rosca do Separador de Topo</b> <br/>Inspeção Visual <br/> Líquido Penetrante <br/> M. Espessura </p>  
    
   
   </div>

   <div className="digestor"><img src={Digestor}/></div>  


  <div className="s211">
      
  <a href='http://localhost:3000/relatorios/Tubo_Central' target="_blank">  {imageTuboCentral}   </a>    
      <p className='tpiso1'><b>Tubo Central</b> <br/> Inspeção Visual <br/> Líquido Penetrante <br/> Rapel  </p>  
      

  </div>
  <div className="s311"> 
   <br/>    <br/> <br/> <br/>  


  <a href='http://localhost:3000/relatorios/Costado_do_Digestor' target="_blank"> {imageCostadoDigestor}   </a>  
      <p className='tpiso1'><b>Costado do Digestor</b> <br/> Inspeção Visual </p> 
    
  </div>
  <div className="s411"> 
  <br/> <br/> 
  <a href='http://localhost:3000/relatorios/Fundo_do_Digestor' target="_blank">  {imageFundoDigestor}   </a>    
  <p className='tpiso1'><b>Fundo Digestor </b> <br/> Inspeção Visual <br/> Líquido Penetrante <br/> M. Espessura </p>




  </div>
   
  
  <div className="s101"> 
    <br/><br/><br/>
  <a href='http://localhost:3000/relatorios/Separador_de_Topo' target="_blank"  >   {imageSeparadorTopo}   </a>      
       <p className='ibocas11'><b>Separador de Topo</b> <br/> Inspeção Visual <br/> Líquido Penetrante <br/> M. Espessura </p>  




  </div>
  <div className="s112"> 
    <br/>
  <a href='http://localhost:3000/relatorios/Peneiras_CD1' target="_blank">   {imagePeneirasCD1}   </a> 
  <p className='tteto'>    <b> Peneiras CD1 </b> <br/> Inspeção Visual <br/> Líquido Penetrante </p> 


  </div>
  <div className="s121">
    
  <a href='http://localhost:3000/relatorios/Peneiras_CD2' target="_blank">   {imagePeneirasCD2}   </a>   
       <p className='teconomizadorI'>    <b> Peneiras CD2 </b> <br/> Inspeção Visual <br/> Líquido Penetrante </p>  

    </div>
  <div className="s131">
    
 
  <a href='http://localhost:3000/relatorios/Peneiras_CD3' target="_blank">   {imagePeneirasCD3}   </a> 
       <p className='teconomizadorII'>     <b> Peneiras CD3 </b> <br/> Inspeção Visual <br/> Líquido Penetrante </p>    



  </div>
  
</div>


























 


       




 
</div>


  );
};

export default CaldeiraIndex;