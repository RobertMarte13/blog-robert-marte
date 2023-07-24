import { ArticlesBasicInfo } from "../../../types/types";
import Footer from "../../Footer";

const Filtrado = ({
  isActive,
  filtrado,
  removeClickArticle,
}: {
  isActive: boolean;
  filtrado: ArticlesBasicInfo[] | undefined;
  removeClickArticle(): void;
}) => {
  return (
    <div  className="content-main-search" style={isActive ? { display: "block", background: 'white', visibility: 'visible', opacity: 1 } : { display: "none",  background: 'none', visibility: 'hidden', opacity: 0 }}>
      {filtrado?.map((el, index) => (
        <div key={index}>
          <button className="btn-back" onClick={() => removeClickArticle()}>
            Back
          </button>
          <img src={el.portada} className="portada" alt={`Portada ${el.Lenguaje}`} />
          <div className="content-info-article">
            <h2>{el.title}</h2>
            <p>
              <strong>Lenguaje:</strong> {el.Lenguaje}
            </p>
            <p>
              <strong>Autor del articulo: </strong>
              {el.Author}
            </p>
            <p>
              <strong>Fecha de publicación:</strong> {el.Date}
            </p>
            <p>
              <strong>Descrición: </strong>
              {el.description}
            </p>
            <p>{el.content}</p>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Filtrado;
