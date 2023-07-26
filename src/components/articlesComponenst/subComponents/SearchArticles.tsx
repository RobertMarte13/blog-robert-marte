// import useSearch from "../../../hook/useSearch.ts";
import Filtrado from "./Filtrado.tsx";
import "../../../css/search.css";
import { ArticlesBasicInfo } from "../../../types/types.ts";
import SvgSearch from "../../../svg/SvgSearch.tsx";

const SearchArticles = ({
  setBusqueda,
  busqueda,
  filtrado,
  setIsActive,
  isActive,
  removeClickArticle,
}: {
  setBusqueda(result: string): void,
  busqueda: string,
  filtrado: ArticlesBasicInfo[] | undefined,
  setIsActive(isActive: boolean): void,
  isActive: boolean,
  removeClickArticle(): void
}) => {
  // const { filtrado, busqueda, setBusqueda, isActive, setIsActive, removeClickArticle } = useSearch();

  return (
    <div className="content-search-header">
      <input
        type="search"
        className="search-input"
        placeholder="Buscar Articulos"
        value={busqueda}
        onChange={(event) => {
          const result = event.target.value;
          setBusqueda(result);
        }}
      />
      <button className="btn-search" onClick={() => setIsActive(!isActive)}><SvgSearch /></button>
      {filtrado?.map((el, index) => (
        <p className="link-search" onClick={() => setIsActive(!isActive)} key={index}>
          - {el.title}
        </p>
      ))}

      <Filtrado
        isActive={isActive}
        filtrado={filtrado}
        removeClickArticle={removeClickArticle}
      />
    </div>
  );
};

export default SearchArticles;
