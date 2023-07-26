import { Link } from "react-router-dom";
import "../css/navbar.css";
import { logoGithub, logoTwitter } from "../utils/urlImgLogo";
import SearchArticles from "./articlesComponenst/subComponents/SearchArticles";
import { ArticlesBasicInfo } from "../types/types";

const NavBar = ({
  setBusqueda,
  busqueda,
  filtrado,
  setIsActive,
  isActive,
  removeClickArticle,
}: {
  setBusqueda(result: string): void,
  busqueda: string,
  filtrado: ArticlesBasicInfo[] | undefined,
  setIsActive(isActive: boolean): void,
  isActive: boolean,
  removeClickArticle(): void
}) => {
  return (
    <header className="header-navbar">
      <nav>
        <ul className="list-navbar">
          <li>
            <Link
              to="/"
              className="links"
              style={{
                fontFamily: "fantasy",
              }}
            >
              Web{" "}
              <span
                style={{
                  color: "#6faae2",
                }}
              >
                Blog
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content-logo-header">
        <SearchArticles
          setBusqueda={setBusqueda}
          busqueda={busqueda}
          filtrado={filtrado}
          setIsActive={setIsActive}
          isActive={isActive}
          removeClickArticle={removeClickArticle}
        />

        <a href="https://github.com/RobertMarte13" target="_blank">
          <img src={logoGithub} alt="logo" />
        </a>
        <a href="https://twitter.com/StevenBeato" target="_blank">
          <img src={logoTwitter} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
