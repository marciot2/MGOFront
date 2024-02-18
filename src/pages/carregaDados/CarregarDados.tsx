 
 
 
 
import { useLocation } from 'react-router-dom';
 
 
import React, { useEffect, useState } from 'react';
 
import SingleRecordViewer from '../outros/avg';
import FileUpload from '../outros/upload';
 

type Props = {};
 
 
 



const  CarregarDados = (props: Props) => {

  const [query, setQuery] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.pathname );
    setQuery(params+"////");
  }, []);
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('balao');


  return (
    <div>  
       
 <h2>Carregamento de dados - Planilha</h2>
<br/><br/><br/> 

<FileUpload></FileUpload>

<br/><br/> 


<SingleRecordViewer></SingleRecordViewer>




 

 

 

    </div> 
  );
};

export default CarregarDados;