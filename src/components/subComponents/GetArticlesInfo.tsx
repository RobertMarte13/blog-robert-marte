import { articles } from "../../services/articles";
import { ids } from "../../types/types";

function GetArticleInfo({ ids }: ids) {
  const searchArticle = articles.filter((allId) => allId.id === ids);
  return (
    <div style={{ zIndex: 100 }}>
      <h2>article</h2>
      {searchArticle.map((el, index) => (
        <div key={index}>
          <p>{el.Lenguaje}</p>
          <img src={el.portada} />
        </div>
      ))}
    </div>
  );
}

export default GetArticleInfo