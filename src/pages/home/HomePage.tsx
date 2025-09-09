import React from 'react';
import page from '../../images/PaginaInicial.jpg';

import { useNavigate } from 'react-router-dom';

type Props = {};
/*https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4 */
const HomePage = (props: Props) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate('/caldeira'); // Redireciona para a nova página
  };


  return (
    <div> 
  


    </div>
  );
};

export default HomePage;