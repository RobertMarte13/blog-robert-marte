import { Link } from "react-router-dom";
import "../css/navbar.css";
import { logoGithub, logoTwitter } from "../utils/urlImgLogo";

const NavBar = () => {
  return (
    <header className="header-navbar">
      <nav>
        <ul className="list-navbar">
          <li>
            <Link to="/" className="links" style={{
              fontFamily: 'fantasy'
            }}>
              Web <span style={{
                color: '#6faae2'
              }}>Blog</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content-logo-header">
        <a href="https://github.com/RobertMarte13" target="_blank">
          <img src={logoGithub} alt="logo" />
        </a>
        <a href="https://github.com/RobertMarte13" target="_blank">
          <img src={logoTwitter} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
