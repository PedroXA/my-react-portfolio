import "./navbar.css";
import logo from "../../assets/logo.png"

const navbar = () => {
	return (
		<nav className="navbar">
			<ul className="links">
				<li className="link">
					<img src={logo} alt="Logo" width={32}/>
				</li>
			</ul>
			<ul className="links-end">
				<li className="link">HOME</li>
				<li className="link">PROJECTS</li>
				<li className="link">ABOUT ME</li>
			</ul>
		</nav>
	);
};

export default navbar;
