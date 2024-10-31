import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import pinarqImage from "./assets/pinarq.jpg";
import './styles/fonts.css';



function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ position: "absolute", top: 20, right: 20 }}>
        <button onClick={() => navigate(-1)} style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}>
          <FaArrowLeft />
        </button>
      </div>
      <h1 style={{ textAlign: "center", alignItems: "center" }}>Bem-vindo à PINARQ</h1>
      <p style={{ color: "#FE9C9C", fontFamily: 'Sanchez-Regular'}}>Há um gosto de vitória e encanto na condição de ser simples. Não é preciso muito para ser muito.</p>
    </div>
  );
}

function SobrePINARQ() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", textAlign: "center", width: "100%" }}>
      <h2>Sobre a PINARQ</h2>
      <p>Um escritório diferente, que nasceu num momento de crise, porém de oportunidades. Projetos influenciados pela arte e criatividade.</p>
    </div>
  );
}

function SobreNos() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", textAlign: "center", width: "100%" }}>
      <h2>Sobre Nós</h2>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <img src={pinarqImage} alt="Imagem da PINARQ" style={{ width: "20%", height: "auto", borderRadius: "8px", marginRight: "16px" }} />
        <h1>GEOVANA REGINA</h1>
      </div>
    </div>
  );
}

function Projeto() {
  return <h2 style={{ width: "100%", textAlign: "center" }}>Projeto</h2>;
}

function Contatos() {
  return <h2 style={{ width: "100%", textAlign: "center" }}>Contatos</h2>;
}

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== "/" && (
        <Link to="/" style={{ flexGrow: 1, textAlign: "center", textDecoration: "none", color: "black" }}>Home</Link>
      )}
      <div style={{
        display: "flex",
        padding: "1rem",
        alignItems: "center",
        backgroundColor: "#A5FDD0",
        width: "100%",
        borderBottom: "7px solid #3CA670",
        borderTop: "7px solid #3CA670",
        height: "15px",
      }}>
        <Link to="/sobre-pinarq" style={{ flexGrow: 1, textAlign: "center", textDecoration: "none", color: "black" , borderRight: "1px solid black" }}>Sobre a PINARQ</Link>
        <Link to="/sobre-nos" style={{ flexGrow: 1, textAlign: "center", textDecoration: "none", color: "black", borderRight: "1px solid black" }}>Sobre Nós</Link>
        <Link to="/projeto" style={{ flexGrow: 1, textAlign: "center", textDecoration: "none", color: "black", borderRight: "1px solid black" }}>Projeto</Link>
        <Link to="/contatos" style={{ flexGrow: 1, textAlign: "center", textDecoration: "none", color: "black" }}>Contatos</Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <header style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#C3FFE0",
        color: "black",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        fontWeight: "bold",
        fontSize: "24px",
        zIndex: 1000,
      }}>
        <div
            style={{
                padding: "10px 0",
                height: "69px",
                textAlign: "center",
                fontFamily: 'Lastica, sans-serif', // Certifique-se de que "Lastica" está instalado
                fontSize: "55px",
            }}
        >
            PINARQ
        </div>
        <Navbar />
      </header>

      <div style={{ paddingTop: "120px", height: "500px"}}>
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
