import "../../../css/filtros.css";
import { logoCSS, logoJavascript, logoSass, logoTailwindCSS } from "../../../utils/urlImgLogo";

const Filtros = () => {
  return (
    <div className="content-filtros">
      <h3>Articulos por temas</h3>
      <ul>
        <li>
          <p>
            <img src={logoJavascript} alt="logo" />
            JavaScript
          </p>
        </li>
        <li>
          <p>
            <img src={logoCSS} alt="logo" />
            CSS
          </p>
        </li>
        <li>
          <p>
            <img src={logoTailwindCSS} alt="logo" />
            TailwindCSS
          </p>
        </li>
        <li>
          <p>
            <img src={logoSass} alt='logo' /> 
            SASS
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Filtros;
