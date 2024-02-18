import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Button, OutlinedInput, InputAdornment, IconButton, Input, Snackbar } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Visibility, VisibilityOff } from '@mui/icons-material';
type Empresa = {
    idEmpresa: number;
    nome: string;
};

const NewPassword = () => {
  const [open, setOpen] = React.useState(false);
    const [showPassword1, setShowPassword1] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);
    const [uuid, setUuid] = useState('');
    const [password, setPassword] = useState('');
    const [repeteSenha, setRepeteSenha] = useState('');
    const [hash, setHash] = useState('');
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [userData, setUserData] = useState({
      senha: '',
      repeteSenha: '',
      hash: ''
  });

  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };



    useEffect(() => {
        axios.get('http://localhost:8081/empresa/listarTodos')
            .then(response => {
               // setEmpresas(response.data);
            })
            .catch(error => {
                console.log('Erro ao buscar empresas', error);
            });        

    },   
    []);

    const handleSelectChange = (event: SelectChangeEvent) => {
      //  setSelectedEmpresa(event.target.value);
    };


    useEffect(() => {
        const currentUrl = new URL(window.location.href);
        const pathnameParts = currentUrl.pathname.split('/');
        const extractedUuid = pathnameParts[pathnameParts.length - 1];
        setHash(extractedUuid);
      }, []);




      const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }

      }




    const handleSubmit = () => {
      const data = {
          password: password,
          hash: hash
           
      };


      if (password === repeteSenha){

        setIsPasswordMatch(true);

        axios.post('http://localhost:8081/empresa/alterarSenha', data)
        .then(response => {
            // Handle the response upon successful request *
            console.log('Data sent successfully', response.data); 
        })
        .catch(error => {
            // Handle errors here
            console.error('Error sending data', error);
        });


      
 




      }




     //POST dados Empresa
      //axios.post('http://localhost:8081/empresa/sendemail', data)
     
          





          
  };






    

    return (
        <div>
            <h3>Autualizar senha de aceso ao Sistema: </h3>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '60ch' } }} noValidate autoComplete="off">
            
            <TextField
                    id="hash"
                    label="Hash"
                    variant="outlined"
                    value={hash}
                    disabled ={ true}
                    onChange={(e) => setHash(e.target.value)}
                />
                <br/>
               
                
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Digite sua senha</InputLabel>
          <OutlinedInput
            id="senha"
            type={showPassword1 ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword1}
                  onMouseDown={handleMouseDownPassword1}
                  edge="end"
                >
                  {showPassword1 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Digite sua senha"
            value={password}
            
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>





               
          
           <br/>


           <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Repita sua senha</InputLabel>
          <OutlinedInput
            id="RepeteSenha"
            type={showPassword2 ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                >
                  {showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Repita sua senha"
            value={repeteSenha}
            
            onChange={(e) => setRepeteSenha(e.target.value)}
          />
        </FormControl>
           

 
       
                
                <br/>
           
            </Box>
            <br/>
            <Button variant="contained" color="info" startIcon={<ChangeCircleIcon/>} onClick={handleSubmit} >
                Alterar Senha
            </Button>
        </div>
    );
          
};
 
export default NewPassword;
