import { Routes, Route } from "react-router-dom";
import Article from "./components/articlesComponenst/Article.tsx";
import NavBar from "./components/NavBar.tsx";
import Contact from "./components/Contact.tsx";
import Filtrado from "./components/articlesComponenst/subComponents/Filtrado.tsx";
import useSearch from "./hook/useSearch.ts";
import "./App.css";

function App() {
  const { filtrado, busqueda, setBusqueda, isActive, setIsActive, removeClickArticle, getIsActive, active } = useSearch();

  return (
    <div>
      <main>
        <NavBar
          setBusqueda={setBusqueda}
          busqueda={busqueda}
          filtrado={filtrado}
          setIsActive={setIsActive}
          isActive={isActive}
          removeClickArticle={removeClickArticle}
        />

        <div className="content-filtrado">
          <Filtrado
            isActive={isActive}
            filtrado={filtrado}
            removeClickArticle={removeClickArticle}
          />
        </div>
        <Routes>
          {isActive === false ? (
            <Route
              path="/"
              element={<Article active={active} getIsActive={getIsActive} />}
            />
          ) : null}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
