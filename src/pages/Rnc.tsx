import React from 'react';
import RelatorioInspecao from './outros/RelatorioInspecao';
import Bank from './caldeira/Bank';
import RelatorioNaoConformidade from './outros/RelatorioNaoConformidade';
import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
 

 

 

type Props = {};

const Rnc = (props: Props) => {
  return (
    <div> 
     
   <RelatorioNaoConformidade/>

    </div>
  );
};

export default Rnc;