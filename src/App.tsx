import Navbar from "./components/Navbar";
import "./index.css";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Contact, About, Projects } from "./pages";

function App() {
  return (
    <main className="site-shell">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
