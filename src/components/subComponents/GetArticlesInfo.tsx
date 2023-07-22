import { articles } from "../../services/articles";
import { ids } from "../../types/types";

function GetArticleInfo({ ids, isActive, setIsActive }: ids) {

  const clickArticle = articles.filter((allId) => allId.id === ids)
  
  const removeClickArticle = (bol: boolean) => {
    return setIsActive(bol)
  }

  return (
    <div className="article-details-info" style={isActive ? {display: 'block'} : {display: 'none'}}>
      <h2>article</h2>
      {clickArticle !== null ?
      clickArticle.map((el, index) => (
        <div key={index}>
          <buttom onClick={() => removeClickArticle(false)}>X</buttom>
          <p>{el.Lenguaje}</p>
          <img src={el.portada} alt={`Portada ${el.Lenguaje}`} />
        </div>
      )) : <h2>...Cargando</h2>}
    </div>
  );
}

export default GetArticleInfo