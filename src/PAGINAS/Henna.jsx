import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

function Henna() {
  return (
    <div className="henna-page">
      {/* HEADER ESCURO */}
      <header className="hero-subpage">
        <Link to="/" className="btn-voltar-hero">
          ← Voltar
        </Link>
        <h1 style={{ textTransform: "uppercase", letterSpacing: "2px" }}>Henna e Coloração</h1>
        <p style={{ color: "#F7C6C7", marginTop: "10px" }}>Especialista em cílios e sobrancelhas</p>
      </header>

      {/* CONTEÚDO CENTRALIZADO */}
      <main className="page-content">
        
        {/* IMAGEM HORIZONTAL COM O CONTORNO DOURADO IDENTICO AO EXEMPLO */}
        <img
          src={`${import.meta.env.BASE_URL}Designer_Henna.jpeg`}
          alt="Henna ou Tintura"
          className="img-lamination"
          style={{
            width: "90%",
            maxWidth: "650px",
            display: "block",
            margin: "30px auto 25px auto",
            aspectRatio: "16 / 9",
            objectFit: "cover",
            borderRadius: "12px",
            border: "3px solid #b58951",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)"
          }}
        />

        <section className="text-section">
          <h2 style={{ marginBottom: "15px", color: "#313131" }}>Sobre o procedimento</h2>
          <p>
            A técnica de henna e coloração é ideal para realçar o design das sobrancelhas, 
            preenchendo falhas e dando mais destaque ao olhar de forma natural. 
            O procedimento é rápido, indolor e garante praticidade para o seu dia a dia, 
            mantendo os fios alinhados e com a cor desejada por muito mais tempo.
          </p>
        </section>

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

export default Henna;