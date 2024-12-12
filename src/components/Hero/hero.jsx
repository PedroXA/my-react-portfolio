import "./hero.css";
import logoClaretiano from "/logo-claretiano.png";
import logoCotemig from "/logo-cotemig.png";
import projetoCapa from "/projeto-capa.png";

const gallery = [
  {id: 1, src: "/imagem_1.png"},
  {id: 2, src:"/imagem_2.png"},
  {id: 3, src:"/imagem_3.png"},
  {id: 4, src:"/imagem_4.png"}
];



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

      <ul className="gallery">
      {gallery.map((image) => (
        <li key={image.id}>
          <img src={image.src} height={250} />
        </li>
      ))}
      </ul>
    </hero>
  );
};

export default hero;
