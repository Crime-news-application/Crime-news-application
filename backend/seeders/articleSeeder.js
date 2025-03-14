const mongoose = require("mongoose");
const Article = require("../models/Article"); // تأكد أن المسار صحيح

const seedArticles = async () => {
  try {
    // حذف المقالات القديمة إن وجدت
    await Article.deleteMany();

    const articles = [
      {
        title: "اختراع جديد يحدث ثورة في عالم التكنولوجيا",
        content: {
          body: "تمكن مجموعة من العلماء من تطوير تقنية جديدة قد تغير مستقبل التكنولوجيا.",
          summary: "اختراع ثوري في مجال التكنولوجيا الحديثة.",
        },
        author: "65e0f1f99b8e1a23f456abcd", // استبدل بمعرّف مستخدم حقيقي من قاعدة بياناتك
        categories: ["تكنولوجيا"],
        tags: ["ابتكار", "تكنولوجيا", "مستقبل"],
        featuredImage: "/uploads/tech.jpg",
        media: ["/uploads/innovation1.jpg", "/uploads/innovation2.jpg"],
        location: "اليابان",
      },
      {
        title: "هل يمكن للحياة أن تزدهر على المريخ؟",
        content: {
          body: "علماء الفضاء يدرسون إمكانية الحياة على سطح المريخ باستخدام أحدث التقنيات.",
          summary: "المريخ قد يصبح موطنًا جديدًا للبشر!",
        },
        author: "65e0f1f99b8e1a23f456abcd",
        categories: ["علوم", "فضاء"],
        tags: ["ناسا", "فضاء", "مريخ"],
        featuredImage: "/uploads/mars.jpg",
        media: ["/uploads/mars1.jpg"],
        location: "المريخ",
      },
    ];

    // إدخال المقالات
    await Article.insertMany(articles);
    console.log("✅ تم إدخال المقالات بنجاح!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ حدث خطأ أثناء إدخال البيانات:", error);
  }
};

// تشغيل الدالة لإدخال البيانات
seedArticles();
