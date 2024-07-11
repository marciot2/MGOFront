 
import '../../css/LayoutSemaforos.css' 
import AmareloD from '../../images/AMARELOD.png';
import FlashCondensado from '../../images/Branqueamento/TQFlashCondensado.fw.png';
import AquecedorEP from '../../images/Branqueamento/AquecedorLavagem.fw.png';
import EconomizadorAguaBranca from '../../images/Branqueamento/EconomizadorAguaBranca.fw.png';
 
  
 

type Props = {};

const VasosBranqueamento = (props: Props) => {
  return (
    <div>






<div className="parent-container">
            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo"   />
                    </a>
                    <p className='font'>
                        <b> 3202-21-026 <br/>
                        TQ Flash de Condensado</b> <br/>
                        Visual Interno 
                        
                    </p>
                </div>
                <img src={FlashCondensado} alt="Machine" className="machine-image" />
            </div>
            


            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                    </a>
                    <p className='font'>
                        <b> 3203-25-005 <br/>
                        Aquecedor de Lavagem do Estágio EP</b> <br/>
                        Visual Interno
                        
                    </p>
                </div>
                <img src={AquecedorEP} alt="Machine" className="machine-image1" />
            </div>

            <div className="container">
                <div className="header">
                    <a href="http://localhost:3000/caldeira/penthouse">
                        <img src={AmareloD} className="imgsemaforo" alt="Semaforo" />
                    </a>
                    <p className='font'>
                        <b> 3203-25-007 <br/>
                        Economizador de Água Branca</b> <br/>
                        Visual Interno  
                    </p>
                </div>
                <img src={EconomizadorAguaBranca} alt="Machine" className="machine-image1" />
            </div>

 

 


        </div>










  



</div>


  );
};

export default VasosBranqueamento;