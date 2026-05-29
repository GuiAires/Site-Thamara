import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Design.css";
import Loading from "./Loading";

function Design() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="page-container">
      <header className="hero-subpage">
        <Link to="/" className="btn-voltar-hero">← Voltar</Link>
        <h1>DESIGN PERSONALIZADO</h1>
        <p>Especialista em cílios e sobrancelhas</p>
      </header>
      
      <main className="page-content">
        <div className="image-wrapper">
          <img 
            src="public/Disgn_personalizado.jpeg" 
            alt="Design de Sobrancelhas" 
            className="img-servico" 
          />
        </div>
        
        <div className="text-section">
          <h3>Sobre o procedimento</h3>
          <p>
            O <strong>Design Personalizado</strong> é a técnica de harmonização facial que estuda a estrutura óssea e o formato do seu rosto para encontrar o desenho de sobrancelha perfeito para você. Unimos essa precisão à <strong>Coloração</strong>, um método que realça os fios naturais, cobre falhas indesejadas e confere um aspecto de sobrancelha mais preenchida, densa e definida. O resultado é um olhar expressivo, natural e completamente alinhado à sua personalidade.
          </p>
        </div>
        
         {/*<div className="price-display">
          Investimento: <strong>R$ 60,00</strong>
        </div>*/}
        
        <a href="https://wa.me/5511979654397" className="btn-agendar-sub" target="_blank" rel="noreferrer">
          <IoLogoWhatsapp size={20} />
          <span>Agendar Agora</span>
        </a>
      </main>
    </div>
  );
}

export default Design;