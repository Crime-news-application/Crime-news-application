import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ContactUs from "./pages/contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<h1>Home Page</h1>} /> */}
          <Route path="/" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
