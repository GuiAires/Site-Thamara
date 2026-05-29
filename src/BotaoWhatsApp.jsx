import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

function BotaoWhatsApp({ link }) {
  const [loading, setLoading] = useState(false);

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer"
      className={`btn-agendar ${loading ? 'loading' : ''}`} 
      onClick={() => setLoading(true)}
    >
      {loading ? "Carregando..." : <><IoLogoWhatsapp size={20} /> Agendar Agora</>}
    </a>
  );
}

export default BotaoWhatsApp;