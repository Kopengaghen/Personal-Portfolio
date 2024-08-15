import './App.css';
import React from 'react';
import {Navbar} from "./components/Navbar";
import {About} from "./components/About";
import {Routes, Route} from "react-router";
import {Home} from "./components/Home.jsx";
import {Works} from "./components/Works.jsx";
import {Footer} from "./components/Footer";

function App() {
   return (
      <div className="app-container">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App
