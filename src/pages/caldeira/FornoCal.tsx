import React from 'react';
import FornoCal from '../../images/FornoCal/FornoCal.png';
import AmareloD from '../../images/AMARELOD.png';
import '../../css/fornocal.css';


 
type Props = {};

const CaldeiraIndex = (props: Props) => {
  return (
    <div>


<table> 
  <tr>
  <td colSpan={5}> <img src={FornoCal} className='forno'/></td>
  </tr>
  <tr>
    <td>
    <a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tpenthouse'><b>Base 5</b> <br/>Partículas Magnéticas
      <br/> Ultrassom </p>  
       
      
      </td>
    <td> 

    <a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tpenthouse'><b>Base 5</b> <br/>Partículas Magnéticas
      <br/> Ultrassom </p>  
       


    </td>
    <td> 

    <a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tpenthouse'><b>Base 5</b> <br/>Partículas Magnéticas
      <br/> Ultrassom </p>  
       


    </td>
    <td> 

    <a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tpenthouse'><b>Base 5</b> <br/>Partículas Magnéticas
      <br/> Ultrassom </p>  
       


    </td>
    <td>
      
    <a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tpenthouse'><b>Base 5</b> <br/>Partículas Magnéticas
      <br/> Ultrassom </p>  
       
       </td>
  </tr>
 
</table>

 




</div>


  );
};

export default CaldeiraIndex;