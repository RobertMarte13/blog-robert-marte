import { Routes, Route } from "react-router-dom";
import Article from "./components/Article.tsx";
import NavBar from "./components/NavBar.tsx";
import About from "./components/About.tsx";
import "./App.css";
import Contact from "./components/Contact.tsx";

function App() {
  return (
    <div>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Article />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
