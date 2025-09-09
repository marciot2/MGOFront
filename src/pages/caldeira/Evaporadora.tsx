import React, { useEffect, useState } from 'react';
import EvaporadoraImg from '../../images/Evaporadora.png';

import legenda from "../../images/Legenda.png";
import "../../css/semaforo.css";

 import VERDE from "../../images/VERDE.png";
import VERMELHO from "../../images/VERMELHO.png";
import { Button } from '@mui/material';
import axios from 'axios';

type Props = {};

const Evaporadora = (props: Props) => {

  const [statusRR, setStatusRR] = useState<number | null>(null);
  const [statusRNC, setStatusRNC] = useState<number | null>(null);
  const [statusRI, setStatusRI] = useState<number | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/RR/status');
        setStatusRR(response.data);
      } catch (error) {
        setErro(error);
      }
    };
    fetchData();
  }, []);
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/RI/status');
        setStatusRI(response.data);
      } catch (error) {
        setErro(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/RNC/status');
        setStatusRNC(response.data);
      } catch (error) {
        setErro(error);
      }
    };
    fetchData();
  }, []);

  
  const RI = () => {

    const imagemElemento: HTMLImageElement = document.getElementById("imagem") as HTMLImageElement;

    
         
 
        
      };
 


  return (
    <div>

 <br/><br/>
 
 <div style={{ textAlign: 'right' }}>
       
    </div>

   

 
 <Button id="btnStatus" variant="contained" color="success"   onClick={RI}>
 Atualizar
</Button>

 

 
 
 
      
 

 
       <div className='produto' >
    <span className="prod">
    <br/><br/><br/><br/>

      
         
        </span>
        <span className="prod">
        <br/><br/><br/><br/>

         <h6>Status:</h6>
       
         {statusRNC === 1 && <img src={VERMELHO} alt="Semáforo Vermelho" width="50" height="150" />}
         {statusRNC === 0 && <img src={VERDE} alt="Semáforo Verde" width="50" height="150"/>}  <br/>
         <img src={legenda} alt="Legenda"    />
          </span>
        <span className="prod">

        <br/><br/><br/><br/>
       
        
       
        </span>

      

     
</div>




    </div>
  );
};

export default Evaporadora;

function setErro(error: unknown) {
  throw new Error('Function not implemented.');
}
