// import { BrowserRouter as Router, Routes, Route,Lo } from "react-router-dom";
// import React from "react";
// import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
// import Navbar from "./Component/Navbar";
// import { useTranslation } from 'react-i18next';
// function App() {
//   const { t, i18n } = useTranslation();
//   const location = useLocation();


//   useEffect(() => {
//     document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
//   }, [i18n.language]);
//   return (
//     <>

//      {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Navbar />}
//       <Routes>
//       <Route path="/" element={<SubscriptionCardDisplay/>} />

//       </Routes>
//       {/* {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Footer />} */}
//     </>
//  );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
import Navbar from "./Component/Navbar";
import { useTranslation } from "react-i18next";
import SubscriptionCardForm from "./pages/Subscription/test";
import AboutUs from '../src/pages/AboutUs'
import Home from "./pages/Home";

// import ArticlesPage from "./pages/ArticlesPage";
import ContactUs from "./pages/contact";

import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";

import PaymentPage from "./pages/Subscription/Payment";

import Footer1 from "./Component/Footer";


function App() {
  // const { t } = useTranslation();
  const location = useLocation(); 

  return (
    <>

      {location.pathname !== "/login" && location.pathname !== "/dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<SubscriptionCardDisplay />} />
        <Route path="/a" element={<SubscriptionCardForm />} />
         {/* <Route path="/" element={<ArticlesPage />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userprofile" element={<UserProfile />} />
          {/* <Route path="/aform" element={<AForm/>} /> */}
          <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
     
      {location.pathname !== "/login" && location.pathname !== "/dashboard" && <Footer1/>}

     
    </>
  );
}

export default App;
