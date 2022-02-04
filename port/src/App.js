import logo from "./logo.svg";
import "./App.css";
import ProjectList from "./components/ProjectList";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ErrorPage from "./components/Error";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/projects" element={<ProjectList></ProjectList>} />
        <Route path="/skills" element={<Skills></Skills>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
