import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Button } from '@mui/material';
import ContactMailIcon from '@mui/icons-material/ContactMail';

type Empresa = {
    idEmpresa: number;
    nome: string;
};

const EmpresaComponent = () => {
    const [email, setEmail] = useState('');
    const [responsavel, setResponsavel] = useState('');
    const [empresas, setEmpresas] = useState<Empresa[]>([]);
    const [selectedEmpresa, setSelectedEmpresa] = useState('');
    const [nome, setNome] = useState('');
    const [userData, setUserData] = useState({
      nome: '',
      email: '',
      responsavel: ''
  });

    useEffect(() => {
        axios.get('http://localhost:8081/empresa/listarTodos')
            .then(response => {
                setEmpresas(response.data);
            })
            .catch(error => {
                console.log('Erro ao buscar empresas', error);
            });        

    },   
    []);

    const handleSelectChange = (event: SelectChangeEvent) => {
        setSelectedEmpresa(event.target.value);
    };

    const handleSubmit = () => {
      const data = {
          email: email,
          responsavel: responsavel,
          nome: selectedEmpresa
      };
     //POST dados Empresa
      //axios.post('http://localhost:8081/empresa/sendemail', data)
      axios.post('http://localhost:8081/empresa/salvar', data)
          .then(response => {
              // Handle the response upon successful request
              console.log('Data sent successfully', response.data);
          })
          .catch(error => {
              // Handle errors here
              console.error('Error sending data', error);
          });

          





          
  };






    

    return (
        <div>
            <h3>Cadastro de prestadoras de serviços</h3>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '60ch' } }} noValidate autoComplete="off">
                <TextField
                    id="email"
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <TextField
                    id="responsavel"
                    label="Responsável"
                    variant="outlined"
                    value={responsavel}
                    onChange={(e) => setResponsavel(e.target.value)}
                />
                <br/>
                <FormControl fullWidth>
                    <InputLabel id="empresa-select-label">Empresa</InputLabel>
                    <Select
                        labelId="empresa-select-label"
                        id="empresa-select"
                        value={selectedEmpresa}
                        label="Empresa"
                        onChange={handleSelectChange}
                    >
                        {empresas.map(empresa => (
                            <MenuItem key={empresa.idEmpresa} value={empresa.nome}>
                                {empresa.nome}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <br/>
            <Button variant="contained" color="info" startIcon={<ContactMailIcon/>} onClick={handleSubmit} >
                Validar E-mail
            </Button>
        </div>
    );
};

export default EmpresaComponent;
