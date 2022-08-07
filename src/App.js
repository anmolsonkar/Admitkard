import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manage from "./Components/Manage";
import Community from "./Components/Community";
import About from "./Components/About";
import Home from "./Components/Home";

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
          <Route path="/Community" element={<Community />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
