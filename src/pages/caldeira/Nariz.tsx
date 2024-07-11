import React, { useEffect, useState } from 'react';
import Filtro from '../outros/filtro';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { PieChart } from '@mui/x-charts/PieChart';

interface DadosExcel {
  idDadosExcel: number;
  // Outras propriedades dos dados
}

const usePieChartColors = () => {
  const colors = ['red', 'green', 'yellow'];
  return colors;
};



type Props = {};

const Nariz = (props: Props) => {
  const colors = usePieChartColors();

  const [tableData, setTableData] = useState<DadosExcel[]>([]);

 
 
  useEffect(() => {
  
       
  
    fetch("http://localhost:8081/dadosExcel/listarTodos")
      .then((data) => data.json())
      .then((data) => setTableData(data))
      
  
  }, [])

  const columnsExcel = [
    { field: 'idDadosExcel', headerName: 'ID' },
    { field: 'tag', headerName: 'TAG', width: 150 },  
    { field: 'equipamento', headerName: 'Equipamento', width: 300 },
    { field: 'denominacao', headerName: 'Denominação', width: 300 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 150,
      renderCell: (params: { id: any; }) => (
        <strong>
          {/* Botão 1 */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={() => handleTabelaDadosExcel(params.id)}
          >
            Selecionar
          </Button>
           
        </strong>
      ),
    },
  ];

  let id = "";

  const handleTabelaDadosExcel = (ids:any) => {
    console.log('Ação 1 clicada para o ID:', ids);
   
     id=ids;
     
     
  };


  const data = [
    { id: 0, value: 10, label: 'series A', color: '#FF5733' },
    { id: 1, value: 15, label: 'series B', color: '#33FF57' },
    { id: 2, value: 20, label: 'series C', color: '#3357FF' },
  ];

    // Calcula o valor total para determinar as porcentagens
  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  // Formata os dados para incluir as porcentagens nos rótulos
  const formattedData = data.map(item => ({
    ...item,
    label: `${item.label} (${((item.value / totalValue) * 100).toFixed(2)}%)`,
  }));


  return (
    <div>Nariz

 
<DataGrid
        rows={tableData}
        columns={columnsExcel}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={(row) => row.idDadosExcel  }
      />

<br/><br/><br/><br/>

<PieChart
     series={[
      {
        data: formattedData,
      },
    ]}
      width={400}
      height={200}
    />  


    </div>
  );
};

export default Nariz;