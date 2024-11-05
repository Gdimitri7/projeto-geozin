import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

// Componente para a página Home
const Home = () => (
  <div style={{
    backgroundColor: "#FFEDED",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    padding: "40px 40px",
  }}>
    <h3 style={{ fontSize: "35px", color: "#FE9C9C", margin: "0", textAlign: "left" }}>
      HÁ UM GOSTO DE VITÓRIA E ENCANTO <br /> NA CONDIÇÃO DE SER SIMPLES.
      NÃO É <br />PRECISO MUITO PARA SER MUITO.
      <p style={{ fontSize: "15px", color: "#5B5858", marginTop: "8px" }}>Lina Bo Bardi</p>
    </h3>
  </div>
);

// Componente para a página "Sobre a PINARQ"
const SobrePinarq = () => (
  <div style={{
    backgroundColor: "#FFEDED",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    padding: "40px 40px",
  }}>
    <h2>Sobre a PINARQ</h2>
    <p>A PINARQ é uma empresa dedicada à arquitetura e design, focada em criar espaços que inspiram e conectam as pessoas. Com uma abordagem inovadora e sustentável, buscamos transformar a maneira como as pessoas interagem com seus ambientes.</p>
  </div>
);

// Componente para a página "Sobre Nós"
const SobreNos = () => (
  <div style={{
    backgroundColor: "#FFEDED",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    padding: "40px 40px",
  }}>
    <h2>Sobre Nós</h2>
    <p>Conheça nossa equipe de arquitetos e designers que estão comprometidos em criar projetos únicos e inspiradores.</p>
  </div>
);

// Componente para a página "Projetos"
const Projetos = () => (
  <div style={{
    backgroundColor: "#FFEDED",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    padding: "40px 40px",
  }}>
    <h2>Projetos</h2>
    <p>Explore nossos projetos mais recentes e descubra como transformamos ideias em realidade.</p>
  </div>
);

// Componente para a página "Contato"
const Contato = () => (
  <div style={{
    backgroundColor: "#FFEDED",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    padding: "40px 40px",
  }}>
    <h2>Contato</h2>
    <p>Entre em contato conosco através do e-mail: contato@pinarq.com ou pelo telefone: (XX) XXXX-XXXX.</p>
  </div>
);

// Componente Navbar
const Navbar = ({ setActivePage }) => {
  return (
    <div>
      {/* Nome no topo e HOME alinhado à direita */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        padding: "0 20px",
        backgroundColor: "#A5FDD0",
      }}>
        <div style={{ flex: "1" }} />
        <a
          style={{
            color: "#010324",
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: "none",
            fontFamily: "Lastica",
          }}
          href="#"
          onClick={() => setActivePage("home")} // Navega para a página inicial
        >
          PINARQ
        </a>
        <a
          style={{ color: "#010324", fontSize: "8px", textAlign: "right", flex: "1" }}
          href="#"
          onClick={() => setActivePage("home")} // Navega para a página inicial
        >
          HOME
        </a>
      </div>
      {/* Lista de links abaixo */}
      <div>
        <ul style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#A5FDD0",
          borderBottom: "3px solid #3CA670",
          borderTop: "3px solid #3CA670",
          fontSize: "20px",
          padding: "8px",
          listStyleType: "none",
          margin: 0,
        }}>
          <li style={{ padding: "0 8%", margin: "0 10px" }}>
            <a
              style={{ color: "#010324" }}
              href="#"
              onClick={() => setActivePage("sobrePinarq")}
            >
              Sobre a PINARQ
            </a>
          </li>
          <li style={{ padding: "0 8%", margin: "0 10px", borderLeft: "1px solid #3CA670" }}>
            <a
              style={{ color: "#010324" }}
              href="#"
              onClick={() => setActivePage("sobreNos")}
            >
              Sobre Nós
            </a>
          </li>
          <li style={{ padding: "0 8%", margin: "0 10px", borderLeft: "1px solid #3CA670" }}>
            <a
              style={{ color: "#010324" }}
              href="#"
              onClick={() => setActivePage("projetos")}
            >
              Projetos
            </a>
          </li>
          <li style={{ padding: "0 8%", margin: "0 10px", borderLeft: "1px solid #3CA670" }}>
            <a
              style={{ color: "#010324" }}
              href="#"
              onClick={() => setActivePage("contato")}
            >
              Contato
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Adiciona a validação de props
Navbar.propTypes = {
  setActivePage: PropTypes.func.isRequired, // Valida que setActivePage é uma função e é obrigatória
};

const App = () => {
  const [activePage, setActivePage] = useState("home"); // Estado para a página ativa

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "sobrePinarq":
        return <SobrePinarq />;
      case "sobreNos":
        return <SobreNos />;
      case "projetos":
        return <Projetos />;
      case "contato":
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      <div style={{
        backgroundColor: "#FFEDED",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        padding: "40px 40px",
      }}>
        {renderPage()} {/* Renderiza a página ativa */}
      </div>
    </div>
  );
};

export default App;
