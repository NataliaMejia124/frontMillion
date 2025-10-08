import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <Router>
      <Navbar onSearch={(term) => setSearchTerm(term)} />
      <Routes>
        <Route path="/" element={<Home searchTerm={searchTerm} />} />
        <Route path="/property/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
