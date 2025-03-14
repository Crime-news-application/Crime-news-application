import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Component/Navbar";

import ArticlesPage from "./pages/ArticlesPage";
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="" element={<h1>Home Page</h1>} /> */}
          <Route path="/" element={<ArticlesPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
