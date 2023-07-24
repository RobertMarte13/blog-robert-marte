import { articlesFilter } from "../services/articles";
import {useState} from 'react'

const useSearch = () => {
  const [busqueda, setBusqueda] = useState<string>("");
  const [isActive, setIsActive] = useState(false);
  let filtrado

  //Validador de busqueda!
  if(busqueda !== '') {
    filtrado = articlesFilter.filter((el) => {

      if(el.title.toLowerCase().slice(0, 1) === '¿') return el.title.toLowerCase() === busqueda.toLowerCase() 
    });
  }

  function removeClickArticle() {
    setBusqueda("");
    setIsActive(false);
  }

  return {
    setBusqueda,
    busqueda,
    filtrado,
    removeClickArticle,
    isActive,
    setIsActive
  };
};

export default useSearch;
