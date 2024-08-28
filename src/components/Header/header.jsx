import "./header.css";
import linkedinIMG from "../../assets/linkedin.svg";
import githubIMG from "../../assets/github.svg";

const header = () => {
  return (
    <header className="introduction">
      <div>
        <h1>
          <span className="introduction-span_name-title">PEDRO HENRIQUE</span>
        </h1>
        <h1>
          <span className="introduction-span_frontend-title">
            FRONT-END DEVELOPER
          </span>
        </h1>
      </div>
      <div className="introduction-image-container">
        <a href="https://www.linkedin.com/in/pedro-henrique-dos-reis/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIMG} alt="linkedIN image" height={60} className="introduction-image-container_image"/>
        </a>
        <a href="https://github.com/PedroXA" target="_blank" rel="noopener noreferrer">
          <img src={githubIMG} alt="github image" height={60} className="introduction-image-container_image"/>
        </a>
      </div>
    </header>
  );
};

export default header;
