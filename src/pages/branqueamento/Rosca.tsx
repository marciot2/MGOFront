import React, { useEffect } from "react";

const OpenDesdeHtml: React.FC = () => {
  useEffect(() => {
    window.open('http://localhost:3000/index1.html');
  }, []);

  return null; // Não renderiza nada
};

export default OpenDesdeHtml;
