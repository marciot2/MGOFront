import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const DataDisplayComponent = () => {
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);
    const [data4, setData4] = useState(null);
    const [data5, setData5] = useState(null);
    const [data6, setData6] = useState(null);
    const [data7, setData7] = useState(null);
    const [data8, setData8] = useState(null);
    const [data9, setData9] = useState(null);
    const [data10, setData10] = useState(null);



  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8081/dadosExcel/registros')
      .then(response1 => {
        setData1(response1.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });

      axios.get('http://localhost:8081/dadosExcel/estanquiedade')
      .then(response2 => {
        setData2(response2.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });


      axios.get('http://localhost:8081/dadosExcel/lp')
      .then(response3 => {
        setData3(response3.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });


      axios.get('http://localhost:8081/dadosExcel/endoscopia')
      .then(response4 => {
        setData4(response4.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });

      
      axios.get('http://localhost:8081/dadosExcel/pm')
      .then(response5 => {
        setData5(response5.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });


      axios.get('http://localhost:8081/dadosExcel/rapel')
      .then(response6 => {
        setData6(response6.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });


      axios.get('http://localhost:8081/dadosExcel/us')
      .then(response7 => {
        setData7(response7.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });

      axios.get('http://localhost:8081/dadosExcel/meus')
      .then(response8 => {
        setData8(response8.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });


      axios.get('http://localhost:8081/dadosExcel/vi')
      .then(response9 => {
        setData9(response9.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });


      axios.get('http://localhost:8081/dadosExcel/ve')
      .then(response10 => {
        setData10(response10.data); // Set the data in state
        setIsLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error); // Catch and set any errors occurred during fetching
        setIsLoading(false);
      });






      
  }, []);

  if (isLoading) return <p>Loading...</p>;
 

  return (
    <div>
       
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={2}>
  <Item>
   <h1>{JSON.stringify(data1, null, 2)}</h1> 
   Registros Processados 
   </Item>
  </Grid>

  <Grid item xs={2}>
    <Item>
    <h1>{JSON.stringify(data2, null, 2)}</h1>
         Estanquiedade 


    </Item>
  </Grid>
  <Grid item xs={2}>
    <Item>
    <h1>  {JSON.stringify(data3, null, 2)}</h1>
         LP
      
      
       </Item>
  </Grid>
  <Grid item xs={2}>
    <Item>
      
    <h1>{JSON.stringify(data4, null, 2)}</h1>
         Endoscopia
      
      </Item>
  </Grid>

  <Grid item xs={2}>
    <Item>
      
    <h1>{JSON.stringify(data5, null, 2)}</h1>
         PM
      
      </Item>
  </Grid>

  <Grid item xs={2}>
    <Item>
      
   
    <h1>{JSON.stringify(data6, null, 2)}</h1>
         Rapel
      </Item>
  </Grid>
 
  <Grid item xs={2}>
    <Item>
      
    <h1>{JSON.stringify(data7, null, 2)}</h1>
         Ultrassom

      </Item>
  </Grid>

  <Grid item xs={2}>
    <Item>
      
    <h1>{JSON.stringify(data8, null, 2)}</h1>
         MEUS
      
      </Item>
  </Grid>

  <Grid item xs={2}>
    <Item>
      
    <h1>{JSON.stringify(data9, null, 2)}</h1>
         VI
      
      </Item>
  </Grid>


  <Grid item xs={2}>
    <Item>
      
    <h1>{JSON.stringify(data10, null, 2)}</h1>
         VE
      
      </Item>
  </Grid>
 
</Grid>

      
      
      
 
       


 
     

      

      


        


       
        

        


        


    </div>
  );
}

export default DataDisplayComponent;
