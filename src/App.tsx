import {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Article from "./components/articlesComponenst/Article.tsx";
import NavBar from "./components/NavBar.tsx";
import Contact from "./components/Contact.tsx";
import "./App.css";

function App() {
  const [active, setActive] = useState(false)
  function getIsActive(bool: boolean) {
    return setActive(bool)
  }

  return (
    <div>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Article active={active} getIsActive={getIsActive} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
