import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import Loading from './Loading';

function Cilíos() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="page-container">
      {/* HEADER ESCURO PADRONIZADO */}
      <header className="hero-subpage">
        <Link to="/" className="btn-voltar-hero">
          ← Voltar
        </Link>
        <h1>Extensão de Cílios</h1>
        <p>Especialista em cílios e sobrancelhas</p>
      </header>

      {/* CONTEÚDO CENTRALIZADO */}
      <main className="page-content">
        <img 
          src="public/Extensão_de_Cílios.png" 
          alt="Extensão de Cílios" 
          className="img-servico" 
        />
        
        <section className="text-section">
          <h3>Sobre o procedimento</h3>
          <p>
            A Extensão de Cílios (ou Alongamento) é a técnica perfeita para quem deseja 
            um olhar marcante 24 horas por dia, sem precisar de rímel. Através da aplicação 
            fio a fio de fibras sintéticas sobre os cílios naturais, conseguimos aumentar 
            o volume, o comprimento e definir a curvatura ideal para o seu formato de rosto.
          </p>
          <p>
            Trabalhamos com materiais de alta qualidade e hipoalergênicos, garantindo a 
            saúde dos seus fios naturais. O resultado é um olhar expressivo, elegant e 
            com total praticidade para a sua rotina.
          </p>
        </section>

        {/* <div className="price-display">
          Investimento: <strong>R$ 160,00</strong>
        </div> */}

        <a 
          href="https://wa.me/5511979654397" 
          target="_blank" 
          className="btn-agendar" 
          rel="noreferrer"
        >
          <IoLogoWhatsapp size={20} /> 
          Agendar Agora
        </a>
      </main>
    </div>
  );
}

export default Cilíos;