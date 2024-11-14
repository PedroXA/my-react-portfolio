import "./header.css";
import linkedinIMG from "../../assets/linkedin.svg";
import githubIMG from "../../assets/github.svg";

const header = () => {
  return (
    <header className="introduction">
      <div>
        <h1>
          <span className="introduction-span_name-title">Pedro Xavier</span>
        </h1>
        <h1>
          <span className="introduction-span_frontend-title">
            Planejo e desenvolvo interfaces de alta qualidade.
          </span>
        </h1>
      </div>
      <div className="introduction-aboutMe-container">
        <p>
          Sobre mim

          Desde 2022, entrei na área da tecnologia como Suporte Técnico, 
          venho explorando esse mundo vasto dentro do ecossistema tanto de UX/UI, 
          quanto de desenvolvimento Front-end. Atualmente venho prestando servições 
          para a Rede de Educação - Claretiano, atuando como suporte para a área de 
          redes de computadores e help desk. Quando não estou na frente de um computador, 
          eu posso estar tocando bateria, caminhando ou pensando sobre alguma coisa nova 
          que eu posso estar fazendo.  
        </p>
      </div>
    </header>
  );
};

export default header;
