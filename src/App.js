import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Process from "./Components/Process";
import Contact from "./Components/Contact";
import Topadmissions from "./Components/Topadmissions";
import About from "./Components/About";
import Home from "./Components/Home.js";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Process" element={<Process />} />
          <Route path="/Topadmissions" element={<Topadmissions />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
