import "./navbar.css";

const navbar = () => {
	return (
		<nav className="navbar">
			<div>
				<ul>
					<li><span></span>Inicio</li>
					<li><span></span>Projetos</li>
					<li><span></span>Galeria</li>
				</ul>
			</div>

			<div>
				<ul>
					<li><span>Github</span></li>
					<li><span>LinkedIN</span></li>
					<li><span>BeHance</span></li>
				</ul>
			</div>
		</nav>
	);
};

export default navbar;
