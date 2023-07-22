import {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Article from "./components/Article.tsx";
import NavBar from "./components/NavBar.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import "./App.css";
import Footer from "./components/Footer.tsx";

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
          <Route path="/" element={<Article getIsActive={getIsActive} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>

      <div style={active ? { display: 'none', width: '100%' } : { display: 'block', width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
