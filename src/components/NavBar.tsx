import { Link } from "react-router-dom";
import "../css/navbar.css"

const NavBar = () => {
  return (
    <header className="header-navbar">
      <nav>
        <ul className="list-navbar">
          <li>
            <Link to="/" className="links">Inicio</Link>
          </li>
          <li>
            <Link to="/about" className="links">Sobre mi</Link>
          </li>
          <li>
            <Link to="/contact" className="links">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
