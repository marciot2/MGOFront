import '../../css/LayoutSemaforos.css'; 
import * as React from 'react';
import './styles.css';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone'; 
 
import {   useParams } from 'react-router-dom';
import {BACKEND} from "../../config"; 
 
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
 

interface RI {
  equipamento: string;
  tag: string;
  eempresa: string;
  denominacao: string;
 
  
   
};


     
export default function RelatorioInspecao() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
        setSelectedFile(event.target.files[0]);
    }
};

const [open, setOpen] = useState(false);

const handleClick = () => {
  setOpen(true);
};

const [filesRI, setFilesRI] = useState<string[]>([]);
const [filesRR, setFilesRR] = useState<string[]>([]);
const [filesRNC, setFilesRNC] = useState<string[]>([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
 



const [idRI, setIdRI] = useState<string>('');
const [links, setLinks] = useState<string[]>([]);
 
 

  const [isDisabled, setIsDisabled] = useState(true);

  const [idRelatorioInspecao, setidRelatorioInspecao] = React.useState('');
  const [age, setAge] = React.useState('');
  const [data, setData] = useState<RI>();
  const [equipamento, setEquipamento] = useState(data?.equipamento);
  const [denominacao, setDenominacao] = useState(data?.denominacao);
  const [tag, setTag] = useState('');
  const [status, setStatus] = useState('');
  const [statusRI, setStatusRI] = useState('');
  const [numero,setNumero] = useState('');
  const [date,setDate] = useState('');
  const [problemasObservados, setproblemasObservados] = useState('.');
  const [recomendacoesReparo, setrecomendacoesReparo] = useState('.');
  const [localProblema, setlocalProblema] = useState('');
  const [evento, setEvento] = useState('PG 2024');
  const [noTAG, setNoTAG] = useState('');
  const [responsavelInspecao, setresponsavelInspecao] = useState(data?.eempresa);
  const [responsavelManutencao, setresponsavelManutencao] = useState('');
  const [dadosExcel, setdadosExcel] = useState<string>('');
  const { id } = useParams(); 
  const { etag } = useParams();
 
 
  useEffect(() => {
    handleRefresh();
  }, [etag]);
   




const handleRefresh = async () => {
  setLoading(true);
  setError(null);
   console.log(etag);
   console.log(id);
    try {
      const [response1, response2, response3] = await Promise.all([
        axios.get<string[]>(BACKEND+`/RI/listaRISemaforo1/${etag}`),
        axios.get<string[]>(BACKEND+`/RNC/listaRNCSemaforo/${etag}`),
        axios.get<string[]>(BACKEND+`/RR/listaRRSemaforo/${etag}`)
      ]);
      setFilesRI(response1.data);
      setFilesRNC(response2.data);
      setFilesRR(response3.data);
    } catch (err) {
      setError('Erro ao buscar os arquivos');
    } finally {
      setLoading(false);
    }
  };


 

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setIdRI(event.target.value);
};
      
 

 

 



 
 
  return (

 

    <div >
 
    <h3> <b> Relatórios - Eldorado Brasil </b></h3>
    
<br/>
<br/>
<h4>Equipamento: {etag}</h4>
<br/><br/> <br/> 

   
<h3>Relatório de Inspeção: {etag}</h3>

<div>
  <br />
  {filesRI.map((file, index) => {
    // Remove o prefixo e pega só o nome do arquivo
    const displayName = file.replace("https://pgcaldeiraforca.s3.amazonaws.com/", "");

    return (
      <li key={index}>
        <a href={file} target="_blank" rel="noopener noreferrer">
          {displayName}
        </a>
      </li>
    );
  })}
  <br />
</div>
<br />
<br />
<h3>Relatório de Não Conformidade: {etag}</h3>

<div>
  <br />
  {filesRNC.map((file, index) => {
    const displayName = file.replace("https://pgcaldeiraforca.s3.amazonaws.com/", "");
    return (
      <li key={index}>
        <a href={file} target="_blank" rel="noopener noreferrer">
          {displayName}
        </a>
      </li>
    );
  })}
  <br />
</div>
<br /><br />
<h3>Relatório de Reparo: {etag}</h3>

<div>
  <br />
  {filesRR.map((file, index) => {
    // pega apenas o último segmento da URL (ex.: "arquivo.pdf")
    const displayName = file.split("/").pop() || file;

    return (
      <li key={index}>
        <a href={file} target="_blank" rel="noopener noreferrer">
          {displayName}
        </a>
      </li>
    );
  })}
  <br />
</div>
<br /><br />
</div>

  
    
  );
}

 