import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Component/Navbar";

import ArticlesPage from "./pages/ArticlesPage";
import ContactUs from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="" element={<h1>Home Page</h1>} /> */}
        <Route path="/" element={<ArticlesPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
