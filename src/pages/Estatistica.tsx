import '../../src/css/estatistica.css'


import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

type Props = {};

const Estatistica = (props: Props) => {
  const [titulo, setTitulo] = useState<string>("Caldeira de Recuperação");
  const [liberados, setLiberados] = useState<number>(0);
  const [pendentes, setPendentes] = useState<number>(0);
  const [programados, setProgramados] = useState<number>(0);
  const [rncaberto, setRNCAberto] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1a = await fetch(
          "http://localhost:8081/RER/verificaTotalLiberados/CR"
        );
        const data1a = await response1a.json();
        setLiberados(data1a);




        const response2 = await fetch(
          "http://localhost:8081/RER/verificaEquipamentos/CR"
        );
        const data2 = await response2.json();
        setProgramados(data2);

        setPendentes(data2 - data1a);


        const response3a = await fetch(
          "http://localhost:8081//RNC/countRNCAberto"
        );
        const data3a = await response3a.json();
        setRNCAberto(data3a);




      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const total = liberados + pendentes;

  const options = {
    plugins: {
      title: {
        display: true,
        text: titulo
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            const value = tooltipItem.raw;
            const percentage = Math.round((value / total) * 100) + "%";
            return `${tooltipItem.label}: ${percentage}`;
          }
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false  
  };

  const data = {
    labels: ["Pendentes", "Liberados"],
    datasets: [
      {
        label: "Equipamentos",
        data: [pendentes, liberados],
        backgroundColor: ["rgb(255, 0, 0)", "rgb(0, 0, 255)"],
        hoverOffset: 4
      }
    ]
  };

  return (


<div className="containerE">
  <div className="e1">Total de Equipamentos programados: </div>
  <div className="e2">Total de Equipamentos inspecionados: </div>
  <div className="e3">Não conformidade em espera:</div>
  <div className="e4">Total de não conformidades detectadas: </div>
  <div className="e1a"> <b>{programados}</b></div>
  <div className="e2a"> <b> {liberados} </b></div>
  <div className="e3a">{rncaberto}</div>
  <div className="e4a">0</div>
  <div className="e5">Equipamentos Liberados</div>
  <div className="e5a">0</div>
  <div className="e5b">0</div>
  <div className="e6">Equipamentos pendentes</div>
  <div className="e6a">0</div>
  <div className="e6b">0</div>
  <div className="et"><h3> <b>Caldeira de Recuperação </b></h3></div>
  <div className="e7"> 


  <div style={{ width: "70%", height: "300px" }}>

    

<Pie data={data} options={options} />
</div>


</div>
  
</div>


  );
};

export default Estatistica;
