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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React from "react";
import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
import Navbar from "./Component/Navbar";
// import { useTranslation } from "react-i18next";
import SubscriptionCardForm from "./pages/Subscription/test";
import AboutUs from "../src/pages/AboutUs";
import Home from "./pages/Home";

import SidebarDoners from "./Component/AdminDashbord/SidebarDoners";
import ArticlesPage from "./pages/ArticlesPage";
import ContactUs from "./pages/contact";////////////////////////////////////////////////////
import BookMark from "./pages/Bookmark";////////////////////////////////////////////////////
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
// import AForm from "./pages/Articles-Form/AForm";
import AdminDashbord from "./pages/AdminDashbord";
import Overview from "./Component/AdminDashbord/overview";
import FormDetails from "./Component/AdminDashbord/ArticalCards";
// import Footer from "./Component/Footer"; // أضفت الـ Footer

import PaymentPage from "./pages/Subscription/Payment";

import Footer1 from "./Component/Footer";

function App() {
  // const { t } = useTranslation();
  const location = useLocation(); 

  return (
    <>
      {/* عرض الـ Navbar فقط في الصفحات المناسبة */}
      {![
        "/login",
        "/dashboard",
        "/subformDash",
        "/articlescardsDash",
      ].includes(location.pathname) && <Navbar />}

      {/* عرض SidebarDoners في صفحات الداشبورد */}
      {[
        "/dashboard",
        "/articlescardsDash",
        "/subformDash",
      ].includes(location.pathname) && <SidebarDoners />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route
          path="/SubscriptionCardDisplay"
          element={<SubscriptionCardDisplay />}
        />
        <Route
          path="/SubscriptionCardForm"
          element={<SubscriptionCardForm />}
        />
        {/* <Route path="/aa" element={<ArticlesPage />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />} />
        {/* <Route path="/aform" element={<AForm/>} /> */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/articlescardsDash" element={<FormDetails />} />
        <Route path="/subformDash" element={<SubscriptionCardForm />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>

      {![
        "/login",
        "/dashboard",
        "/subformDash",
        "/articlescardsDash",
      ].includes(location.pathname) && (
        <Footer1 />
      )}

      {/* عرض الـ Footer في الصفحات المناسبة */}
      {/* {!["/login", "/dashboard"].includes(location.pathname) && <Footer />} */}
    </>
  );
}

export default App;
