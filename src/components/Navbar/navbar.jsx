import "./navbar.css";

{/* navbar first section - icons */ }
import { Icons } from "../../assets/Icons"


const navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Icons.inicio height={16}/>
					<a href="#">
						Inicio
					</a>
				</li>
				<li>
					<Icons.projetos height={16}/>
					<a href="#">
						Projetos
					</a>
				</li>
				<li>
					<Icons.galeria height={16}/>
					<a href="#">
						Galeria
					</a>
				</li>
			</ul>

			<ul className="socials">
				<li>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Icons.github height={32} />
					</a>
				</li>
				<li>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Icons.linkedin height={32}/>
					</a>
				</li>
				<li>
					<a href="http://" target="_blank" rel="noopener noreferrer">
						<Icons.behance height={32}/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default navbar;
