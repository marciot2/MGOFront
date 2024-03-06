import   { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Button  } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
 
 
interface DadosExcel {
  idDadosExcel: number;
  // Outras propriedades dos dados
}




const JanelaPrestador= () => {
  let id = "";
  



const handleAction1 = (ids:any) => {
  console.log('Ação 1 clicada para o ID:', ids);
  
   id=ids;
  {alert("Clicou"+id)}

  // Implemente a lógica para a ação 1 aqui
};

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

  const RI = () => {
    {alert("Clicou"+id)}  
    window.open("http://localhost:3000/prestador/Ri/"+id);
  
    
  };

  

  
  const [tableData, setTableData] = useState<DadosExcel[]>([]);
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
        getRowId={(row) => row.idDadosExcel  }
      />


    <br/><br/><br/><br/>

      TESTE
      <button onClick={RI }>RI</button>
       
  
 <Button name="btnRNC" variant="contained" color="success" startIcon={<LibraryAddIcon />} onClick={RI }>
  Novo RI
</Button>

<Button variant="contained" color="success" startIcon={<LibraryAddIcon />} >
  Novo RNC
</Button>
      
<Button variant="contained" color="success" startIcon={<AddCircleIcon />}>
  Novo RR
</Button>
<br/> <br/>



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
 
