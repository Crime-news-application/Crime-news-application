import { useEffect, useState } from "react";
import axios from "axios";

function ContactDash() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/app/message");
        setMessages(response.data.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // نضيف حالة للرسائل المقروءة بشكل داخلي
  const [readMessages, setReadMessages] = useState({});

  const markAsRead = (id) => {
    setReadMessages((prev) => ({ ...prev, [id]: true }));
  };

  const isRead = (id) => {
    return readMessages[id] === true;
  };

  // إنشاء تاريخ عشوائي للعرض
  const getRandomDate = () => {
    const randomDaysAgo = Math.floor(Math.random() * 30) + 1;
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);

    const randomDate = new Date();
    randomDate.setDate(randomDate.getDate() - randomDaysAgo);
    randomDate.setHours(randomHours, randomMinutes);

    return randomDate.toLocaleDateString("EG", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // تصفية بناءً على حالة القراءة
  const [filter, setFilter] = useState("all");
  const filteredMessages = messages.filter((msg) => {
    if (filter === "all") return true;
    if (filter === "read") return isRead(msg._id);
    if (filter === "unread") return !isRead(msg._id);
    return true;
  });

  return (
    <div className="p-4 lg:pl-75 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Messages</h2>
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-500 mr-2 self-center">Filter:</span>
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-md ${
                filter === "all"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`px-3 py-1 rounded-md ${
                filter === "unread"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter("read")}
              className={`px-3 py-1 rounded-md ${
                filter === "read"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Read
            </button>
          </div>
        </div>

        <div className=" rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-[var(--primary-color)] border-b border-[var(--primary-color)] hidden sm:flex">
            <div className="w-1/4 font-semibold text-white">Sender</div>
            <div className="w-2/4 font-semibold text-white">Message</div>
            <div className="w-1/4 font-semibold text-white text-right">
              Date
            </div>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--primary-color)] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading messages...</p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="p-8 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="mt-2 text-gray-500">No messages found</p>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredMessages.map((msg) => (
                <li
                  key={msg._id}
                  className={`px-4 py-4 hover:bg-gray-50 flex flex-col sm:flex-row items-start transition-colors ${
                    !isRead(msg._id) ? "bg-red-50" : ""
                  }`}
                  onClick={() => markAsRead(msg._id)}
                >
                  <div className="w-full sm:w-1/4 mb-3 sm:mb-0">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-[var(--primary-color)] font-semibold">
                        {msg.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-900">{msg.name}</p>
                        <p className="text-sm text-gray-500">{msg.email}</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full sm:w-2/4 mb-2 sm:mb-0">
                    <p className="text-gray-800">
                      {!isRead(msg._id) && (
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      )}
                      {msg.message}
                    </p>
                  </div>
                  <div className="w-full sm:w-1/4 text-left text-sm text-gray-500 mt-2 sm:mt-0">
                    {getRandomDate()}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-500 gap-2">
          <div>Total messages: {messages.length}</div>
          <div>
            Unread: {messages.length - Object.keys(readMessages).length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDash;
