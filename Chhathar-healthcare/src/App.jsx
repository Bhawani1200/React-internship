import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React from "react";
import Navbar from "./components/shared/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/shared/Footer";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </React.Fragment>
  );
}

export default App;
