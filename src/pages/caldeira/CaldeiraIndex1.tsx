import React, { useEffect, useState } from 'react';

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
const [naoIniciadoScreen, setNaoIniciadoScreeenAll] = useState(null);
const [canceladoScreen, setCanceladoScreenAll] = useState(Number);
const [rrRncScreen, setRrRncScreenAll] = useState('');
const [riScreen, setRiScreenAll] = useState(Number);

const [naoIniciadoPenthouse, setNaoIniciadoPenthouseAll] = useState(null);
const [canceladoPenthouse, setCanceladoPenthouseAll] = useState(Number);
const [rrRncPenthouse, setRrRncPenthouseAll] = useState('');
const [riPenthouse, setRiPenthouseAll] = useState(Number);

const [naoIniciadoShsecundario, setNaoIniciadoShsecundarioAll] = useState(null);
const [canceladoShsecundario, setCanceladoShsecundarioAll] = useState(Number);
const [rrRncShsecundario, setRrRncShsecundarioAll] = useState('');
const [riShsecundario, setRiShsecundarioAll] = useState(Number);


const [naoIniciadoShterciario, setNaoIniciadoShterciarioAll] = useState(null);
const [canceladoShterciario, setCanceladoShterciarioAll] = useState(Number);
const [rrRncShterciario, setRrRncShterciarioAll] = useState('');
const [riShterciario, setRiShterciarioAll] = useState(Number);

const [naoIniciadoBalao, setNaoIniciadoBalaoAll] = useState(null);
const [canceladoBalao, setCanceladoBalaoAll] = useState(Number);
const [rrRncBalao, setRrRncBalaoAll] = useState('');
const [riBalao, setRiBalaoAll] = useState(Number);

const [naoIniciadoShquartenario, setNaoIniciadoShquartenarioAll] = useState(null);
const [canceladoShquartenario, setCanceladoShquartenarioAll] = useState(Number);
const [rrRncShquartenario, setRrRncShquartenarioAll] = useState('');
const [riShquartenario, setRiShquartenarioAll] = useState(Number);

const [naoIniciadoShprimarioI, setNaoIniciadoShprimarioIAll] = useState(null);
const [canceladoShprimarioI, setCanceladoShprimarioIAll] = useState(Number);
const [rrRncShprimarioI, setRrRncShprimarioIAll] = useState('');
const [riShprimarioI, setRiShprimarioIAll] = useState(Number);

const [naoIniciadoShprimarioII, setNaoIniciadoShprimarioIIAll] = useState(null);
const [canceladoShprimarioII, setCanceladoShprimarioIIAll] = useState(Number);
const [rrRncShprimarioII, setRrRncShprimarioIIAll] = useState('');
const [riShprimarioII, setRiShprimarioIIAll] = useState(Number);

const [naoIniciadoParedeDagua, setNaoIniciadoParedeDaguaAll] = useState(null);
const [canceladoParedeDagua, setCanceladoParedeDaguaAll] = useState(Number);
const [rrRncParedeDagua, setRrRncParedeDaguaAll] = useState('');
const [riParedeDagua, setRiParedeDaguaAll] = useState(Number);

const [naoIniciadoPiso, setNaoIniciadoPisoAll] = useState(null);
const [canceladoPiso, setCanceladoPisoAll] = useState(Number);
const [rrRncPiso, setRrRncPisoAll] = useState('');
const [riPiso, setRiPisoAll] = useState(Number);
   
/*Direita Calderia */
const [naoIniciadoBicasSmelt, setNaoIniciadoBicasSmeltAll] = useState(null);
const [canceladoBicasSmelt, setCanceladoBicasSmeltAll] = useState(Number);
const [rrRncBicasSmelt, setRrRncBicasSmeltAll] = useState('');
const [riBicasSmelt, setRiBicasSmeltAll] = useState(Number);

const [naoIniciadoTeto, setNaoIniciadoTetoAll] = useState(null);
const [canceladoTeto, setCanceladoTetoAll] = useState(Number);
const [rrRncTeto, setRrRncTetoAll] = useState('');
const [riTeto, setRiTetoAll] = useState(Number);

const [naoIniciadoEconomizadorI, setNaoIniciadoEconomizadorIAll] = useState(null);
const [canceladoEconomizadorI, setCanceladoEconomizadorIAll] = useState(Number);
const [rrRncEconomizadorI, setRrRncEconomizadorIAll] = useState('');
const [riEconomizadorI, setRiEconomizadorIAll] = useState(Number);

const [naoIniciadoEconomizadorII, setNaoIniciadoEconomizadorIIAll] = useState(null);
const [canceladoEconomizadorII, setCanceladoEconomizadorIIAll] = useState(Number);
const [rrRncEconomizadorII, setRrRncEconomizadorIIAll] = useState('');
const [riEconomizadorII, setRiEconomizadorIIAll] = useState(Number);

const [naoIniciadoBank, setNaoIniciadoBankAll] = useState(null);
const [canceladoBank, setCanceladoBankAll] = useState(Number);
const [rrRncBank, setRrRncBankAll] = useState('');
const [riBank, setRiBankAll] = useState(Number);

const [naoIniciadoGrid, setNaoIniciadoGridAll] = useState(null);
const [canceladoGrid, setCanceladoGridAll] = useState(Number);
const [rrRncGrid, setRrRncGridAll] = useState('');
const [riGrid, setRiGridAll] = useState(Number);

const [naoIniciadoSopradorFuligem, setNaoIniciadoSopradorFuligemAll] = useState(null);
const [canceladoSopradorFuligem, setCanceladoSopradorFuligemAll] = useState(Number);
const [rrRncSopradorFuligem, setRrRncSopradorFuligemAll] = useState('');
const [riSopradorFuligem, setRiSopradorFuligemAll] = useState(Number);

const [naoIniciadoNariz, setNaoIniciadoNarizAll] = useState(null);
const [canceladoNariz, setCanceladoNarizAll] = useState(Number);
const [rrRncNariz, setRrRncNarizAll] = useState('');
const [riNariz, setRiNarizAll] = useState(Number);

const [naoIniciadoCamarafria, setNaoIniciadoCamarafriaAll] = useState(null);
const [canceladoCamarafria, setCanceladoCamarafriaAll] = useState(Number);
const [rrRncCamarafria, setRrRncCamarafriaAll] = useState('');
const [riCamarafria, setRiCamarafriaAll] = useState(Number);

const [naoIniciadoQueimadores, setNaoIniciadoQueimadoresAll] = useState(null);
const [canceladoQueimadores, setCanceladoQueimadoresAll] = useState(Number);
const [rrRncQueimadores, setRrRncQueimadoresAll] = useState('');
const [riQueimadores, setRiQueimadoresAll] = useState(Number);

const [naoIniciadoEntradaArSecundario, setNaoIniciadoEntradaArSecundarioAll] = useState(null);
const [canceladoEntradaArSecundario, setCanceladoEntradaArSecundarioAll] = useState(Number);
const [rrRncEntradaArSecundario, setRrRncEntradaArSecundarioAll] = useState('');
const [riEntradaArSecundario, setRiEntradaArSecundarioAll] = useState(Number);

const [naoIniciadoEntradaArTerciario, setNaoIniciadoEntradaArTerciarioAll] = useState(null);
const [canceladoEntradaArTerciario, setCanceladoEntradaArTerciarioAll] = useState(Number);
const [rrRncEntradaArTerciario, setRrRncEntradaArTerciarioAll] = useState('');
const [riEntradaArTerciario, setRiEntradaArTerciarioAll] = useState(Number);

const [naoIniciadoDutoseVentiladores, setNaoIniciadoDutoseVentiladoresAll] = useState(null);
const [canceladoDutoseVentiladores, setCanceladoDutoseVentiladoresAll] = useState(Number);
const [rrRncDutoseVentiladores, setRrRncDutoseVentiladoresAll] = useState('');
const [riDutoseVentiladores, setRiDutoseVentiladoresAll] = useState(Number);

const [naoIniciadoCameraTV, setNaoIniciadoCameraTVAll] = useState(null);
const [canceladoCameraTV, setCanceladoCameraTVAll] = useState(Number);
const [rrRncCameraTV, setRrRncCameraTVAll] = useState('');
const [riCameraTV, setRiCameraTVAll] = useState(Number);

const [naoIniciadoBocasVisita, setNaoIniciadoBocasVisitaAll] = useState(null);
const [canceladoBocasVisita, setCanceladoBocasVisitaAll] = useState(Number);
const [rrRncBocasVisita, setRrRncBocasVisitaAll] = useState('');
const [riBocasVisita, setRiBocasVisitaAll] = useState(Number);

const [naoIniciadoEntradaArPrimario, setNaoIniciadoEntradaArPrimarioAll] = useState(null);
const [canceladoEntradaArPrimario, setCanceladoEntradaArPrimarioAll] = useState(Number);
const [rrRncEntradaArPrimario, setRrRncEntradaArPrimarioAll] = useState('');
const [riEntradaArPrimario, setRiEntradaArPrimarioAll] = useState(Number);

const [naoIniciadoPorao, setNaoIniciadoPoraoAll] = useState(null);
const [canceladoPorao, setCanceladoPoraoAll] = useState(Number);
const [rrRncPorao, setRrRncPoraoAll] = useState('');
const [riPorao, setRiPoraoAll] = useState(Number);

const [naoIniciadoValvulaSeguranca, setNaoIniciadoValvulaSegurancaAll] = useState(null);
const [canceladoValvulaSeguranca, setCanceladoValvulaSegurancaAll] = useState(Number);
const [rrRncValvulaSeguranca, setRrRncValvulaSegurancaAll] = useState('');
const [riValvulaSeguranca, setRiValvulaSegurancaAll] = useState(Number);


   



  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response1a = await fetch('http://localhost:8081/RER/semaforoTodos/Screen');
        const data1a = await response1a.json(); 
        setNaoIniciadoScreeenAll(data1a);


        const response1b = await fetch('http://localhost:8081/RC/semaforoCancelado/Screen');
        const data1b = await response1b.json(); 
        setCanceladoScreenAll(data1b);

        const response1c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Screen');
        const data1c = await response1c.text(); 
        setRrRncScreenAll(data1c);
     
        const response1d = await fetch('http://localhost:8081/RI/semaforoRI/Screen');
        const data1d = await response1d.json(); 
        setRiScreenAll(data1d);

        
        const response2a = await fetch('http://localhost:8081/RER/semaforoTodos/Penthouse');
        const data2a = await response2a.json(); 
        setNaoIniciadoPenthouseAll(data2a);
        
        const response2b = await fetch('http://localhost:8081/RC/semaforoCancelado/Penthouse');
        const data2b = await response2b.json(); 
        setCanceladoPenthouseAll(data2b);
        
        const response2c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Penthouse');
        const data2c = await response2c.text(); 
        setRrRncPenthouseAll(data2c);
        
        const response2d = await fetch('http://localhost:8081/RI/semaforoRI/Penthouse');
        const data2d = await response2d.json(); 
        setRiPenthouseAll(data2d);
        

        const response3a = await fetch('http://localhost:8081/RER/semaforoTodos/SH_Secundario');
        const data3a = await response3a.json(); 
        setNaoIniciadoShsecundarioAll(data3a);
        
        const response3b = await fetch('http://localhost:8081/RC/semaforoCancelado/SH_Secundario');
        const data3b = await response3b.json(); 
        setCanceladoShsecundarioAll(data3b);
        
        const response3c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/SH_Secundario');
        const data3c = await response3c.text(); 
        setRrRncShsecundarioAll(data3c);
        
        const response3d = await fetch('http://localhost:8081/RI/semaforoRI/SH_Secundario');
        const data3d = await response3d.json(); 
        setRiShsecundarioAll(data3d);
        

        const response4a = await fetch('http://localhost:8081/RER/semaforoTodos/SH_Terciario');
        const data4a = await response4a.json(); 
        setNaoIniciadoShterciarioAll(data4a);

      const response4b = await fetch('http://localhost:8081/RC/semaforoCancelado/SH_Terciario');
      const data4b = await response4b.json(); 
      setCanceladoShterciarioAll(data4b);

const response4c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/SH_Terciario');
const data4c = await response4c.text(); 
setRrRncShterciarioAll(data4c);

const response4d = await fetch('http://localhost:8081/RI/semaforoRI/SH_Terciario');
const data4d = await response4d.json(); 
setRiShterciarioAll(data4d);
 

const response5a = await fetch('http://localhost:8081/RER/semaforoTodos/Balao');
const data5a = await response5a.json(); 
setNaoIniciadoBalaoAll(data5a);

const response5b = await fetch('http://localhost:8081/RC/semaforoCancelado/Balao');
const data5b = await response5b.json(); 
setCanceladoBalaoAll(data5b);

const response5c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Balao');
const data5c = await response5c.text(); 
setRrRncBalaoAll(data5c);

const response5d = await fetch('http://localhost:8081/RI/semaforoRI/Balao');
const data5d = await response5d.json(); 
setRiBalaoAll(data5d);

const response6a = await fetch('http://localhost:8081/RER/semaforoTodos/SH_Quartenario');
const data6a = await response6a.json(); 
setNaoIniciadoShquartenarioAll(data6a);

const response6b = await fetch('http://localhost:8081/RC/semaforoCancelado/SH_Quartenario');
const data6b = await response6b.json(); 
setCanceladoShquartenarioAll(data6b);

const response6c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/SH_Quartenario');
const data6c = await response6c.text(); 
setRrRncShquartenarioAll(data6c);

const response6d = await fetch('http://localhost:8081/RI/semaforoRI/SH_Quartenario');
const data6d = await response6d.json(); 
setRiShquartenarioAll(data6d);



const response7a = await fetch('http://localhost:8081/RER/semaforoTodos/SH_Primario_I');
const data7a = await response7a.json(); 
setNaoIniciadoShprimarioIAll(data7a);

const response7b = await fetch('http://localhost:8081/RC/semaforoCancelado/SH_Primario_I');
const data7b = await response7b.json(); 
setCanceladoShprimarioIAll(data7b);

const response7c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/SH_Primario_I');
const data7c = await response7c.text(); 
setRrRncShprimarioIAll(data7c);

const response7d = await fetch('http://localhost:8081/RI/semaforoRI/SH_Primario_I');
const data7d = await response7d.json(); 
setRiShprimarioIAll(data7d);

const response8a = await fetch('http://localhost:8081/RER/semaforoTodos/SH_Primario_II');
const data8a = await response8a.json(); 
setNaoIniciadoShprimarioIIAll(data8a);

const response8b = await fetch('http://localhost:8081/RC/semaforoCancelado/SH_Primario_II');
const data8b = await response8b.json(); 
setCanceladoShprimarioIIAll(data8b);

const response8c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/SH_Primario_II');
const data8c = await response8c.text(); 
setRrRncShprimarioIIAll(data8c);

const response8d = await fetch('http://localhost:8081/RI/semaforoRI/SH_Primario_II');
const data8d = await response8d.json(); 
setRiShprimarioIIAll(data8d);


const response9a = await fetch('http://localhost:8081/RER/semaforoTodos/Parede_Dagua');
const data9a = await response9a.json(); 
setNaoIniciadoParedeDaguaAll(data9a);

const response9b = await fetch('http://localhost:8081/RC/semaforoCancelado/Parede_Dagua');
const data9b = await response9b.json(); 
setCanceladoParedeDaguaAll(data9b);

const response9c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Parede_Dagua');
const data9c = await response9c.text(); 
setRrRncParedeDaguaAll(data9c);

const response9d = await fetch('http://localhost:8081/RI/semaforoRI/Parede_Dagua');
const data9d = await response9d.json(); 
setRiParedeDaguaAll(data9d);


const response10a = await fetch('http://localhost:8081/RER/semaforoTodos/Piso');
const data10a = await response10a.json(); 
setNaoIniciadoPisoAll(data10a);

const response10b = await fetch('http://localhost:8081/RC/semaforoCancelado/Piso');
const data10b = await response10b.json(); 
setCanceladoPisoAll(data10b);

const response10c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Piso');
const data10c = await response10c.text(); 
setRrRncPisoAll(data10c);

const response10d = await fetch('http://localhost:8081/RI/semaforoRI/Piso');
const data10d = await response10d.json(); 
setRiPisoAll(data10d);


const response11a = await fetch('http://localhost:8081/RER/semaforoTodos/Bicas_de_Smeltt');
const data11a = await response11a.json(); 
setNaoIniciadoBicasSmeltAll(data11a);

const response11b = await fetch('http://localhost:8081/RC/semaforoCancelado/Bicas_de_Smelt');
const data11b = await response11b.json(); 
setCanceladoBicasSmeltAll(data11b);

const response11c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Bicas_de_Smelt');
const data11c = await response11c.text(); 
setRrRncBicasSmeltAll(data11c);

const response11d = await fetch('http://localhost:8081/RI/semaforoRI/Bicas_de_Smelt');
const data11d = await response11d.json(); 
setRiBicasSmeltAll(data11d);

const response12a = await fetch('http://localhost:8081/RER/semaforoTodos/Teto');
const data12a = await response12a.json(); 
setNaoIniciadoTetoAll(data12a);

const response12b = await fetch('http://localhost:8081/RC/semaforoCancelado/Teto');
const data12b = await response12b.json(); 
setCanceladoTetoAll(data12b);

const response12c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Teto');
const data12c = await response12c.text(); 
setRrRncTetoAll(data12c);

const response12d = await fetch('http://localhost:8081/RI/semaforoRI/Teto');
const data12d = await response12d.json(); 
setRiTetoAll(data12d);

const response13a = await fetch('http://localhost:8081/RER/semaforoTodos/Economizador_I');
const data13a = await response13a.json(); 
setNaoIniciadoEconomizadorIAll(data13a);

const response13b = await fetch('http://localhost:8081/RC/semaforoCancelado/Economizador_I');
const data13b = await response13b.json(); 
setCanceladoEconomizadorIAll(data13b);

const response13c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Economizador_I');
const data13c = await response13c.text(); 
setRrRncEconomizadorIAll(data13c);

const response13d = await fetch('http://localhost:8081/RI/semaforoRI/Economizador_I');
const data13d = await response13d.json(); 
setRiEconomizadorIAll(data13d);

const response14a = await fetch('http://localhost:8081/RER/semaforoTodos/Economizador_II');
const data14a = await response14a.json(); 
setNaoIniciadoEconomizadorIIAll(data14a);

const response14b = await fetch('http://localhost:8081/RC/semaforoCancelado/Economizador_II');
const data14b = await response14b.json(); 
setCanceladoEconomizadorIIAll(data14b);

const response14c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Economizador_II');
const data14c = await response14c.text(); 
setRrRncEconomizadorIIAll(data14c);

const response14d = await fetch('http://localhost:8081/RI/semaforoRI/Economizador_II');
const data14d = await response14d.json(); 
setRiEconomizadorIIAll(data14d);


const response15a = await fetch('http://localhost:8081/RER/semaforoTodos/Bank');
const data15a = await response15a.json(); 
setNaoIniciadoBankAll(data15a);

const response15b = await fetch('http://localhost:8081/RC/semaforoCancelado/Bank');
const data15b = await response15b.json(); 
setCanceladoBankAll(data15b);

const response15c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Bank');
const data15c = await response15c.text(); 
setRrRncBankAll(data15c);

const response15d = await fetch('http://localhost:8081/RI/semaforoRI/Bank');
const data15d = await response15d.json(); 
setRiBankAll(data15d);

const response16a = await fetch('http://localhost:8081/RER/semaforoTodos/Grid');
const data16a = await response16a.json(); 
setNaoIniciadoGridAll(data16a);

const response16b = await fetch('http://localhost:8081/RC/semaforoCancelado/Grid');
const data16b = await response16b.json(); 
setCanceladoGridAll(data16b);

const response16c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Grid');
const data16c = await response16c.text(); 
setRrRncGridAll(data16c);

const response16d = await fetch('http://localhost:8081/RI/semaforoRI/Grid');
const data16d = await response16d.json(); 
setRiGridAll(data16d);


const response17a = await fetch('http://localhost:8081/RER/semaforoTodos/Sopradores_de_Fuligem');
const data17a = await response17a.json(); 
setNaoIniciadoSopradorFuligemAll(data17a);

const response17b = await fetch('http://localhost:8081/RC/semaforoCancelado/Sopradores_de_Fuligem');
const data17b = await response17b.json(); 
setCanceladoSopradorFuligemAll(data17b);

const response17c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Sopradores_de_Fuligem');
const data17c = await response17c.text(); 
setRrRncSopradorFuligemAll(data17c);

const response17d = await fetch('http://localhost:8081/RI/semaforoRI/Sopradores_de_Fuligem');
const data17d = await response17d.json(); 
setRiSopradorFuligemAll(data17d);


const response18a = await fetch('http://localhost:8081/RER/semaforoTodos/Nariz');
const data18a = await response18a.json(); 
setNaoIniciadoNarizAll(data18a);

const response18b = await fetch('http://localhost:8081/RC/semaforoCancelado/Nariz');
const data18b = await response18b.json(); 
setCanceladoNarizAll(data18b);

const response18c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Nariz');
const data18c = await response18c.text(); 
setRrRncNarizAll(data18c);

const response18d = await fetch('http://localhost:8081/RI/semaforoRI/Nariz');
const data18d = await response18d.json(); 
setRiNarizAll(data18d);


const response19a = await fetch('http://localhost:8081/RER/semaforoTodos/Camara_Fria');
const data19a = await response19a.json(); 
setNaoIniciadoCamarafriaAll(data19a);

const response19b = await fetch('http://localhost:8081/RC/semaforoCancelado/Camara_Fria');
const data19b = await response19b.json(); 
setCanceladoCamarafriaAll(data19b);

const response19c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Camara_Fria');
const data19c = await response19c.text(); 
setRrRncCamarafriaAll(data19c);

const response19d = await fetch('http://localhost:8081/RI/semaforoRI/Camara_Fria');
const data19d = await response19d.json(); 
setRiCamarafriaAll(data19d);


const response20a = await fetch('http://localhost:8081/RER/semaforoTodos/Queimadores');
const data20a = await response20a.json(); 
setNaoIniciadoQueimadoresAll(data20a);

const response20b = await fetch('http://localhost:8081/RC/semaforoCancelado/Queimadores');
const data20b = await response20b.json(); 
setCanceladoQueimadoresAll(data20b);

const response20c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Queimadores');
const data20c = await response20c.text(); 
setRrRncQueimadoresAll(data20c);

const response20d = await fetch('http://localhost:8081/RI/semaforoRI/Queimadores');
const data20d = await response20d.json(); 
setRiQueimadoresAll(data20d);


const response21a = await fetch('http://localhost:8081/RER/semaforoTodos/Entradas_de_Ar_Secundario');
const data21a = await response21a.json(); 
setNaoIniciadoEntradaArSecundarioAll(data21a);

const response21b = await fetch('http://localhost:8081/RC/semaforoCancelado/Entradas_de_Ar_Secundario');
const data21b = await response21b.json(); 
setCanceladoEntradaArSecundarioAll(data21b);

const response21c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Entradas_de_Ar_Secundario');
const data21c = await response21c.text(); 
setRrRncEntradaArSecundarioAll(data21c);

const response21d = await fetch('http://localhost:8081/RI/semaforoRI/Entradas_de_Ar_Secundario');
const data21d = await response21d.json(); 
setRiEntradaArSecundarioAll(data21d);

const response22a = await fetch('http://localhost:8081/RER/semaforoTodos/Entradas_de_Ar_Terciario');
const data22a = await response22a.json(); 
setNaoIniciadoEntradaArTerciarioAll(data22a);

const response22b = await fetch('http://localhost:8081/RC/semaforoCancelado/Entradas_de_Ar_Terciario');
const data22b = await response22b.json(); 
setCanceladoEntradaArTerciarioAll(data22b);

const response22c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Entradas_de_Ar_Terciario');
const data22c = await response22c.text(); 
setRrRncEntradaArTerciarioAll(data22c);

const response22d = await fetch('http://localhost:8081/RI/semaforoRI/Entradas_de_Ar_Terciario');
const data22d = await response22d.json(); 
setRiEntradaArTerciarioAll(data22d);


const response23a = await fetch('http://localhost:8081/RER/semaforoTodos/DutoseVentiladores');
const data23a = await response23a.json(); 
setNaoIniciadoDutoseVentiladoresAll(data23a);

const response23b = await fetch('http://localhost:8081/RC/semaforoCancelado/Dutos_e_Ventiladores');
const data23b = await response23b.json(); 
setCanceladoDutoseVentiladoresAll(data23b);

const response23c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Dutos_e_Ventiladores');
const data23c = await response23c.text(); 
setRrRncDutoseVentiladoresAll(data23c);

const response23d = await fetch('http://localhost:8081/RI/semaforoRI/Dutos_e_Ventiladores');
const data23d = await response23d.json(); 
setRiDutoseVentiladoresAll(data23d);


const response24a = await fetch('http://localhost:8081/RER/semaforoTodos/Camera_de_TV');
const data24a = await response24a.json(); 
setNaoIniciadoCameraTVAll(data24a);

const response24b = await fetch('http://localhost:8081/RC/semaforoCancelado/Camera_de_TV');
const data24b = await response24b.json(); 
setCanceladoCameraTVAll(data24b);

const response24c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Camera_de_TV');
const data24c = await response24c.text(); 
setRrRncCameraTVAll(data24c);

const response24d = await fetch('http://localhost:8081/RI/semaforoRI/Camera_de_TV');
const data24d = await response24d.json(); 
setRiCameraTVAll(data24d);


const response25a = await fetch('http://localhost:8081/RER/semaforoTodos/Bocas_de_visita');
const data25a = await response25a.json(); 
setNaoIniciadoBocasVisitaAll(data25a);

const response25b = await fetch('http://localhost:8081/RC/semaforoCancelado/Bocas_de_visita');
const data25b = await response25b.json(); 
setCanceladoBocasVisitaAll(data25b);

const response25c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Bocas_de_visita');
const data25c = await response25c.text(); 
setRrRncBocasVisitaAll(data25c);

const response25d = await fetch('http://localhost:8081/RI/semaforoRI/Bocas_de_visita');
const data25d = await response25d.json(); 
setRiBocasVisitaAll(data25d);


const response26a = await fetch('http://localhost:8081/RER/semaforoTodos/Entradas_de_Ar_Primario');
const data26a = await response26a.json(); 
setNaoIniciadoEntradaArPrimarioAll(data26a);

const response26b = await fetch('http://localhost:8081/RC/semaforoCancelado/Entradas_de_Ar_Primario');
const data26b = await response26b.json(); 
setCanceladoEntradaArPrimarioAll(data26b);

const response26c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Entradas_de_Ar_Primario');
const data26c = await response26c.text(); 
setRrRncEntradaArPrimarioAll(data26c);

const response26d = await fetch('http://localhost:8081/RI/semaforoRI/Entradas_de_Ar_Primario');
const data26d = await response26d.json(); 
setRiEntradaArPrimarioAll(data26d);


const response27a = await fetch('http://localhost:8081/RER/semaforoTodos/Porao');
const data27a = await response27a.json(); 
setNaoIniciadoPoraoAll(data27a);

const response27b = await fetch('http://localhost:8081/RC/semaforoCancelado/Porao');
const data27b = await response27b.json(); 
setCanceladoPoraoAll(data27b);

const response27c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Porao');
const data27c = await response27c.text(); 
setRrRncPoraoAll(data27c);

const response27d = await fetch('http://localhost:8081/RI/semaforoRI/Porao');
const data27d = await response27d.json(); 
setRiPoraoAll(data27d);


const response28a = await fetch('http://localhost:8081/RER/semaforoTodos/Valvula_de_Seguranca');
const data28a = await response28a.json(); 
setNaoIniciadoValvulaSegurancaAll(data28a);

const response28b = await fetch('http://localhost:8081/RC/semaforoCancelado/Valvula_de_Seguranca');
const data28b = await response28b.json(); 
setCanceladoValvulaSegurancaAll(data28b);

const response28c = await fetch('http://localhost:8081/RNC/semaforoRNCRR/Valvula_de_Seguranca');
const data28c = await response28c.text(); 
setRrRncValvulaSegurancaAll(data28c);

const response28d = await fetch('http://localhost:8081/RI/semaforoRI/Valvula_de_Seguranca');
const data28d = await response28d.json(); 
setRiValvulaSegurancaAll(data28d);










 


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
if (naoIniciadoScreen === 0) {
  imageScreen = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
  
} 

if (canceladoScreen > 0) {  
  imageScreen = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
   
} 
if (rrRncScreen === "RNC") {
  imageScreen = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 
} 
if (rrRncScreen === "RR") {  
  imageScreen = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
} 
if (riScreen > 0) { 
  imageScreen = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
  
} 

let imagePenthouse;
if (naoIniciadoPenthouse === 0) {
  imagePenthouse = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoPenthouse > 0) {  
  imagePenthouse = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncPenthouse === "RNC") {
  imagePenthouse = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncPenthouse === "RR") {
  imagePenthouse = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riPenthouse > 0) {
  imagePenthouse = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageShsecundario;
if (naoIniciadoShsecundario === 0) {
  imageShsecundario = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoShsecundario > 0) {  
  imageShsecundario = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncShsecundario === "RNC") {
  imageShsecundario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncShsecundario === "RR") {
  imageShsecundario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riShsecundario > 0) {
  imageShsecundario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageShterciario;
if (naoIniciadoShterciario === 0) {
  imageShterciario = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoShterciario > 0) {  
  imageShterciario = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncShterciario === "RNC") {
  imageShterciario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncShterciario === "RR") {
  imageShterciario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riShterciario > 0) {
  imageShterciario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageBalao;
if (naoIniciadoBalao === 0) {
  imageBalao = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoBalao > 0) {  
  imageBalao = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncBalao === "RNC") {
  imageBalao = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncBalao === "RR") {
  imageBalao = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riBalao > 0) {
  imageBalao = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageShquartenario;
if (naoIniciadoShquartenario === 0) {
  imageShquartenario = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoShquartenario > 0) {  
  imageShquartenario = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncShquartenario === "RNC") {
  imageShquartenario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncShquartenario === "RR") {
  imageShquartenario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riShquartenario > 0) {
  imageShquartenario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageShprimarioI;
if (naoIniciadoShprimarioI === 0) {
  imageShprimarioI = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoShprimarioI > 0) {  
  imageShprimarioI = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncShprimarioI === "RNC") {
  imageShprimarioI = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncShprimarioI === "RR") {
  imageShprimarioI = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riShprimarioI > 0) {
  imageShprimarioI = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageShprimarioII;
if (naoIniciadoShprimarioII === 0) {
  imageShprimarioII = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoShprimarioII > 0) {  
  imageShprimarioII = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncShprimarioII === "RNC") {
  imageShprimarioII = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncShprimarioII === "RR") {
  imageShprimarioII = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riShprimarioII > 0) {
  imageShprimarioII = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}

let imageParedeDagua;
if (naoIniciadoParedeDagua === 0) {
  imageParedeDagua = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoParedeDagua > 0) {  
  imageParedeDagua = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncParedeDagua === "RNC") {
  imageParedeDagua = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncParedeDagua === "RR") {
  imageParedeDagua = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riParedeDagua > 0) {
  imageParedeDagua = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}

let imagePiso;
if (naoIniciadoPiso === 0) {
  imagePiso = <img src={CinzaD} className='ibocas1' alt='CinzaD'/>;
} 
if (canceladoPiso > 0) {  
  imagePiso = <img src={AmareloD} className='ibocas1' alt='AmareloD'/>;
} 
if (rrRncPiso === "RNC") {
  imagePiso = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
} 
if (rrRncPiso === "RR") {
  imagePiso = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
} 
if (riPiso > 0) {
  imagePiso = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
}


let imageBicasSmelt;
if (naoIniciadoBicasSmelt === 0) {
  imageBicasSmelt = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoBicasSmelt > 0) {  
  imageBicasSmelt = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncBicasSmelt === "RNC") {
  imageBicasSmelt = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncBicasSmelt === "RR") {
  imageBicasSmelt = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riBicasSmelt > 0) {
  imageBicasSmelt = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageTeto;
if (naoIniciadoTeto === 0) {
  imageTeto = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoTeto > 0) {  
  imageTeto = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncTeto === "RNC") {
  imageTeto = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncTeto === "RR") {
  imageTeto = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riTeto > 0) {
  imageTeto = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}

let imageEconomizadorI;
if (naoIniciadoEconomizadorI === 0) {
  imageEconomizadorI = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoEconomizadorI > 0) {  
  imageEconomizadorI = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncEconomizadorI === "RNC") {
  imageEconomizadorI = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncEconomizadorI === "RR") {
  imageEconomizadorI = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riEconomizadorI > 0) {
  imageEconomizadorI = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageEconomizadorII;
if (naoIniciadoEconomizadorII === 0) {
  imageEconomizadorII = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoEconomizadorII > 0) {  
  imageEconomizadorII = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncEconomizadorII === "RNC") {
  imageEconomizadorII = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncEconomizadorII === "RR") {
  imageEconomizadorII = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riEconomizadorII > 0) {
  imageEconomizadorII = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageBank;
if (naoIniciadoBank === 0) {
  imageBank = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoBank > 0) {  
  imageBank = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncBank === "RNC") {
  imageBank = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncBank === "RR") {
  imageBank = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riBank > 0) {
  imageBank = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageGrid;
if (naoIniciadoGrid === 0) {
  imageGrid = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoGrid > 0) {  
  imageGrid = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncGrid === "RNC") {
  imageGrid = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncGrid === "RR") {
  imageGrid = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riGrid > 0) {
  imageGrid = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageSopradorFuligem;
if (naoIniciadoSopradorFuligem === 0) {
  imageSopradorFuligem = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoSopradorFuligem > 0) {  
  imageSopradorFuligem = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncSopradorFuligem === "RNC") {
  imageSopradorFuligem = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncSopradorFuligem === "RR") {
  imageSopradorFuligem = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riSopradorFuligem > 0) {
  imageSopradorFuligem = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}

let imageNariz;
if (naoIniciadoNariz === 0) {
  imageNariz = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoNariz > 0) {  
  imageNariz = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncNariz === "RNC") {
  imageNariz = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncNariz === "RR") {
  imageNariz = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riNariz > 0) {
  imageNariz = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageCamarafria;
if (naoIniciadoCamarafria === 0) {
  imageCamarafria = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoCamarafria > 0) {  
  imageCamarafria = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncCamarafria === "RNC") {
  imageCamarafria = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncCamarafria === "RR") {
  imageCamarafria = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riCamarafria > 0) {
  imageCamarafria = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageQueimadores;
if (naoIniciadoQueimadores === 0) {
  imageQueimadores = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoQueimadores > 0) {  
  imageQueimadores = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncQueimadores === "RNC") {
  imageQueimadores = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncQueimadores === "RR") {
  imageQueimadores = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riQueimadores > 0) {
  imageQueimadores = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}

let imageEntradaArSecundario;
if (naoIniciadoEntradaArSecundario === 0) {
  imageEntradaArSecundario = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoEntradaArSecundario > 0) {  
  imageEntradaArSecundario = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncEntradaArSecundario === "RNC") {
  imageEntradaArSecundario = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncEntradaArSecundario === "RR") {
  imageEntradaArSecundario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riEntradaArSecundario > 0) {
  imageEntradaArSecundario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageEntradaArTerciario;
if (naoIniciadoEntradaArTerciario === 0) {
  imageEntradaArTerciario = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoEntradaArTerciario > 0) {  
  imageEntradaArTerciario = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncEntradaArTerciario === "RNC") {
  imageEntradaArTerciario = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncEntradaArTerciario === "RR") {
  imageEntradaArTerciario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riEntradaArTerciario > 0) {
  imageEntradaArTerciario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageDutoseVentiladores;
if (naoIniciadoDutoseVentiladores === 0) {
  imageDutoseVentiladores = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoDutoseVentiladores > 0) {  
  imageDutoseVentiladores = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncDutoseVentiladores === "RNC") {
  imageDutoseVentiladores = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncDutoseVentiladores === "RR") {
  imageDutoseVentiladores = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riDutoseVentiladores > 0) {
  imageDutoseVentiladores = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageCameraTV;
if (naoIniciadoCameraTV === 0) {
  imageCameraTV = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoCameraTV > 0) {  
  imageCameraTV = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncCameraTV === "RNC") {
  imageCameraTV = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncCameraTV === "RR") {
  imageCameraTV = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riCameraTV > 0) {
  imageCameraTV = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageBocasVisita;
if (naoIniciadoBocasVisita === 0) {
  imageBocasVisita = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoBocasVisita > 0) {  
  imageBocasVisita = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncBocasVisita === "RNC") {
  imageBocasVisita = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncBocasVisita === "RR") {
  imageBocasVisita = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riBocasVisita > 0) {
  imageBocasVisita = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imageEntradaArPrimario;
if (naoIniciadoEntradaArPrimario === 0) {
  imageEntradaArPrimario = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoEntradaArPrimario > 0) {  
  imageEntradaArPrimario = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncEntradaArPrimario === "RNC") {
  imageEntradaArPrimario = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncEntradaArPrimario === "RR") {
  imageEntradaArPrimario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riEntradaArPrimario > 0) {
  imageEntradaArPrimario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}


let imagePorao;
if (naoIniciadoPorao === 0) {
  imagePorao = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoPorao > 0) {  
  imagePorao = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncPorao === "RNC") {
  imagePorao = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncPorao === "RR") {
  imagePorao = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riPorao > 0) {
  imagePorao = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}

let imageValvulaSeguranca;
if (naoIniciadoValvulaSeguranca === 0) {
  imageValvulaSeguranca = <img src={CinzaD} className='ivalseg' alt='CinzaD'/>;
} 
if (canceladoValvulaSeguranca > 0) {  
  imageValvulaSeguranca = <img src={AmareloD} className='ivalseg' alt='AmareloD'/>;
} 
if (rrRncValvulaSeguranca === "RNC") {
  imageValvulaSeguranca = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
} 
if (rrRncValvulaSeguranca === "RR") {
  imageValvulaSeguranca = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
} 
if (riValvulaSeguranca > 0) {
  imageValvulaSeguranca = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
}









 


  return (
    
<div className="container1">
  <div className="s1">
    
  <a href='http://localhost:3000/relatorios/Valvula_de_Seguranca' target="_blank">  {imageValvulaSeguranca}   </a>  
    <p className='tvalseg'><b>Válvula de Segurança</b> (MAN / CAL) </p>
  





  
  </div>
  <div className="caldeira"><img src={Caldeira}/></div>
  <div className="s2">
  <a href='http://localhost:3000/relatorios/Teto' target="_blank"> {imageTeto}  </a>
  <p className='tteto'>    <b>Teto</b> (IV) </p> 
   
   
   </div>
  <div className="s3"> 
  <a href='http://localhost:3000/relatorios/Economizador_I' target="_blank">  {imageEconomizadorI}  </a>
  <p className='teconomizadorI'>    <b>EconomizadorI</b> (IV / MEUS / DRO) </p>


  </div>
  <div className="s4">
    
  <a href='http://localhost:3000/relatorios/Economizador_II' target="_blank"> {imageEconomizadorII}</a>
  <p className='teconomizadorII'>    <b>EconomizadorII</b> (IV / MEUS / DRO) </p>  
  </div>
  <div className="s5">
  <a href='http://localhost:3000/relatorios/Bank' target="_blank"> {imageBank}  </a>
  <p className='tbank'>    <b>Bank</b> (IV / MEUS / DRO) </p>


  </div>
  <div className="s6">
  <a href='http://localhost:3000/relatorios/Grid' target="_blank">  {imageGrid}  </a>
   <p className='tgrid'>    <b>GRID</b> (IV / MEUS) </p> 
  </div>
  <div className="s7"> 

  <a href='http://localhost:3000/relatorios/Sopradores_de_Fuligem' target="_blank">  {imageSopradorFuligem}  </a>
  <p className='tsoprasdores'>    <b>Sopradores de Fuligem</b> (IV / RG) </p> 
  </div>
  <div className="s8"> 

  <a href='http://localhost:3000/relatorios/Nariz' target="_blank">  {imageNariz}   </a>
  <p className='tnariz'>    <b>Nariz</b> (IV / MEUS) </p>

  </div>
  <div className="s9">
    
  <a href='http://localhost:3000/relatorios/Camara_Fria' target="_blank"> {imageCamarafria}   </a>
  <p className='tcamarafria'>    <b>Câmara Fria</b> (IV / MEUS) </p>  

  </div>
  <div className="s10">
    
  <a href='http://localhost:3000/relatorios/Queimadores' target="_blank"> {imageQueimadores}   </a>
  <p className='tqueimadores'>    <b>Queimadores</b> (IV / MEUS) </p> 

  </div>
  <div className="s11">
  <a href='http://localhost:3000/relatorios/Entradas_de_Ar_Terciario' target="_blank"> {imageEntradaArTerciario}  </a>
  <p className='tarterciario'>    <b>Entrada de ar Terciário</b> (IV / MEUS / LP) </p> 

  </div>
  <div className="s12">
    
  <a href='http://localhost:3000/relatorios/Entradas_de_Ar_Secundario' target="_blank">  {imageEntradaArSecundario} </a>
  <p className='tarsecundario'>    <b>Entrada de ar Secundário</b> (IV / MEUS / LP) </p>

  </div>
  <div className="s13">
    
  <a href='http://localhost:3000/relatorios/Dutos_e_Ventiladores' target="_blank"> {imageDutoseVentiladores}  </a> 
  <p className='tdutos'>    <b>Dutos e ventiladores</b> (IV) </p>  

  </div>
  <div className="s14">
  <a href='http://localhost:3000/relatorios/Camera_de_TV' target="_blank">  {imageCameraTV}  </a>
  <p className='tcameraTV'>    <b>Câmera de TV</b> (IV / MEUS) </p> 

  </div>
  <div className="s15">
    
  <a href='http://localhost:3000/relatorios/Bocas_de_visita' target="_blank"> {imageBocasVisita}  </a>
  <p className='tbocas'>    <b>Bocas de visita</b> (IV / MEUS) </p>  
  </div>
  <div className="s16">
  <a href='http://localhost:3000/relatorios/Entradas_de_Ar_Primario' target="_blank"> {imageEntradaArPrimario}   </a>
  <p className='tarprimario'>    <b>Entrada de ar Primário</b> (IV / MEUS / LP) </p>

  </div>
  <div className="s17">
  <a href='http://localhost:3000/relatorios/Bicas_de_Smelt' target="_blank"> {imageBicasSmelt} </a>  
  <p className='tbicas'>    <b>Bicas de Smelt</b>  (IV / MEUS / LP) </p>

  </div>
  <div className="s18">
  <a href='http://localhost:3000/relatorios/Porao' target="_blank"> {imagePorao} </a> 
  <p className='tporao'>    <b>Porão</b> (IV) </p>

  </div>
  <div className="a">
    
  <a href='http://localhost:3000/relatorios/Piso' target="_blank">  {imagePiso}   </a> 
  <p className='tpiso1'><b>Piso</b> <br/>  (IV / MEUS / LP) </p>

  </div>


  <div className="a10">
    
  <a href='http://localhost:3000/relatorios/Parede_Dagua' target="_blank"> {imageParedeDagua}  </a>  
  <p className='tpiso1'><b>Parede D'água</b> (IV / MEUS) </p> 
    
  </div>

   
  <div className="a2">

  <a href='http://localhost:3000/relatorios/Penthouse' target="_blank">  { imagePenthouse}   </a> 
  <p className='tpiso1'>   <b>Penthouse</b> (IV / PM) </p>  
  </div>

  <div className="a3">

  <a href='http://localhost:3000/relatorios/Balao' target="_blank"> {imageBalao}  </a> 
  <p className='tpiso1'> <b>Balão</b> (IV) </p>
  </div>
  <div className="a4">

  <a href='http://localhost:3000/relatorios/SH_Secundario' target="_blank"> {imageShsecundario} </a> 
  <p className='tpiso1'> <b>SH Secundário</b> (IV / MEUS / RG) </p> 
  </div>
  <div className="a5">

  <a href='http://localhost:3000/relatorios/SH_Terciario' target="_blank"> {imageShterciario}  </a> 
  <p className='tpiso1'><b>SH Terciário</b> (IV / MEUS) </p> 


  </div>
  <div className="a6">

  <a href='http://localhost:3000/relatorios/SH_Quartenario' target="_blank"> {imageShquartenario}   </a> 
  <p className='tpiso1'><b>SH Quartenário</b> (IV / MEUS) </p> 

  </div>
  <div className="a7">

  <a href='http://localhost:3000/relatorios/SH_Primario_I' target="_blank"> {imageShprimarioI}    </a>
  <p className='tpiso1'><b>SH Primário I</b> (IV / MEUS) </p> 


  </div>
  <div className="a8">

  <a href='http://localhost:3000/relatorios/SH_Primario_II' target="_blank"> {imageShprimarioII}  </a> 
  <p className='tpiso1'><b>SH Primário II</b> (IV / MEUS) </p> 

  </div>
  <div className="a9">
    
  <a href='http://localhost:3000/relatorios/Screen' target="_blank">  {imageScreen} </a> 

  <p className='tpiso1'><b>Screen</b> (IV / MEUS) </p> 


  </div>
  <br/><br/>



</div>


  );
};

export default CaldeiraIndex;
