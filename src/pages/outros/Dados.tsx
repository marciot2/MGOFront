import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import GridOnIcon from '@mui/icons-material/GridOn';
import LoginIcon from '@mui/icons-material/Login';



type Props = {};

const Dados = (props: Props) => {
  return (
    <div>
        


        <InputLabel id="demo">Status</InputLabel>
<Select
          labelId="demo"
          id="demo"
          
          label="Status"
          
        >
    <MenuItem value={1}>Balão</MenuItem>
    <MenuItem value={2}>Bank </MenuItem>
    <MenuItem value={3}>Bicas de Smelt </MenuItem>
  </Select>
<br/><br/><br/>
  <Button variant="contained" color="success" startIcon={<GridOnIcon />}>
 Carrgar OS
</Button>

</div>


       
  );
};

export default Dados;