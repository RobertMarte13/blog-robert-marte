export type ArticlesBasicInfo = {
  id: number;
  pagina: number;
  title: string;
  Date: string;
  Lenguaje: string;
  Author: string;
  portada: string;
  logo_lenguaje: string;
  description: string;
  content: string;
};

export type PropsGetArticlesInfo = {
  ids: number,
  isActive: boolean,
  setIsActive(isActive: boolean): void
};

export type Article = {
  article: {
    id: number;
    pagina: number;
    title: string;
    Date: string;
    Lenguaje: string;
    Author: string;
    portada: string;
    logo_lenguaje: string;
    description: string;
    content: string;
  };
};
