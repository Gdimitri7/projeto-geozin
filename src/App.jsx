import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import pinarqImage from "./assets/pinarq.jpg";
import "./styles/fonts.css";
import projetoImage from "./assets/projeto.jpg";

// Componente Header
function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#C3FFE0",
        color: "black",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "24px",
        zIndex: 1000,
        padding: "10px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Lastica, sans-serif",
            fontSize: "55px",
            marginRight: "auto",
          }}
        >
          PINARQ
        </div>
        {location.pathname !== "/" && (
          <button
            onClick={() => navigate("/")}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#FE9C9C",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              marginRight: "auto",
            }}
          >
            <FaArrowLeft style={{ marginRight: "5px" }} />
            <span
              style={{
                fontFamily: "Sanchez-Regular",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              HOME
            </span>
          </button>
        )}
      </div>
    </header>
  );
}

// Página inicial
function HomeScreen() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>PINARQ.</h1>
      <p
        style={{
          color: "#FE9C9C",
          fontFamily: "Sanchez-Regular, sans-serif",
          fontSize: "50px",
          textAlign: "center",
        }}
      >
        Há um gosto de vitória e encanto na condição de ser simples. Não é
        preciso muito para ser muito.
      </p>
    </div>
  );
}

// Página Sobre a PINARQ
function SobrePINARQ() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "100%",
        textAlign: "center",
        width: "100%",
      }}
    >
      <h2>Sobre a PINARQ</h2>
      <p>
        Um escritório diferente, que nasceu num momento de crise, porém de
        oportunidades. Projetos influenciados pela arte e criatividade.
      </p>
    </div>
  );
}
function SobreNos() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Sobre Nós</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        {/* Definindo o layout para cada membro da equipe */}
        {[
          { name: "GEOVANA REGINA", image: pinarqImage },
          { name: "GABRIELLE RIZZO", image: pinarqImage },
          { name: "NAYARA ALVES", image: pinarqImage },
          { name: "BEATRIZ SANTANA", image: pinarqImage },
        ].map((membro, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              justifyContent: "center",
            }}
          >
            {index % 2 === 0 && (
              <img
                src={membro.image}
                alt={`Imagem de ${membro.name}`}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  border: "7px solid #759080",
                  marginRight: "16px",
                }}
              />
            )}
            <h2 style={{ textAlign: "center", margin: "10px" }}>{membro.name}</h2>
            {index % 2 !== 0 && (
              <img
                src={membro.image}
                alt={`Imagem de ${membro.name}`}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  border: "7px solid #759080",
                  marginLeft: "16px",
                }}
              />
            )}
          </div>
        ))}

        <hr style={{ width: "100%", border: "1px solid #759080", gridColumn: "1 / -1" }} />

        {/* Seção de descrição de cada membro */}
        {[
          {
            name: "GEOVANA REGINA",
            description: "Arquiteta formada no IFSP em 2010, com experiência em projetos de grande porte.",
          },
          {
            name: "GABRIELLE RIZZO",
            description: "Formada em arquitetura e urbanismo em 2015, com experiência em interiores.",
          },
          {
            name: "NAYARA ALVES",
            description: "Formada em arquitetura e urbanismo em 2015, com experiência em conforto e interiores.",
          },
          {
            name: "BEATRIZ SANTANA",
            description: "Arquiteta e urbanista formada em 2016, com experiência em paisagismo e planejamento urbano.",
          },
        ].map((membro, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: window.innerWidth < 768 ? "column" : "row",
              marginBottom: "20px",
              textAlign: window.innerWidth < 768 ? "center" : "left",
            }}
          >
            {index % 2 === 0 && (
              <img
                src={pinarqImage}
                alt={`Imagem de ${membro.name}`}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  border: "7px solid #759080",
                  marginRight: window.innerWidth < 768 ? "0" : "60px",
                  marginBottom: window.innerWidth < 768 ? "10px" : "0",
                }}
              />
            )}
            <div style={{ maxWidth: "400px", margin: "auto" }}>
              <h2>{membro.name}</h2>
              <p>{membro.description}</p>
            </div>
            {index % 2 !== 0 && (
              <img
                src={pinarqImage}
                alt={`Imagem de ${membro.name}`}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  border: "7px solid #759080",
                  marginLeft: window.innerWidth < 768 ? "0" : "60px",
                  marginTop: window.innerWidth < 768 ? "10px" : "0",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Página Projeto
function Projeto() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "100%",
        textAlign: "center",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "90px",
        backgroundColor: "#FFEDED",
      }}
    >
      {/* Primeira linha de imagens com textos */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 1"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Residência luamanda
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 2"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Residência Geni
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 3"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Residência cube
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 4"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Cabana madera
        </p>
      </div>

      {/* Segunda linha de imagens com textos */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 5"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Residência querença
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 6"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Percuso 22
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 7"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Residência duo
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "16px",
        }}
      >
        <img
          src={projetoImage}
          alt="Imagem do Projeto 8"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        />{" "}
        <p style={{ backgroundColor: "white", fontSize: "20px" }}>
          Residência vista bela
        </p>
      </div>
    </div>
  );
}

// Página Contatos
function Contatos() {
  return <h2 style={{ width: "100%", textAlign: "center" }}>Contatos</h2>;
}

// Barra de navegação
function Navbar() {
  return (
    <nav style={{ position: "fixed", top: "100px", width: "100%" }}>
      <div
        style={{
          display: "flex",
          padding: "1rem",
          alignItems: "center",
          backgroundColor: "#A5FDD0",
          borderBottom: "7px solid #3CA670",
          borderTop: "7px solid #3CA670",
        }}
      >
        <Link
          to="/sobre-pinarq"
          style={{
            flexGrow: 1,
            textAlign: "center",
            textDecoration: "none",
            color: "black",
            borderRight: "1px solid black",
          }}
        >
          Sobre a PINARQ
        </Link>
        <Link
          to="/sobre-nos"
          style={{
            flexGrow: 1,
            textAlign: "center",
            textDecoration: "none",
            color: "black",
            borderRight: "1px solid black",
          }}
        >
          Sobre Nós
        </Link>
        <Link
          to="/projeto"
          style={{
            flexGrow: 1,
            textAlign: "center",
            textDecoration: "none",
            color: "black",
            borderRight: "1px solid black",
          }}
        >
          Projeto
        </Link>
        <Link
          to="/contatos"
          style={{
            flexGrow: 1,
            textAlign: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          Contatos
        </Link>
      </div>
    </nav>
  );
}

// Componente principal do aplicativo
export default function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      {/* Ajuste para que o conteúdo fique visível abaixo do Header e Navbar */}
      <div
        style={{
          paddingTop: "160px",
          height: "calc(100vh - 160px)",
          overflowY: "auto",
          width: "100%",
        }}
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/sobre-pinarq" element={<SobrePINARQ />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
      </div>
    </Router>
  );
}
