import React from 'react';
import Caldeira from '../../images/Caldeira.png';
import AmareloD from '../../images/AMARELOD.png';
import TanquePermeado from '../../images/EtacEta/TQPermeado.fw.png'


import TanqueAguaDesmineralizada from '../../images/EtacEta/TQAguaDesmineralizada.fw.png'
 
import TanqueSoldaCaustica from '../../images/EtacEta/TQSodaCausstica20.fw.png'
import TanqueSelagem from '../../images/EtacEta/TQAguaDesmineralizada.fw.png' 
import BalaoPressurização from '../../images/EtacEta/BalaoPressurizacao.fw.png' 
import TanqueHiploclorito from '../../images/EtacEta/TQSodaCausstica20.fw.png' 

 





type Props = {};

const Evaporacao = (props: Props) => {
  return (
    <div>
 

 <div className="parent-container">
 <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3404-21-002 <br/>
                        Tanque de Permeado</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TanquePermeado} alt="Machine" className="machine-image1" />
            </div>

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3404-21-003 <br/>
                        Tanque de Água Desmineralizada</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TanqueAguaDesmineralizada} alt="Machine" className="machine-image1" />
            </div>

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3404-21-005 <br/>
                        Tanque de Soda Cáustica 20%</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TanqueHiploclorito} alt="Machine" className="machine-image1" />
            </div>


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3404-21-011 <br/>
                        Tanque de Permeado</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TanquePermeado} alt="Machine" className="machine-image1" />
            </div>


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3404-21-001 <br/>
                        Tanque de Selagem</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TanqueAguaDesmineralizada} alt="Machine" className="machine-image1" />
            </div>



            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3602-20-005 <br/>
                        Balão de Pressurização</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={BalaoPressurização} alt="Machine" className="machine-image1" />
            </div>

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3602-20-006 <br/>
                        Balão de Pressurização</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={BalaoPressurização} alt="Machine" className="machine-image1" />
            </div>


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3404-21-001 <br/>
                        Tanque de Hipoclorito de Sódio</b> <br/>
                        Visual Interno 

                        
                    </p>
                </div>
                <img src={TanqueHiploclorito} alt="Machine" className="machine-image1" />
            </div>











 </div>







</div>


  );
};

export default Evaporacao;