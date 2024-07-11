import React, { useEffect, useState } from 'react';

import Caldeira from '../../images/CaldeiraRecuperacao/Caldeira.png'
import AmareloD from '../../images/AMARELOD.png';
import VerdeD from '../../images/VERDED.png';
import VermelhoD from '../../images/VERMELHOD.png';
import CinzaD from '../../images/CINZAD.png';
import '../../css/teste.css';
import EconomizadorII from './EconomizadorII';
 

type Props = {};

const CaldeiraIndex = (props: Props) => {
/*Esquerda Caldeira */
  const [screenAll, setScreenAll] = useState(null);
  const [penthouseAll, setPenthouseAll] = useState(null);
  const [shsecundarioAll, setSHSecundarioAll] = useState(null);
  const [shterciarioAll, setSHTerciarioAll] = useState(null);
  const [balaoAll, setBalaoAll] = useState(null);
  const [shquartenarioAll, setSHQuartenarioAll] = useState(null);
  const [shprimarioIAll, setSHPrimarioIAll] = useState(null); 
  const [shprimarioIIAll, setSHPrimarioIIAll] = useState(null); 
  const [paredeDaguaAll, setParedeDaguaAll] = useState(null);  
  const [pisoAll, setPisoAll] = useState(null);  
   
/*Direita Calderia */
  const [bicasSmeltAll, setBicasSmeltAll] = useState(null);
  const [tetoAll, setTetoAll] = useState(null);
  const [economizadorIAll, setEconomizadorIAll] = useState(null);
  const [economizadorIIAll, setEconomizadorIIAll] = useState(null);
  const [bankAll, setBankAll] = useState(null);
  const [gridAll, setGridAll] = useState(null);
  const [sopradorFuligemAll, setsopradorFuligemAll] = useState(null);
  const [narizAll, setNarizAll] = useState(null);
  const [camaraFriaAll, setCamaraFriaAll] = useState(null);
  const [queimadoresAll, setQueimadoresAll] = useState(null);
  const [entradaArSecundarioAll, setEntradaArSecundarioAll] = useState(null);
  const [entradaArTerciarioAll, setEntradaArTerciarioAll] = useState(null);
  const [dutoseVentiladoresAll, setDutoseVentiladoresAll] = useState(null);
  const [cameraTVAll, setCameraTVAll] = useState(null);
  const [bocasVisitaAll, setBocasVisitaAll] = useState(null);
  const [entradaArPrimarioAll, setEntradaArPrimarioAll] = useState(null);
  const [poraoAll, setPoraoAll] = useState(null);
  const [valvulaSegurancaAll, setValvulaSegurancaAll] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch('http://localhost:8081/RI/semaforoTodos/Screen/LIBERADO');
        const data1 = await response1.json(); 
        setScreenAll(data1);  

        const response2 = await fetch('http://localhost:8081/RI/semaforoTodos/Penthouse/LIBERADO');
        const data2 = await response2.json(); 
        setPenthouseAll(data2); 

        const response3 = await fetch('http://localhost:8081/RI/semaforoTodos/Balao/LIBERADO');
        const data3 = await response3.json(); 
        setBalaoAll(data3);

        const response4 = await fetch('http://localhost:8081/RI/semaforoTodos/SH_Secundario/LIBERADO');
        const data4 = await response4.json(); 
        setSHSecundarioAll(data4);

        const response5 = await fetch('http://localhost:8081/RI/semaforoTodos/SH_Terciario/LIBERADO');
        const data5 = await response5.json(); 
        setSHTerciarioAll(data5);


        const response6 = await fetch('http://localhost:8081/RI/semaforoTodos/SH_Quartenario/LIBERADO');
        const data6 = await response6.json(); 
        setSHQuartenarioAll(data6);


        const response7 = await fetch('http://localhost:8081/RI/semaforoTodos/SH_Primario_I/LIBERADO');
        const data7 = await response7.json(); 
        setSHPrimarioIAll(data7);

        const response8 = await fetch('http://localhost:8081/RI/semaforoTodos/SH_Primario_II/LIBERADO');
        const data8 = await response8.json(); 
        setSHPrimarioIIAll(data8);

        const response9 = await fetch('http://localhost:8081/RI/semaforoTodos/Parede_Dagua/LIBERADO');
        const data9 = await response9.json(); 
        setParedeDaguaAll(data9);


        const response10 = await fetch('http://localhost:8081/RI/semaforoTodos/Piso/LIBERADO');
        const data10 = await response10.json(); 
        setPisoAll(data10);

        const response11 = await fetch('http://localhost:8081/RI/semaforoTodos/Valvula_de_Seguranca/LIBERADO');
        const data11 = await response11.json(); 
        setValvulaSegurancaAll(data11);

        const response12 = await fetch('http://localhost:8081/RI/semaforoTodos/Teto/LIBERADO');
        const data12 = await response12.json(); 
        setTetoAll(data12);

        const response13 = await fetch('http://localhost:8081/RI/semaforoTodos/Economizador_I/LIBERADO');
        const data13 = await response13.json(); 
        setEconomizadorIAll(data13);

        const response14 = await fetch('http://localhost:8081/RI/semaforoTodos/Economizador_II/LIBERADO');
        const data14 = await response14.json(); 
        setEconomizadorIIAll(data14);


        const response15 = await fetch('http://localhost:8081/RI/semaforoTodos/Bank/LIBERADO');
        const data15 = await response15.json(); 
        setBankAll(data15);

        const response16 = await fetch('http://localhost:8081/RI/semaforoTodos/Grid/LIBERADO');
        const data16 = await response16.json(); 
        setGridAll(data16);

        const response17 = await fetch('http://localhost:8081/RI/semaforoTodos/Sopradores_de_Fuligem/LIBERADO');
        const data17 = await response17.json(); 
        setsopradorFuligemAll(data17);

        const response18 = await fetch('http://localhost:8081/RI/semaforoTodos/Nariz/LIBERADO');
        const data18 = await response18.json(); 
        setNarizAll(data18);


        const response19 = await fetch('http://localhost:8081/RI/semaforoTodos/Camara_Fria/LIBERADO');
        const data19 = await response19.json(); 
        setCamaraFriaAll(data19);


        const response20 = await fetch('http://localhost:8081/RI/semaforoTodos/Camara_Fria/LIBERADO');
        const data20 = await response20.json(); 
        setCamaraFriaAll(data20);

        const response21 = await fetch('http://localhost:8081/RI/semaforoTodos/Queimadores/LIBERADO');
        const data21 = await response21.json(); 
        setQueimadoresAll(data21);

        const response22 = await fetch('http://localhost:8081/RI/semaforoTodos/Entradas_de_Ar_Terciario/LIBERADO');
        const data22 = await response22.json(); 
        setEntradaArTerciarioAll(data22);

        const response23 = await fetch('http://localhost:8081/RI/semaforoTodos/Entradas_de_Ar_Secundario/LIBERADO');
        const data23 = await response23.json(); 
        setEntradaArSecundarioAll(data23);

        const response24 = await fetch('http://localhost:8081/RI/semaforoTodos/Dutos_e_Ventiladores/LIBERADO');
        const data24 = await response24.json(); 
        setDutoseVentiladoresAll(data24);

        const response25 = await fetch('http://localhost:8081/RI/semaforoTodos/Camera_de_TV/LIBERADO');
        const data25 = await response25.json(); 
        setCameraTVAll(data25);

        const response26 = await fetch('http://localhost:8081/RI/semaforoTodos/Bocas_de_visita/LIBERADO');
        const data26 = await response26.json(); 
        setBocasVisitaAll(data26);

        const response27 = await fetch('http://localhost:8081/RI/semaforoTodos/Entradas_de_Ar_Primario/LIBERADO');
        const data27 = await response27.json(); 
        setEntradaArPrimarioAll(data27);

        const response28 = await fetch('http://localhost:8081/RI/semaforoTodos/Bicas_de_Smelt/LIBERADO');
        const data28 = await response28.json(); 
        setBicasSmeltAll(data28);

        const response29 = await fetch('http://localhost:8081/RI/semaforoTodos/Porao/LIBERADO');
        const data29 = await response29.json(); 
        setPoraoAll(data29);




      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();  

    const interval = setInterval(() => {
      fetchData();  
    }, 45000);  

    return () => clearInterval(interval); 
  }, []); 

 
 let imageScreen;
 if (screenAll === 1) {
  imageScreen = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageScreen = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }


 let imagePenthouse;
 if (penthouseAll === 1) {
  imagePenthouse = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imagePenthouse = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }


 let imageBalao;
 if (balaoAll === 1) {
  imageBalao = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageBalao = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }


 let imageSHSecundario;
 if (shsecundarioAll === 1) {
  imageSHSecundario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageSHSecundario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }

 
 let imageSHTerciario;
 if (shterciarioAll === 1) {
  imageSHTerciario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageSHTerciario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }


 
 let imageSHQuartenario;
 if (shquartenarioAll === 1) {
  imageSHQuartenario = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageSHQuartenario = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }
 

 let imageSHPrimarioI;
 if (shprimarioIAll === 1) {
  imageSHPrimarioI = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageSHPrimarioI = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }
 
 let imageSHPrimarioII;
 if (shprimarioIIAll === 1) {
  imageSHPrimarioII = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageSHPrimarioII = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }
 
 let imageParedeDagua;
 if (paredeDaguaAll === 1) {
  imageParedeDagua = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imageParedeDagua = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }
 
 
 let imagePiso;
 if (pisoAll === 1) {
  imagePiso = <img src={VerdeD} className='ibocas1' alt='VerdeD'/>;
 } else {
  imagePiso = <img src={VermelhoD} className='ibocas1' alt='VermelhoD'/>;
 }


 let imageValvulaSeguranca;
 if (valvulaSegurancaAll === 1) {
  imageValvulaSeguranca = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageValvulaSeguranca = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageTeto;
 if (tetoAll === 1) {
  imageTeto = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageTeto = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageEconomizadorI;
 if (economizadorIAll === 1) {
  imageEconomizadorI = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageEconomizadorI = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageEconomizadorII;
 if (economizadorIIAll === 1) {
  imageEconomizadorII = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageEconomizadorII = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageBank;
 if (bankAll === 1) {
  imageBank = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageBank = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageGrid;
 if (gridAll === 1) {
  imageGrid = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageGrid = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageSopradoresFuligem;
 if (sopradorFuligemAll === 1) {
  imageSopradoresFuligem = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageSopradoresFuligem = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageNariz;
 if (narizAll === 1) {
  imageNariz = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageNariz = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }



 let imageCamaraFria;
 if (camaraFriaAll === 1) {
  imageCamaraFria = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageCamaraFria = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }

 let imageQueimadores;
 if (queimadoresAll === 1) {
  imageQueimadores = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageQueimadores = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }

 let imageEntradaArTerciaria;
 if (entradaArTerciarioAll === 1) {
  imageEntradaArTerciaria = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageEntradaArTerciaria = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageEntradaArSecundario;
 if (entradaArSecundarioAll === 1) {
  imageEntradaArSecundario = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageEntradaArSecundario = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }

 let imageDutosVentiladores;
 if (dutoseVentiladoresAll === 1) {
  imageDutosVentiladores = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageDutosVentiladores = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageCameraTV;
 if (cameraTVAll === 1) {
  imageCameraTV = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageCameraTV = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }



 let imagebocasVisita;
 if (bocasVisitaAll === 1) {
  imagebocasVisita = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imagebocasVisita = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }


 let imageEntradaArPrimario;
 if (entradaArPrimarioAll === 1) {
  imageEntradaArPrimario = <img src={VerdeD} className='ibicas' alt='VerdeD'/>;
 } else {
  imageEntradaArPrimario = <img src={VermelhoD} className='ibicas' alt='VermelhoD'/>;
 }


 let imageBicasSmelt;
 if (bicasSmeltAll === 1) {
  imageBicasSmelt = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imageBicasSmelt = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
 }




 let imagePorao;
 if (poraoAll === 1) {
  imagePorao = <img src={VerdeD} className='ivalseg' alt='VerdeD'/>;
 } else {
  imagePorao = <img src={VermelhoD} className='ivalseg' alt='VermelhoD'/>;
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

  <a href='http://localhost:3000/relatorios/Sopradores_de_Fuligem' target="_blank">  {imageSopradoresFuligem}  </a>
  <p className='tsoprasdores'>    <b>Sopradores de Fuligem</b> (IV / RG) </p> 
  </div>
  <div className="s8"> 

  <a href='http://localhost:3000/relatorios/Nariz' target="_blank">  {imageNariz}   </a>
  <p className='tnariz'>    <b>Nariz</b> (IV / MEUS) </p>

  </div>
  <div className="s9">
    
  <a href='http://localhost:3000/relatorios/Camara_Fria' target="_blank"> {imageCamaraFria}   </a>
  <p className='tcamarafria'>    <b>Câmara Fria</b> (IV / MEUS) </p>  

  </div>
  <div className="s10">
    
  <a href='http://localhost:3000/relatorios/Queimadores' target="_blank"> {imageQueimadores}   </a>
  <p className='tqueimadores'>    <b>Queimadores</b> (IV / MEUS) </p> 

  </div>
  <div className="s11">
  <a href='http://localhost:3000/relatorios/Entradas_de_Ar_Terciario' target="_blank"> {imageEntradaArTerciaria}  </a>
  <p className='tarterciario'>    <b>Entrada de ar Terciário</b> (IV / MEUS / LP) </p> 

  </div>
  <div className="s12">
    
  <a href='http://localhost:3000/relatorios/Entradas_de_Ar_Secundario' target="_blank">  {imageEntradaArSecundario} </a>
  <p className='tarsecundario'>    <b>Entrada de ar Secundário</b> (IV / MEUS / LP) </p>

  </div>
  <div className="s13">
    
  <a href='http://localhost:3000/relatorios/Dutos_e_Ventiladores' target="_blank"> {imageDutosVentiladores}  </a> 
  <p className='tdutos'>    <b>Dutos e ventiladores</b> (IV) </p>  

  </div>
  <div className="s14">
  <a href='http://localhost:3000/relatorios/Camera_de_TV' target="_blank">  {imageCameraTV}  </a>
  <p className='tcameraTV'>    <b>Câmera de TV</b> (IV / MEUS) </p> 

  </div>
  <div className="s15">
    
  <a href='http://localhost:3000/relatorios/Bocas_de_visita' target="_blank"> {imagebocasVisita}  </a>
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

  <a href='http://localhost:3000/relatorios/SH_Secundario' target="_blank"> {imageSHSecundario} </a> 
  <p className='tpiso1'> <b>SH Secundário</b> (IV / MEUS / RG) </p> 
  </div>
  <div className="a5">

  <a href='http://localhost:3000/relatorios/SH_Terciario' target="_blank"> {imageSHTerciario}  </a> 
  <p className='tpiso1'><b>SH Terciário</b> (IV / MEUS) </p> 


  </div>
  <div className="a6">

  <a href='http://localhost:3000/relatorios/SH_Quartenario' target="_blank"> {imageSHQuartenario}   </a> 
  <p className='tpiso1'><b>SH Quartenário</b> (IV / MEUS) </p> 

  </div>
  <div className="a7">

  <a href='http://localhost:3000/relatorios/SH_Primario_I' target="_blank"> {imageSHPrimarioI}    </a>
  <p className='tpiso1'><b>SH Primário I</b> (IV / MEUS) </p> 


  </div>
  <div className="a8">

  <a href='http://localhost:3000/relatorios/SH_Primario_II' target="_blank"> {imageSHPrimarioII}  </a> 
  <p className='tpiso1'><b>SH Primário II</b> (IV / MEUS) </p> 

  </div>
  <div className="a9">
    
  <a href='http://localhost:3000/relatorios/Screen' target="_blank">  {imageScreen} </a> 

  <p className='tpiso1'><b>Screen</b> (IV / MEUS) </p> 


  </div>
</div>


  );
};

export default CaldeiraIndex;
