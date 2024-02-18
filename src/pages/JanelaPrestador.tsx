import React, { useState } from 'react';
import axios from 'axios';

 
interface DataItem {
  id: string;
  equipamento: string; 
  tag: string;
  denominacao: string;
  classe: string;
 
}

 
const JanelaPrestador = () => {
  
  const [data, setData] = useState<DataItem[]>([]);


  const RI = () => {

    window.open("http://localhost:3000/prestador/Ri");

    
  };


  const RNC = () => {

    window.open("http://localhost:3000/prestador/Rnc");

    
  };

  const RR = () => {

    window.open("http://localhost:3000/prestador/Rr");

    
  };


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/dadosExcel/listarTodos');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  return (
    <div>
      <h2>Gerenciamento de informações</h2>
      <button onClick={fetchData}>CARREGAR DADOS</button>
      <table>
        <thead>
          <tr>
            <th>Equipamento</th>
            <th>tag</th>
            <th>Denominação</th>
            <th>Class</th>
            <th>Ações</th>  
          </tr>
        </thead>
      
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>  
              <td>{item.equipamento}</td>
              <td>{item.tag}</td>
              <td>{item.denominacao}</td>
              <td>{item.classe}</td>
             <td> <button onClick={RI }>RI</button>    <button onClick={RNC}>RNC</button>   <button onClick={RR}>RR</button> </td>
            
        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JanelaPrestador;
