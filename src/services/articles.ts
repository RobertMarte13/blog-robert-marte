import { ArticlesBasicInfo } from "../types/types";

export const articles: ArticlesBasicInfo[] = [
  {
    id: 3,
    pagina: 1,
    title: "¿Qué es JavaScript?",
    Date: "23/07/23",
    Lenguaje: "JavaScript",
    Author: "Robert Marte",
    portada:
      "https://cdn.sanity.io/images/9uwkxuld/production/255cfec31bbbe3b01f9dfffe7a02299fab7cef8f-800x300.png?h=1000&auto=format&fit=crop",
    logo_lenguaje: "data:image/png;base64,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",
    description:
      "En este articulo tratare de explicarles de que se trata JavaScript y cual es su función.",
    content:
      "JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web. Como lenguaje de scripting del lado del servidor, se trata de una de las principales tecnologías de la World Wide Web. Por ejemplo, al navegar por Internet, en cualquier momento en el que vea un carrusel de imágenes, un menú desplegable “click-to-show” (clic para mostrar), o cambien de manera dinámica los elementos de color en una página web, estará viendo los efectos de JavaScript.",
  }, {
    id: 2,
    pagina: 1,
    title: "¿Qué es CSS?",
    Date: "22/07/23",
    Lenguaje: "CSS",
    Author: "Robert Marte",
    portada: "https://www.codespot.org/assets/css.jpg",
    logo_lenguaje: "https://logospng.org/download/css-3/logo-css-3-2048.png",
    description:
      "En este Articulo tratare de explicarles que es css y para que se utiliza.",
    content:
      "CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de las páginas. Se les denomina hojas de estilo «en cascada» porque puedes tener varias hojas y una de ellas con las propiedades heredadas (o «en cascada») de otras. Para muchas personas una simple plantilla de blog es suficiente. Aun así, cuando quieras personalizar la apariencia de un sitio necesitarás implementar CSS que, en conjunto con un buen CMS, te ayudará a potenciar el alcance de tu contenido.",
  }, {
    "id": 1,
    pagina: 1,
    title: "¿Qué es HTML?",
    Date: "21/07/23",
    Lenguaje: "HTML",
    Author: "Robert Marte",
    portada:
      "https://webhostingespanol.com/wp-content/uploads/2015/10/html-logo.png",
    logo_lenguaje: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png", 
    description:
      "Este articulo tratara de dar una breve definición de lo que es html y para que sirve.",
    content:
      "Podria decirse que HTML es el lenguaje con el que se define el contenido de las páginas web. Básicamente se trata de un conjunto de etiquetas que sirven para definir el texto y otros elementos que compondrán una página web, como imágenes, listas, vídeos, etc. HTML se creó en un principio con objetivos divulgativos de información con texto y algunas imágenes. No se pensó que llegara a ser utilizado para crear área de ocio y consulta con carácter multimedia (lo que es actualmente la web), de modo que, el HTML se creó sin dar respuesta a todos los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían en un futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando modificaciones con el tiempo, estos son los estándares del HTML. Numerosos estándares se han presentado ya. El HTML 4.01 es el último estándar a febrero de 2001. Actualización a mayo de 2005, en estos momentos está apunto de presentarse la versión 5 de HTML, de la que ya se tiene un borrador casi definitivo.",
  }
];
