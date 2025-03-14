const mongoose = require("mongoose");
const Article = require("../models/Article");

const seedArticles = async () => {
  try {
    // حذف المقالات القديمة إن وجدت
    await Article.deleteMany();

    const articles = [
      {
        title: "اختراع جديد يحدث ثورة في عالم الجرائم الإلكترونية",
        content: {
          description:
            "تمكن مجموعة من المحققين من كشف جريمة إلكترونية معقدة قد تهدد النظام الرقمي العالمي.",
          victimInfo: "الضحية هي شركة كبيرة في مجال التكنولوجيا.",
          suspectInfo: "المشتبه فيه شخص مجهول يستخدم تقنيات متقدمة.",
          weaponsUsed: "أدوات رقمية وبرمجيات معقدة.",
          suicideDetails: "لا توجد معلومات عن انتحار.",
          evidenceNotes: "تم العثور على أدلة رقمية في الخوادم.",
          witnessReports: "شهادات من موظفين في الشركة المتضررة.",
          officerInCharge: "المحقق عبد الله أحمد.",
          caseStatus: "open", // حالة القضية
          publicRisk: "high", // مدى الخطر العام
          relatedCases: "قضية مشابهة في المنطقة الشمالية.",
        },
        author: "65e0f1f99b8e1a23f456abcd", // استبدل بمعرف مستخدم حقيقي
        categories: ["جرائم إلكترونية"],
        tags: ["تقنيات", "جرائم", "أمن"],
        featuredImage: "/uploads/e-crime.jpg",
        media: ["/uploads/crime_scene.jpg", "/uploads/investigation.jpg"],
        status: "Published", // حالة المقال
        location: {
          city: "الرياض",
          country: "السعودية",
        },
      },
      {
        title: "القبض على عصابة سرقات السيارات في المدينة",
        content: {
          description:
            "تمكنت الشرطة من القبض على عصابة متخصصة في سرقات السيارات، ووضعت حداً لهذه الجرائم.",
          victimInfo: "عدد من مالكي السيارات تم سرقتهم.",
          suspectInfo: "عصابة مكونة من 5 أشخاص تم القبض عليهم.",
          weaponsUsed: "أسلحة نارية وصواعق كهربائية.",
          suicideDetails: "لا توجد معلومات عن انتحار.",
          evidenceNotes: "تم العثور على السيارات المسروقة في موقف سيارات مغطى.",
          witnessReports: "شهادات من سكان المنطقة.",
          officerInCharge: "المحقق علي يوسف.",
          caseStatus: "Pending",
          publicRisk: "medium",
          relatedCases: "قضية مشابهة في مدينة جدة.",
        },
        author: "65e0f1f99b8e1a23f456abcd",
        categories: ["سرقات"],
        tags: ["سرقة", "سيارات", "شرطة"],
        featuredImage: "/uploads/stolen-cars.jpg",
        media: ["/uploads/arrest.jpg"],
        status: "Published",
        location: {
          city: "المدينة المنورة",
          country: "السعودية",
        },
      },
    ];

    // إدخال المقالات
    await Article.insertMany(articles);
    console.log("✅ تم إدخال المقالات بنجاح!");
  } catch (error) {
    console.error("❌ حدث خطأ أثناء إدخال البيانات:", error);
  }
};

// تشغيل الدالة لإدخال البيانات
seedArticles();
