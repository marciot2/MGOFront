import React, { useEffect, useState } from 'react';
import FornoCal1 from '../../images/FornoCal/FornoCal.png';
 
import '../../css/fornocal.css';
import VerdeD from '../../images/VERDED.png';
import VermelhoD from '../../images/VERMELHOD.png';


type Props = {};

const FornoCal = (props: Props) => {

  const [base1All, setBase1All] = useState(null);
  const [base2All, setBase2All] = useState(null);
  const [base3All, setBase3All] = useState(null);
  const [base4All, setBase4All] = useState(null);
  const [base5All, setBase5All] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response1 = await fetch('http://localhost:8081/RI/semaforoTodos/Base_1/LIBERADO');
        const data1 = await response1.json();
        setBase1All(data1);

        const response2 = await fetch('http://localhost:8081/RI/semaforoTodos/Base_2/LIBERADO');
        const data2 = await response2.json();
        setBase2All(data2);

        const response3 = await fetch('http://localhost:8081/RI/semaforoTodos/Base_3/LIBERADO');
        const data3 = await response3.json();
        setBase3All(data3);

        const response4 = await fetch('http://localhost:8081/RI/semaforoTodos/Base_4/LIBERADO');
        const data4 = await response4.json();
        setBase4All(data4);

        const response5 = await fetch('http://localhost:8081/RI/semaforoTodos/Base_5/LIBERADO');
        const data5 = await response5.json();
        setBase5All(data5);


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



  let imageBase1;
  if (base1All === 1) {
    imageBase1 = <img src={VerdeD} className='ibocas1' alt='VerdeD' />;
    console.log("VERDE");
  } else {
    imageBase1 = <img src={VermelhoD} className='ibocas1' alt='VermelhoD' />;
  }

  let imageBase2;
  if (base2All === 1) {
    imageBase2 = <img src={VerdeD} className='ibocas1' alt='VerdeD' />;
  } else {
    imageBase2 = <img src={VermelhoD} className='ibocas1' alt='VermelhoD' />;
  }

  let imageBase3;
  if (base3All === 1) {
    imageBase3 = <img src={VerdeD} className='ibocas1' alt='VerdeD' />;
  } else {
    imageBase3 = <img src={VermelhoD} className='ibocas1' alt='VermelhoD' />;
  }

  let imageBase4;
  if (base4All === 1) {
    imageBase4 = <img src={VerdeD} className='ibocas1' alt='VerdeD' />;
  } else {
    imageBase4 = <img src={VermelhoD} className='ibocas1' alt='VermelhoD' />;
  }

  let imageBase5;
  if (base5All === 1) {
    imageBase5 = <img src={VerdeD} className='ibocas1' alt='VerdeD' />;
  } else {
    imageBase5 = <img src={VermelhoD} className='ibocas1' alt='VermelhoD' />;
  }
 
 

  return (
    <div>

      <div className="containerFC">
        <div className="image-container">
          <img src={FornoCal1} alt="Forno Caldeira" className="forno-img" />
        </div>
        </div>

        <div className="columns-container">
          <div className="column1"><a href='http://localhost:3000/relatorios/Base_5' target="_blank">  {imageBase5}    </a>
            <p className='fctext'><b>Base 5</b> <br />Partículas Magnéticas
              <br /> Ultrassom </p>
          </div>

          <div className="column1"><a href='http://localhost:3000/relatorios/Base_4' target="_blank">  {imageBase4}  </a>
            <p className='fctext'><b>Base 4</b> <br />Partículas Magnéticas
              <br /> Ultrassom </p>
          </div>

          <div className="column1"><a href='http://localhost:3000/relatorios/Base_3' target="_blank">  {imageBase3}  </a>
            <p className='fctext'><b>Base 3</b> <br />Partículas Magnéticas
              <br /> Ultrassom </p>
          </div>

          <div className="column1"><a href='http://localhost:3000/relatorios/Base_2' target="_blank">  {imageBase2}  </a>
            <p className='fctext'><b>Base 2</b> <br />Partículas Magnéticas
              <br /> Ultrassom </p>
          </div>

          <div className="column1"><a href='http://localhost:3000/relatorios/Base_1' target="_blank">  {imageBase1}  </a>
            <p className='fctext'><b>Base 1</b> <br />Partículas Magnéticas
              <br /> Ultrassom </p>
          </div>
        </div>
       



      <br /><br /><br /><br /><br /><br />



    </div>


  );
};

export default FornoCal;