import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
