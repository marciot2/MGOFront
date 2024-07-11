import React from 'react';
import Caldeira from '../../images/Caldeira.png';
import AmareloD from '../../images/AMARELOD.png';
import TrocadorSecadores from '../../images/TurboGerador/TrocadorSecador.png'


import Separador from '../../images/TurboGerador/Separador.png'
 
import FiltroDDP from '../../images/TurboGerador/FiltroDDP.png'
import Filtro from '../../images/TurboGerador/Filtro.png' 
import ColetorAlta from '../../images/TurboGerador/ColetarAlta.png' 
import ColetorMedia from '../../images/TurboGerador/ColetarMedia.png' 

 





type Props = {};

const TurboGerador = (props: Props) => {
  return (
    <div>
 
 <div className="parent-container">
 <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3408-20-007C <br/>
                        Trocador dos Secadores</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TrocadorSecadores} alt="Machine" className="machine-image1" />
            </div>

 

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3408-20-007D <br/>
                        Separador</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={Separador} alt="Machine" className="machine-image1" />
            </div>

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3408-20-008C <br/>
                        Trocador dos Secadores</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TrocadorSecadores} alt="Machine" className="machine-image1" />
            </div>





            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3408-20-008D <br/>
                        Separador</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={Separador} alt="Machine" className="machine-image1" />
            </div>




            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3408-20-005E <br/>
                        Filtro DDP</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={FiltroDDP} alt="Machine" className="machine-image1" />
            </div>



            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3411-20-007/008 <br/>
                        Filtro DDP</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={Filtro} alt="Machine" className="machine-image1" />
            </div>



            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> SEM TAGA NO POWERPOINT <br/>
                        Coletor de Alta</b> <br/>
                        Partículas Magnéticas <br/>
                        Ultrassom 

                        
                    </p>
                </div>
                <img src={ColetorAlta} alt="Machine" className="machine-image1" />
            </div>


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> SEM TAGA NO POWERPOINT <br/>
                        Coletor de Média</b> <br/>
                        Partículas Magnéticas <br/>
                        Ultrassom 

                        
                    </p>
                </div>
                <img src={ColetorMedia} alt="Machine" className="machine-image1" />
            </div>





</div>

</div>


  );
};

export default TurboGerador;