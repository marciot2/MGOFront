import React, { useEffect, useState } from 'react';

 import { BACKEND } from '../../config';
 

import Caldeira from '../../images/CaldeiraRecuperacao/Caldeira.png'
import AmareloD from '../../images/AMARELOD.png';
import VerdeD from '../../images/VERDED.png';
import VermelhoD from '../../images/VERMELHOD.png';
import CinzaD from '../../images/CINZAD.png';
import '../../css/teste.css';
import EconomizadorII from './EconomizadorII';
import Estatistica from '../Estatistica';
 

type Props = {};

const CaldeiraIndex = (props: Props) => {
/*Esquerda Caldeira */
const [naoIniciadoScreen, setNaoIniciadoScreeenAll] = useState<string | null>(null);
const [naoIniciadoPenthouse, setNaoIniciadoPenthouseAll] = useState<string | null>(null);
const [naoIniciadoShsecundario, setNaoIniciadoShsecundarioAll] = useState<string | null>(null);
const [naoIniciadoShterciario, setNaoIniciadoShterciarioAll] = useState<string | null>(null);
const [naoIniciadoBalao, setNaoIniciadoBalaoAll] = useState<string | null>(null);
const [naoIniciadoShquartenario, setNaoIniciadoShquartenarioAll] = useState<string | null>(null);
const [naoIniciadoShprimarioI, setNaoIniciadoShprimarioIAll] = useState<string | null>(null);
const [naoIniciadoShprimarioII, setNaoIniciadoShprimarioIIAll] = useState<string | null>(null);
const [naoIniciadoParedeDagua, setNaoIniciadoParedeDaguaAll] = useState<string | null>(null);
const [naoIniciadoPiso, setNaoIniciadoPisoAll] = useState<string | null>(null);

   
/*Direita Calderia */
const [naoIniciadoBicasSmelt, setNaoIniciadoBicasSmeltAll] = useState<string | null>(null);

const [naoIniciadoTeto, setNaoIniciadoTetoAll] = useState<string | null>(null);
const [naoIniciadoEconomizadorI, setNaoIniciadoEconomizadorIAll] = useState<string | null>(null);
const [naoIniciadoEconomizadorII, setNaoIniciadoEconomizadorIIAll] = useState<string | null>(null);
const [naoIniciadoBank, setNaoIniciadoBankAll] = useState<string | null>(null);
const [naoIniciadoGrid, setNaoIniciadoGridAll] = useState<string | null>(null);
const [naoIniciadoSopradorFuligem, setNaoIniciadoSopradorFuligemAll] = useState<string | null>(null);
const [naoIniciadoNariz, setNaoIniciadoNarizAll] = useState<string | null>(null);
const [naoIniciadoCamarafria, setNaoIniciadoCamarafriaAll] = useState<string | null>(null);
const [naoIniciadoQueimadores, setNaoIniciadoQueimadoresAll] = useState<string | null>(null);
const [naoIniciadoEntradaArSecundario, setNaoIniciadoEntradaArSecundarioAll] = useState<string | null>(null);
const [naoIniciadoEntradaArTerciario, setNaoIniciadoEntradaArTerciarioAll] = useState<string | null>(null);
const [naoIniciadoDutoseVentiladores, setNaoIniciadoDutoseVentiladoresAll] = useState<string | null>(null);
const [naoIniciadoCameraTV, setNaoIniciadoCameraTVAll] = useState<string | null>(null);
const [naoIniciadoBocasVisita, setNaoIniciadoBocasVisitaAll] = useState<string | null>(null);
const [naoIniciadoEntradaArPrimario, setNaoIniciadoEntradaArPrimarioAll] = useState<string | null>(null);
const [naoIniciadoPorao, setNaoIniciadoPoraoAll] = useState<string | null>(null);
const [naoIniciadoValvulaSeguranca, setNaoIniciadoValvulaSegurancaAll] = useState<string | null>(null);
 


   



  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response1 = await fetch(`${BACKEND}/RI/semaforoTodos/Screen`);
        const data1 = await response1.text(); 
        setNaoIniciadoScreeenAll(data1);

 

        
        const response2 = await fetch(`${BACKEND}/RI/semaforoTodos/Penthouse`);
        const data2 = await response2.text(); 
        setNaoIniciadoPenthouseAll(data2);
         
        

        const response3 = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Secundario`);
        const data3 = await response3.text(); 
        setNaoIniciadoShsecundarioAll(data3);
        
        const response4 = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Terciario`);
        const data4 = await response4.text(); 
        setNaoIniciadoShterciarioAll(data4);

      

const response5 = await fetch(`${BACKEND}/RI/semaforoTodos/Balao`);
const data5 = await response5.text(); 
setNaoIniciadoBalaoAll(data5);

 

const response6a = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Quartenario`);
const data6a = await response6a.text(); 
setNaoIniciadoShquartenarioAll(data6a);

  

const response7a = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Primario_I`);
const data7a = await response7a.text(); 
setNaoIniciadoShprimarioIAll(data7a);
 

const response8a = await fetch(`${BACKEND}/RI/semaforoTodos/SH_Primario_II`);
const data8a = await response8a.text(); 
setNaoIniciadoShprimarioIIAll(data8a);

const response9a = await fetch(`${BACKEND}/RI/semaforoTodos/Parede_Dagua`);
const data9a = await response9a.text(); 
setNaoIniciadoParedeDaguaAll(data9a);
 


const response10a = await fetch(`${BACKEND}/RI/semaforoTodos/Piso`);
const data10a = await response10a.text(); 
setNaoIniciadoPisoAll(data10a);

 


const response11a = await fetch(`${BACKEND}/RI/semaforoTodos/Bicas_de_Smeltt`);
const data11a = await response11a.text(); 
setNaoIniciadoBicasSmeltAll(data11a);

 

const response12a = await fetch(`${BACKEND}/RI/semaforoTodos/Teto`);
const data12a = await response12a.text(); 
setNaoIniciadoTetoAll(data12a);

 

const response13a = await fetch(`${BACKEND}/RI/semaforoTodos/Economizador_I`);
const data13a = await response13a.text(); 
setNaoIniciadoEconomizadorIAll(data13a);

 

const response14a = await fetch(`${BACKEND}/RI/semaforoTodos/Economizador_II`);
const data14a = await response14a.text(); 
setNaoIniciadoEconomizadorIIAll(data14a);

 


const response15a = await fetch(`${BACKEND}/RI/semaforoTodos/Bank`);
const data15a = await response15a.text(); 
setNaoIniciadoBankAll(data15a);

 

const response16a = await fetch(`${BACKEND}/RI/semaforoTodos/Grid`);
const data16a = await response16a.text(); 
setNaoIniciadoGridAll(data16a);

 


const response17a = await fetch(`${BACKEND}/RI/semaforoTodos/Sopradores_de_Fuligem`);
const data17a = await response17a.text(); 
setNaoIniciadoSopradorFuligemAll(data17a);

 


const response18a = await fetch(`${BACKEND}/RI/semaforoTodos/Nariz`);
const data18a = await response18a.text(); 
setNaoIniciadoNarizAll(data18a);

 


const response19a = await fetch(`${BACKEND}/RI/semaforoTodos/Camara_Fria`);
const data19a = await response19a.text(); 
setNaoIniciadoCamarafriaAll(data19a);

 


const response20a = await fetch(`${BACKEND}/RI/semaforoTodos/Queimadores`);
const data20a = await response20a.text(); 
setNaoIniciadoQueimadoresAll(data20a);

 


const response21a = await fetch(`${BACKEND}/RI/semaforoTodos/Entradas_de_Ar_Secundario`);
const data21a = await response21a.text(); 
setNaoIniciadoEntradaArSecundarioAll(data21a);

 

const response22a = await fetch(`${BACKEND}/RI/semaforoTodos/Entradas_de_Ar_Terciario`);
const data22a = await response22a.text(); 
setNaoIniciadoEntradaArTerciarioAll(data22a);

  


const response24a = await fetch(`${BACKEND}/RI/semaforoTodos/Camera_de_TV`);
const data24a = await response24a.text(); 
setNaoIniciadoCameraTVAll(data24a);

 


const response25a = await fetch(`${BACKEND}/RI/semaforoTodos/Bocas_de_visita`);
const data25a = await response25a.text(); 
setNaoIniciadoBocasVisitaAll(data25a);

 


const response26a = await fetch(`${BACKEND}/RI/semaforoTodos/Entradas_de_Ar_Primario`);
const data26a = await response26a.text(); 
setNaoIniciadoEntradaArPrimarioAll(data26a);

 


const response27a = await fetch(`${BACKEND}/RI/semaforoTodos/Porao`);
const data27a = await response27a.text(); 
setNaoIniciadoPoraoAll(data27a);

 


const response28a = await fetch(`${BACKEND}/RI/semaforoTodos/Valvula_de_Seguranca`);
const data28a = await response28a.text(); 
setNaoIniciadoValvulaSegurancaAll(data28a);

 










 


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();  

    const interval = setInterval(() => {
      fetchData();  
    }, 5000);  

    return () => clearInterval(interval); 
  }, []); 

 
 let imageScreen;  
if (naoIniciadoScreen === "NAO_INICIADO") {
  imageScreen = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 


if (naoIniciadoScreen  === "EM_ANDAMENTO") {  
  imageScreen = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (naoIniciadoScreen === "NÃO_CONFORMIDADE") {
  imageScreen = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (naoIniciadoScreen=== "LIBERADO") {  
  imageScreen = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
} 

 let imagePenthouse;
if (naoIniciadoPenthouse === "NAO_INICIADO") {
  imagePenthouse = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (naoIniciadoPenthouse === "EM_ANDAMENTO") {  
  imagePenthouse = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (naoIniciadoPenthouse === "NÃO_CONFORMIDADE") {
  imagePenthouse = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (naoIniciadoPenthouse === "LIBERADO") {  
  imagePenthouse = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 


let imageShsecundario;
if (naoIniciadoShsecundario === "NAO_INICIADO") {
  imageShsecundario = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (naoIniciadoShsecundario === "EM_ANDAMENTO") {  
  imageShsecundario = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (naoIniciadoShsecundario === "NÃO_CONFORMIDADE" ) {
  imageShsecundario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (naoIniciadoShsecundario === "LIBERADO") {  
  imageShsecundario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}



let imageShterciario;
if (naoIniciadoShterciario === "NAO_INICIADO") {
  imageShterciario = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (naoIniciadoShterciario === "EM_ANDAMENTO") {  
  imageShterciario = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (naoIniciadoShterciario === "NÃO_CONFORMIDADE" ) {
  imageShterciario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (naoIniciadoShterciario === "LIBERADO" ) {  
  imageShterciario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageBalao;
if (naoIniciadoBalao === "NAO_INICIADO") {
  imageBalao = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (naoIniciadoBalao === "EM_ANDAMENTO") {  
  imageBalao = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (naoIniciadoBalao === "NÃO_CONFORMIDADE" ) {
  imageBalao = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (naoIniciadoBalao === "LIBERADO" ) {  
  imageBalao = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}

let imageShquartenario;
if (naoIniciadoShquartenario === "NAO_INICIADO") {
  imageShquartenario = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (naoIniciadoShquartenario === "EM_ANDAMENTO") {  
  imageShquartenario = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (naoIniciadoShquartenario === "NÃO_CONFORMIDADE" ) {
  imageShquartenario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (naoIniciadoShquartenario === "LIBERADO" ) {  
  imageShquartenario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}

let imageShprimarioI;

if (naoIniciadoShprimarioI === "NAO_INICIADO") {
  imageShprimarioI = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
}

if (naoIniciadoShprimarioI === "EM_ANDAMENTO") {
  imageShprimarioI = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
}

if (naoIniciadoShprimarioI === "NÃO_CONFORMIDADE" ) {
  imageShprimarioI = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
}

if (naoIniciadoShprimarioI === "LIBERADO") {
  imageShprimarioI = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}



let imageShprimarioII;

if (naoIniciadoShprimarioII === "NAO_INICIADO") {
  imageShprimarioII = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
}

if (naoIniciadoShprimarioII === "EM_ANDAMENTO") {
  imageShprimarioII = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
}

if (naoIniciadoShprimarioII === "NÃO_CONFORMIDADE") {
  imageShprimarioII = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
}

if (naoIniciadoShprimarioII === "LIBERADO" ) {
  imageShprimarioII = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageParedeDagua;

if (naoIniciadoParedeDagua === "NAO_INICIADO") {
  imageParedeDagua = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
}

if (naoIniciadoParedeDagua === "EM_ANDAMENTO") {
  imageParedeDagua = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
}

if (naoIniciadoParedeDagua === "NÃO_CONFORMIDADE") {
  imageParedeDagua = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
}

if (naoIniciadoParedeDagua === "LIBERADO") {
  imageParedeDagua = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imagePiso;

if (naoIniciadoPiso === "NAO_INICIADO") {
  imagePiso = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
}

if (naoIniciadoPiso === "EM_ANDAMENTO") {
  imagePiso = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
}

if (naoIniciadoPiso === "NÃO_CONFORMIDADE" ) {
  imagePiso = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
}

if (naoIniciadoPiso === "LIBERADO" ) {
  imagePiso = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageBicasSmelt;

if (naoIniciadoBicasSmelt === "NAO_INICIADO") {
  imageBicasSmelt = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoBicasSmelt === "EM_ANDAMENTO") {
  imageBicasSmelt = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoBicasSmelt === "NÃO_CONFORMIDADE" ) {
  imageBicasSmelt = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoBicasSmelt === "LIBERADO" ) {
  imageBicasSmelt = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}



let imageTeto;

if (naoIniciadoTeto === "NAO_INICIADO") {
  imageTeto = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoTeto === "EM_ANDAMENTO") {
  imageTeto = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoTeto === "NÃO_CONFORMIDADE" ) {
  imageTeto = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoTeto === "LIBERADO" ) {
  imageTeto = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}

let imageEconomizadorI;

if (naoIniciadoEconomizadorI === "NAO_INICIADO") {
  imageEconomizadorI = <img src={CinzaD} className='ieconomizadorI' alt='CinzaD'/>;
}

if (naoIniciadoEconomizadorI === "EM_ANDAMENTO") {
  imageEconomizadorI = <img src={AmareloD} className='ieconomizadorI' alt='AmareloD'/>;
}

if (naoIniciadoEconomizadorI === "NÃO_CONFORMIDADE") {
  imageEconomizadorI = <img src={VermelhoD} className='ieconomizadorI' alt='VermelhoD'/>;
}

if (naoIniciadoEconomizadorI === "LIBERADO") {
  imageEconomizadorI = <img src={VerdeD} className='ieconomizadorI' alt='VerdeD'/>;
}


let imageEconomizadorII;

if (naoIniciadoEconomizadorII === "NAO_INICIADO") {
  imageEconomizadorII = <img src={CinzaD} className='ieconomizadorII' alt='CinzaD'/>;
}

if (naoIniciadoEconomizadorII === "EM_ANDAMENTO") {
  imageEconomizadorII = <img src={AmareloD} className='ieconomizadorII' alt='AmareloD'/>;
}

if (naoIniciadoEconomizadorII === "NÃO_CONFORMIDADE") {
  imageEconomizadorII = <img src={VermelhoD} className='ieconomizadorII' alt='VermelhoD'/>;
}

if (naoIniciadoEconomizadorII === "LIBERADO") {
  imageEconomizadorII = <img src={VerdeD} className='ieconomizadorII' alt='VerdeD'/>;
}


let imageBank;

if (naoIniciadoBank === "NAO_INICIADO") {
  imageBank = <img src={CinzaD} className='ibank' alt='CinzaD'/>;
}

if (naoIniciadoBank === "EM_ANDAMENTO") {
  imageBank = <img src={AmareloD} className='ibank' alt='AmareloD'/>;
}

if (naoIniciadoBank === "NÃO_CONFORMIDADE") {
  imageBank = <img src={VermelhoD} className='ibank' alt='VermelhoD'/>;
}

if (naoIniciadoBank === "LIBERADO") {
  imageBank = <img src={VerdeD} className='ibank' alt='VerdeD'/>;
}


let imageGrid;

if (naoIniciadoGrid === "NAO_INICIADO") {
  imageGrid = <img src={CinzaD} className='igrid' alt='CinzaD'/>;
}

if (naoIniciadoGrid === "EM_ANDAMENTO") {
  imageGrid = <img src={AmareloD} className='igrid' alt='AmareloD'/>;
}

if (naoIniciadoGrid === "NÃO_CONFORMIDADE") {
  imageGrid = <img src={VermelhoD} className='igrid' alt='VermelhoD'/>;
}

if (naoIniciadoGrid === "LIBERADO") {
  imageGrid = <img src={VerdeD} className='igrid' alt='VerdeD'/>;
}



let imageSopradorFuligem;

if (naoIniciadoSopradorFuligem === "NAO_INICIADO") {
  imageSopradorFuligem = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoSopradorFuligem === "EM_ANDAMENTO") {
  imageSopradorFuligem = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoSopradorFuligem === "NÃO_CONFORMIDADE") {
  imageSopradorFuligem = <img src={VermelhoD} className='ivalsegm' alt='VermelhoD'/>;
}

if (naoIniciadoSopradorFuligem === "LIBERADO") {
  imageSopradorFuligem = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageNariz;

if (naoIniciadoNariz === "NAO_INICIADO") {
  imageNariz = <img src={CinzaD} className='inariz' alt='CinzaD'/>;
}

if (naoIniciadoNariz === "EM_ANDAMENTO") {
  imageNariz = <img src={AmareloD} className='inariz' alt='AmareloD'/>;
}

if (naoIniciadoNariz === "NÃO_CONFORMIDADE") {
  imageNariz = <img src={VermelhoD} className='inariz' alt='VermelhoD'/>;
}

if (naoIniciadoNariz === "LIBERADO") {
  imageNariz = <img src={VerdeD} className='inariz' alt='VerdeD'/>;
}



let imageCamarafria;

if (naoIniciadoCamarafria === "NAO_INICIADO") {
  imageCamarafria = <img src={CinzaD} className='icamarafria' alt='CinzaD'/>;
}

if (naoIniciadoCamarafria === "EM_ANDAMENTO") {
  imageCamarafria = <img src={AmareloD} className='icamarafria' alt='AmareloD'/>;
}

if (naoIniciadoCamarafria === "NÃO_CONFORMIDADE") {
  imageCamarafria = <img src={VermelhoD} className='icamarafria' alt='VermelhoD'/>;
}

if (naoIniciadoCamarafria === "LIBERADO") {
  imageCamarafria = <img src={VerdeD} className='icamarafria' alt='VerdeD'/>;
}


let imageQueimadores;

if (naoIniciadoQueimadores === "NAO_INICIADO") {
  imageQueimadores = <img src={CinzaD} className='iqueimadores' alt='CinzaD'/>;
}

if (naoIniciadoQueimadores === "EM_ANDAMENTO") {
  imageQueimadores = <img src={AmareloD} className='iqueimadores' alt='AmareloD'/>;
}

if (naoIniciadoQueimadores === "NÃO_CONFORMIDADE") {
  imageQueimadores = <img src={VermelhoD} className='iqueimadores' alt='VermelhoD'/>;
}

if (naoIniciadoQueimadores === "LIBERADO") {
  imageQueimadores = <img src={VerdeD} className='iqueimadores' alt='VerdeD'/>;
}


let imageEntradaArSecundario;
if (naoIniciadoEntradaArSecundario === "NAO_INICIADO") {
  imageEntradaArSecundario = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoEntradaArSecundario === "EM_ANDAMENTO") {
  imageEntradaArSecundario = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoEntradaArSecundario === "NÃO_CONFORMIDADE") {
  imageEntradaArSecundario = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoEntradaArSecundario === "LIBERADO") {
  imageEntradaArSecundario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}

let imageEntradaArTerciario;
if (naoIniciadoEntradaArTerciario === "NAO_INICIADO") {
  imageEntradaArTerciario = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoEntradaArTerciario === "EM_ANDAMENTO") {
  imageEntradaArTerciario = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoEntradaArTerciario === "NÃO_CONFORMIDADE") {
  imageEntradaArTerciario = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoEntradaArTerciario === "LIBERADO") {
  imageEntradaArTerciario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}



let imageDutoseVentiladores;

if (naoIniciadoDutoseVentiladores === "NAO_INICIADO") {
  imageDutoseVentiladores = <img src={CinzaD} className='idutoseventiladores' alt='CinzaD'/>;
}

if (naoIniciadoDutoseVentiladores === "EM_ANDAMENTO") {
  imageDutoseVentiladores = <img src={AmareloD} className='idutoseventiladores' alt='AmareloD'/>;
}

if (naoIniciadoDutoseVentiladores === "NÃO_CONFORMIDADE") {
  imageDutoseVentiladores = <img src={VermelhoD} className='idutoseventiladores' alt='VermelhoD'/>;
}

if (naoIniciadoDutoseVentiladores === "LIBERADO") {
  imageDutoseVentiladores = <img src={VerdeD} className='idutoseventiladores' alt='VerdeD'/>;
}



let imageCameraTV;

if (naoIniciadoCameraTV === "NAO_INICIADO") {
  imageCameraTV = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoCameraTV === "EM_ANDAMENTO") {
  imageCameraTV = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoCameraTV === "NÃO_CONFORMIDADE") {
  imageCameraTV = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoCameraTV === "LIBERADO") {
  imageCameraTV = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageBocasVisita;
if (naoIniciadoBocasVisita === "NAO_INICIADO") {
  imageBocasVisita = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoBocasVisita === "EM_ANDAMENTO") {
  imageBocasVisita = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoBocasVisita === "NÃO_CONFORMIDADE") {
  imageBocasVisita = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoBocasVisita === "LIBERADO") {
  imageBocasVisita = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageEntradaArPrimario;
if (naoIniciadoEntradaArPrimario === "NAO_INICIADO") {
  imageEntradaArPrimario = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoEntradaArPrimario === "EM_ANDAMENTO") {
  imageEntradaArPrimario = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoEntradaArPrimario === "NÃO_CONFORMIDADE") {
  imageEntradaArPrimario = <img src={VermelhoD} className='iivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoEntradaArPrimario === "LIBERADO") {
  imageEntradaArPrimario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}



let imagePorao;

if (naoIniciadoPorao === "NAO_INICIADO") {
  imagePorao = <img src={CinzaD} className='iporao' alt='CinzaD'/>;
}

if (naoIniciadoPorao === "EM_ANDAMENTO") {
  imagePorao = <img src={AmareloD} className='iporao' alt='AmareloD'/>;
}

if (naoIniciadoPorao === "NÃO_CONFORMIDADE") {
  imagePorao = <img src={VermelhoD} className='iporao' alt='VermelhoD'/>;
}

if (naoIniciadoPorao === "LIBERADO") {
  imagePorao = <img src={VerdeD} className='iporao' alt='VerdeD'/>;
}

let imageValvulaSeguranca;

if (naoIniciadoValvulaSeguranca === "NAO_INICIADO") {
  imageValvulaSeguranca = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
}

if (naoIniciadoValvulaSeguranca === "EM_ANDAMENTO") {
  imageValvulaSeguranca = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
}

if (naoIniciadoValvulaSeguranca === "NÃO_CONFORMIDADE") {
  imageValvulaSeguranca = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
}

if (naoIniciadoValvulaSeguranca === "LIBERADO") {
  imageValvulaSeguranca = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}










 


  return (
    
<div className="container1">
  <div className="s1">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Valvula_de_Seguranca`} target="_blank">  {imageValvulaSeguranca}   </a>  
    <p className='tvalseg'><b>Válvula de Segurança</b> (MAN / CAL) </p>
  





  
  </div>
  <div className="caldeira"><img src={Caldeira}/></div>
  <div className="s2">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Teto`} target="_blank"> {imageTeto}  </a>
  <p className='tteto'>    <b>Teto</b> (IV) </p> 
   
   
   </div>
  <div className="s3"> 
  <a href={`https://eldorado.pg2025.com.br/relatorios/Economizador_I`} target="_blank">  {imageEconomizadorI}  </a>
  <p className='teconomizadorI'>    <b>EconomizadorI</b> (IV / MEUS / DRO) </p>


  </div>
  <div className="s4">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Economizador_II`} target="_blank"> {imageEconomizadorII}</a>
  <p className='teconomizadorII'>    <b>EconomizadorII</b> (IV / MEUS / DRO) </p>  
  </div>
  <div className="s5">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Bank`} target="_blank"> {imageBank}  </a>
  <p className='tbank'>    <b>Bank</b> (IV / MEUS / DRO) </p>


  </div>
  <div className="s6">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Grid`} target="_blank">  {imageGrid}  </a>
   <p className='tgrid'>    <b>GRID</b> (IV / MEUS) </p> 
  </div>
  <div className="s7"> 

  <a href={`https://eldorado.pg2025.com.br/relatorios/Sopradores_de_Fuligem`} target="_blank">  {imageSopradorFuligem}  </a>
  <p className='tsoprasdores'>    <b>Sopradores de Fuligem</b> (IV / RG) </p> 
  </div>
  <div className="s8"> 

  <a href={`https://eldorado.pg2025.com.br/relatorios/Nariz`} target="_blank">  {imageNariz}   </a>
  <p className='tnariz'>    <b>Nariz</b> (IV / MEUS) </p>

  </div>
  <div className="s9">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Camara_Fria`} target="_blank"> {imageCamarafria}   </a>
  <p className='tcamarafria'>    <b>Câmara Fria</b> (IV / MEUS) </p>  

  </div>
  <div className="s10">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Queimadores`} target="_blank"> {imageQueimadores}   </a>
  <p className='tqueimadores'>    <b>Queimadores</b> (IV / MEUS) </p> 

  </div>
  <div className="s11">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Entradas_de_Ar_Terciario`} target="_blank"> {imageEntradaArTerciario}  </a>
  <p className='tarterciario'>    <b>Entrada de ar Terciário</b> (IV / MEUS / LP) </p> 

  </div>
  <div className="s12">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Entradas_de_Ar_Secundario`} target="_blank">  {imageEntradaArSecundario} </a>
  <p className='tarsecundario'>    <b>Entrada de ar Secundário</b> (IV / MEUS / LP) </p>

  </div>
  <div className="s13">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Dutos_e_Ventiladores`} target="_blank"> {imageDutoseVentiladores}  </a> 
  <p className='tdutos'>    <b>Dutos e ventiladores</b> (IV) </p>  

  </div>
  <div className="s14">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Camera_de_TV`} target="_blank">  {imageCameraTV}  </a>
  <p className='tcameraTV'>    <b>Câmera de TV</b> (IV / MEUS) </p> 

  </div>
  <div className="s15">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Bocas_de_visita`} target="_blank"> {imageBocasVisita}  </a>
  <p className='tbocas'>    <b>Bocas de visita</b> (IV / MEUS) </p>  
  </div>
  <div className="s16">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Entradas_de_Ar_Primario`} target="_blank"> {imageEntradaArPrimario}   </a>
  <p className='tarprimario'>    <b>Entrada de ar Primário</b> (IV / MEUS / LP) </p>

  </div>
  <div className="s17">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Bicas_de_Smelt`} target="_blank"> {imageBicasSmelt} </a>  
  <p className='tbicas'>    <b>Bicas de Smelt</b>  (IV / MEUS / LP) </p>

  </div>
  <div className="s18">
  <a href={`https://eldorado.pg2025.com.br/relatorios/Porao`} target="_blank"> {imagePorao} </a> 
  <p className='tporao'>    <b>Porão</b> (IV) </p>

  </div>
  <div className="a">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Piso`} target="_blank">  {imagePiso}   </a> 
  <p className='tpiso1'><b>Piso</b> <br/>  (IV / MEUS / LP) </p>

  </div>


  <div className="a10">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Parede_Dagua`} target="_blank"> {imageParedeDagua}  </a>  
  <p className='tpiso1'><b>Parede D'água</b> (IV / MEUS) </p> 
    
  </div>

   
  <div className="a2">

  <a href={`https://eldorado.pg2025.com.br/relatorios/Penthouse`} target="_blank">  { imagePenthouse}   </a> 
  <p className='tpiso1'>   <b>Penthouse</b> (IV / PM) </p>  
  </div>

  <div className="a3">

  <a href={`https://eldorado.pg2025.com.br/relatorios/Balao`} target="_blank"> {imageBalao}  </a> 
  <p className='tpiso1'> <b>Balão</b> (IV) </p>
  </div>
  <div className="a4">

  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Secundario`} target="_blank"> {imageShsecundario} </a> 
  <p className='tpiso1'> <b>SH Secundário</b> (IV / MEUS / RG) </p> 
  </div>
  <div className="a5">

  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Terciario`} target="_blank"> {imageShterciario}  </a> 
  <p className='tpiso1'><b>SH Terciário</b> (IV / MEUS) </p> 


  </div>
  <div className="a6">

  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Quartenario`} target="_blank"> {imageShquartenario}   </a> 
  <p className='tpiso1'><b>SH Quartenário</b> (IV / MEUS) </p> 

  </div>
  <div className="a7">

  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Primario_I`} target="_blank"> {imageShprimarioI}    </a>
  <p className='tpiso1'><b>SH Primário I</b> (IV / MEUS) </p> 


  </div>
  <div className="a8">

  <a href={`https://eldorado.pg2025.com.br/relatorios/SH_Primario_II`} target="_blank"> {imageShprimarioII}  </a> 
  <p className='tpiso1'><b>SH Primário II</b> (IV / MEUS) </p> 

  </div>
  <div className="a9">
    
  <a href={`https://eldorado.pg2025.com.br/relatorios/Screen`} target="_blank">  {imageScreen} </a> 

  <p className='tpiso1'><b>Screen</b> (IV / MEUS) </p> 


  </div>
  <br/><br/>



</div>


  );
};

export default CaldeiraIndex;
