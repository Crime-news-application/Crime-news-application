const Contact = require("../models/contact");

const addMessages = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = await Contact.create({ name, email, message });

    return res
      .status(201) //successfully//
      .json({ message: "Message added successfully", data: newMessage });
  } catch (error) {
    console.error("Error adding message:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find(); // جلب جميع الرسائل من قاعدة البيانات
    return res.status(200).json({ data: messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addMessages, getMessages };
