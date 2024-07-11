
import AmareloD from '../../images/AMARELOD.png';
 import '../../css/LayoutSemaforos.css'; 
import TanqueColeta from '../../images/Evaporacao/ColetaCondensadoLimpo.fw.png';
import TanqueScrubber from  '../../images/Evaporacao/TQSelagemScrubber.fw.png';

import DNCG from  '../../images/Evaporacao/DNCGScrubber.fw.png';
import TanqueCondensado from '../../images/Evaporacao/TQCondensadoIntermediario.fw.png';
import TanqueSpill from '../../images/Evaporacao/TQSpill.fw.png';
 





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
                              <b> 3401-21-016 <br/>
                              Tanque Coleta de Condensado Limpo</b> <br/>
                              Visual Interno 
                              
                          </p>
                      </div>
                     <br/><br/> <img src={TanqueColeta} alt="Machine" className="machine-image1" />
                  </div>
                  
      
      
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3401-21-023 <br/>
                              DNCG SCRUBBER</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                 <br/> <br/>    <img src={TanqueScrubber} alt="Machine" className="machine-image1" />
                  </div>
      
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3401-21-012 <br/>
                              Tanque de Condensado Intermediário</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={DNCG} alt="Machine" className="machine-image1" />
                  </div>
      
       
                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3402-21-013 <br/>
                              Tanque de Condensado Intermediário</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={TanqueCondensado} alt="Machine" className="machine-image1" />
                  </div>
      
      

                  <div className="container">
                      <div className="header">
                          <a href="http://localhost:3000/caldeira/penthouse">
                              <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                          </a>
                          <p className='font'>
                          <b> 3401-21-018 <br/>
                              Tanque de Spill</b> <br/>
                              Visual Interno  
                              </p>
                      </div>
                      <img src={TanqueCondensado} alt="Machine" className="machine-image1" />
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
                      <img src={TanqueSpill} alt="Machine" className="machine-image1" />
                  </div>

 
      
      
      
      
      
                  </div>
      
                  </div>
      
    
      
      


  );
};

export default ATMCaldeira;