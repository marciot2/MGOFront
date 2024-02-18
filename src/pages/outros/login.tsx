import { Button, TextField } from '@mui/material';
import React from 'react';
import GridOnIcon from '@mui/icons-material/GridOn';
import LoginIcon from '@mui/icons-material/Login';
type Props = {};

const Login = (props: Props) => {
  return (
    <div>
        
        <TextField color='warning' label='E-mail' variant="outlined"> </TextField>       
        <br/>
        <br/>
        <TextField color='warning' label='Senha' variant="outlined"> </TextField>       
        <br/>
        <br/>

        <Button variant="contained" color="info" startIcon={<LoginIcon />}>
  Login
</Button>
        </div>
  );
};

export default Login;