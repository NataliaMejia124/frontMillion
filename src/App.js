import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({});

  return (
    <Router>
      <Navbar onSearch={setFilters} />
      <Routes>
        <Route path="/" element={<Home filters={filters} />} />
        <Route path="/property/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
