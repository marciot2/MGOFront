import React from 'react';
import RelatorioInspecao from './outros/RelatorioInspecao';
import Bank from './caldeira/Bank';
import RelatorioNaoConformidade from './outros/RelatorioNaoConformidade';

type Props = {};

const Rnc = (props: Props) => {
  return (
    <div> 
    <span>Nome: </span>
   <RelatorioNaoConformidade/>

    </div>
  );
};

export default Rnc;