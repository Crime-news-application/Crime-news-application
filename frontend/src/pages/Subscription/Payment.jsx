// // // // // // // import React from "react";
// // // // // // // import { useLocation } from "react-router-dom";
// // // // // // // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// // // // // // // import axios from "axios";
// // // // // // // import Cookies from "js-cookie";

// // // // // // // const PaymentPage = () => {
// // // // // // //   const location = useLocation();
// // // // // // //   const { id: debtor_id, amount } = location.state || {};

// // // // // // //   // PayPal client ID (استبدله بالـ client ID الخاص بك)
// // // // // // //   const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

// // // // // // //   // إعدادات PayPal SDK
// // // // // // //   const initialOptions = {
// // // // // // //     "client-id": paypalClientId,
// // // // // // //     currency: "USD", // يمكن تغييره حسب العملة المطلوبة
// // // // // // //     intent: "capture",
// // // // // // //   };

// // // // // // //   const sendDonationData = async (paymentDetails) => {
// // // // // // //     try {
// // // // // // //       // جلب التوكن من الكوكيز
// // // // // // //       const token = Cookies.get("token");

// // // // // // //       if (!token) {
// // // // // // //         console.error("لم يتم العثور على توكن المصادقة في الكوكيز.");
// // // // // // //         throw new Error("No authentication token found.");
// // // // // // //       }

// // // // // // //       // إعداد البيانات المرسلة
// // // // // // //       const requestBody = {
// // // // // // //         debtor_id,     // من location.state
// // // // // // //         amount,        // من location.state
// // // // // // //         payment_method: "Paypal", // ثابتة كـ PayPal
// // // // // // //         payment_status: "Completed", // يتم تحديثها عند إتمام الدفع
// // // // // // //       };

// // // // // // //       const response = await axios.post(
// // // // // // //         "http://localhost:5000/api/donations",
// // // // // // //         requestBody,
// // // // // // //         {
// // // // // // //           headers: {
// // // // // // //             Authorization: `Bearer ${token}`,
// // // // // // //           },
// // // // // // //         }
// // // // // // //       );

// // // // // // //       console.log("تم إرسال بيانات التبرع بنجاح:", response.data);
// // // // // // //       alert("تم تسجيل التبرع بنجاح!");
// // // // // // //     } catch (error) {
// // // // // // //       console.error("خطأ أثناء إرسال بيانات التبرع:", error);
// // // // // // //       alert("فشل تسجيل التبرع. يرجى المحاولة مرة أخرى.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // دالة التعامل مع موافقة الدفع من باي بال
// // // // // // //   const handleApprove = (data, actions) => {
// // // // // // //     return actions.order.capture().then(function (details) {
// // // // // // //       console.log("تم إتمام عملية الدفع:", details);
// // // // // // //       sendDonationData(details);
// // // // // // //       alert("تمت عملية الدفع بنجاح!");
// // // // // // //     });
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans"
// // // // // // //       dir="rtl"
// // // // // // //     >
// // // // // // //       <div className="w-full max-w-[380px] mx-auto bg-gray-100 rounded-3xl shadow-lg overflow-hidden">
// // // // // // //         {/* Header */}
// // // // // // //         <div className="bg-gray-800 text-white p-6 text-center">
// // // // // // //           <h1 className="text-2xl font-bold">صفحة الدفع</h1>
// // // // // // //         </div>

// // // // // // //         {/* تفاصيل الدفع */}
// // // // // // //         <div className="p-6 space-y-6">
// // // // // // //           <div className="bg-white rounded-3xl p-5 shadow">
// // // // // // //             <h2 className="text-xl font-bold text-gray-800 mb-3">تفاصيل الدفع</h2>
// // // // // // //             <div className="border-b border-gray-300 py-2 flex justify-between">
// // // // // // //               <span className="font-semibold text-gray-800">رقم المستفيد:</span>
// // // // // // //               <span className="text-gray-700">{debtor_id}</span>
// // // // // // //             </div>
// // // // // // //             <div className="py-2 flex justify-between">
// // // // // // //               <span className="font-semibold text-gray-800">المبلغ:</span>
// // // // // // //               <span className="text-lg text-gray-700">{amount} دولار</span>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* طريقة الدفع */}
// // // // // // //           <div>
// // // // // // //             <h2 className="text-xl font-bold text-gray-800 mb-4">اختر طريقة الدفع</h2>
// // // // // // //             <div className="border-2 border-gray-300 rounded-3xl p-5 bg-white shadow">
// // // // // // //               <PayPalScriptProvider options={initialOptions}>
// // // // // // //                 <PayPalButtons
// // // // // // //                   createOrder={(data, actions) => {
// // // // // // //                     return actions.order.create({
// // // // // // //                       purchase_units: [
// // // // // // //                         {
// // // // // // //                           amount: {
// // // // // // //                             value: amount,
// // // // // // //                           },
// // // // // // //                         },
// // // // // // //                       ],
// // // // // // //                     });
// // // // // // //                   }}
// // // // // // //                   onApprove={handleApprove}
// // // // // // //                   onError={(err) => {
// // // // // // //                     console.error("PayPal error:", err);
// // // // // // //                     alert("فشلت عملية الدفع. يرجى المحاولة مرة أخرى.");
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </PayPalScriptProvider>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Footer */}
// // // // // // //         <div className="bg-gray-200 p-4 text-center text-gray-600 text-sm">
// // // // // // //           <p>جميع المعاملات آمنة ومشفرة</p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PaymentPage;
// // // // // // import React, { useState } from "react";
// // // // // // import { useLocation } from "react-router-dom";
// // // // // // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// // // // // // import axios from "axios";
// // // // // // import Cookies from "js-cookie";

// // // // // // const PaymentPage = () => {
// // // // // //   const location = useLocation();
// // // // // //   const { id: debtor_id, amount } = location.state || {};
// // // // // //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

// // // // // //   // PayPal client ID
// // // // // //   const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

// // // // // //   // إعدادات PayPal SDK
// // // // // //   const initialOptions = {
// // // // // //     "client-id": paypalClientId,
// // // // // //     currency: "USD",
// // // // // //     intent: "capture",
// // // // // //   };

// // // // // //   const sendDonationData = async (paymentDetails) => {
// // // // // //     try {
// // // // // //       // جلب التوكن من الكوكيز
// // // // // //       const token = Cookies.get("token");

// // // // // //       if (!token) {
// // // // // //         console.error("لم يتم العثور على توكن المصادقة في الكوكيز.");
// // // // // //         throw new Error("No authentication token found.");
// // // // // //       }

// // // // // //       // إعداد البيانات المرسلة
// // // // // //       const requestBody = {
// // // // // //         debtor_id,
// // // // // //         amount,
// // // // // //         payment_method: "Paypal",
// // // // // //         payment_status: "Completed",
// // // // // //       };

// // // // // //       const response = await axios.post(
// // // // // //         "http://localhost:5000/api/donations",
// // // // // //         requestBody,
// // // // // //         {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${token}`,
// // // // // //           },
// // // // // //         }
// // // // // //       );

// // // // // //       console.log("تم إرسال بيانات التبرع بنجاح:", response.data);
// // // // // //       alert("تم تسجيل التبرع بنجاح!");
// // // // // //     } catch (error) {
// // // // // //       console.error("خطأ أثناء إرسال بيانات التبرع:", error);
// // // // // //       alert("فشل تسجيل التبرع. يرجى المحاولة مرة أخرى.");
// // // // // //     }
// // // // // //   };

// // // // // //   // دالة التعامل مع موافقة الدفع من باي بال
// // // // // //   const handleApprove = (data, actions) => {
// // // // // //     return actions.order.capture().then(function (details) {
// // // // // //       console.log("تم إتمام عملية الدفع:", details);
// // // // // //       sendDonationData(details);
// // // // // //       alert("تمت عملية الدفع بنجاح!");
// // // // // //     });
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="bg-gray-100 min-h-screen" dir="rtl">
// // // // // //       {/* NavBar */}
// // // // // //       <nav className="bg-red-900 text-white shadow-lg">
// // // // // //         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
// // // // // //           <div className="flex items-center">
// // // // // //             <h1 className="text-2xl font-bold">مُجرم نيوز</h1>
// // // // // //           </div>
// // // // // //           <div className="flex space-x-4 space-x-reverse">
// // // // // //             <a href="#" className="hover:text-gray-300 px-3">الرئيسية</a>
// // // // // //             <a href="#" className="hover:text-gray-300 px-3">أخبار الجرائم</a>
// // // // // //             <a href="#" className="hover:text-gray-300 px-3">تحقيقات</a>
// // // // // //             <a href="#" className="hover:text-gray-300 px-3">تبرعات</a>
// // // // // //             <a href="#" className="hover:text-gray-300 px-3">حسابي</a>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </nav>

// // // // // //       {/* Main Content */}
// // // // // //       <div className="container mx-auto px-4 py-8">
// // // // // //         <div className="max-w-6xl mx-auto">
// // // // // //           <div className="text-center mb-8">
// // // // // //             <h1 className="text-3xl font-bold mb-2">إتمام عملية الدفع</h1>
// // // // // //             <p className="text-gray-600">ساهم في دعم ضحايا الجريمة وعائلاتهم</p>
// // // // // //           </div>

// // // // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // // //             {/* Sidebar - Order Summary */}
// // // // // //             <div className="lg:col-span-1">
// // // // // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // // // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-4">ملخص التبرع</h2>
// // // // // //                 <div className="space-y-4">
// // // // // //                   <div className="flex justify-between">
// // // // // //                     <span className="font-medium">رقم المستفيد:</span>
// // // // // //                     <span>{debtor_id}</span>
// // // // // //                   </div>
// // // // // //                   <div className="flex justify-between">
// // // // // //                     <span className="font-medium">المبلغ:</span>
// // // // // //                     <span>{amount} دولار</span>
// // // // // //                   </div>
// // // // // //                   <div className="flex justify-between">
// // // // // //                     <span className="font-medium">الضرائب:</span>
// // // // // //                     <span>0.00 دولار</span>
// // // // // //                   </div>
// // // // // //                   <div className="border-t pt-4 mt-4">
// // // // // //                     <div className="flex justify-between font-bold text-lg">
// // // // // //                       <span>الإجمالي:</span>
// // // // // //                       <span>{amount} دولار</span>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="bg-white rounded-lg shadow-md p-6">
// // // // // //                 <h2 className="text-xl font-bold mb-4">معلومات عن المستفيد</h2>
// // // // // //                 <p className="text-gray-700 mb-2">الاسم: عائلة {debtor_id}</p>
// // // // // //                 <p className="text-gray-700 mb-2">الحالة: ضحايا جريمة</p>
// // // // // //                 <p className="text-gray-700 mb-4">الموقع: عمّان، الأردن</p>
// // // // // //                 <div className="bg-gray-100 p-3 rounded-lg text-sm">
// // // // // //                   <p>تبرعك سيساعد عائلة المتضررين على تغطية تكاليف العلاج النفسي والمعيشة الأساسية بعد الحادثة المؤسفة.</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             {/* Main Content - Payment */}
// // // // // //             <div className="lg:col-span-2">
// // // // // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // // // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6">معلومات المتبرع</h2>
// // // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // // // // //                   <div>
// // // // // //                     <label className="block text-gray-700 mb-2">الاسم الأول</label>
// // // // // //                     <input
// // // // // //                       type="text"
// // // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <label className="block text-gray-700 mb-2">الاسم الأخير</label>
// // // // // //                     <input
// // // // // //                       type="text"
// // // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
// // // // // //                     <input
// // // // // //                       type="email"
// // // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                   <div>
// // // // // //                     <label className="block text-gray-700 mb-2">رقم الهاتف</label>
// // // // // //                     <input
// // // // // //                       type="tel"
// // // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                     />
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="bg-white rounded-lg shadow-md p-6">
// // // // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6">طرق الدفع</h2>
                
// // // // // //                 <div className="mb-6">
// // // // // //                   <div className="flex items-center space-x-4 space-x-reverse mb-4">
// // // // // //                     <input
// // // // // //                       type="radio"
// // // // // //                       id="paypal"
// // // // // //                       name="paymentMethod"
// // // // // //                       checked={selectedPaymentMethod === "paypal"}
// // // // // //                       onChange={() => setSelectedPaymentMethod("paypal")}
// // // // // //                       className="h-5 w-5 text-red-600"
// // // // // //                     />
// // // // // //                     <label htmlFor="paypal" className="flex items-center">
// // // // // //                       <span className="ml-2">PayPal</span>
// // // // // //                       <img src="/api/placeholder/120/40" alt="PayPal" className="h-8 mr-2" />
// // // // // //                     </label>
// // // // // //                   </div>
                  
// // // // // //                   <div className="flex items-center space-x-4 space-x-reverse mb-4">
// // // // // //                     <input
// // // // // //                       type="radio"
// // // // // //                       id="credit-card"
// // // // // //                       name="paymentMethod"
// // // // // //                       checked={selectedPaymentMethod === "credit-card"}
// // // // // //                       onChange={() => setSelectedPaymentMethod("credit-card")}
// // // // // //                       className="h-5 w-5 text-red-600"
// // // // // //                     />
// // // // // //                     <label htmlFor="credit-card" className="flex items-center">
// // // // // //                       <span className="ml-2">بطاقة ائتمان</span>
// // // // // //                       <img src="/api/placeholder/120/40" alt="Credit Cards" className="h-8 mr-2" />
// // // // // //                     </label>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 {selectedPaymentMethod === "paypal" && (
// // // // // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // // // // //                     <PayPalScriptProvider options={initialOptions}>
// // // // // //                       <PayPalButtons
// // // // // //                         createOrder={(data, actions) => {
// // // // // //                           return actions.order.create({
// // // // // //                             purchase_units: [
// // // // // //                               {
// // // // // //                                 amount: {
// // // // // //                                   value: amount,
// // // // // //                                 },
// // // // // //                               },
// // // // // //                             ],
// // // // // //                           });
// // // // // //                         }}
// // // // // //                         onApprove={handleApprove}
// // // // // //                         onError={(err) => {
// // // // // //                           console.error("PayPal error:", err);
// // // // // //                           alert("فشلت عملية الدفع. يرجى المحاولة مرة أخرى.");
// // // // // //                         }}
// // // // // //                         style={{ layout: "vertical" }}
// // // // // //                       />
// // // // // //                     </PayPalScriptProvider>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 {selectedPaymentMethod === "credit-card" && (
// // // // // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // // // // //                     <div className="grid grid-cols-1 gap-4">
// // // // // //                       <div>
// // // // // //                         <label className="block text-gray-700 mb-2">رقم البطاقة</label>
// // // // // //                         <input
// // // // // //                           type="text"
// // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                           placeholder="0000 0000 0000 0000"
// // // // // //                         />
// // // // // //                       </div>
// // // // // //                       <div className="grid grid-cols-2 gap-4">
// // // // // //                         <div>
// // // // // //                           <label className="block text-gray-700 mb-2">تاريخ الانتهاء</label>
// // // // // //                           <input
// // // // // //                             type="text"
// // // // // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                             placeholder="MM/YY"
// // // // // //                           />
// // // // // //                         </div>
// // // // // //                         <div>
// // // // // //                           <label className="block text-gray-700 mb-2">رمز الأمان (CVV)</label>
// // // // // //                           <input
// // // // // //                             type="text"
// // // // // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                             placeholder="123"
// // // // // //                           />
// // // // // //                         </div>
// // // // // //                       </div>
// // // // // //                       <div>
// // // // // //                         <label className="block text-gray-700 mb-2">اسم حامل البطاقة</label>
// // // // // //                         <input
// // // // // //                           type="text"
// // // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // // //                         />
// // // // // //                       </div>
// // // // // //                       <button className="bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-lg font-bold mt-4 transition duration-300">
// // // // // //                         إتمام الدفع
// // // // // //                       </button>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 <div className="mt-6 text-sm text-gray-600 flex items-center">
// // // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
// // // // // //                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
// // // // // //                   </svg>
// // // // // //                   جميع المعاملات آمنة ومشفرة بتقنية SSL
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Footer */}
// // // // // //       <footer className="bg-gray-800 text-white mt-12 py-8">
// // // // // //         <div className="container mx-auto px-6">
// // // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// // // // // //             <div>
// // // // // //               <h3 className="text-lg font-bold mb-4">مُجرم نيوز</h3>
// // // // // //               <p className="text-gray-400">
// // // // // //                 موقع إخباري متخصص في تغطية أخبار الجرائم والقضايا الجنائية في الوطن العربي
// // // // // //               </p>
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
// // // // // //               <ul className="space-y-2">
// // // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">الرئيسية</a></li>
// // // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">آخر الأخبار</a></li>
// // // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">تحقيقات</a></li>
// // // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">تبرعات</a></li>
// // // // // //               </ul>
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <h3 className="text-lg font-bold mb-4">تواصل معنا</h3>
// // // // // //               <ul className="space-y-2">
// // // // // //                 <li className="text-gray-400">البريد الإلكتروني: info@crimesnews.com</li>
// // // // // //                 <li className="text-gray-400">الهاتف: +962 6 1234567</li>
// // // // // //                 <li className="text-gray-400">العنوان: عمان، الأردن</li>
// // // // // //               </ul>
// // // // // //             </div>
// // // // // //             <div>
// // // // // //               <h3 className="text-lg font-bold mb-4">النشرة الإخبارية</h3>
// // // // // //               <p className="text-gray-400 mb-2">اشترك للحصول على آخر الأخبار</p>
// // // // // //               <div className="flex">
// // // // // //                 <input
// // // // // //                   type="email"
// // // // // //                   placeholder="البريد الإلكتروني"
// // // // // //                   className="bg-gray-700 text-white p-2 rounded-r-none rounded-lg focus:outline-none flex-grow"
// // // // // //                 />
// // // // // //                 <button className="bg-red-700 hover:bg-red-800 text-white p-2 rounded-l-none rounded-lg">اشتراك</button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
// // // // // //             <p>© 2025 مُجرم نيوز - جميع الحقوق محفوظة</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </footer>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PaymentPage;
// // // // // import React, { useState } from "react";
// // // // // import { useLocation } from "react-router-dom";
// // // // // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// // // // // import axios from "axios";
// // // // // import Cookies from "js-cookie";

// // // // // const PaymentPage = () => {
// // // // //   const location = useLocation();
// // // // //   const { id: debtor_id, amount } = location.state || {};
// // // // //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

// // // // //   // PayPal client ID
// // // // //   const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

// // // // //   // PayPal SDK settings
// // // // //   const initialOptions = {
// // // // //     "client-id": paypalClientId,
// // // // //     currency: "USD",
// // // // //     intent: "capture",
// // // // //   };

// // // // //   const sendDonationData = async (paymentDetails) => {
// // // // //     try {
// // // // //       // Get token from cookies
// // // // //       const token = Cookies.get("token");

// // // // //       if (!token) {
// // // // //         console.error("Authentication token not found in cookies.");
// // // // //         throw new Error("No authentication token found.");
// // // // //       }

// // // // //       // Prepare data
// // // // //       const requestBody = {
// // // // //         debtor_id,
// // // // //         amount,
// // // // //         payment_method: "Paypal",
// // // // //         payment_status: "Completed",
// // // // //       };

// // // // //       const response = await axios.post(
// // // // //         "http://localhost:5000/api/donations",
// // // // //         requestBody,
// // // // //         {
// // // // //           headers: {
// // // // //             Authorization: `Bearer ${token}`,
// // // // //           },
// // // // //         }
// // // // //       );

// // // // //       console.log("Donation data sent successfully:", response.data);
// // // // //       alert("Donation recorded successfully!");
// // // // //     } catch (error) {
// // // // //       console.error("Error while sending donation data:", error);
// // // // //       alert("Failed to record donation. Please try again.");
// // // // //     }
// // // // //   };

// // // // //   // PayPal approval handler
// // // // //   const handleApprove = (data, actions) => {
// // // // //     return actions.order.capture().then(function (details) {
// // // // //       console.log("Payment completed:", details);
// // // // //       sendDonationData(details);
// // // // //       alert("Payment successful!");
// // // // //     });
// // // // //   };

// // // // //   return (
// // // // //     <div className="bg-gray-100 min-h-screen">
// // // // //       {/* NavBar */}
// // // // //       <nav className="bg-red-900 text-white shadow-lg">
// // // // //         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
// // // // //           <div className="flex items-center">
// // // // //             <h1 className="text-2xl font-bold">Crime News</h1>
// // // // //           </div>
// // // // //           <div className="flex space-x-4">
// // // // //             <a href="#" className="hover:text-gray-300 px-3">Home</a>
// // // // //             <a href="#" className="hover:text-gray-300 px-3">Crime News</a>
// // // // //             <a href="#" className="hover:text-gray-300 px-3">Investigations</a>
// // // // //             <a href="#" className="hover:text-gray-300 px-3">Donations</a>
// // // // //             <a href="#" className="hover:text-gray-300 px-3">My Account</a>
// // // // //           </div>
// // // // //         </div>
// // // // //       </nav>

// // // // //       {/* Main Content */}
// // // // //       <div className="container mx-auto px-4 py-8">
// // // // //         <div className="max-w-6xl mx-auto">
// // // // //           <div className="text-center mb-8">
// // // // //             <h1 className="text-3xl font-bold mb-2">Complete Payment</h1>
// // // // //             <p className="text-gray-600">Support crime victims and their families</p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // // //             {/* Sidebar - Order Summary */}
// // // // //             <div className="lg:col-span-1">
// // // // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-4">Donation Summary</h2>
// // // // //                 <div className="space-y-4">
// // // // //                   <div className="flex justify-between">
// // // // //                     <span className="font-medium">Beneficiary ID:</span>
// // // // //                     <span>{debtor_id}</span>
// // // // //                   </div>
// // // // //                   <div className="flex justify-between">
// // // // //                     <span className="font-medium">Amount:</span>
// // // // //                     <span>${amount}</span>
// // // // //                   </div>
// // // // //                   <div className="flex justify-between">
// // // // //                     <span className="font-medium">Taxes:</span>
// // // // //                     <span>$0.00</span>
// // // // //                   </div>
// // // // //                   <div className="border-t pt-4 mt-4">
// // // // //                     <div className="flex justify-between font-bold text-lg">
// // // // //                       <span>Total:</span>
// // // // //                       <span>${amount}</span>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="bg-white rounded-lg shadow-md p-6">
// // // // //                 <h2 className="text-xl font-bold mb-4">Beneficiary Information</h2>
// // // // //                 <p className="text-gray-700 mb-2">Name: Family #{debtor_id}</p>
// // // // //                 <p className="text-gray-700 mb-2">Status: Crime Victims</p>
// // // // //                 <p className="text-gray-700 mb-4">Location: Amman, Jordan</p>
// // // // //                 <div className="bg-gray-100 p-3 rounded-lg text-sm">
// // // // //                   <p>Your donation will help the affected family cover psychological treatment costs and basic living expenses following the unfortunate incident.</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Main Content - Payment */}
// // // // //             <div className="lg:col-span-2">
// // // // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6">Donor Information</h2>
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // // // //                   <div>
// // // // //                     <label className="block text-gray-700 mb-2">First Name</label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-gray-700 mb-2">Last Name</label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-gray-700 mb-2">Email</label>
// // // // //                     <input
// // // // //                       type="email"
// // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                     />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <label className="block text-gray-700 mb-2">Phone Number</label>
// // // // //                     <input
// // // // //                       type="tel"
// // // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                     />
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="bg-white rounded-lg shadow-md p-6">
// // // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6">Payment Methods</h2>
                
// // // // //                 <div className="mb-6">
// // // // //                   <div className="flex items-center space-x-4 mb-4">
// // // // //                     <input
// // // // //                       type="radio"
// // // // //                       id="paypal"
// // // // //                       name="paymentMethod"
// // // // //                       checked={selectedPaymentMethod === "paypal"}
// // // // //                       onChange={() => setSelectedPaymentMethod("paypal")}
// // // // //                       className="h-5 w-5 text-red-600"
// // // // //                     />
// // // // //                     <label htmlFor="paypal" className="flex items-center">
// // // // //                       <span className="mr-2">PayPal</span>
// // // // //                       <img src="/api/placeholder/120/40" alt="PayPal" className="h-8" />
// // // // //                     </label>
// // // // //                   </div>
                  
// // // // //                   <div className="flex items-center space-x-4 mb-4">
// // // // //                     <input
// // // // //                       type="radio"
// // // // //                       id="credit-card"
// // // // //                       name="paymentMethod"
// // // // //                       checked={selectedPaymentMethod === "credit-card"}
// // // // //                       onChange={() => setSelectedPaymentMethod("credit-card")}
// // // // //                       className="h-5 w-5 text-red-600"
// // // // //                     />
// // // // //                     <label htmlFor="credit-card" className="flex items-center">
// // // // //                       <span className="mr-2">Credit Card</span>
// // // // //                       <img src="/api/placeholder/120/40" alt="Credit Cards" className="h-8" />
// // // // //                     </label>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {selectedPaymentMethod === "paypal" && (
// // // // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // // // //                     <PayPalScriptProvider options={initialOptions}>
// // // // //                       <PayPalButtons
// // // // //                         createOrder={(data, actions) => {
// // // // //                           return actions.order.create({
// // // // //                             purchase_units: [
// // // // //                               {
// // // // //                                 amount: {
// // // // //                                   value: amount,
// // // // //                                 },
// // // // //                               },
// // // // //                             ],
// // // // //                           });
// // // // //                         }}
// // // // //                         onApprove={handleApprove}
// // // // //                         onError={(err) => {
// // // // //                           console.error("PayPal error:", err);
// // // // //                           alert("Payment failed. Please try again.");
// // // // //                         }}
// // // // //                         style={{ layout: "vertical" }}
// // // // //                       />
// // // // //                     </PayPalScriptProvider>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {selectedPaymentMethod === "credit-card" && (
// // // // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // // // //                     <div className="grid grid-cols-1 gap-4">
// // // // //                       <div>
// // // // //                         <label className="block text-gray-700 mb-2">Card Number</label>
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                           placeholder="0000 0000 0000 0000"
// // // // //                         />
// // // // //                       </div>
// // // // //                       <div className="grid grid-cols-2 gap-4">
// // // // //                         <div>
// // // // //                           <label className="block text-gray-700 mb-2">Expiration Date</label>
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                             placeholder="MM/YY"
// // // // //                           />
// // // // //                         </div>
// // // // //                         <div>
// // // // //                           <label className="block text-gray-700 mb-2">Security Code (CVV)</label>
// // // // //                           <input
// // // // //                             type="text"
// // // // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                             placeholder="123"
// // // // //                           />
// // // // //                         </div>
// // // // //                       </div>
// // // // //                       <div>
// // // // //                         <label className="block text-gray-700 mb-2">Cardholder Name</label>
// // // // //                         <input
// // // // //                           type="text"
// // // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
// // // // //                         />
// // // // //                       </div>
// // // // //                       <button className="bg-red-700 hover:bg-red-800 text-white py-3 px-6 rounded-lg font-bold mt-4 transition duration-300">
// // // // //                         Complete Payment
// // // // //                       </button>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 <div className="mt-6 text-sm text-gray-600 flex items-center">
// // // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
// // // // //                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
// // // // //                   </svg>
// // // // //                   All transactions are secure and encrypted with SSL technology
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Footer */}
// // // // //       <footer className="bg-gray-800 text-white mt-12 py-8">
// // // // //         <div className="container mx-auto px-6">
// // // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// // // // //             <div>
// // // // //               <h3 className="text-lg font-bold mb-4">Crime News</h3>
// // // // //               <p className="text-gray-400">
// // // // //                 A news site specializing in covering crime news and criminal cases in the Arab world
// // // // //               </p>
// // // // //             </div>
// // // // //             <div>
// // // // //               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
// // // // //               <ul className="space-y-2">
// // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
// // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">Latest News</a></li>
// // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">Investigations</a></li>
// // // // //                 <li><a href="#" className="text-gray-400 hover:text-white">Donations</a></li>
// // // // //               </ul>
// // // // //             </div>
// // // // //             <div>
// // // // //               <h3 className="text-lg font-bold mb-4">Contact Us</h3>
// // // // //               <ul className="space-y-2">
// // // // //                 <li className="text-gray-400">Email: info@crimesnews.com</li>
// // // // //                 <li className="text-gray-400">Phone: +962 6 1234567</li>
// // // // //                 <li className="text-gray-400">Address: Amman, Jordan</li>
// // // // //               </ul>
// // // // //             </div>
// // // // //             <div>
// // // // //               <h3 className="text-lg font-bold mb-4">Newsletter</h3>
// // // // //               <p className="text-gray-400 mb-2">Subscribe to get the latest news</p>
// // // // //               <div className="flex">
// // // // //                 <input
// // // // //                   type="email"
// // // // //                   placeholder="Email"
// // // // //                   className="bg-gray-700 text-white p-2 rounded-r-none rounded-lg focus:outline-none flex-grow"
// // // // //                 />
// // // // //                 <button className="bg-red-700 hover:bg-red-800 text-white p-2 rounded-l-none rounded-lg">Subscribe</button>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
// // // // //             <p>© 2025 Crime News - All Rights Reserved</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </footer>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PaymentPage;
// // // // import React, { useState } from "react";
// // // // import { useLocation } from "react-router-dom";
// // // // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// // // // import axios from "axios";
// // // // import Cookies from "js-cookie";

// // // // const PaymentPage = () => {
// // // //   const location = useLocation();
// // // //   const { id: debtor_id, amount } = location.state || {};
// // // //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

// // // //   // PayPal client ID
// // // //   const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

// // // //   // PayPal SDK settings
// // // //   const initialOptions = {
// // // //     "client-id": paypalClientId,
// // // //     currency: "USD",
// // // //     intent: "capture",
// // // //   };

// // // //   const sendDonationData = async (paymentDetails) => {
// // // //     try {
// // // //       // Get token from cookies
// // // //       const token = Cookies.get("token");

// // // //       if (!token) {
// // // //         console.error("Authentication token not found in cookies.");
// // // //         throw new Error("No authentication token found.");
// // // //       }

// // // //       // Prepare data
// // // //       const requestBody = {
// // // //         debtor_id,
// // // //         amount,
// // // //         payment_method: "Paypal",
// // // //         payment_status: "Completed",
// // // //       };

// // // //       const response = await axios.post(
// // // //         "http://localhost:5000/api/donations",
// // // //         requestBody,
// // // //         {
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //         }
// // // //       );

// // // //       console.log("Donation data sent successfully:", response.data);
// // // //       alert("Donation recorded successfully!");
// // // //     } catch (error) {
// // // //       console.error("Error while sending donation data:", error);
// // // //       alert("Failed to record donation. Please try again.");
// // // //     }
// // // //   };

// // // //   // PayPal approval handler
// // // //   const handleApprove = (data, actions) => {
// // // //     return actions.order.capture().then(function (details) {
// // // //       console.log("Payment completed:", details);
// // // //       sendDonationData(details);
// // // //       alert("Payment successful!");
// // // //     });
// // // //   };

// // // //   // Custom colors based on your CSS variables
// // // //   const customColors = {
// // // //     primary: "#61090b",    // --primary-color, --screen-red
// // // //     dark: "#000000",       // --screen-dark, --background-color
// // // //     text: "#ffffff",       // Assuming light text on dark background
// // // //     lightGray: "#f3f4f6",  // For lighter backgrounds
// // // //     mediumGray: "#9ca3af", // For secondary text
// // // //     darkGray: "#1f2937",   // For footer
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen" style={{ backgroundColor: customColors.lightGray }}>
// // // //       {/* NavBar */}
// // // //       {/* <nav className="shadow-lg" style={{ backgroundColor: customColors.dark }}>
// // // //         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
// // // //           <div className="flex items-center">
// // // //             <h1 className="text-2xl font-bold" style={{ color: customColors.text }}>Crime News</h1>
// // // //           </div>
// // // //           <div className="flex space-x-4">
// // // //             <a href="#" className="hover:opacity-80 px-3" style={{ color: customColors.text }}>Home</a>
// // // //             <a href="#" className="hover:opacity-80 px-3" style={{ color: customColors.text }}>Crime News</a>
// // // //             <a href="#" className="hover:opacity-80 px-3" style={{ color: customColors.text }}>Investigations</a>
// // // //             <a href="#" className="hover:opacity-80 px-3" style={{ color: customColors.text }}>Donations</a>
// // // //             <a href="#" className="hover:opacity-80 px-3" style={{ color: customColors.text }}>My Account</a>
// // // //           </div>
// // // //         </div>
// // // //       </nav> */}

// // // //       {/* Main Content */}
// // // //       <div className="container mx-auto px-4 py-8">
// // // //         <div className="max-w-6xl mx-auto">
// // // //           <div className="text-center mb-8">
// // // //             <h1 className="text-3xl font-bold mb-2" style={{ color: customColors.primary }}>Complete Payment</h1>
// // // //             <p className="text-gray-600">Support crime victims and their families</p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // // //             {/* Sidebar - Order Summary */}
// // // //             <div className="lg:col-span-1">
// // // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-4" style={{ color: customColors.primary }}>Donation Summary</h2>
// // // //                 <div className="space-y-4">
// // // //                   <div className="flex justify-between">
// // // //                     <span className="font-medium">Beneficiary ID:</span>
// // // //                     <span>{debtor_id}</span>
// // // //                   </div>
// // // //                   <div className="flex justify-between">
// // // //                     <span className="font-medium">Amount:</span>
// // // //                     <span>${amount}</span>
// // // //                   </div>
// // // //                   <div className="flex justify-between">
// // // //                     <span className="font-medium">Taxes:</span>
// // // //                     <span>$0.00</span>
// // // //                   </div>
// // // //                   <div className="border-t pt-4 mt-4">
// // // //                     <div className="flex justify-between font-bold text-lg">
// // // //                       <span>Total:</span>
// // // //                       <span>${amount}</span>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h2 className="text-xl font-bold mb-4" style={{ color: customColors.primary }}>Beneficiary Information</h2>
// // // //                 <p className="text-gray-700 mb-2">Name: Family #{debtor_id}</p>
// // // //                 <p className="text-gray-700 mb-2">Status: Crime Victims</p>
// // // //                 <p className="text-gray-700 mb-4">Location: Amman, Jordan</p>
// // // //                 <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: customColors.lightGray }}>
// // // //                   <p>Your donation will help the affected family cover psychological treatment costs and basic living expenses following the unfortunate incident.</p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Main Content - Payment */}
// // // //             <div className="lg:col-span-2">
// // // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>Donor Information</h2>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // // //                   <div>
// // // //                     <label className="block text-gray-700 mb-2">First Name</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                       style={{ focusRing: customColors.primary }}
// // // //                     />
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-gray-700 mb-2">Last Name</label>
// // // //                     <input
// // // //                       type="text"
// // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                       style={{ focusRing: customColors.primary }}
// // // //                     />
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-gray-700 mb-2">Email</label>
// // // //                     <input
// // // //                       type="email"
// // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                       style={{ focusRing: customColors.primary }}
// // // //                     />
// // // //                   </div>
// // // //                   <div>
// // // //                     <label className="block text-gray-700 mb-2">Phone Number</label>
// // // //                     <input
// // // //                       type="tel"
// // // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                       style={{ focusRing: customColors.primary }}
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="bg-white rounded-lg shadow-md p-6">
// // // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>Payment Methods</h2>
                
// // // //                 <div className="mb-6">
// // // //                   <div className="flex items-center space-x-4 mb-4">
// // // //                     <input
// // // //                       type="radio"
// // // //                       id="paypal"
// // // //                       name="paymentMethod"
// // // //                       checked={selectedPaymentMethod === "paypal"}
// // // //                       onChange={() => setSelectedPaymentMethod("paypal")}
// // // //                       className="h-5 w-5"
// // // //                       style={{ color: customColors.primary }}
// // // //                     />
// // // //                     <label htmlFor="paypal" className="flex items-center">
// // // //                       <span className="mr-2">PayPal</span>
// // // //                       <img src="/api/placeholder/120/40" alt="PayPal" className="h-8" />
// // // //                     </label>
// // // //                   </div>
                  
// // // //                   <div className="flex items-center space-x-4 mb-4">
// // // //                     <input
// // // //                       type="radio"
// // // //                       id="credit-card"
// // // //                       name="paymentMethod"
// // // //                       checked={selectedPaymentMethod === "credit-card"}
// // // //                       onChange={() => setSelectedPaymentMethod("credit-card")}
// // // //                       className="h-5 w-5"
// // // //                       style={{ color: customColors.primary }}
// // // //                     />
// // // //                     <label htmlFor="credit-card" className="flex items-center">
// // // //                       <span className="mr-2">Credit Card</span>
// // // //                       <img src="/api/placeholder/120/40" alt="Credit Cards" className="h-8" />
// // // //                     </label>
// // // //                   </div>
// // // //                 </div>

// // // //                 {selectedPaymentMethod === "paypal" && (
// // // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // // //                     <PayPalScriptProvider options={initialOptions}>
// // // //                       <PayPalButtons
// // // //                         createOrder={(data, actions) => {
// // // //                           return actions.order.create({
// // // //                             purchase_units: [
// // // //                               {
// // // //                                 amount: {
// // // //                                   value: amount,
// // // //                                 },
// // // //                               },
// // // //                             ],
// // // //                           });
// // // //                         }}
// // // //                         onApprove={handleApprove}
// // // //                         onError={(err) => {
// // // //                           console.error("PayPal error:", err);
// // // //                           alert("Payment failed. Please try again.");
// // // //                         }}
// // // //                         style={{ layout: "vertical" }}
// // // //                       />
// // // //                     </PayPalScriptProvider>
// // // //                   </div>
// // // //                 )}

// // // //                 {selectedPaymentMethod === "credit-card" && (
// // // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // // //                     <div className="grid grid-cols-1 gap-4">
// // // //                       <div>
// // // //                         <label className="block text-gray-700 mb-2">Card Number</label>
// // // //                         <input
// // // //                           type="text"
// // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                           style={{ focusRing: customColors.primary }}
// // // //                           placeholder="0000 0000 0000 0000"
// // // //                         />
// // // //                       </div>
// // // //                       <div className="grid grid-cols-2 gap-4">
// // // //                         <div>
// // // //                           <label className="block text-gray-700 mb-2">Expiration Date</label>
// // // //                           <input
// // // //                             type="text"
// // // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                             style={{ focusRing: customColors.primary }}
// // // //                             placeholder="MM/YY"
// // // //                           />
// // // //                         </div>
// // // //                         <div>
// // // //                           <label className="block text-gray-700 mb-2">Security Code (CVV)</label>
// // // //                           <input
// // // //                             type="text"
// // // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                             style={{ focusRing: customColors.primary }}
// // // //                             placeholder="123"
// // // //                           />
// // // //                         </div>
// // // //                       </div>
// // // //                       <div>
// // // //                         <label className="block text-gray-700 mb-2">Cardholder Name</label>
// // // //                         <input
// // // //                           type="text"
// // // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // // //                           style={{ focusRing: customColors.primary }}
// // // //                         />
// // // //                       </div>
// // // //                       <button 
// // // //                         className="text-white py-3 px-6 rounded-lg font-bold mt-4 transition duration-300 hover:opacity-90"
// // // //                         style={{ backgroundColor: customColors.primary }}
// // // //                       >
// // // //                         Complete Payment
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 )}

// // // //                 <div className="mt-6 text-sm text-gray-600 flex items-center">
// // // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
// // // //                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
// // // //                   </svg>
// // // //                   All transactions are secure and encrypted with SSL technology
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Footer */}
// // // //       {/* <footer style={{ backgroundColor: customColors.dark, color: customColors.text }} className="mt-12 py-8">
// // // //         <div className="container mx-auto px-6">
// // // //           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
// // // //             <div>
// // // //               <h3 className="text-lg font-bold mb-4">Crime News</h3>
// // // //               <p className="opacity-70">
// // // //                 A news site specializing in covering crime news and criminal cases in the Arab world
// // // //               </p>
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
// // // //               <ul className="space-y-2">
// // // //                 <li><a href="#" className="opacity-70 hover:opacity-100">Home</a></li>
// // // //                 <li><a href="#" className="opacity-70 hover:opacity-100">Latest News</a></li>
// // // //                 <li><a href="#" className="opacity-70 hover:opacity-100">Investigations</a></li>
// // // //                 <li><a href="#" className="opacity-70 hover:opacity-100">Donations</a></li>
// // // //               </ul>
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="text-lg font-bold mb-4">Contact Us</h3>
// // // //               <ul className="space-y-2">
// // // //                 <li className="opacity-70">Email: info@crimesnews.com</li>
// // // //                 <li className="opacity-70">Phone: +962 6 1234567</li>
// // // //                 <li className="opacity-70">Address: Amman, Jordan</li>
// // // //               </ul>
// // // //             </div>
// // // //             <div>
// // // //               <h3 className="text-lg font-bold mb-4">Newsletter</h3>
// // // //               <p className="opacity-70 mb-2">Subscribe to get the latest news</p>
// // // //               <div className="flex">
// // // //                 <input
// // // //                   type="email"
// // // //                   placeholder="Email"
// // // //                   className="p-2 rounded-r-none rounded-lg focus:outline-none flex-grow text-black"
// // // //                 />
// // // //                 <button 
// // // //                   className="text-white p-2 rounded-l-none rounded-lg hover:opacity-90"
// // // //                   style={{ backgroundColor: customColors.primary }}
// // // //                 >
// // // //                   Subscribe
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="border-t border-gray-700 mt-8 pt-6 text-center opacity-70">
// // // //             <p>© 2025 Crime News - All Rights Reserved</p>
// // // //           </div>
// // // //         </div>
// // // //       </footer> */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PaymentPage;
// // // import React, { useState } from "react";
// // // import { useLocation } from "react-router-dom";
// // // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// // // import axios from "axios";
// // // import Cookies from "js-cookie";

// // // const PaymentPage = () => {
// // //   const location = useLocation();
// // //   // نفترض أن location.state يحتوي على debtor_id، amount وربما subscriptionPlan (إذا كان الدفع للاشتراك)
// // //   const { id: debtor_id, amount, subscriptionPlan } = location.state || {};
// // //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

// // //   // PayPal client ID (استبدله بالـ client ID الخاص بك)
// // // //   const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";
// // // const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

// // //   // إعدادات PayPal SDK مع إضافة "components"
// // //   const initialOptions = {
// // //     "client-id": paypalClientId,
// // //     components: "buttons",
// // //     currency: "USD",
// // //     intent: "capture",
// // //   };

// // //   // دالة إرسال بيانات الدفع إلى الباك إند (يمكن استخدامها لتسجيل عملية التبرع أو تحديث الاشتراك)
// // //   const sendDonationData = async (paymentDetails) => {
// // //     try {
// // //       const token = Cookies.get("token");
// // //       if (!token) {
// // //         console.error("Authentication token not found in cookies.");
// // //         throw new Error("No authentication token found.");
// // //       }

// // //       // تجهيز البيانات المرسلة
// // //       const requestBody = {
// // //         debtor_id,
// // //         amount,
// // //         payment_method: "Paypal",
// // //         payment_status: "Completed",
// // //         // إذا كان الدفع للاشتراك، أضف حقل الخطة (يمكنك تغييره حسب الحاجة)
// // //         ...(subscriptionPlan && { subscriptionPlan }),
// // //       };

// // //       const response = await axios.post(
// // //         "http://localhost:5000/api/donations",
// // //         requestBody,
// // //         {
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //         }
// // //       );

// // //       console.log("Donation data sent successfully:", response.data);
// // //       alert("Payment recorded successfully!");
// // //     } catch (error) {
// // //       console.error("Error while sending donation data:", error);
// // //       alert("Failed to record payment. Please try again.");
// // //     }
// // //   };

// // //   // دالة التعامل مع موافقة الدفع من باي بال
// // //   const handleApprove = (data, actions) => {
// // //     return actions.order.capture().then(function (details) {
// // //       console.log("Payment completed:", details);
// // //       sendDonationData(details);
// // //       alert("Payment successful!");
// // //     });
// // //   };

// // //   // تعريف ألوان مخصصة حسب تصميمك
// // //   const customColors = {
// // //     primary: "#61090b",
// // //     dark: "#000000",
// // //     text: "#ffffff",
// // //     lightGray: "#f3f4f6",
// // //     mediumGray: "#9ca3af",
// // //     darkGray: "#1f2937",
// // //   };

// // //   return (
// // //     <div className="min-h-screen" style={{ backgroundColor: customColors.lightGray }}>
// // //       {/* يمكنك إضافة الـ NavBar هنا إذا رغبت */}
// // //       <div className="container mx-auto px-4 py-8">
// // //         <div className="max-w-6xl mx-auto">
// // //           <div className="text-center mb-8">
// // //             <h1 className="text-3xl font-bold mb-2" style={{ color: customColors.primary }}>Complete Payment</h1>
// // //             <p className="text-gray-600">Support crime victims and their families</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //             {/* Sidebar - Order Summary */}
// // //             <div className="lg:col-span-1">
// // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // //                 <h2 className="text-xl font-bold border-b pb-4 mb-4" style={{ color: customColors.primary }}>Donation Summary</h2>
// // //                 <div className="space-y-4">
// // //                   <div className="flex justify-between">
// // //                     <span className="font-medium">Beneficiary ID:</span>
// // //                     <span>{debtor_id}</span>
// // //                   </div>
// // //                   <div className="flex justify-between">
// // //                     <span className="font-medium">Amount:</span>
// // //                     <span>${amount}</span>
// // //                   </div>
// // //                   <div className="flex justify-between">
// // //                     <span className="font-medium">Taxes:</span>
// // //                     <span>$0.00</span>
// // //                   </div>
// // //                   <div className="border-t pt-4 mt-4">
// // //                     <div className="flex justify-between font-bold text-lg">
// // //                       <span>Total:</span>
// // //                       <span>${amount}</span>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="bg-white rounded-lg shadow-md p-6">
// // //                 <h2 className="text-xl font-bold mb-4" style={{ color: customColors.primary }}>Beneficiary Information</h2>
// // //                 <p className="text-gray-700 mb-2">Name: Family #{debtor_id}</p>
// // //                 <p className="text-gray-700 mb-2">Status: Crime Victims</p>
// // //                 <p className="text-gray-700 mb-4">Location: Amman, Jordan</p>
// // //                 <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: customColors.lightGray }}>
// // //                   <p>Your donation will help cover psychological treatment costs and basic living expenses.</p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Main Content - Payment */}
// // //             <div className="lg:col-span-2">
// // //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>Donor Information</h2>
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// // //                   <div>
// // //                     <label className="block text-gray-700 mb-2">First Name</label>
// // //                     <input
// // //                       type="text"
// // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                       style={{ borderColor: customColors.primary }}
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-gray-700 mb-2">Last Name</label>
// // //                     <input
// // //                       type="text"
// // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                       style={{ borderColor: customColors.primary }}
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-gray-700 mb-2">Email</label>
// // //                     <input
// // //                       type="email"
// // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                       style={{ borderColor: customColors.primary }}
// // //                     />
// // //                   </div>
// // //                   <div>
// // //                     <label className="block text-gray-700 mb-2">Phone Number</label>
// // //                     <input
// // //                       type="tel"
// // //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                       style={{ borderColor: customColors.primary }}
// // //                     />
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="bg-white rounded-lg shadow-md p-6">
// // //                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>Payment Methods</h2>
                
// // //                 <div className="mb-6">
// // //                   <div className="flex items-center space-x-4 mb-4">
// // //                     <input
// // //                       type="radio"
// // //                       id="paypal"
// // //                       name="paymentMethod"
// // //                       checked={selectedPaymentMethod === "paypal"}
// // //                       onChange={() => setSelectedPaymentMethod("paypal")}
// // //                       className="h-5 w-5"
// // //                       style={{ accentColor: customColors.primary }}
// // //                     />
// // //                     <label htmlFor="paypal" className="flex items-center">
// // //                       <span className="mr-2">PayPal</span>
// // //                       <img src="/api/placeholder/120/40" alt="PayPal" className="h-8" />
// // //                     </label>
// // //                   </div>
                  
// // //                   <div className="flex items-center space-x-4 mb-4">
// // //                     <input
// // //                       type="radio"
// // //                       id="credit-card"
// // //                       name="paymentMethod"
// // //                       checked={selectedPaymentMethod === "credit-card"}
// // //                       onChange={() => setSelectedPaymentMethod("credit-card")}
// // //                       className="h-5 w-5"
// // //                       style={{ accentColor: customColors.primary }}
// // //                     />
// // //                     <label htmlFor="credit-card" className="flex items-center">
// // //                       <span className="mr-2">Credit Card</span>
// // //                       <img src="/api/placeholder/120/40" alt="Credit Cards" className="h-8" />
// // //                     </label>
// // //                   </div>
// // //                 </div>

// // //                 {selectedPaymentMethod === "paypal" && (
// // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // //                     <PayPalScriptProvider options={initialOptions}>
// // //                       <PayPalButtons
// // //                         createOrder={(data, actions) => {
// // //                           return actions.order.create({
// // //                             purchase_units: [
// // //                               {
// // //                                 amount: { value: amount },
// // //                               },
// // //                             ],
// // //                           });
// // //                         }}
// // //                         onApprove={handleApprove}
// // //                         onError={(err) => {
// // //                           console.error("PayPal error:", err);
// // //                           alert("Payment failed. Please try again.");
// // //                         }}
// // //                         style={{ layout: "vertical" }}
// // //                       />
// // //                     </PayPalScriptProvider>
// // //                   </div>
// // //                 )}

// // //                 {selectedPaymentMethod === "credit-card" && (
// // //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// // //                     <div className="grid grid-cols-1 gap-4">
// // //                       <div>
// // //                         <label className="block text-gray-700 mb-2">Card Number</label>
// // //                         <input
// // //                           type="text"
// // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                           style={{ borderColor: customColors.primary }}
// // //                           placeholder="0000 0000 0000 0000"
// // //                         />
// // //                       </div>
// // //                       <div className="grid grid-cols-2 gap-4">
// // //                         <div>
// // //                           <label className="block text-gray-700 mb-2">Expiration Date</label>
// // //                           <input
// // //                             type="text"
// // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                             style={{ borderColor: customColors.primary }}
// // //                             placeholder="MM/YY"
// // //                           />
// // //                         </div>
// // //                         <div>
// // //                           <label className="block text-gray-700 mb-2">Security Code (CVV)</label>
// // //                           <input
// // //                             type="text"
// // //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                             style={{ borderColor: customColors.primary }}
// // //                             placeholder="123"
// // //                           />
// // //                         </div>
// // //                       </div>
// // //                       <div>
// // //                         <label className="block text-gray-700 mb-2">Cardholder Name</label>
// // //                         <input
// // //                           type="text"
// // //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// // //                           style={{ borderColor: customColors.primary }}
// // //                         />
// // //                       </div>
// // //                       <button 
// // //                         className="text-white py-3 px-6 rounded-lg font-bold mt-4 transition duration-300 hover:opacity-90"
// // //                         style={{ backgroundColor: customColors.primary }}
// // //                       >
// // //                         Complete Payment
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 )}

// // //                 <div className="mt-6 text-sm text-gray-600 flex items-center">
// // //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
// // //                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
// // //                   </svg>
// // //                   All transactions are secure and encrypted with SSL technology
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       {/* يمكنك إضافة Footer هنا إذا رغبت */}
// // //     </div>
// // //   );
// // // };

// // // export default PaymentPage;
// // import React, { useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// // import axios from "axios";
// // import Cookies from "js-cookie";

// // // Error Boundary للتعامل مع أخطاء مكون PayPalButtons
// // class ErrorBoundary extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { hasError: false };
// //   }
// //   static getDerivedStateFromError(error) {
// //     return { hasError: true };
// //   }
// //   componentDidCatch(error, errorInfo) {
// //     console.error("ErrorBoundary caught an error", error, errorInfo);
// //   }
// //   render() {
// //     if (this.state.hasError) {
// //       return <h2>حدث خطأ أثناء تحميل معالج الدفع. يرجى المحاولة لاحقاً.</h2>;
// //     }
// //     return this.props.children;
// //   }
// // }

// // const PaymentPage = () => {
// //   const location = useLocation();
// //   // نفترض أن location.state يحتوي على debtor_id، amount وربما subscriptionPlan (إذا كان الدفع للاشتراك)
// //   const { id: debtor_id, amount, subscriptionPlan } = location.state || {};
// //   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

// //   // PayPal client ID (استبدله بالـ client ID الخاص بك)
// //   const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

// //   // إعدادات PayPal SDK مع إضافة "components"
// //   const initialOptions = {
// //     "client-id": paypalClientId,
// //     components: "buttons",
// //     currency: "USD",
// //     intent: "capture",
// //   };

// //   // دالة إرسال بيانات الدفع إلى الباك إند (يمكن استخدامها لتسجيل عملية التبرع أو تحديث الاشتراك)
// //   const sendDonationData = async (paymentDetails) => {
// //     try {
// //       const token = Cookies.get("token");
// //       if (!token) {
// //         console.error("Authentication token not found in cookies.");
// //         throw new Error("No authentication token found.");
// //       }
// //       // تجهيز البيانات المرسلة
// //       const requestBody = {
// //         debtor_id,
// //         amount,
// //         payment_method: "Paypal",
// //         payment_status: "Completed",
// //         ...(subscriptionPlan && { subscriptionPlan }),
// //       };

// //       const response = await axios.post(
// //         "http://localhost:5000/api/donations",
// //         requestBody,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         }
// //       );
// //       console.log("Donation data sent successfully:", response.data);
// //       alert("Payment recorded successfully!");
// //     } catch (error) {
// //       console.error("Error while sending donation data:", error);
// //       alert("Failed to record payment. Please try again.");
// //     }
// //   };

// //   // دالة التعامل مع موافقة الدفع من باي بال
// //   const handleApprove = (data, actions) => {
// //     return actions.order.capture().then(function (details) {
// //       console.log("Payment completed:", details);
// //       sendDonationData(details);
// //       alert("Payment successful!");
// //     });
// //   };

// //   // تعريف ألوان مخصصة حسب تصميمك
// //   const customColors = {
// //     primary: "#61090b",
// //     dark: "#000000",
// //     text: "#ffffff",
// //     lightGray: "#f3f4f6",
// //     mediumGray: "#9ca3af",
// //     darkGray: "#1f2937",
// //   };

// //   return (
// //     <div className="min-h-screen" style={{ backgroundColor: customColors.lightGray }}>
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="max-w-6xl mx-auto">
// //           <div className="text-center mb-8">
// //             <h1 className="text-3xl font-bold mb-2" style={{ color: customColors.primary }}>
// //               Complete Payment
// //             </h1>
// //             <p className="text-gray-600">Support crime victims and their families</p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //             {/* Sidebar - Order Summary */}
// //             <div className="lg:col-span-1">
// //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// //                 <h2 className="text-xl font-bold border-b pb-4 mb-4" style={{ color: customColors.primary }}>
// //                   Donation Summary
// //                 </h2>
// //                 <div className="space-y-4">
// //                   <div className="flex justify-between">
// //                     <span className="font-medium">Beneficiary ID:</span>
// //                     <span>{debtor_id}</span>
// //                   </div>
// //                   <div className="flex justify-between">
// //                     <span className="font-medium">Amount:</span>
// //                     <span>${amount}</span>
// //                   </div>
// //                   <div className="flex justify-between">
// //                     <span className="font-medium">Taxes:</span>
// //                     <span>$0.00</span>
// //                   </div>
// //                   <div className="border-t pt-4 mt-4">
// //                     <div className="flex justify-between font-bold text-lg">
// //                       <span>Total:</span>
// //                       <span>${amount}</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-white rounded-lg shadow-md p-6">
// //                 <h2 className="text-xl font-bold mb-4" style={{ color: customColors.primary }}>
// //                   Beneficiary Information
// //                 </h2>
// //                 <p className="text-gray-700 mb-2">Name: Family #{debtor_id}</p>
// //                 <p className="text-gray-700 mb-2">Status: Crime Victims</p>
// //                 <p className="text-gray-700 mb-4">Location: Amman, Jordan</p>
// //                 <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: customColors.lightGray }}>
// //                   <p>Your donation will help cover psychological treatment costs and basic living expenses.</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Main Content - Payment */}
// //             <div className="lg:col-span-2">
// //               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
// //                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>
// //                   Donor Information
// //                 </h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
// //                   <div>
// //                     <label className="block text-gray-700 mb-2">First Name</label>
// //                     <input
// //                       type="text"
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                       style={{ borderColor: customColors.primary }}
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700 mb-2">Last Name</label>
// //                     <input
// //                       type="text"
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                       style={{ borderColor: customColors.primary }}
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700 mb-2">Email</label>
// //                     <input
// //                       type="email"
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                       style={{ borderColor: customColors.primary }}
// //                     />
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700 mb-2">Phone Number</label>
// //                     <input
// //                       type="tel"
// //                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                       style={{ borderColor: customColors.primary }}
// //                     />
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="bg-white rounded-lg shadow-md p-6">
// //                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>
// //                   Payment Methods
// //                 </h2>
// //                 <div className="mb-6">
// //                   <div className="flex items-center space-x-4 mb-4">
// //                     <input
// //                       type="radio"
// //                       id="paypal"
// //                       name="paymentMethod"
// //                       checked={selectedPaymentMethod === "paypal"}
// //                       onChange={() => setSelectedPaymentMethod("paypal")}
// //                       className="h-5 w-5"
// //                       style={{ accentColor: customColors.primary }}
// //                     />
// //                     <label htmlFor="paypal" className="flex items-center">
// //                       <span className="mr-2">PayPal</span>
// //                       <img src="/api/placeholder/120/40" alt="PayPal" className="h-8" />
// //                     </label>
// //                   </div>
// //                   <div className="flex items-center space-x-4 mb-4">
// //                     <input
// //                       type="radio"
// //                       id="credit-card"
// //                       name="paymentMethod"
// //                       checked={selectedPaymentMethod === "credit-card"}
// //                       onChange={() => setSelectedPaymentMethod("credit-card")}
// //                       className="h-5 w-5"
// //                       style={{ accentColor: customColors.primary }}
// //                     />
// //                     <label htmlFor="credit-card" className="flex items-center">
// //                       <span className="mr-2">Credit Card</span>
// //                       <img src="/api/placeholder/120/40" alt="Credit Cards" className="h-8" />
// //                     </label>
// //                   </div>
// //                 </div>

// //                 {selectedPaymentMethod === "paypal" && (
// //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// //                     <PayPalScriptProvider options={initialOptions}>
// //                       <ErrorBoundary>
// //                         <PayPalButtons
// //                           createOrder={(data, actions) => {
// //                             return actions.order.create({
// //                               purchase_units: [
// //                                 {
// //                                   amount: { value: amount },
// //                                 },
// //                               ],
// //                             });
// //                           }}
// //                           onApprove={handleApprove}
// //                           onError={(err) => {
// //                             console.error("PayPal error:", err);
// //                             alert("Payment failed. Please try again.");
// //                           }}
// //                           style={{ layout: "vertical" }}
// //                         />
// //                       </ErrorBoundary>
// //                     </PayPalScriptProvider>
// //                   </div>
// //                 )}

// //                 {selectedPaymentMethod === "credit-card" && (
// //                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
// //                     <div className="grid grid-cols-1 gap-4">
// //                       <div>
// //                         <label className="block text-gray-700 mb-2">Card Number</label>
// //                         <input
// //                           type="text"
// //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                           style={{ borderColor: customColors.primary }}
// //                           placeholder="0000 0000 0000 0000"
// //                         />
// //                       </div>
// //                       <div className="grid grid-cols-2 gap-4">
// //                         <div>
// //                           <label className="block text-gray-700 mb-2">Expiration Date</label>
// //                           <input
// //                             type="text"
// //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                             style={{ borderColor: customColors.primary }}
// //                             placeholder="MM/YY"
// //                           />
// //                         </div>
// //                         <div>
// //                           <label className="block text-gray-700 mb-2">Security Code (CVV)</label>
// //                           <input
// //                             type="text"
// //                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                             style={{ borderColor: customColors.primary }}
// //                             placeholder="123"
// //                           />
// //                         </div>
// //                       </div>
// //                       <div>
// //                         <label className="block text-gray-700 mb-2">Cardholder Name</label>
// //                         <input
// //                           type="text"
// //                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
// //                           style={{ borderColor: customColors.primary }}
// //                         />
// //                       </div>
// //                       <button 
// //                         className="text-white py-3 px-6 rounded-lg font-bold mt-4 transition duration-300 hover:opacity-90"
// //                         style={{ backgroundColor: customColors.primary }}
// //                       >
// //                         Complete Payment
// //                       </button>
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div className="mt-6 text-sm text-gray-600 flex items-center">
// //                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
// //                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
// //                   </svg>
// //                   All transactions are secure and encrypted with SSL technology
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       {/* يمكن إضافة Footer هنا */}
// //     </div>
// //   );
// // };

// // export default PaymentPage;
// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import axios from "axios";
// import Cookies from "js-cookie";

// // Error Boundary للتعامل مع الأخطاء داخل مكون PayPalButtons
// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }
//   componentDidCatch(error, errorInfo) {
//     console.error("ErrorBoundary caught an error", error, errorInfo);
//   }
//   render() {
//     if (this.state.hasError) {
//       return <h2>حدث خطأ أثناء تحميل معالج الدفع. يرجى المحاولة لاحقاً.</h2>;
//     }
//     return this.props.children;
//   }
// }

// const PaymentPage = () => {
//   const location = useLocation();
//   // نتوقع أن يحتوي location.state على debtor_id, amount وربما subscriptionPlan
//   const { id: debtor_id, amount, subscriptionPlan } = location.state || {};
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

//   // تأكد من استخدام Client ID صحيح وفي حالة Sandbox استخدم معلمات Sandbox
//   const paypalClientId = "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

//   // إعدادات PayPal SDK مع تضمين "components"
//   const initialOptions = {
//     "client-id": paypalClientId,
//     components: "buttons",
//     currency: "USD",
//     intent: "capture",
//   };

// //   const sendDonationData = async (paymentDetails) => {
// //     try {
// //       const token = Cookies.get("token");
// //       if (!token) {
// //         console.error("Authentication token not found in cookies.");
// //         throw new Error("No authentication token found.");
// //       }
// //       const requestBody = {
// //         debtor_id,
// //         amount,
// //         payment_method: "Paypal",
// //         payment_status: "Completed",
// //         ...(subscriptionPlan && { subscriptionPlan }),
// //       };

// //       const response = await axios.post(
// //         "http://localhost:5000/api/donations",
// //         requestBody,
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //         }
// //       );
// //       console.log("Donation data sent successfully:", response.data);
// //       alert("Payment recorded successfully!");
// //     } catch (error) {
// //       console.error("Error while sending donation data:", error);
// //       alert("Failed to record payment. Please try again.");
// //     }
// //   };
// const sendDonationData = async (paymentDetails) => {
//     try {
//       // Get the token from cookies
//       const token = Cookies.get("token");
  
//       if (!token) {
//         console.error("No authentication token found in cookies.");
//         throw new Error("No authentication token found.");
//       }
  
//       console.log("Token found:", token);
  
//       // Prepare the request body
//       const requestBody = {
//         debtor_id,  // From location.state
//         amount,     // From location.state
//         payment_method: "Paypal",  // Hardcoded as PayPal
//         payment_status: "Completed",  // Update to Completed after payment
//       };
  
//       console.log("Sending donation data:", requestBody);
  
//       const response = await axios.post("http://localhost:5000/api/donations", requestBody, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
  
//       console.log("Donation data sent successfully:", response.data);
//       alert("تم تسجيل التبرع بنجاح!");
//     } catch (error) {
//       console.error("Error sending donation data:", error);
//       alert("فشل تسجيل التبرع. يرجى المحاولة مرة أخرى.");
//     }
//   };
//   const handleApprove = (data, actions) => {
//     return actions.order.capture().then((details) => {
//       console.log("Payment completed:", details);
//       sendDonationData(details);
//       alert("Payment successful!");
//     });
//   };

//   const customColors = {
//     primary: "#61090b",
//     dark: "#000000",
//     text: "#ffffff",
//     lightGray: "#f3f4f6",
//     mediumGray: "#9ca3af",
//     darkGray: "#1f2937",
//   };

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: customColors.lightGray }}>
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold mb-2" style={{ color: customColors.primary }}>
//               Complete Payment
//             </h1>
//             <p className="text-gray-600">Support crime victims and their families</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             {/* Sidebar - Order Summary */}
//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <h2 className="text-xl font-bold border-b pb-4 mb-4" style={{ color: customColors.primary }}>
//                   Donation Summary
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between">
//                     <span className="font-medium">Beneficiary ID:</span>
//                     <span>{debtor_id}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">Amount:</span>
//                     <span>${amount}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">Taxes:</span>
//                     <span>$0.00</span>
//                   </div>
//                   <div className="border-t pt-4 mt-4">
//                     <div className="flex justify-between font-bold text-lg">
//                       <span>Total:</span>
//                       <span>${amount}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-xl font-bold mb-4" style={{ color: customColors.primary }}>
//                   Beneficiary Information
//                 </h2>
//                 <p className="text-gray-700 mb-2">Name: Family #{debtor_id}</p>
//                 <p className="text-gray-700 mb-2">Status: Crime Victims</p>
//                 <p className="text-gray-700 mb-4">Location: Amman, Jordan</p>
//                 <div className="p-3 rounded-lg text-sm" style={{ backgroundColor: customColors.lightGray }}>
//                   <p>Your donation will help cover psychological treatment costs and basic living expenses.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Main Content - Payment */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>
//                   Donor Information
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                   <div>
//                     <label className="block text-gray-700 mb-2">First Name</label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                       style={{ borderColor: customColors.primary }}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2">Last Name</label>
//                     <input
//                       type="text"
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                       style={{ borderColor: customColors.primary }}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2">Email</label>
//                     <input
//                       type="email"
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                       style={{ borderColor: customColors.primary }}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-700 mb-2">Phone Number</label>
//                     <input
//                       type="tel"
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                       style={{ borderColor: customColors.primary }}
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>
//                   Payment Methods
//                 </h2>
//                 <div className="mb-6">
//                   <div className="flex items-center space-x-4 mb-4">
//                     <input
//                       type="radio"
//                       id="paypal"
//                       name="paymentMethod"
//                       checked={selectedPaymentMethod === "paypal"}
//                       onChange={() => setSelectedPaymentMethod("paypal")}
//                       className="h-5 w-5"
//                       style={{ accentColor: customColors.primary }}
//                     />
//                     <label htmlFor="paypal" className="flex items-center">
//                       <span className="mr-2">PayPal</span>
//                       <img src="/api/placeholder/120/40" alt="PayPal" className="h-8" />
//                     </label>
//                   </div>
//                   <div className="flex items-center space-x-4 mb-4">
//                     <input
//                       type="radio"
//                       id="credit-card"
//                       name="paymentMethod"
//                       checked={selectedPaymentMethod === "credit-card"}
//                       onChange={() => setSelectedPaymentMethod("credit-card")}
//                       className="h-5 w-5"
//                       style={{ accentColor: customColors.primary }}
//                     />
//                     <label htmlFor="credit-card" className="flex items-center">
//                       <span className="mr-2">Credit Card</span>
//                       <img src="/api/placeholder/120/40" alt="Credit Cards" className="h-8" />
//                     </label>
//                   </div>
//                 </div>

//                 {selectedPaymentMethod === "paypal" && (
//                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
//                    <PayPalScriptProvider options={initialOptions}>
//                 <PayPalButtons
//                   createOrder={(data, actions) => {
//                     return actions.order.create({
//                       purchase_units: [
//                         {
//                           amount: {
//                             value: 10,
//                           },
//                         },
//                       ],
//                     });
//                   }}
//                   onApprove={handleApprove}
//                   onError={(err) => {
//                     console.error("PayPal error:", err);
//                     alert("فشلت عملية الدفع. يرجى المحاولة مرة أخرى.");
//                   }}
//                 />
//               </PayPalScriptProvider>
//                   </div>
//                 )}

//                 {selectedPaymentMethod === "credit-card" && (
//                   <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
//                     <div className="grid grid-cols-1 gap-4">
//                       <div>
//                         <label className="block text-gray-700 mb-2">Card Number</label>
//                         <input
//                           type="text"
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                           style={{ borderColor: customColors.primary }}
//                           placeholder="0000 0000 0000 0000"
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-gray-700 mb-2">Expiration Date</label>
//                           <input
//                             type="text"
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                             style={{ borderColor: customColors.primary }}
//                             placeholder="MM/YY"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-gray-700 mb-2">Security Code (CVV)</label>
//                           <input
//                             type="text"
//                             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                             style={{ borderColor: customColors.primary }}
//                             placeholder="123"
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <label className="block text-gray-700 mb-2">Cardholder Name</label>
//                         <input
//                           type="text"
//                           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
//                           style={{ borderColor: customColors.primary }}
//                         />
//                       </div>
//                       <button
//                         className="text-white py-3 px-6 rounded-lg font-bold mt-4 transition duration-300 hover:opacity-90"
//                         style={{ backgroundColor: customColors.primary }}
//                       >
//                         Complete Payment
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 <div className="mt-6 text-sm text-gray-600 flex items-center">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
//                     <path
//                       fillRule="evenodd"
//                       d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   All transactions are secure and encrypted with SSL technology
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* يمكنك إضافة Footer هنا */}
//     </div>
//   );
// };

// export default PaymentPage;
import React, { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import Cookies from "js-cookie";


// // Error Boundary للتعامل مع الأخطاء داخل مكون PayPalButtons
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h2>حدث خطأ أثناء تحميل معالج الدفع. يرجى المحاولة لاحقاً.</h2>;
    }
    return this.props.children;
  }
}


// دالة للحصول على بيانات المستخدم من الكوكيز (يجب تخزين بيانات المستخدم كـ JSON في الكوكيز)
const getLoggedInUser = () => {
  const userCookie = Cookies.get("user");
  if (userCookie) {
    try {
      return JSON.parse(userCookie);
    } catch (error) {
      console.error("Error parsing user cookie:", error);
      return {};
    }
  }
  return {};
};

const PaymentPage = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // نحاول الحصول على بيانات بطاقة الاشتراك من location.state، وإن لم توجد نقرأها من معطيات URL
  const planData = location.state || {
    id: searchParams.get("id"),
    title: searchParams.get("title"),
    price: searchParams.get("price"),
    duration: searchParams.get("duration"),
    features: searchParams.get("features")
      ? searchParams.get("features").split(",")
      : [],
  };

  // بيانات البطاقة في متغيرات منفصلة
  const { id, title, price, duration, features } = planData;

  // بيانات المستخدم من الكوكيز
  const loggedInUser = getLoggedInUser();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("paypal");

  // تأكد من استخدام Client ID الصحيح (Sandbox أو Live)
  const paypalClientId =
    "AQO_lrXGFsV-gcb9dl11jWIu-BW84qeQbOxa31FnSsbeJj_fpHAMK3sb-c2aJjJSnjuaN4CDAxvT3tL1";

  // إعدادات PayPal SDK
  const initialOptions = {
    "client-id": paypalClientId,
    components: "buttons",
    currency: "USD",
    intent: "capture",
  };

  const sendPaymentData = async (paymentDetails) => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        console.error("Authentication token not found in cookies.");
        throw new Error("No authentication token found.");
      }
      // تجهيز البيانات المرسلة لتسجيل عملية الدفع مع بيانات البطاقة
      const requestBody = {
        subscriber_id: loggedInUser.id, // يجب أن يكون معرف المستخدم موجودًا في الكوكيز
        subscriptionCard_id: id,
        payment_method: "Paypal",
        // يمكن إضافة معلومات إضافية مثل السعر أو تفاصيل العملية
      };

      const response = await axios.post(
        "http://localhost:5000/api/payment",
        requestBody,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Payment data sent successfully:", response.data);
      alert("Payment recorded successfully!");
    } catch (error) {
      console.error("Error while sending payment data:", error);
      alert("Failed to record payment. Please try again.");
    }
  };

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      console.log("Payment completed:", details);
      sendPaymentData(details);
      alert("Payment successful!");
    });
  };

  // تعريف ألوان مخصصة حسب تصميمك
  const customColors = {
    primary: "#61090b",
    dark: "#000000",
    text: "#ffffff",
    lightGray: "#f3f4f6",
    mediumGray: "#9ca3af",
    darkGray: "#1f2937",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: customColors.lightGray }}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* عرض بيانات المستخدم */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2" style={{ color: customColors.primary }}>
              Complete Payment
            </h1>
            {loggedInUser && loggedInUser.name ? (
              <p className="text-gray-600">
                {loggedInUser.name} ({loggedInUser.email})
              </p>
            ) : (
              <p className="text-gray-600">Please login to complete the payment.</p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - تفاصيل بطاقة الاشتراك المختارة */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold border-b pb-4 mb-4" style={{ color: customColors.primary }}>
                  Subscription Plan Details
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Plan:</span>
                    <span>{title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Price:</span>
                    <span>{price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Duration:</span>
                    <span>{duration}</span>
                  </div>
                  <div>
                    <span className="font-medium">Features:</span>
                    <ul className="mt-2">
                      {features && features.length > 0 ? (
                        features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 fill-current text-green-600 mr-2"
                            >
                              <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
                            </svg>
                            {feature}
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-500">No features available.</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Payment */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold border-b pb-4 mb-6" style={{ color: customColors.primary }}>
                  Payment Information
                </h2>
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === "paypal"}
                      onChange={() => setSelectedPaymentMethod("paypal")}
                      className="h-5 w-5"
                      style={{ accentColor: customColors.primary }}
                    />
                    <label htmlFor="paypal" className="flex items-center">
                      <span className="mr-2">PayPal</span>
                      <img src="/api/placeholder/120/40" alt="PayPal" className="h-8" />
                    </label>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <input
                      type="radio"
                      id="credit-card"
                      name="paymentMethod"
                      checked={selectedPaymentMethod === "credit-card"}
                      onChange={() => setSelectedPaymentMethod("credit-card")}
                      className="h-5 w-5"
                      style={{ accentColor: customColors.primary }}
                    />
                    <label htmlFor="credit-card" className="flex items-center">
                      <span className="mr-2">Credit Card</span>
                      <img src="/api/placeholder/120/40" alt="Credit Cards" className="h-8" />
                    </label>
                  </div>
                </div>

                {selectedPaymentMethod === "paypal" && (
                  <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
                    <PayPalScriptProvider options={initialOptions}>
                        <ErrorBoundary>
                      <PayPalButtons
                        createOrder={(data, actions) =>
                          actions.order.create({
                            purchase_units: [
                              {
                                amount: { value: price.replace("$", "") },
                              },
                            ],
                          })
                        }
                        onApprove={handleApprove}
                        onError={(err) => {
                          console.error("PayPal error:", err);
                          alert("Payment failed. Please try again.");
                        }}
                        style={{ layout: "vertical" }}
                      /></ErrorBoundary>
                    </PayPalScriptProvider>
                  </div>
                )}

                {selectedPaymentMethod === "credit-card" && (
                  <div className="border-2 border-gray-300 rounded-lg p-5 bg-white">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Card Number</label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          style={{ borderColor: customColors.primary }}
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 mb-2">Expiration Date</label>
                          <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ borderColor: customColors.primary }}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 mb-2">Security Code (CVV)</label>
                          <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                            style={{ borderColor: customColors.primary }}
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Cardholder Name</label>
                        <input
                          type="text"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          style={{ borderColor: customColors.primary }}
                        />
                      </div>
                      <button
                        className="text-white py-3 px-6 rounded-lg font-bold mt-4 transition duration-300 hover:opacity-90"
                        style={{ backgroundColor: customColors.primary }}
                      >
                        Complete Payment
                      </button>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-sm text-gray-600 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  All transactions are secure and encrypted with SSL technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* يمكنك إضافة Footer هنا */}
    </div>
  );
};

export default PaymentPage;
