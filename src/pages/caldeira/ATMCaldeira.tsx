import React from 'react';
import Caldeira from '../../images/Caldeira.png';
import AmareloD from '../../images/AMARELOD.png';
import LavadorGas from '../../images/LavadorGas.fw.png';
import '../../css/LayoutSemaforos.css'; 
import TanqueDescarga from '../../images/TQDESCARGA.fw.png';
import TanqueDissolvedor from  '../../images/TQDISSOLVEDOR.fw.png';

import TanqueRejeito from  '../../images/TQREJEITO.fw.png';
import TanqueAcidoFormico from '../../images/TQACIDOFORMICO.fw.png';
import TanqueDescarte from '../../images/TQDESCARTE.fw.png';
import TanqueMistura from '../../images/TQMISTURA.fw.png';
import Precipitadores from '../../images/PRECIPITADORES.fw.png';     





type Props = {};

const ATMCaldeira = (props: Props) => {
  return (
      <div>






      <div className="parent-container">
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo"   />
                          </a>
                          <p className='font'>
                              <b> 3402-20-301 <br/>
                              Lavador de Gás</b> <br/>
                              Visual Interno 
                              
                          </p>
                      </div>
                     <br/><br/> <img src={LavadorGas} alt="Machine" className="machine-image1" />
                  </div>
                  
      
      
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-006 <br/>
                              Tanque descarga de Fundo</b> <br/>
                              Visual Interno <br/>
                              M. Espessura 
                              </p>
                      </div>
                 <br/> <br/>    <img src={TanqueDescarga} alt="Machine" className="machine-image1" />
                  </div>
      
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-013 <br/>
                              Tanque Dissolvedor</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={TanqueDissolvedor} alt="Machine" className="machine-image1" />
                  </div>
      
       
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-015 <br/>
                              Tanque de Água de Emergência</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={TanqueDissolvedor} alt="Machine" className="machine-image1" />
                  </div>
      
      

                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-016 <br/>
                              Tanque de Água de Selagem</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={TanqueDissolvedor} alt="Machine" className="machine-image1" />
                  </div>
      
      

                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                              <b> 3402-21-012 <br/>
                              Tanque de Rejeito</b> <br/>
                              Visual Interno <br/>
                              M. Espessura 
                              
                          </p>
                      </div>
                      <img src={TanqueRejeito} alt="Machine" className="machine-image1" />
                  </div>



                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                        
                          <p className='font'>
                          <b> 3402-21-032 <br/>
                              Tanque de Ácido Fórmico</b> <br/>
                              Visual Interno  
                              </p>
                              
                           
                      </div>
                      <img src={TanqueAcidoFormico} alt="Machine" className="machine-image1" />
                  </div>



                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-014 <br/>
                              Tanque de Água de Refrigeração </b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={TanqueDescarga} alt="Machine" className="machine-image1" />
                  </div>





                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-038 <br/>
                              Equipamento Tanque Descarte </b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={TanqueDescarte} alt="Machine" className="machine-image1" />
                  </div>



                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-038 <br/>
                              Tanque de Mistura da Centrífuga</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                        <img src={TanqueMistura} alt="Machine" className="machine-image1" />
                  </div>


                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-131/2/3/4 <br/>
                          Precipitadores Eletrostáticos</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                     <br/>   <img src={Precipitadores} alt="Machine" className="machine-image1" />
                  </div>

 
      
      
      
      
      
      
      
                  </div>
      
                  </div>
      
    
      
      


  );
};

export default ATMCaldeira;