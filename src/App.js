import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manage from "./Components/Manage";
import Tools from "./Components/Tools";
import About from "./Components/About";
import Home from "./Components/Home";
import Calculator from "./Components/Calculator";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Manage" element={<Manage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
