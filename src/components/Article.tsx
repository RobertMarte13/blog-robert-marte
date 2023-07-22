import { useState } from "react";
import { articles } from "../services/articles.ts";
import ArticleAllList from "./ArticleAllList.tsx";
import GetArticleInfo from "./subComponents/GetArticlesInfo.tsx";

function Article({getIsActive}) {
  const [id, setId] = useState(0);
  const [isActive, setIsActive] = useState(false);

  getIsActive(isActive)

  return (
    <div className="box-home">
      <h1>Blog de Robert Marte</h1>
      <div onClick={() => setIsActive(!isActive)}>
        {articles.map((article, index) => (
          <div key={index} onClick={() => setId(article.id)}>
            <ArticleAllList article={article} />
          </div>
        ))}
      </div>
      <GetArticleInfo ids={id} isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
}

export default Article;
