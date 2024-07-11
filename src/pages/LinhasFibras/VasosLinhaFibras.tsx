import React from 'react';
import Caldeira from '../../images/Caldeira.png';
import AmareloD from '../../images/AMARELOD.png';
import Resfriador from '../../images/LinhaFibras/ResfriadorCirculacao.fw.png'
import EconomizadorCondensado from '../../images/LinhaFibras/EconomizadorCondensado.fw.png'
import ReatorDeslignificacao from '../../images/LinhaFibras/ReatorI.fw.png'
import ReatorLBO from '../../images/LinhaFibras/ReatorLBO.fw.png'
import ReatorII from '../../images/LinhaFibras/ReatorII.fw.png'





 




type Props = {};

const VasosLinhaFibras = (props: Props) => {
  return (
    <div>
 
 

<div className="parent-container">
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo"   />
                          </a>
                          <p className='font'>
                              <b> 3201-25-001 <br/>
                              Resfriador de Circulação Topo</b> <br/>
                              Visual Interno 
                              
                          </p>
                      </div>
                     <br/><br/> <img src={Resfriador} alt="Machine" className="machine-image1" />
                  </div>


                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo"   />
                          </a>
                          <p className='font'>
                              <b> 3201-25-002 <br/>
                              Resfriador do fundo Digestor</b> <br/>
                              Visual Interno 
                              
                          </p>
                      </div>
                     <br/><br/> <img src={Resfriador} alt="Machine" className="machine-image1" />
                  </div>



                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo"   />
                          </a>
                          <p className='font'>
                              <b> 3201-25-005 <br/>
                              Economizador de Condensado</b> <br/>
                              Visual Interno 
                              
                          </p>
                      </div>
                     <br/><br/> <img src={EconomizadorCondensado} alt="Machine" className="machine-image1" />
                  </div>


                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo"   />
                          </a>
                          <p className='font'>
                              <b> 3201-21-008 <br/>
                              1º Reator da Deslignificação</b> <br/>
                              Rapel
                              
                          </p>
                      </div>
                     <br/><br/> <img src={ReatorDeslignificacao} alt="Machine" className="machine-image1" />
                  </div>



                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo"   />
                          </a>
                          <p className='font'>
                              <b> 3201-21-009 <br/>
                              2º Reator da Deslignificação</b> <br/>
                              Rapel
                              
                          </p>
                      </div>
                     <br/><br/> <img src={ReatorII} alt="Machine" className="machine-image1" />
                  </div>


                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo"   />
                          </a>
                          <p className='font'>
                              <b> 3201-21-010 <br/>
                              Reator LBO e Resfriadores</b> <br/>
                              Visual Interno
                              
                          </p>
                      </div>
                     <br/><br/> <img src={ReatorLBO} alt="Machine" className="machine-image1" />
                  </div>










                  </div>

</div>


  );
};

export default VasosLinhaFibras;