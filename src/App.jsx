import React, { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

// Componente para a página Home
const Home = () => (
  <div
    style={{
      backgroundColor: "#FFEDED",
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      padding: "40px 40px",
    }}
  >
    <h3
      style={{
        fontSize: "35px",
        color: "#FE9C9C",
        margin: "0",
        textAlign: "left",
      }}
    >
      HÁ UM GOSTO DE VITÓRIA E ENCANTO <br /> NA CONDIÇÃO DE SER SIMPLES. NÃO É{" "}
      <br />
      PRECISO MUITO PARA SER MUITO.
      <p style={{ fontSize: "15px", color: "#5B5858", marginTop: "8px" }}>
        Lina Bo Bardi
      </p>
    </h3>
  </div>
);

// Componente para a página "Sobre a PINARQ"
const SobrePinarq = () => (
  <div
    style={{
      backgroundColor: "#FFEDED",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",  // Centraliza horizontalmente
      padding: "40px",
      marginLeft: "6%",
    }}
  >
    <p style={{ fontSize: "35px", color: "#5B5858", textAlign: "center" }}>
      Um escritório diferente, que nasceu num momento de crise, porém de
      oportunidades.<br /> Projetos fortemente influenciados pela arte e pela
      criatividade, que buscam acima<br /> de tudo o conforto e a segurança, para se
      sentir em casa.
    </p>
  </div>
);

// Componente para a página "Sobre Nós"
const SobreNos = () => (
  <div
    style={{
      backgroundColor: "#FFEDED",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "40px",
      gap: "20px",
      paddingTop: "20px",
    }}
  >
    {/* Primeira linha de fotos e nomes */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Permite que as fotos se ajustem em telas menores
        gap: "60px",
        justifyContent: "center",
        maxWidth: "80%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flex: "1 1 300px", // Permite que cada foto ocupe 300px, mas possa crescer em telas grandes
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "60%",
            border: "8px solid #759585",
          }}
          src="/src/assets/fotos-perfil/geovana.jpg"
          alt="Foto de perfil"
        />
        <h3 style={{ fontSize: "30px", color: "#5B5858", whiteSpace: "nowrap", textAlign: "center" }}>
          Geovana Regina
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flex: "1 1 300px",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "60%",
            border: "8px solid #E0CCD8",
          }}
          src="/src/assets/fotos-perfil/geovana.jpg"
          alt="Foto de perfil"
        />
        <h3 style={{ fontSize: "30px", color: "#5B5858", whiteSpace: "nowrap", textAlign: "center" }}>
          Grabielle Rizzo
        </h3>
      </div>
    </div>

    {/* Segunda linha de fotos e nomes */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "60px",
        justifyContent: "center",
        maxWidth: "80%",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flex: "1 1 300px",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "60%",
            border: "8px solid #F8CCCC",
          }}
          src="/src/assets/fotos-perfil/geovana.jpg"
          alt="Foto de perfil"
        />
        <h3 style={{ fontSize: "30px", color: "#5B5858", whiteSpace: "nowrap", textAlign: "center" }}>
          Nayara Alves
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flex: "1 1 300px",
        }}
      >
        <img
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "60%",
            border: "8px solid #FEECC0",
          }}
          src="/src/assets/fotos-perfil/geovana.jpg"
          alt="Foto de perfil"
        />
        <h3 style={{ fontSize: "30px", color: "#5B5858", whiteSpace: "nowrap", textAlign: "center" }}>
          Beatriz Santana
        </h3>
      </div>
    </div>

    {/* Linha separadora */}
    <hr
      style={{
        width: "130%",
        maxWidth: "80%",
        border: "1px solid #5B5858",
        margin: "40px 0",
      }}
    />

    {/* Texto sobre a PINARQ */}
    <div style={{ textAlign: "center", maxWidth: "80%" }}>
  <h2 style={{ fontSize: "30px", color: "#5B5858" }}>Sobre a PINARQ</h2>
</div>

{/* Foto da Geovana e a outra pessoa */}
<div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginTop: "40px", width: "100%" }}>
  {/* Geovana */}
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "45%" }}>
    <img
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "60%",
        border: "8px solid #759585",
      }}
      src="/src/assets/fotos-perfil/geovana.jpg"
      alt="Foto de Geovana"
    />
    <h3 style={{ fontSize: "25px", color: "#5B5858", whiteSpace: "nowrap" }}>Geovana Regina</h3>
    <p style={{ fontSize: "16px", color: "#5B5858", textAlign: "center" }}>
    Arquiteta formada no ifsp em 2010, com experiência em projetos de grande porte.
    </p>
  </div>

  {/* Outra pessoa */}
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "45%" }}>
    <img
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "60%",
        border: "8px solid #E0CCD8",
      }}
      src="/src/assets/fotos-perfil/geovana.jpg"
      alt="Foto de Grabielle"
    />
    <h3 style={{ fontSize: "25px", color: "#5B5858", whiteSpace: "nowrap" }}>Grabielle Rizzo</h3>
    <p style={{ fontSize: "16px", color: "#5B5858", textAlign: "center" }}>
    Formada em arquitetura e urbanismo no ano de 2015, com experiência em interiores
    </p>
  </div>
</div>

{/* Segunda linha com as duas outras pessoas */}
<div style={{ display: "flex", justifyContent: "space-between", gap: "20px", marginTop: "40px", width: "100%" }}>
  {/* Nayara */}
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "45%" }}>
    <img
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "60%",
        border: "8px solid #F8CCCC",
      }}
      src="/src/assets/fotos-perfil/geovana.jpg"
      alt="Foto de Nayara"
    />
    <h3 style={{ fontSize: "25px", color: "#5B5858", whiteSpace: "nowrap" }}>Nayara Alves</h3>
    <p style={{ fontSize: "16px", color: "#5B5858", textAlign: "center" }}>
    Formada em arquitetura e urbanismo no ano de 2015, com experiência em  conforto e interiores.
    </p>
  </div>

  {/* Beatriz */}
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "45%" }}>
    <img
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "60%",
        border: "8px solid #FEECC0",
      }}
      src="/src/assets/fotos-perfil/geovana.jpg"
      alt="Foto de Beatriz"
    />
    <h3 style={{ fontSize: "25px", color: "#5B5858", whiteSpace: "nowrap" }}>Beatriz Santana</h3>
    <p style={{ fontSize: "16px", color: "#5B5858", textAlign: "center" }}>
    Arquiteta e urbanista formada em 2016. com experiência em paisagismo e planejamento urbano. 
    </p>
  </div>
</div>


  </div>
);

const Projetos = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Definindo os detalhes adicionais de cada projeto
  const projetos = [
    {
      id: 1,
      nome: "Residência Luamanda",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre a Residência Luamanda",
      maisDetalhes: [
        "Local: AL, Brasil.",
        "Arquiteta responsável: Beatriz Santana.",
        "Início do projeto: 2017",
        "Conclusão da obra: 2018",
        "Área do terreno: 100m²",
        "Área construída: 30m²",
        "Tipo de obra: Edificação residencial",
      ],
      imagensAdicionais: [
        { src: "/src/assets/projeto1_1.jpg", comentario: "Imagem mostrando a fachada principal" },
        { src: "/src/assets/projeto1_2.jpg", comentario: "Imagem detalhando os acabamentos internos" },
      ],
    },
    {
      id: 2,
      nome: "Residência Geni",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre a Residência Geni",
      maisDetalhes: [
        "Local: SP, Brasil.",
        "Arquiteta responsável: Gabrielle Rizzo.",
        "Início do projeto: 2020",
        "Conclusão da obra: 2021",
        "Área do terreno: 190m²",
        "Área construída: 120m²",
        "Tipo de obra: Edificação residencial",
      ],
      imagensAdicionais: [
        { src: "/src/assets/projeto2_1.jpg", comentario: "Imagem do hall de entrada" },
        { src: "/src/assets/projeto2_2.jpg", comentario: "Imagem do projeto de iluminação" },
      ],
    },
    {
      id: 3,
      nome: "Residência Cube",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre a Residência Cube",
      maisDetalhes: [
        "Local: Ontário, Canadá.",
        "Arquita responsável: Geovana Regina.",
        "Início do projeto: 2012",
        "Conclusão da obra: 2013",
        "Área do terreno: 75m²",
        "Área construída: 25m²",
        "Tipo de obra: Edificação residencial",
      ],
      imagensAdicionais: [
        { src: "/src/assets/residencia-cube/pespectiva.jpg", comentario: "PESPECTIVA" },
        { src: "/src/assets/residencia-cube/detalhe2.jpg", comentario: "PLANTA TÉRREO" },
        { src: "/src/assets/residencia-cube/detalhe1.jpg", comentario: "PLANTA MEZANINO" },
        { src: "/src/assets/residencia-cube/detalhe5.jpg", comentario: "CORTE LONGITUDINAL" },
      ],
    },
    {
      id: 4,
      nome: "Cabana Madera",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre a Cabana Madera",
      maisDetalhes: [
        "Local: MG, Brasil.",
        "Arquiteta responsável: Nayara Alves.",
        "Início do projeto: 2019",
        "Conclusão da obra: 2020",
        "Área do terreno: 100m²",
        "Área construída: 30m²",
        "Tipo de obra: Edificação residencial",
      ],
      imagensAdicionais: [
        { src: "/src/assets/projeto4_1.jpg", comentario: "Fachada da cabana com madeira exposta" },
        { src: "/src/assets/projeto4_2.jpg", comentario: "Interior aconchegante e rústico" },
      ],
    },
    {
      id: 5,
      nome: "Residência Querença",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre a Residência Querença",
      maisDetalhes: [
       "Local: BA, Brasil.",
        "Arquiteta responsável: Beatriz Santana.",
        "Início do projeto: 2016",
        "Conclusão da obra: 2017",
        "Área do terreno: 500m²",
        "Área construída: 150m²",
        "Tipo de obra: Edificação residencial",
      ],
      imagensAdicionais: [
        { src: "/src/assets/projeto5_1.jpg", comentario: "Imagem da fachada frontal" },
        { src: "/src/assets/projeto5_2.jpg", comentario: "Detalhe da área externa com jardim" },
      ],
    },
    {
      id: 6,
      nome: "Percurso 22",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre o Percurso 22",
      maisDetalhes: [
        "Local: MA, Brasil.",
        "Arquiteta responsável: Beatriz Santana.",
        "Início do projeto: 2020",
        "Conclusão da obra: 2020",
        "Área do terreno: 20m²",
        "Área construída: 20m²",
        "Tipo de obra: Urbana",
      ],
      imagensAdicionais: [
        { src: "/src/assets/projeto6_1.jpg", comentario: "Imagem do percurso urbano" },
        { src: "/src/assets/projeto6_2.jpg", comentario: "Detalhe da acessibilidade e calçadas" },
      ],
    },
    {
      id: 7,
      nome: "Residência Duo",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre a Residência Duo",
      maisDetalhes: [
        "Local: Rio de Janeiro, Brasil.",
        "Arquiteta responsável: Geovana Regina.",
        "Início do projeto: 2018",
        "Conclusão da obra: 2020",
        "Área do terreno: 910m²",
        "Área construída: 126m²",
        "Tipo de obra: Edificação residencial",
      ],
      imagensAdicionais: [
        { src: "/src/assets/residencia-duo/pespectiva2.jpg", comentario: "PESPECTIVA" },
        { src: "/src/assets/residencia-duo/detalhe9.jpg", comentario: "PLANTA TÉRREO" },
        { src: "/src/assets/residencia-duo/detalhe6.jpg", comentario: "CORTE TRANSVERSAL" },
      { src: "/src/assets/residencia-duo/detalhe7.jpg", comentario: "CORTE LONGITUDINAL" },
      ],
    },
    {
      id: 8,
      nome: "Residência Vista Bela",
      imagem: "/src/assets/fotos-projetos/projeto.jpg",
      detalhes: "Detalhes sobre a Residência Vista Bela",
      maisDetalhes: [
        "Local: DF, Brasil.",
        "Arquiteta responsável: Nayara Alves.",
        "Início do projeto: 2015",
        "Conclusão da obra: 2016",
        "Área do terreno: 150m²",
        "Área construída: 100m²",
        "Tipo de obra: Edificação residencial",
      ],
      imagensAdicionais: [
        { src: "/src/assets/projeto8_1.jpg", comentario: "Vista da fachada com grandes janelas" },
        { src: "/src/assets/projeto8_2.jpg", comentario: "Interior com integração visual para o exterior" },
      ],
    },
  ];

  const handleProjectClick = (projeto) => {
    setSelectedProject(projeto);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {/* Galeria de projetos */}
      <div style={galleryContainerStyles}>
        {projetos.map((projeto) => (
          <div
            key={projeto.id}
            style={projectCardStyles}
            onClick={() => handleProjectClick(projeto)}
          >
            <img
              src={projeto.imagem}
              alt={projeto.nome}
              style={projectImageStyles}
            />
            <h4>{projeto.nome}</h4>
          </div>
        ))}
      </div>

      {/* Modal de detalhes do projeto */}
      {selectedProject && (
        <div style={modalStyles}>
          <div style={modalContentStyles}>
            <span style={modalCloseButtonStyles} onClick={handleCloseModal}>
              &times;
            </span>
            <h3>{selectedProject.nome}</h3>
            <img
              src={selectedProject.imagem}
              alt={selectedProject.nome}
              style={modalImageStyles}
            />
            <p>{selectedProject.detalhes}</p>

            {/* Exibindo detalhes adicionais */}
            <div>
              <h4>Mais Detalhes:</h4>
              <ul>
                {selectedProject.maisDetalhes.map((detalhe, index) => (
                  <li key={index}>{detalhe}</li>
                ))}
              </ul>
            </div>

            {/* Exibindo imagens adicionais e seus comentários */}
            <div>
              <h4>Imagens Adicionais:</h4>
              <div style={additionalImagesStyles}>
                {selectedProject.imagensAdicionais.map((img, index) => (
                  <div key={index} style={additionalImageContainerStyles}>
                    <img
                      src={img.src}
                      alt={`Imagem adicional ${index + 1}`}
                      style={additionalImageStyles}
                    />
                    <p>{img.comentario}</p> {/* Comentário abaixo da imagem */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Estilos para a galeria e os cards de projeto
const galleryContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px",
};

const projectCardStyles = {
  width: "200px",
  textAlign: "center",
  cursor: "pointer",
};

const projectImageStyles = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  border: "none",
};

const modalStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyles = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "80%",
  maxWidth: "800px",
  textAlign: "center",
  position: "relative",
  maxHeight: "80vh", // Limitar a altura do modal
  overflowY: "auto", // Adicionar rolagem
};

const modalCloseButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
  fontSize: "30px",
  cursor: "pointer",
};

const modalImageStyles = {
  width: "50%",
  height: "auto",
  borderRadius: "8px",
  marginBottom: "20px",
};

const additionalImagesStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  marginTop: "20px",
};

const additionalImageContainerStyles = {
  textAlign: "center",
  width: "80%",
};

const additionalImageStyles = {
  width: "100%",
  height: "auto",
  borderRadius: "8px",
};  

const Contato = () => {
  return (
    <div style={containerStyles}>
      <div style={infoContainerStyles}>
        <div style={socialIconsContainerStyles}>
          {/* Ícone do Instagram com o nome ao lado */}
          <a
            href="https://www.instagram.com/_pinarq_"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyles}
          >
            <div style={iconTextContainerStyles}>
              <FaInstagram size={80} color="#E4405F" />
              <h2 style={textStyle}>_pinarq_</h2>
            </div>
          </a>
          
          <a
            href="https://wa.me/559999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyles}
          >
            <div style={iconTextContainerStyles}>
              <FaWhatsapp size={80} color="#25D366" />
              <h2 style={textStyle}>+55(11)94357290</h2>
            </div>
          </a>
        </div>
        
        <div style={addressContainerStyles}>
          <p><strong>Endereço:</strong></p>
          <p>R. Santa Cruz, 325 - Vila Mariana, São Paulo</p>
        </div>
      </div>
    </div>
  );
};

// Estilos para a página de contato
const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  maxWidth: '1200px', // Limita a largura máxima
  width: '100%', // Ocupa toda a largura disponível
  margin: '0 auto', // Centraliza horizontalmente
};

const infoContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
};

const socialIconsContainerStyles = {
  display: 'flex',
  flexDirection: 'column', // Organiza os ícones um abaixo do outro
  alignItems: 'center',    // Centraliza os ícones
  gap: '20px',             // Espaço entre os ícones
};

const iconTextContainerStyles = {
  display: 'flex',
  alignItems: 'center',  // Alinha o ícone com o nome
  gap: '30px',           // Espaço entre o ícone e o nome
};

const iconLinkStyles = {
  textDecoration: 'none', // Remove o sublinhado dos links
};

const textStyle = {
  fontSize: '40px',       // Tamanho da fonte do nome ou número
  margin: 0,  
  textDecoration: 'none',
  color: 'white',            // Remover a margem do <h2>
};

const addressContainerStyles = {
  display: 'flex',        // Adiciona display flex para centralizar
  justifyContent: 'center', // Garante que o conteúdo esteja centralizado
  textAlign: 'center',    // Centraliza o texto dentro do container
  fontSize: '20px',       // Tamanho da fonte do endereço
  gap: '10px',            // Espaço entre as linhas do endereço
  flexDirection: 'column', // Garante que o endereço fique em coluna
};

// Componente Navbar
const Navbar = ({ setActivePage }) => {
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
          style={{
            color: "#010324",
            fontSize: "8px",
            textAlign: "right",
            flex: "1",
          }}
          href="#"
          onClick={() => setActivePage("home")} // Navega para a página inicial
        >
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
            fontSize: "20px",
            padding: "8px",
            listStyleType: "none",
            margin: 0,
          }}
        >
          <li style={{ padding: "0 8%", margin: "0 10px" }}>
            <a
              style={{ color: "#010324" }}
              href="#"
              onClick={() => setActivePage("sobrePinarq")}
            >
              Sobre a PINARQ
            </a>
          </li>
          <li
            style={{
              padding: "0 8%",
              margin: "0 10px",
              borderLeft: "1px solid #3CA670",
            }}
          >
            <a
              style={{ color: "#010324" }}
              href="#"
              onClick={() => setActivePage("sobreNos")}
            >
              Sobre Nós
            </a>
          </li>
          <li
            style={{
              padding: "0 8%",
              margin: "0 10px",
              borderLeft: "1px solid #3CA670",
            }}
          >
            <a
              style={{ color: "#010324" }}
              href="#"
              onClick={() => setActivePage("projetos")}
            >
              Projetos
            </a>
          </li>
          <li
            style={{
              padding: "0 8%",
              margin: "0 10px",
              borderLeft: "1px solid #3CA670",
            }}
          >
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
      <div
        style={{
          backgroundColor: "#FFEDED",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-start",
          padding: "40px 40px",
        }}
      >
        {renderPage()} {/* Renderiza a página ativa */}
      </div>
    </div>
  );
};

export default App;
