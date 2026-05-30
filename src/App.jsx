import { Routes, Route, Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { useEffect, useState } from "react";
import "./App.css";

import videoHero from "./assets/Trabalho-Gif.mp4";

import Loading from "./PAGINAS/Loading";
import Cilios from "./PAGINAS/Cilios";
import Design from "./PAGINAS/Design";
import Henna from "./PAGINAS/Henna";
import Lamination from "./PAGINAS/Lamination";
import LashLifting from "./PAGINAS/Lash";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <header className="hero">
        <div className="video-container">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="video-fundo"
          >
            <source src={videoHero} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="hero-content">
          <img
          src={`${import.meta.env.BASE_URL}Foto_Profissional_Tha.png`}
          alt="Thamara Aires"
          className="logo-quadrada"
        />
          <div className="hero-text">
            <h1>Thamara Aires</h1>
            <p>Especialista em cílios e sobrancelhas</p>
          </div>
        </div>
      </header>

      <section className="servicos">
        <h2>Serviços</h2>
        <div className="servicos-container">
          <div className="biografia">
            <h3>Conheça minha história</h3>
            <p className="bio-placeholder">
              Meu nome é Thamara Aires e atuo na área da beleza há mais de 15 anos, sendo especialista em cílios e sobrancelhas com foco em resultados naturais e personalizados.
              Sempre tive paixão por realçar a beleza de forma leve, valorizando o olhar único de cada cliente. Ao longo da minha trajetória, desenvolvi técnicas que unem precisão, cuidado e estética natural.
              Minha entrada na área aconteceu em um momento importante da minha vida, quando precisei encontrar uma profissão que me permitisse trabalhar e cuidar da minha família ao mesmo tempo. Foi nesse caminho que descobri minha verdadeira vocação.
              Hoje, mais do que procedimentos estéticos, meu trabalho é sobre autoestima, confiança e bem-estar. Cada atendimento é feito com dedicação, carinho e atenção aos detalhes, para que cada cliente tenha uma experiência única.
            </p>
          </div>

          <div className="servicos-acoes">
            <div className="cards">
              <Link to="/cilios" className="card">Extensão de Cílios</Link>
              <Link to="/design" className="card">Design Personalizado</Link>
              <Link to="/henna" className="card">Henna ou Tintura</Link>
              <Link to="/lamination" className="card">Brow Lamination</Link>
              <Link to="/lash-lifting" className="card">Lash Lifting</Link>
            </div>
            <div className="btn-container">
              <a
                href="https://wa.me/5511979654397"
                target="_blank"
                rel="noreferrer"
                className="btn-agendar"
              >
                <IoLogoWhatsapp size={20} />
                Agendar Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cilios" element={<Cilios />} />
      <Route path="/design" element={<Design />} />
      <Route path="/henna" element={<Henna />} />
      <Route path="/lamination" element={<Lamination />} />
      <Route path="/lash-lifting" element={<LashLifting />} />
    </Routes>
  );
}