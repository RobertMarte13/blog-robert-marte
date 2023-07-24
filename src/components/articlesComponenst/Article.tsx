import { useState } from "react";
import { articlesFilter } from "../../services/articles.ts";
import ArticleAllList from "./ArticleAllList.tsx";
import GetArticleInfo from "../subComponents/GetArticlesInfo.tsx";
import Paginacion from "./subComponents/Paginacion.tsx";
import SearchArticles from "./subComponents/SearchArticles.tsx";
import Footer from "../Footer.tsx";

function Article({ active, getIsActive }: { active: boolean, getIsActive(isActive: boolean): void }) {
  const [id, setId] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState(1);

  getIsActive(isActive);
  

  return (
    <div className="box-home">
      <SearchArticles />
      <h1 style={{ textAlign: 'center' }}>Articulos</h1>
      {/* <Paginacion setPageNum={setPageNum} /> */}
      <div onClick={() => setIsActive(!isActive)}>
        {articlesFilter.map((article, index) => (
          <div key={index} onClick={() => setId(article.id)}>
            {article.pagina === pageNum ? (
              <ArticleAllList article={article} />
            ) : null}
          </div>
        ))}
      </div>
      <p>Página: {pageNum}</p>
      <Paginacion setPageNum={setPageNum} />
      <GetArticleInfo ids={id} isActive={isActive} setIsActive={setIsActive} />
      <div style={active ? { display: 'none', width: '100%' } : { display: 'block', width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
}

export default Article;
