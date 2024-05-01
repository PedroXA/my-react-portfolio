import "./navbar.css";
import logo from "../../assets/logo.png"
import language_globe from "../../assets/language-globe.png"

const navbar = () => {
	return (
		<nav className="navbar">
			<ul className="links">
				<li className="link">
					<img src={logo} alt="Logo" width={32}/>
				</li>
			</ul>
			<ul className="links-end">
				<li className="link"><img src={language_globe} alt="idioma" width={32}/></li>
				<li className="link">Início</li>
				<li className="link">Projetos</li>
			</ul>
		</nav>
	);
};

export default navbar;
