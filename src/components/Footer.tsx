import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-main">
      <header>
        <a href="https://github.com/RobertMarte13" target="_blank">
          GitHub
        </a>
        <a href="https://twitter.com/StevenBeato" target="_blank">
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
