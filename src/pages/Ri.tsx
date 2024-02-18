import React from 'react';
import RelatorioInspecao from './outros/RelatorioInspecao';
import Bank from './caldeira/Bank';

type Props = {};

const Ri = (props: Props) => {
  return (
    <div> 
    <span>Nome: </span>
   <RelatorioInspecao/>

    </div>
  );
};

export default Ri;