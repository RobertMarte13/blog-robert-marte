import { Article } from "../../types/types";

import "../../css/articlesAll.css"

const ArticleAllList = ({ article }: Article) => {
  const { logo_lenguaje, title, Author, Date } = article;


  return (
    <section className="content-article-all">
      <article>
        <img className="portada" src={logo_lenguaje} alt="portadas" />
        <div className="content-article-info-main">
          <h2 className="title">{title}</h2>
          <h4 className="author">Author del articulo: {Author}</h4>
          <p className="fecha">Fecha: {Date}</p>
        </div>
      </article>
    </section>
  );
};

export default ArticleAllList;
