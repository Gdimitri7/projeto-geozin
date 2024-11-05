import React from "react";
import { useNavigate } from 'react-router-dom'; // Importando useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Inicializando useNavigate

  const handleNavigate = (path) => {
    navigate(path, { replace: true }); // Usando replace para navegar
  };

  return (
    <div>
      {/* Nome no topo e HOME alinhado à direita */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80px",
          padding: "0 20px",
          backgroundColor: "#A5FDD0",
        }}
      >
        <div style={{ flex: "1" }} />
        
        <div
          style={{
            color: "#010324",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "none",
            fontFamily: "Lastica",
            cursor: "pointer" // Adicionando cursor pointer para indicar que é clicável
          }}
          onClick={() => handleNavigate("/")} // Usando handleNavigate para a página inicial
        >
          PINARQ
        </div>
        
        <div 
          style={{ color: "#010324", fontSize: "8px", textAlign: "right", flex: "1", cursor: "pointer" }} 
          onClick={() => handleNavigate("/")} // Usando handleNavigate para a página inicial
        >
          HOME
        </div>
      </div>

      {/* Lista de links abaixo */}
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#A5FDD0",
            borderBottom: "3px solid #3CA670",
            borderTop: "3px solid #3CA670",
            fontSize: "20px",
            padding: "8px",
            listStyleType: "none",
            margin: 0,
          }}
        >
          <li style={{ padding: "0 16px" }}>
            <div 
              style={{ color: "#010324", cursor: "pointer" }} 
              onClick={() => handleNavigate("/SobrePinarq")} // Usando handleNavigate para Sobre a PINARQ
            >
              Sobre a PINARQ
            </div>
          </li>
          <li style={{ padding: "0 16px", borderLeft: "1px solid #3CA670" }}>
            <div 
              style={{ color: "#010324", cursor: "pointer" }} 
              onClick={() => handleNavigate("/sobreNos")} // Usando handleNavigate para Sobre Nós
            >
              Sobre Nós
            </div>
          </li>
          <li style={{ padding: "0 16px", borderLeft: "1px solid #3CA670" }}>
            <div 
              style={{ color: "#010324", cursor: "pointer" }} 
              onClick={() => handleNavigate("/projetos")} // Usando handleNavigate para Projetos
            >
              Projetos
            </div>
          </li>
          <li style={{ padding: "0 16px", borderLeft: "1px solid #3CA670" }}>
            <div 
              style={{ color: "#010324", cursor: "pointer" }} 
              onClick={() => handleNavigate("/contato")} // Usando handleNavigate para Contato
            >
              Contato
            </div>
          </li>
        </ul>
      </div>

      {/* Container principal com fundo colorido */}
      <div
        style={{
          backgroundColor: "#FFEDED",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          padding: "40px 40px",
        }}
      >
        <h3 style={{ fontSize: "35px", color: "#FE9C9C", margin: "0", textAlign: "left" }}>
          HÁ UM GOSTO DE VITÓRIA E ENCANTO <br /> NA CONDIÇÃO DE SER SIMPLES.
          NÃO É <br />PRECISO MUITO PARA SER MUITO.
          <p style={{ fontSize: "15px", color: "#5B5858", marginTop: "8px" }}>Lina Bo Bardi</p>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
