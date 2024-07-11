import React from 'react';
 
import AmareloD from '../../images/AMARELOD.png';
import FiltroLicorVerde from '../../images/Caustificacao/FiltroLicorVerde.fw.png';
import ResfriadorLicorVerde from '../../images/Caustificacao/ResfriadorLicorVerde.fw.png';
import ResfriadorLicorBranco from '../../images/Caustificacao/ResfriadorLicorBranco.fw.png';
import FiltroLicorBranco from '../../images/Caustificacao/FiltroLicorBranco.fw.png';
import Separador from '../../images/Caustificacao/TQSeparador.fw.png';
  
import '../../css/LayoutSemaforos.css'; 


 





type Props = {};

const VasosCaustificacao = (props: Props) => {
  return (
    <div>




<div className="parent-container">
            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3502-20-001 <br/>
                        Filtro de Licor Verde 1</b> <br/>
                        Visual Interno 
                        
                    </p>
                </div>
                <img src={FiltroLicorVerde} alt="Machine" className="machine-image1" />
            </div>

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3502-20-003 <br/>
                        Filtro de Licor Verde 2</b> <br/>
                        Visual Interno 
                        
                    </p>
                </div>
                <img src={FiltroLicorVerde} alt="Machine" className="machine-image1" />
            </div>


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3502-20-019 <br/>
                        Filtro de Licor Branco</b> <br/>
                        Visual Interno 
                        
                    </p>
                </div>
                <img src={FiltroLicorBranco} alt="Machine" className="machine-image1" />
            </div>


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3502-20-005 <br/>
                        Resfriador de Licor Verde 1</b> <br/>
                        Visual Interno 
                        
                    </p>
                </div>
                <img src={ResfriadorLicorVerde} alt="Machine" className="machine-image1" />
            </div>

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3502-20-018 <br/>
                        Tanque do Filtro de Licor Branco</b> <br/>
                        Visual Interno 
                        
                    </p>
                </div>
                <img src={ResfriadorLicorBranco} alt="Machine" className="machine-image1" />
            </div>


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3502-21-019 <br/>
                        Tanque Separador Principal</b> <br/>
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
                        <b> 3502-21-020 <br/>
                        Tanque Separador de Sopragem</b> <br/>
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
                        <b> 3502-21-033 <br/>
                        Tanque Separador Principal</b> <br/>
                        Visual Interno 
                        
                    </p>
                </div>
                <img src={Separador} alt="Machine" className="machine-image1" />
            </div>


</div>
 


</div>


  );
};

export default VasosCaustificacao;