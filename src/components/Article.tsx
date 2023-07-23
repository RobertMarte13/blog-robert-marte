import { useState } from "react";
import { articles } from "../services/articles.ts";
import ArticleAllList from "./ArticleAllList.tsx";
import GetArticleInfo from "./subComponents/GetArticlesInfo.tsx";

function Article({ getIsActive }: {getIsActive(isActive: boolean): void}) {
  const [id, setId] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState(1);

  getIsActive(isActive)

  return (
    <div className="box-home">
      <h1>Articulos</h1>
      <div onClick={() => setIsActive(!isActive)}>
        {articles.map((article, index) => (
          <div key={index} onClick={() => setId(article.id)}>
            {
              article.pagina === pageNum 
                ? <ArticleAllList article={article} />
                : null
            }
          </div>
        ))}
      </div>
      <button onClick={() => setPageNum(1)}>1</button>
      <button onClick={() => setPageNum(2)}>2</button>
      <GetArticleInfo ids={id} isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default Article;
