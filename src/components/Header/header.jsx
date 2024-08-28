import "./header.css";
import linkedinIMG from "../../assets/linkedin.svg" 
import githubIMG from "../../assets/github.svg"

const header = () => {
	return (
		<header className="introduction">
			<div>
				<h1><span className="introduction-span_name-title">PEDRO HENRIQUE</span></h1>
				<h1><span className="introduction-span_frontend-title">FRONT-END DEVELOPER</span></h1>
			</div>
			<div className="introduction-image-container">
				<img src={linkedinIMG} alt="linkedIN image" />
				<img src={githubIMG} alt="github image" />
			</div>
		</header>
	);
};

export default header;
