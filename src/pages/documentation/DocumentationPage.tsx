import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event:any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Por favor, selecione um arquivo.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(
        'http://localhost:8081/dadosExcel/upload',
        formData,
        {
          headers: {
            
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      alert('Arquivo enviado com sucesso!');
      console.log('Resposta:', response);
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
      alert('Falha no envio do arquivo.'+error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar Arquivo</button>
    </div>
  );
}

export default FileUpload;
