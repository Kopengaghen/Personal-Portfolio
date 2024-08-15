import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const Home = () => {
	return (
		<header>
			<div className="text">
				<h1>I'm Michael.</h1>
				<h2><span>I'm a Canada based</span>&nbsp; ReactJS Developer.</h2>
			</div>
			<div className="social-icons">
				<a href="https://www.linkedin.com/in/mihai-trofimciuc/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} size="2x" color="white" />
				</a>
				<a href="https://www.instagram.com/kopengaghen/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faInstagram} size="2x" color="white" />
				</a>
				<a href="https://github.com/Kopengaghen" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} size="2x" color="white" />
				</a>
			</div>
		</header>
	);
}