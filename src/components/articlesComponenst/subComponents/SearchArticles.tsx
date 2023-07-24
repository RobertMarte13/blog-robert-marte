import { useState } from "react";
import useSearch from "../../../hook/useSearch.ts";
import Filtrado from "./Filtrado.tsx";
import '../../../css/search.css'


const SearchArticles = () => {
  const [isActive, setIsActive] = useState(false);

  const { filtrado, busqueda, setBusqueda } = useSearch();

  function removeClickArticle() {
    setBusqueda("");
    setIsActive(false);
  }

  return (
    <div>
      <input
        type="search"
        className="search-input"
        placeholder="Buscar Articulos"
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />
      <button onClick={() => setIsActive(!isActive)}>Buscar</button>
      {filtrado?.map((el, index) => (
        <p onClick={() => setIsActive(!isActive)} key={index}>
          Resultado: {el.title}
        </p>
      ))}

      <Filtrado isActive={isActive} filtrado={filtrado} removeClickArticle={removeClickArticle} />
    </div>
  );
};

export default SearchArticles;
