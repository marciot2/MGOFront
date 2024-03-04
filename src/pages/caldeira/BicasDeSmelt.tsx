import React from 'react';
import { useLocation } from "react-router-dom"

import Documentos from '../outros/documentos';

 

const redirectToGoogle = () => {
  
  console.log("end"+window.location.pathname);
  
};
type Props = {};

const BicasDeSmelt = (props: Props) => {
  return (

     
    <div>Bicas de Smelt
  
<br/>
<div>
 
  </div>



 <br/><br/><br/><br/>
<Documentos/> 
    </div>
  );
};

export default BicasDeSmelt;