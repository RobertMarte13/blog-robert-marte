import { useState } from "react";
import { articlesFilter } from "../../services/articles.ts";
import ArticleAllList from "./ArticleAllList.tsx";
import GetArticleInfo from "../articlesComponenst/subComponents/GetArticlesInfo.tsx";
import Paginacion from "./subComponents/Paginacion.tsx";
import Footer from "../Footer.tsx";
import Filtros from "./subComponents/Filtros.tsx";

function Article({
  active,
  getIsActive,
}: {
  active: boolean;
  getIsActive(isActive: boolean): void;
}) {
  const [id, setId] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState(1);

  const [filtroActive, setFiltroActive] = useState<boolean>(false);

  getIsActive(isActive);

  return (
    <div className="box-home">
      <h1 style={{ textAlign: "center", fontSize: 22 }}>Últimos Artículos</h1>
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
      {/* {
        filtroActive
          : null
      } */}

      <Paginacion setPageNum={setPageNum} pageNum={pageNum} />
      <GetArticleInfo ids={id} isActive={isActive} setIsActive={setIsActive} />
      <Filtros setFiltroActive={setFiltroActive} filtroActive={filtroActive} />
      <div
        style={
          active
            ? { display: "none", width: "100%" }
            : { display: "block", width: "100%" }
        }
      >
        <Footer />
      </div>
    </div>
  );
}

export default Article;
