import "./header.css";
import github from "../../assets/github.png";

const header = () => {
	return (
		<header className="introduction">
			<div>
				<h4>Olá, meu nome é Pedro,</h4>
				<h1>FullStack developer</h1>

				<div>
					<div className="introduction-socials">
						<a href="#" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
						<img src="" alt="" />
					</div>
					<div className="introduction-welcome">
						<p>Bem-vindo(a) ao meu Portfólio</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default header;
