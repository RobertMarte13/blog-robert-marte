import { useState } from "react";
import "../../../css/filtros.css";
import {
  logoCSS,
  logoJavascript,
  logoSass,
  logoTailwindCSS,
} from "../../../utils/urlImgLogo";
import { articlesFilter } from "../../../services/articles";
import GetArticleInfo from "./GetArticlesInfo";
import ArticleAllList from "../ArticleAllList";

const Filtros = ({
  setFiltroActive,
  filtroActive,
}: {
  setFiltroActive(filtroActive: boolean): void;
  filtroActive: boolean;
}) => {
  const [valor, setValor] = useState<string>("");
  const [view, setView] = useState<boolean>(false);
  const [id, setId] = useState(0);
  // const [valor, setValor] = useState("");

  console.log(id);
  console.log(view);

  return (
    <div>
      <div className="content-filtros"  style={
            view
              ? { display: "none", visibility: "hidden", opacity: 0 }
              : { display: "block", visibility: "visible", opacity: 1 }
          }>
        <h3>Articulos por temas</h3>
        <ul>
          <li onClick={() => setFiltroActive(false)}>
            <p onClick={() => setValor("JavaScript")}>
              <img src={logoJavascript} alt="logo" />
              JavaScript
            </p>
          </li>
          <li onClick={() => setFiltroActive(false)}>
            <p onClick={() => setValor("CSS")}>
              <img src={logoCSS} alt="logo" />
              CSS
            </p>
          </li>
          <li onClick={() => setFiltroActive(false)}>
            <p onClick={() => setValor("TailwindCSS")}>
              <img src={logoTailwindCSS} alt="logo" />
              TailwindCSS
            </p>
          </li>
          <li onClick={() => setFiltroActive(false)}>
            <p onClick={() => setValor("SASS")}>
              <img src={logoSass} alt="logo" />
              SASS
            </p>
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: 30 }}>
        {filtroActive === false ? (
          <div onClick={() => setView(!view)}>
            {articlesFilter.map((article, index) => (
              <div key={index} onClick={() => setId(article.id)}>
                {article.Lenguaje.toLowerCase() === valor.toLowerCase() ? (
                  <ArticleAllList article={article} />
                ) : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <GetArticleInfo ids={id} isActive={view} setIsActive={setView} />
    </div>
  );
};

export default Filtros;
