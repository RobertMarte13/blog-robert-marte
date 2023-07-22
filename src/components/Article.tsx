import { useState } from "react";
import { articles } from "../services/articles.ts";
import ArticleAllList from "./ArticleAllList.tsx";
import GetArticleInfo from "./subComponents/GetArticlesInfo.tsx";

function Article() {
  const [id, setId] = useState(0);

  return (
    <div style={{zIndex: 10}}>
      <h1>Blog de Robert Marte</h1>
      <div>
        {articles.map((article, index) => (
          <div key={index} onClick={() => setId(article.id)}>
            <ArticleAllList article={article} />
          </div>
        ))}
      </div>
      <GetArticleInfo ids={id} />
    </div>
  );
}

export default Article;
