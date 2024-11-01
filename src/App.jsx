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
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={pinarqImage} // Replace with the actual image path
            alt="Imagem de Geovana Regina"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginRight: "16px",
              border: "7px solid #759080",
            }}
          />
          <h2 style={{ textAlign: "left" }}>GEOVANA REGINA</h2>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 style={{ marginLeft: "300px" }}>GABRIELLE RIZZO</h2>{" "}
          {/* Ajuste a margem direita do h2 */}
          <img
            src={pinarqImage} // Replace with the actual image path
            alt="Imagem de Outra Pessoa"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "7px solid #759080",
              marginLeft: "16px",
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={pinarqImage} // Replace with the actual image path
            alt="Imagem de Geovana Regina"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginRight: "16px",
              border: "7px solid #759080",
            }}
          />
          <h2 style={{ textAlign: "left" }}>NAYARA ALVES</h2>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 style={{ marginLeft: "283px" }}>BEATRIZ SANTANA</h2>{" "}
          {/* Ajuste a margem direita do h2 */}
          <img
            src={pinarqImage} // Replace with the actual image path
            alt="Imagem de Outra Pessoa"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "7px solid #759080",
              marginLeft: "16px",
            }}
          />
        </div>
        <div>
          <hr style={{ width: "200%", border: "1px solid #759080" }}></hr>
        </div>
        <div></div>
      </div>

      <h2>GEOVANA REGINA</h2>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <img
          src={pinarqImage}
          alt="Imagem de Geovana Regina"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
            marginRight: "60px",
          }}
        ></img>
        <p>
          Arquiteta formada no ifsp em 2010, com experiência em projetos de
          grande porte.
        </p>
      </div>

      <h2 style={{ marginLeft: "80%" }}>GABRIELLE RIZZO</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: "36%", marginRight: "60px" }}>
          Formada em arquitetura e urbanismo no ano de 2015, com experiência em
          interiores
        </p>
        <img
          src={pinarqImage}
          alt="Imagem de Geovana Regina"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        ></img>
      </div>

      <h2>NAYARA ALVES</h2>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <img
          src={pinarqImage}
          alt="Imagem de Geovana Regina"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
            marginRight: "60px",
          }}
        ></img>
        <p>
          Formada em arquitetura e urbanismo no ano de 2015, com experiência em
          conforto e interiores.
        </p>
      </div>

      <h2 style={{ marginLeft: "80%" }}>BEATRIZ SANTANA</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginLeft: "30%", marginRight: "50px" }}>
          Arquiteta e urbanista formada em 2016. com experiência em paisagismo e
          planejamento urbano.
        </p>
        <img
          src={pinarqImage}
          alt="Imagem de Geovana Regina"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "7px solid #759080",
          }}
        ></img>
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
