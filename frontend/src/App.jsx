import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <>
          {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Navbar />}
      <Routes>
      <Route path="/" element={<SubscriptionCardDisplay/>} />
      </Routes>
      {/* {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Footer />} */}
    </>
 );
}

export default App;
