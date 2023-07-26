import { Link } from "react-router-dom";
import { logoGithub, logoTwitter } from "../utils/urlImgLogo";

const Footer = () => {
  return (
    <footer className="footer-main">
      <header>
        <a href="https://github.com/RobertMarte13" target="_blank">
          <img src={logoGithub} alt="logo" />
          GitHub
        </a>
        <a href="https://twitter.com/StevenBeato" target="_blank">
          <img src={logoTwitter} alt="logo" />
          Twitter
        </a>
        <Link to="/contact" className="links">
          Contacto
        </Link>
      </header>
      <div className="derechos">
        <p>Todos los derechos reservados | Blog De Robert Marte.</p>
      </div>
    </footer>
  );
};

export default Footer;
