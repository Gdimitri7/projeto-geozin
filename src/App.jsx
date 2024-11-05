import React from "react";
const Navbar = () => {
  return (
    <div>
      {/* Nome no topo e HOME alinhado à direita */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // Ajusta o posicionamento entre PINARQ e HOME
          alignItems: "center",
          height: "80px",
          padding: "0 20px", // Adiciona espaçamento lateral
          backgroundColor: "#A5FDD0",
        }}
      >
        <div style={{ flex: "1" }} /> {/* Espaço vazio para empurrar PINARQ para o centro */}
        
        <a
          style={{
            color: "#010324",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "none",
          }}
          href="#"
        >
          PINARQ
        </a>
        
        <a style={{ color: "#010324", fontSize: "8px", textAlign: "right", flex: "1" }} href="#">
          HOME
        </a>
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
            fontSize: "12px",
            padding: "4px",
            listStyleType: "none",
            margin: 0,
          }}
        >
          <li style={{ padding: "0 16px" }}>
            <a style={{ color: "#010324", borderBottom: "2px solid #010324" }} href="/sobrePinarq">
              Sobre a PINARQ
            </a>
          </li>
          <li style={{ padding: "0 16px", borderLeft: "1px solid #3CA670" }}>
            <a style={{ color: "#010324", borderBottom: "2px solid #010324" }} href="#">
              Sobre Nós
            </a>
          </li>
          <li style={{ padding: "0 16px", borderLeft: "1px solid #3CA670" }}>
            <a style={{ color: "#010324", borderBottom: "2px solid #010324" }} href="#">
              Projetos
            </a>
          </li>
          <li style={{ padding: "0 16px", borderLeft: "1px solid #3CA670" }}>
            <a style={{ color: "#010324", borderBottom: "2px solid #010324" }} href="#">
              Contato
            </a>
          </li>
        </ul>
      </div>

      {/* Container principal com fundo colorido */}
      <div
        style={{
          backgroundColor: "#FFEDED",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start", // Alinha o texto no topo verticalmente
          padding: "40px 40px", // Define um padding maior para posicionar o texto no topo e à esquerda
        }}
      >
        {/* Texto alinhado à esquerda e mais para cima */}
        <h3 style={{ fontSize: "40px", color: "#FE9C9C", margin: "0", textAlign: "left" }}>
          Há um gosto de vitória e encanto <br /> na condição de ser simples.
          Não é <br />preciso muito para ser muito.
          <p style={{ fontSize: "15px", color: "#5B5858", marginTop: "8px" }}>Lina Bo Bardi</p>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
