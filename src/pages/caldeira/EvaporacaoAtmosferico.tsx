import React from 'react';
import Caldeira from '../../images/Caldeira.png';
import AmareloD from '../../images/AMARELOD.png';
import TanqueColetaCondensado from '../../images/Evaporacao/TQColetaCondensadoLimpo.fw.png'
import TanqueSelagemScrubber from '../../images/Evaporacao/TQSelagemScrubber.fw.png'
import DNCGSCRUBBER from '../../images/TQLICORFORTE.fw.png'
import TanqueCondensado from '../../images/TQFLASH.fw.png'
import TanqueSpill from '../../images/CondSuperficiePrimario2.fw.png' 





type Props = {};

const Evaporacao = (props: Props) => {
  return (
    <div>

<table>
<tr>

<td>
 
<a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
      <p className='tqagua'><b>3402-21-001  <br/>  TQ de Água de Alimentação</b>   </p> <p>Visual Interno <br/> M. Espessura</p>    <img src={TanqueColetaCondensado} className='ipenthouse'/>
</td>
 
<td>


<a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
<p className='tqcondensador'><b>3402-21-017  <br/>  TQ de Condensado Principal</b>   </p> <p>Visual Interno <br/> M. Espessura</p>   <img src={TanqueSelagemScrubber} className='ipenthouse'/>


</td>


 
<td>


<a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
<p className='tqcondensador'><b>3402-21-017  <br/>  TQ de Condensado Principal</b>   </p> <p>Visual Interno <br/> M. Espessura</p>   <img src={DNCGSCRUBBER} className='ipenthouse'/>


</td>

 
<td>


<a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
<p className='tqcondensador'><b>3402-21-017  <br/>  TQ de Condensado Principal</b>   </p> <p>Visual Interno <br/> M. Espessura</p>   <img src={TanqueCondensado} className='ipenthouse'/>


</td>

 
<td>


<a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
<p className='tqcondensador'><b>3402-21-017  <br/>  TQ de Condensado Principal</b>   </p> <p>Visual Interno <br/> M. Espessura</p>   <img src={TanqueCondensado} className='ipenthouse'/>


</td>

 
<td>


<a href='http://localhost:3000/caldeira/penthouse'> <img src={AmareloD} className='ipenthouse'/>  </a>
<p className='tqcondensador'><b>3402-21-017  <br/>  TQ de Condensado Principal</b>   </p> <p>Visual Interno <br/> M. Espessura</p>   <img src={TanqueSpill} className='ipenthouse'/>


</td>


 

</tr>



 <tr>
  


</tr>


  
  </table>



<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

 



</div>


  );
};

export default Evaporacao;