import { ArticlesBasicInfo } from "../types/types";

import { logoCSS, logoHTML, logoJavascript, logoReactJs } from "../utils/urlImgLogo";
import { portadaCSS, portadaHTML, portadaJavaScript, portadaReactJs } from "../utils/urlImgPortada";

export const articles: ArticlesBasicInfo[] = [
  {
    id: 8,
    pagina: 1,
    title: "¿Qué es ReactJs?",
    Date: "24/07/23",
    Lenguaje: "ReactJS",
    Author: "Robert Marte",
    portada: portadaReactJs,
    logo_lenguaje: logoReactJs,
    description:
      "En este articulo tratare de explicarles de que se trata ReactJS y cual es su función.",
    content:
      "React es una biblioteca o librería de código abierto que está escrita en JavaScript. Fue desarrollada por Facebook en el 2013 con la finalidad de facilitar la creación de componentes reutilizables e interactivos para las interfaces de usuario. Uno de sus puntos más destacados es que no solo se usa en el lado del cliente, sino que también se puede representar en el servidor y trabajar juntos. Son datos interesantes que React se utiliza en Facebook para la producción de componentes y que Instagram está escrito enteramente en React. Adicionalmente, también se utiliza en otras plataformas como Netflix, PayPal, AirBnb, Uber, Reddit y Twitter.",
  }, {
    id: 7,
    pagina: 1,
    title: "¿Qué es JavaScript?",
    Date: "23/07/23",
    Lenguaje: "JavaScript",
    Author: "Robert Marte",
    portada: portadaJavaScript,
    logo_lenguaje: logoJavascript,
    description:
      "En este articulo tratare de explicarles de que se trata JavaScript y cual es su función.",
    content:
      "JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web. Como lenguaje de scripting del lado del servidor, se trata de una de las principales tecnologías de la World Wide Web. Por ejemplo, al navegar por Internet, en cualquier momento en el que vea un carrusel de imágenes, un menú desplegable “click-to-show” (clic para mostrar), o cambien de manera dinámica los elementos de color en una página web, estará viendo los efectos de JavaScript.",
  }, {
    id: 6,
    pagina: 1,
    title: "¿Qué es CSS?",
    Date: "22/07/23",
    Lenguaje: "CSS",
    Author: "Robert Marte",
    portada: logoCSS,
    logo_lenguaje: portadaCSS,
    description:
      "En este Articulo tratare de explicarles que es css y para que se utiliza.",
    content:
      "CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de las páginas. Se les denomina hojas de estilo «en cascada» porque puedes tener varias hojas y una de ellas con las propiedades heredadas (o «en cascada») de otras. Para muchas personas una simple plantilla de blog es suficiente. Aun así, cuando quieras personalizar la apariencia de un sitio necesitarás implementar CSS que, en conjunto con un buen CMS, te ayudará a potenciar el alcance de tu contenido.",
  }, {
    "id": 5,
    pagina: 1,
    title: "Metodo de Crypto: randomUUID()",
    Date: "21/07/23",
    Lenguaje: "HTML",
    Author: "Robert Marte",
    portada: portadaJavaScript,
    logo_lenguaje: logoJavascript, 
    description:
      "Este articulo tratara de dar una breve definición de lo que es html y para que sirve.",
    content:
      `
      El método randomUUID() de la interfaz Crypto se usa para generar un UUID v4 usando un generador de números aleatorios criptográficamente seguro.

      /* Assuming that self.crypto.randomUUID() is available */

      let uuid = self.crypto.randomUUID();
      console.log(uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"
      `,
  }, {
    id: 4,
    pagina: 2,
    title: "¿Qué es ReactJs?",
    Date: "24/07/23",
    Lenguaje: "ReactJS",
    Author: "Robert Marte",
    portada: portadaJavaScript,
    logo_lenguaje: logoReactJs,
    description:
      "En este articulo tratare de explicarles de que se trata ReactJS y cual es su función.",
    content:
      "React es una biblioteca o librería de código abierto que está escrita en JavaScript. Fue desarrollada por Facebook en el 2013 con la finalidad de facilitar la creación de componentes reutilizables e interactivos para las interfaces de usuario. Uno de sus puntos más destacados es que no solo se usa en el lado del cliente, sino que también se puede representar en el servidor y trabajar juntos. Son datos interesantes que React se utiliza en Facebook para la producción de componentes y que Instagram está escrito enteramente en React. Adicionalmente, también se utiliza en otras plataformas como Netflix, PayPal, AirBnb, Uber, Reddit y Twitter.",
  }, {
    id: 3,
    pagina: 2,
    title: "¿Qué es JavaScript?",
    Date: "23/07/23",
    Lenguaje: "JavaScript",
    Author: "Robert Marte",
    portada: portadaJavaScript,
    logo_lenguaje: logoJavascript,
    description:
      "En este articulo tratare de explicarles de que se trata JavaScript y cual es su función.",
    content:
      "JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas. Desde actualizar fuentes de redes sociales a mostrar animaciones y mapas interactivos, las funciones de JavaScript pueden mejorar la experiencia del usuario de un sitio web. Como lenguaje de scripting del lado del servidor, se trata de una de las principales tecnologías de la World Wide Web. Por ejemplo, al navegar por Internet, en cualquier momento en el que vea un carrusel de imágenes, un menú desplegable “click-to-show” (clic para mostrar), o cambien de manera dinámica los elementos de color en una página web, estará viendo los efectos de JavaScript.",
  }, {
    id: 2,
    pagina: 2,
    title: "¿Qué es CSS?",
    Date: "22/07/23",
    Lenguaje: "CSS",
    Author: "Robert Marte",
    portada: portadaCSS,
    logo_lenguaje: logoCSS,
    description:
      "En este Articulo tratare de explicarles que es css y para que se utiliza.",
    content:
      "CSS son las siglas en inglés para «hojas de estilo en cascada» (Cascading Style Sheets). Básicamente, es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. Funciona junto con el lenguaje HTML que se encarga del contenido básico de las páginas. Se les denomina hojas de estilo «en cascada» porque puedes tener varias hojas y una de ellas con las propiedades heredadas (o «en cascada») de otras. Para muchas personas una simple plantilla de blog es suficiente. Aun así, cuando quieras personalizar la apariencia de un sitio necesitarás implementar CSS que, en conjunto con un buen CMS, te ayudará a potenciar el alcance de tu contenido.",
  }, {
    "id": 1,
    pagina: 2,
    title: "¿Qué es HTML?",
    Date: "21/07/23",
    Lenguaje: "HTML",
    Author: "Robert Marte",
    portada: portadaHTML,
    logo_lenguaje: logoHTML, 
    description:
      "Este articulo tratara de dar una breve definición de lo que es html y para que sirve.",
    content:
      "Podria decirse que HTML es el lenguaje con el que se define el contenido de las páginas web. Básicamente se trata de un conjunto de etiquetas que sirven para definir el texto y otros elementos que compondrán una página web, como imágenes, listas, vídeos, etc. HTML se creó en un principio con objetivos divulgativos de información con texto y algunas imágenes. No se pensó que llegara a ser utilizado para crear área de ocio y consulta con carácter multimedia (lo que es actualmente la web), de modo que, el HTML se creó sin dar respuesta a todos los posibles usos que se le iba a dar y a todos los colectivos de gente que lo utilizarían en un futuro. Sin embargo, pese a esta deficiente planificación, si que se han ido incorporando modificaciones con el tiempo, estos son los estándares del HTML. Numerosos estándares se han presentado ya. El HTML 4.01 es el último estándar a febrero de 2001. Actualización a mayo de 2005, en estos momentos está apunto de presentarse la versión 5 de HTML, de la que ya se tiene un borrador casi definitivo.",
  }
];
