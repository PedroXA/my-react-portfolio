import "./aboutme.css";

const header = () => {
  return (
    <header className="introduction">
      <div>
        <h1>
          <span className="title">Pedro Xavier</span>
        </h1>
        <p>
          <span className="sub-title">
            Planejo e desenvolvo interfaces de alta qualidade.
          </span>
        </p>
      </div>
      <div className="about-me">
      <h3><b>Sobre mim</b></h3>
        <p>
            Desde 2022, entrei na área da tecnologia como Suporte Técnico,
            venho explorando esse mundo vasto dentro do ecossistema tanto de <span><strong>UX/UI</strong></span>,
            quanto de <span><strong>desenvolvimento Front-end</strong></span>. Atualmente venho prestando servições
            para a <span><strong>Rede de Educação - Claretiano</strong></span>, atuando como suporte para a área de
            <span><strong>redes de computadores</strong></span> e <span><strong>help desk</strong></span>. Quando não estou na frente de um computador,
            eu posso estar tocando bateria, caminhando ou pensando sobre alguma coisa nova
            que eu posso estar fazendo.
        </p>
      </div>
    </header>
  );
};

export default header;
