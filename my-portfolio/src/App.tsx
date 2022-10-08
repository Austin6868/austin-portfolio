import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route index element={<Homepage />} />
          <Route path="blogs" element={<Homepage />} />
          <Route path="contact" element={<Homepage />} />
          <Route path="*" element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
