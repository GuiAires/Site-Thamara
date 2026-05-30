import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import Loading from "./Loading";
import "./Lash_Lifting.css";

import lash from "../assets/Lash.jpg";

function LashLifting() {
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
    <div className="container-page">

      {/* HEADER PADRÃO */}
      <header className="hero-subpage">
        <Link to="/" className="btn-voltar-hero">
          ← Voltar
        </Link>
        <h1>Lash Lifting</h1>
        <p>Especialista em cílios e sobrancelhas</p>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="page-content">
        <img 
          src={lash}
          alt="Procedimento Lash Lifting"
          className="img-lash-lifting"
        />

        <div className="text-section">
          <h2>Sobre o procedimento</h2>
          <p>
            O Lash Lifting é a técnica queridinha do momento! 
            Ele realinha os fios dos cílios, deixando-os mais volumosos, 
            alinhados e com aspecto natural. O procedimento dura em média 
            45 minutos e o resultado pode durar até 40 dias. 
            Ideal para quem busca um olhar marcante e praticidade no dia a dia.
          </p>
        </div>

        {/* BOTÃO WHATSAPP */}
        <a
          href="https://wa.me/5511979654397"
          target="_blank"
          rel="noreferrer"
          className="btn-agendar"
        >
          <IoLogoWhatsapp size={20} />
          Agendar Agora
        </a>

      </main>
    </div>
  );
}

export default LashLifting;