 
import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import Filtro from '../outros/filtro';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';


import Documentos from '../outros/documentos';

interface DadosExcel {
  idDadosExcel: number;
  // Outras propriedades dos dados
}


const redirectToGoogle = () => {
  
  console.log("end"+window.location.pathname);
  
};
type Props = {};

const BicasDeSmelt = (props: Props) => {


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


  return (

     
    <div>Bicas de Smelt
  
<br/>
 

  
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

 
  


 <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<Documentos/> 
    </div>
  );
};

export default BicasDeSmelt;