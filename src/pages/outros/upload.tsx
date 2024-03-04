import React, { useState } from 'react';
import axios from 'axios';
 
 
 
 
import { Button,  Input,  InputLabel } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import FileUploadTwoToneIcon from '@mui/icons-material/FileUploadTwoTone';
import FormControl from '@mui/material';


   

const FileUpload: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
     const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

  
 
    
    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                // Substitua com a URL do seu endpoint de upload
                const uploadUrl = 'http://localhost:8081/dadosExcel/excel';

                const response = await axios.post(uploadUrl, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log('Arquivo enviado com sucesso:', response.data);
                // Adicione aqui mais lógica após o upload ser bem sucedido
               
                if(response.status === 200)
                {
                    console.log('OPA', response.status);
                    

                 } 


               


            } catch (error) {
                console.error('Erro no upload do arquivo:', error);
                // Adicione aqui sua lógica de tratamento de erro
            }
        }
    };


    return (<div>

 
     
    
            <InputLabel htmlFor="file-upload"> </InputLabel>
            <Input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                sx={{ mb: 1 }}
            />
           

 
 
 

       
        <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!selectedFile}
        startIcon={<FileUploadTwoToneIcon/>}
        style={{ textTransform: "none", padding: "18px 50px" }}
    >
        Enviar Arquivo
    </Button>

    
            <InputLabel> </InputLabel>
             
 
  
            </div>

 
            </div>

)};
  

export default FileUpload;
 

 