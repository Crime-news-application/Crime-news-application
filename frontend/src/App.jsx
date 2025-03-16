import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React from "react";
import SubscriptionCardDisplay from "./pages/Subscription/SubscriptionCardDisplay";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
// import { useTranslation } from "react-i18next";
import SubscriptionCardForm from "./pages/Subscription/test";
import AboutUs from "../src/pages/AboutUs";
import Home from "./pages/Home";
import SidebarDoners from "./Component/AdminDashbord/SidebarDash";
import ArticlesPage from "./pages/ArticlesPage";
import ContactUs from "./pages/contact";////////////////////////////////////////////////////
import BookMark from "./pages/Bookmark";////////////////////////////////////////////////////
import Login from "./pages/LogIn";
import Signup from "./pages/SignUp";
import UserProfile from "./pages/UserProfile";
import Overview from "./Component/AdminDashbord/overview";
import FormDetails from "./Component/AdminDashbord/ArticalCards";
import PaymentPage from "./pages/Subscription/Payment";
import ArticleDetail from "./Component/AdminDashbord/ArticleDetail";
import Users from "./Component/AdminDashbord/UsersDash";
import AForm from "./pages/detail/AForm";
import Details from "./pages/detail/FormDetails";
import Comment from "./pages/detail/Comment";
import PostDashboard from "./pages/Subscription/Post";
function App() {
  // const { t } = useTranslation();
  const location = useLocation(); 

  return (
    <>
      {/*Display the navbar in the right component  DONT TOUCH*/}
      {![
        "/login",
        "/dashboard",
        "/signup",
        "/subformDash",
        "/articlescardsDash",
        "/UsersDash","/postform"
      ].includes(location.pathname) &&
        !location.pathname.startsWith("/articledetail/") && <Navbar />}

      {/* عرض SidebarDoners في صفحات الداشبورد */}
      {([
        "/dashboard",
        "/articlescardsDash",
        "/subformDash",
        "/ArticleDetail/:id",
        "/UsersDash","/postform"
      ].includes(location.pathname) ||
        location.pathname.startsWith("/articledetail/")) && <SidebarDoners />}

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
        <Route path="login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/dashboard" element={<Overview />} />
        <Route path="/articlescardsDash" element={<FormDetails />} />
        <Route path="/subformDash" element={<SubscriptionCardForm />} />
         <Route path="/bookmark" element={<BookMark />} />
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/aform" element={<AForm />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/comments/:id" element={<Comment />} />

        <Route
          path="/SubscriptionCardDisplay"
          element={<SubscriptionCardDisplay />}
        />
        <Route
          path="/SubscriptionCardForm"
          element={<SubscriptionCardForm />}
        />
        <Route path="login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/ArticlesPage" element={<ArticlesPage />} />
        <Route path="/articledetail/:id" element={<ArticleDetail />} />
        <Route path="/UsersDash" element={<Users />} />
        <Route path="/postform" element={<PostDashboard />} />
      </Routes>
      {/*Displat the footer in the right component DONT TOUCH*/}
      {![
        "/login",
        "/dashboard",
        "/signup",
        "/subformDash",
        "/articlescardsDash",
        "/UsersDash","/postform"
      ].includes(location.pathname) &&
        !location.pathname.startsWith("/articledetail/") && <Footer />}
    </>
  );
}

export default App;
