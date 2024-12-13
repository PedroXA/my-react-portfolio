import "./navbar.css";

{
  /* navbar first section - icons */
}
import { Icons } from "../../assets/Icons";

const navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Icons.inicio height={16} />
          <a href="#home">Inicio</a>
        </li>
        <li>
          <Icons.projetos height={16} />
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <Icons.galeria height={16} />
          <a href="#gallery">Galeria</a>
        </li>
      </ul>

      <ul className="socials">
        <li>
          <a href="http://github.com/PedroXA" target="_blank" rel="noopener noreferrer">
            <Icons.github height={32} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/pedro-henrique-dos-reis/" target="_blank" rel="noopener noreferrer">
            <Icons.linkedin height={32} />
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Icons.behance height={32} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
