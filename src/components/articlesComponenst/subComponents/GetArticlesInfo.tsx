import { articlesFilter } from "../../../services/articles";
import { PropsGetArticlesInfo } from "../../../types/types";
import Footer from "../../Footer";

function GetArticleInfo({ ids, isActive, setIsActive }: PropsGetArticlesInfo) {
  const clickArticle = articlesFilter.filter((allId) => allId.id === ids);

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
              {el.code !== undefined ? (
                <div>
                  <div className="content-code">
                    <code>
                      {el.code.code}
                      <br />
                      {el.code.consoleLog}
                    </code>
                  </div>
                  <br />
                  {el.code2 !== undefined ? (
                    <div className="content-code">
                      <code>
                        {el.code2?.code}
                        <br />
                        {el.code2?.consoleLog}
                      </code>
                    </div>
                  ) : null}
                  {el.code3 !== undefined ? (
                    <div className="content-code">
                      <code>
                        {el.code3?.code}
                        <br />
                        {el.code3?.consoleLog}
                      </code>
                    </div>
                  ) : null}
                  {el.code4 !== undefined ? (
                    <div className="content-code">
                      <code>
                        {el.code4?.code}
                        <br />
                        {el.code4?.consoleLog}
                      </code>
                    </div>
                  ) : null}
                </div>
              ) : null}
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
