import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Collections from './pages/collections/Collections';
import Gallery from './pages/gallery/Gallery'
import "./App.css";

function App() {
  return (<Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/collections" element={<Collections/>} />
      <Route path="/gallery" element={<Gallery/>} />
    </Routes>
  </Router>);
  }
  
  export default App;
