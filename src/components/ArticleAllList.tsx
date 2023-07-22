import { article } from "../types/types";

const ArticleAllList = ({ article }: article) => {
  const { portada, title, Author, Date } = article;

  console.log(article);

  return (
    <div>
      <h2>articles</h2>
      <header className="header-article">
        <img className="portada" src={portada} alt="portadas" />
        <h2 className="title">{title}</h2>
        <h4 className="author">Author del articulo: {Author}</h4>
        <p className="fecha">Fecha: {Date}</p>
      </header>
    </div>
  );
};

export default ArticleAllList;
