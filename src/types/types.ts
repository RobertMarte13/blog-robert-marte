export type articlesBasicInfo = {
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

export type ids = {
  ids: number;
  isActive: boolean;
  setIsActive: boolean
};

export type article = {
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
