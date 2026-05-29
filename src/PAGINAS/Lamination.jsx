import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import "../App.css";

function Lamination() {
  return (
    <div className="container">
      <header className="hero-subpage">
        <Link to="/" className="btn-voltar-hero">← Voltar</Link>
        <h1>Brow Lamination</h1>
        <p>Especialista em cílios e sobrancelhas</p>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="page-content">
        <img 
          src="public/Brow_Lamination.png" 
          alt="Procedimento de Brow Lamination" 
          className="img-lamination" 
        />

        <div className="text-section">
          <h2>Sobre o procedimento</h2>
          <p>
            O Brow Lamination é a técnica queridinha do momento! 
            Ele realinha os fios das sobrancelhas, deixando-as mais volumosas, 
            alinhadas e com aspecto natural. O procedimento dura em média 
            45 minutos e o resultado pode durar até 40 dias. 
            Ideal para quem busca um olhar marcante e praticidade no dia a dia.
          </p>
        </div>

        {/* BOTÃO AGENDAR */}
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

export default Lamination;