import Caldeira from '../images/caldeira.png';
import React from 'react';
import '../css/caldeira.css';

 

  
  
     
export default function caldeira() {
  
  const handleButtonClick = () => {
    alert('Button clicked!')
    document.getElementById("absolute").style.backgroundColor = "green";
  };
 

  return (
    <div className="App">
 
 
 <br/>
 <div id="absolute" title="IV - Inspeção Visual"  onClick={handleButtonClick}>  </div>
 
 
 
  



      <div id="container">
      
          <img alt="facebook" width="100%" src={Caldeira} />
          
          </div>
       
    </div>
  );
}
 