 
 import { useParams } from 'react-router-dom';
 
 
import { useLocation } from 'react-router-dom';
import Filtro from '../outros/filtro';
 
import React, { useEffect, useState } from 'react';
import FileUpload from '../outros/upload';
import DataFetcher from '../outros/avg';
import SingleRecordViewer from '../outros/avg';
 

type Props = {};
 
 
 



const Balao = (props: Props) => {
  
  const [query, setQuery] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.pathname );
    setQuery(params+"////");
  }, []);
  



   


  return (
    <div>  
{query}  
<br/>  111    
 
 
<Filtro/>        
 
<br/><br/><br/><br/>

<FileUpload></FileUpload>

<br/><br/><br/><br/>


<SingleRecordViewer></SingleRecordViewer>




 

 

 

    </div> 
  );
};

export default Balao;