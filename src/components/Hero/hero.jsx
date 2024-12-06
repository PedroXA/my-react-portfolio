import "./hero.css";
import logoClaretiano from "../../utils/logo-claretiano.png";
import logoCotemig from "../../utils/logo-cotemig.png";
import projetoCapa from "../../utils/projeto-capa.png";

const hero = () => {
  return (
    <hero className="introduction">
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

      <h1 className="title">
        <b>Projetos</b>
      </h1>
      <h4 className="sub-title">
        Uma pequena amostra do meu trabalho <span>;D</span>
      </h4>

      <ul className="projects">
        <li className="projects-cards">
          <img src={projetoCapa} alt="" />
          <h3>Lorem ipsum Dolor</h3>
          <p>Em breve !</p>
        </li>
        <li className="projects-cards">
          <img src={projetoCapa} alt="" />
          <h3>Lorem ipsum Dolor</h3>
          <p>Em breve !</p>
        </li>
        <li className="projects-cards">
          <img src={projetoCapa} alt="" />
          <h3>Lorem ipsum Dolor</h3>
          <p>Em breve !</p>
        </li>
      </ul>

      <h1 className="title">
        <b>Galeria</b>
      </h1>
      <h4 className="sub-title">
        Uma pequena amostra do meu trabalho <span>;D</span>
      </h4>

      <ul className="Galery">
        <li>
          <img src={projetoCapa} height={200} alt="" />
          <img src={projetoCapa} height={200} alt="" />
          <img src={projetoCapa} height={200} alt="" />
        </li>
        <li>
          <img src={projetoCapa} height={200} alt="" />
          <img src={projetoCapa} height={200} alt="" />
          <img src={projetoCapa} height={200} alt="" />
        </li>
      </ul>
    </hero>
  );
};

export default hero;
