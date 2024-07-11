import React from 'react';
import Caldeira from '../..//images/Caldeira.png';
import AmareloD from '../../images/AMARELOD.png';
 
type Props = {};

const CaldeiraIndex = (props: Props) => {
  return (
    <div>


<img src={AmareloD} className='itestehidro'/>  
      <p className='ttestehidro'><b>Teste Hidro</b> (IV / PM) </p>  

<table>
 
    <tr>
      
     
      <td> 
 
      <br/> <br/> 

     <a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tpenthouse'><b>Penthouse</b> (IV / PM) </p>  
      
      <a href='http://localhost:3000/caldeira/balao'>  <img src={AmareloD} className='ibalao'/>  </a>  
      <p className='tbalao'><b>Balão</b> (IV) </p>  

      <a href='http://localhost:3000/caldeira/superaquecedorsecundario'> <img src={AmareloD} className='ishsecundario'/> </a>
      <p className='tshsecundario'><b>SH Secundário</b> (IV / MEUS / RG) </p>  
      
      <a href='http://localhost:3000/caldeira/superaquecedorterciario'>     <img src={AmareloD} className='ishterciario'/> </a> 
      <p className='tshterciario'><b>SH Terciário</b> (IV / MEUS) </p> 

      <a href='http://localhost:3000/caldeira/superaquecedorquaternario'>  <img src={AmareloD} className='ishquartenario'/> </a>   
      <p className='tshquartenario'><b>SH Quartenario</b> (IV / MEUS) </p> 
      
      
      <a href='http://localhost:3000/caldeira/superaquecedorprimarioI'>  <img src={AmareloD} className='ishprimarioI'/>  </a>    
      <p className='tshprimarioI'><b>SH Primário I</b> (IV / MEUS) </p> 

      <a href='http://localhost:3000/caldeira/superaquecedorprimarioII'>  <img src={AmareloD} className='ishprimarioII'/> </a>    
      <p className='tshprimarioII'><b>SH Primário II</b> (IV / MEUS) </p> 

      <a href='http://localhost:3000/caldeira/screen'>  <img src={AmareloD} className='iscreen'/> </a>     
      <p className='tscreen'><b>Screen</b> (IV / MEUS) </p> 

      
      <a href='http://localhost:3000/caldeira/parededeagua'> <img src={AmareloD} className='iparede' />    </a>
      <p className='tparede'><b>Parede D'água</b> (IV / MEUS) </p> 
      <br/><br/><br/><br/><br/><br/> <br/> <br/> 

      <a href='http://localhost:3000/caldeira/piso'> <img src={AmareloD} className='ipiso'/>  </a>
      <p className='tpiso'><b>Piso</b> (IV / MEUS / LP) </p>
      </td>
 
      <td><img src={Caldeira}/></td>
      
       
       <td>

      <br/>

      

      <a href='http://localhost:3000/caldeira/valvuladeseguranca'> <img src={AmareloD} className='ivalseg'/> </a>    
       <p className='tvalseg'><b>Válvula de Segurança</b> (MAN / CAL) </p>  

       <a href='http://localhost:3000/caldeira/teto'><img src={AmareloD} className='iteto'/>  </a>
       <p className='tteto'>    <b>Teto</b> (IV) </p>  
      
       <a href='http://localhost:3000/caldeira/economizadorI'> <img src={AmareloD} className='ieconomizadorI'/> </a>  
       <p className='teconomizadorI'>    <b>EconomizadorI</b> (IV / MEUS / DRO) </p>  

       <a href='http://localhost:3000/caldeira/economizadorII'> <img src={AmareloD} className='ieconomizadorII'/> </a>
       <p className='teconomizadorII'>    <b>EconomizadorII</b> (IV / MEUS / DRO) </p>  


       <a href='http://localhost:3000/caldeira/bank'> <img src={AmareloD} className='ibank'/> </a>   
       <p className='tbank'>    <b>Bank</b> (IV / MEUS / DRO) </p>  

       <a href='http://localhost:3000/caldeira/grid'> <img src={AmareloD} className='igrid'/>  </a>  
       <p className='tgrid'>    <b>GRID</b> (IV / MEUS) </p>  

       <a href='http://localhost:3000/caldeira/SopradoresDeFuliagem'> <img src={AmareloD} className='isopradores'/> </a>   
       <p className='tsoprasdores'>    <b>Sopradores de Fuligem</b> (IV / RG) </p>  


       <a href='http://localhost:3000/caldeira/nariz'> <img src={AmareloD} className='inariz' />  </a>
       <p className='tnariz'>    <b>Nariz</b> (IV / MEUS) </p>  

       <a href='http://localhost:3000/caldeira/camarafria'>  <img src={AmareloD} className='icamarafria'/> </a>  
       <p className='tcamarafria'>    <b>Câmara Fria</b> (IV / MEUS) </p>  

       <a href='http://localhost:3000/caldeira/queimadores'> <img src={AmareloD} className='iqueimadores'/>  </a> 
       <p className='tqueimadores'>    <b>Queimadores</b> (IV / MEUS) </p>  

       <a href='http://localhost:3000/caldeira/EntradaArTerciaria'> <img src={AmareloD} className='iarterciario'/>  </a> 
       <p className='tarterciario'>    <b>Entrada de ar Terciário</b> (IV / MEUS / LP) </p>  

       <a href='http://localhost:3000/caldeira/EntradaArSecundaria'> <img src={AmareloD} className='iarsecundario'/>  </a> 
       <p className='tarsecundario'>    <b>Entrada de ar Secundário</b> (IV / MEUS / LP) </p>  
       
       <a href='http://localhost:3000/caldeira/DutosEVentiladores'><img src={AmareloD} className='idutos'/> </a>    
       <p className='tdutos'>    <b>Dutos e ventiladores</b> (IV) </p>  
       
       <a href='http://localhost:3000/caldeira/CamaraTV'> <img src={AmareloD} className='icameraTV'/>  </a> 
       <p className='tcameraTV'>    <b>Câmera de TV</b> (IV / MEUS) </p>  
       
       <a href='http://localhost:3000/caldeira/BocaDeVisitaFornalhaBaixa'> <img src={AmareloD} className='ibocas' />  </a> 
       <p className='tbocas'>    <b>Bocas de visita</b> (IV / MEUS) </p>  
       
       <a href='http://localhost:3000/caldeira/EntradaAr'> <img src={AmareloD} className='iarprimario' /> </a>   
       <p className='tarprimario'>    <b>Entrada de ar Primário</b> (IV / MEUS / LP) </p>  
       
       <a href='http://localhost:3000/caldeira/BicasDeSmelt'> <img src={AmareloD} className='ibicas'/> </a>  
       <p className='tbicas'>    <b>Bicas de Smelt</b>  (IV / MEUS / LP) </p>

       <a href='http://localhost:3000/caldeira/porao'> <img src={AmareloD} className='iporao'/>  </a>
       <p className='tporao'>    <b>Porão</b> (IV) </p>
      </td> 

       
    </tr> 
 

</table>





</div>


  );
};

export default CaldeiraIndex;