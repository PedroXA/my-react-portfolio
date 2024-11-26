import "./aboutme.css";
import logoClaretiano from "../../utils/logo-claretiano.png";
import logoCotemig from "../../utils/logo-cotemig.png";

const header = () => {
  return (
    <header className="introduction">
      <div>
        <h1>
          <span className="title">Pedro Xavier</span>
        </h1>
        <h2>
          <span className="sub-title">
            Planejo e desenvolvo interfaces de alta qualidade.
          </span>
        </h2>
      </div>

      <div className="about-me">
        <h3>
          <b>Sobre mim</b>
        </h3>
        <p>
          Desde 2022, entrei na área da tecnologia como Suporte Técnico, venho
          explorando esse mundo vasto dentro do ecossistema tanto de{" "}
          <span>
            <strong>UX/UI</strong>
          </span>
          , quanto de{" "}
          <span>
            <strong>desenvolvimento Front-end</strong>
          </span>
          . Atualmente venho prestando servições para a{" "}
          <span>
            <strong>Rede de Educação - Claretiano</strong>
          </span>
          , atuando como suporte para a área de
          <span>
            <strong> redes de computadores</strong>
          </span>{" "}
          e{" "}
          <span>
            <strong>help desk</strong>
          </span>
          . Quando não estou na frente de um computador, eu posso estar tocando
          bateria, caminhando ou pensando sobre alguma coisa nova que eu posso
          estar fazendo.
        </p>
      </div>

      <div className="experience">
        <h3>Experiência</h3>
        <img src={logoCotemig} height={84} alt="" />
        <img src={logoClaretiano} height={84} alt="" />
      </div>
    </header>
  );
};

export default header;
