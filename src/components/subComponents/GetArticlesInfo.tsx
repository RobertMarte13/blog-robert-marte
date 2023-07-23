import { articles } from "../../services/articles";
import { PropsGetArticlesInfo } from "../../types/types";
import Footer from "../Footer";

function GetArticleInfo({
  ids,
  isActive,
  setIsActive,
}: PropsGetArticlesInfo) {
  const clickArticle = articles.filter((allId) => allId.id === ids);

  function removeClickArticle() {
    return setIsActive(!isActive);
  }

  return (
    <div
      className="article-details-info"
      style={isActive ? { display: "block" } : { display: "none" }}
    >
      {clickArticle !== null ? (
        clickArticle.map((el, index) => (
          <div key={index}>
            <button className="btn-back" onClick={() => removeClickArticle()}>
              Back
            </button>
            <img src={el.portada} alt={`Portada ${el.Lenguaje}`} />
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
        ))
      ) : (
        <h2>...Cargando</h2>
      )}
      {isActive ? <Footer /> : null}
    </div>
  );
}

export default GetArticleInfo;
