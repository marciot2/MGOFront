import React from 'react';
import Digestor from '../../images/Digestor/Digestor.png';
import AmareloD from '../../images/AMARELOD.png';
 
type Props = {};

const CaldeiraIndex = (props: Props) => {
  return (
    <div>
 

<table>
 
    <tr>
      
     
      <td> 
 
      <br/><br/>
      <br/>  <br/> <br/> <br/><br/><br/><br/>
       
      <br/> 
    
   
       
      

     <a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tpenthouse'><b>Rosca do Separador de Topo</b> <br/>Inspeção Visual <br/> Líquido Penetrante <br/> M. Espessura </p>  
       
      <br/><br/>
     
      <br/>   
      <br/>
      <br/>
      <br/> 
      <br/> 
      <a href='http://localhost:3000/caldeira/balao'>  <img src={AmareloD} className='ibalao'/>  </a>  
      <p className='tbalao'><b>Tubo Central</b> <br/> Inspeção Visual <br/> Líquido Penetrante <br/> Rapel  </p>  
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
       
      
      

      <a href='http://localhost:3000/caldeira/superaquecedorsecundario'> <img src={AmareloD} className='ishsecundario'/> </a>
      <p className='tshsecundario'><b>Costado do Digestor</b> <br/> Inspeção Visual </p>  
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/>   <br/><br/>  
      
       
      <a href='http://localhost:3000/caldeira/superaquecedorterciario'>     <img src={AmareloD} className='ishterciario'/> </a> 
      <p className='tshterciario'><b>Fundo Digestor </b> <br/> Inspeção Visual <br/> Líquido Penetrante <br/> M. Espessura </p> 
       

       

      <br/><br/> 
      <br/><br/>
      <br/><br/>
      <br/><br/><br/>
   
      </td>
 
      <td><img src={Digestor}/></td>
      
       
       <td>

       <br/><br/><br/> 

      

      <a href='http://localhost:3000/caldeira/valvuladeseguranca'> <img src={AmareloD} className='ivalseg'/> </a>    
       <p className='tvalseg'><b>Separador de Topo</b> <br/> Inspeção Visual <br/> Líquido Penetrante <br/> M. Espessura </p>  

       <br/><br/><br/><br/><br/><br/><br/><br/><br/>



       <a href='http://localhost:3000/caldeira/teto'><img src={AmareloD} className='iteto'/>  </a>
       <p className='tteto'>    <b> Peneiras CD1 </b> <br/> Inspeção Visual <br/> Líquido Penetrante </p>  
      
       <br/><br/>  


       <a href='http://localhost:3000/caldeira/economizadorI'> <img src={AmareloD} className='ieconomizadorI'/> </a>  
       <p className='teconomizadorI'>    <b> Peneiras CD2 </b> <br/> Inspeção Visual <br/> Líquido Penetrante </p>  

       <br/><br/><br/><br/><br/> <br/><br/> <br/><br/>

       <a href='http://localhost:3000/caldeira/economizadorII'> <img src={AmareloD} className='ieconomizadorII'/> </a>
       <p className='teconomizadorII'>     <b> Peneiras CD2 </b> <br/> Inspeção Visual <br/> Líquido Penetrante </p>    

       <br/><br/><br/> <br/><br/> <br/> 
      </td> 

       
    </tr> 
 

</table>





</div>


  );
};

export default CaldeiraIndex;