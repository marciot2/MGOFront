import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'

const columnsExcel = [
  { field: 'idDadosExcel', headerName: 'ID' },
  { field: 'tag', headerName: 'TAG', width: 150 },  
  { field: 'equipamento', headerName: 'Equipamento', width: 300 },
  { field: 'denominacao', headerName: 'Denominacao', width: 300 },
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
          onClick={() => handleAction1(params.id)}
        >
          Selecionar
        </Button>
         
      </strong>
    ),
  },
];

const columnsReport = [
  { field: 'idDadosExcel', headerName: 'ID' },
  { field: 'tag', headerName: 'TAG', width: 150 },  
  { field: 'equipamento', headerName: 'Equipamento', width: 300 },
  { field: 'denominacao', headerName: 'Denominacao', width: 300 },
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
          onClick={() => handleAction1(params.id)}
        >
          Selecionar
        </Button>
         
      </strong>
    ),
  },
];
 
const handleAction1 = (id: any) => {
  console.log('Ação 1 clicada para o ID:', id);

  {alert("Clicou"+id)}

  // Implemente a lógica para a ação 1 aqui
};
const JanelaPrestador= () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8081/dadosExcel/listarTodos")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 380}}>
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
        getRowId={(row) => row.idDadosExcel}
      />


    <br/><br/><br/><br/>

      TESTE

      <br/><br/>

      
      <DataGrid
        rows={tableData}
        columns={columnsReport}
        getRowId={(row) => row.idDadosExcel}
      />



    </div>
  )






}

export default JanelaPrestador;