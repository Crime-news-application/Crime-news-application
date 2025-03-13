import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<SubscriptionCardDisplay/>} />
      </Routes>
    </Router>
 </> 
 );
}

export default App;
