import { articlesFilter } from "../services/articles";
import {useState} from 'react'

const useSearch = () => {
  const [busqueda, setBusqueda] = useState<string>("");
  let filtrado

  //Validador de busqueda!
  if(busqueda !== '') {
    filtrado = articlesFilter.filter((el) => {

      if(el.title.toLowerCase().slice(0, 1) === '¿') return el.title.toLowerCase() === busqueda.toLowerCase() 
    });
  }

  return {
    setBusqueda,
    busqueda,
    filtrado
  };
};

export default useSearch;
