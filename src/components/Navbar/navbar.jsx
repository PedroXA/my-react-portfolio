import "./navbar.css";

{/* navbar first section - icons */ }
import { Icons } from "../../assets/Icons"


const navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Icons.inicio />
					<a href="#">
						Inicio
					</a>
				</li>
				<li>
					<Icons.projetos />
					<a href="#">
						Projetos
					</a>
				</li>
				<li>
					<Icons.galeria />
					<a href="#">
						Galeria
					</a>
				</li>
			</ul>

			<ul className="socials">
				<li>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Icons.github />
					</a>
				</li>
				<li>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Icons.linkedin />
					</a>
				</li>
				<li>
					<a href="http://" target="_blank" rel="noopener noreferrer">

					</a>
				</li>
			</ul>
		</nav>
	);
};

export default navbar;
