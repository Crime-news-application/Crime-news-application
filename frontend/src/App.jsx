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


function App() {
  const { t } = useTranslation();
  const location = useLocation(); 

  return (
    <>
      {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<SubscriptionCardDisplay />} />
        <Route path="/a" element={<SubscriptionCardForm />} />
      </Routes>
      {/* {location.pathname !== "/Login" && location.pathname !== "/dashboard" && <Footer />} */}
    </>
  );
}

export default App;
