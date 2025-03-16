import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserArticlesDashboard = () => {
  // State to store articles
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Fetch data from Firebase using Axios
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/articles/get")
      .then((response) => {
        // Convert Firebase data to array (as it comes as an object)
        const fetchedArticles = [];
        for (let key in response.data) {
          fetchedArticles.push({
            id: key,
            ...response.data[key],
          });
        }
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const [stats, setStats] = useState({
    total: {
      count: 0,
      change: 0,
      title: "TOTAL ARTICLES",
      color: "bg-blue-400",
    },
    published: {
      count: 0,
      change: 0,
      title: "PUBLISHED ARTICLES",
      color: "bg-green-400",
    },
    pending: {
      count: 0,
      change: 0,
      title: "PENDING ARTICLES",
      color: "bg-yellow-400",
    },
    rejected: {
      count: 0,
      change: 0,
      title: "REJECTED ARTICLES",
      color: "bg-red-400",
    },
  });

  useEffect(() => {
    if (articles && articles.length) {
      // Calculate counts based on status
      const total = articles.length;
      const published = articles.filter(
        (article) => article.status === "Published"
      ).length;
      const pending = articles.filter(
        (article) => article.status === "Pending"
      ).length;
      const rejected = articles.filter(
        (article) => article.status === "Rejected"
      ).length;

      // Update stats with calculated values
      // In a real app, you would calculate the change percentages from previous data
      setStats({
        total: {
          ...stats.total,
          count: total,
          change: "+27.4",
        },
        published: {
          ...stats.published,
          count: published,
          change: "-5.8",
        },
        pending: {
          ...stats.pending,
          count: pending,
          change: "+14.2",
        },
        rejected: {
          ...stats.rejected,
          count: rejected,
          change: "-12.6",
        },
      });
    }
  }, [articles]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error while fetching data: {error.message}
      </div>
    );
  }

  // بيانات نموذجية
  const users = [
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
    {
      _id: "67d324ada9562f47deacbecd",
      username: "mmmm",
      email: "ahmadalnajjar772@gmail.com",
      isActivated: false,
      role: "user",
      createdAt: "2025-03-13T18:32:13.367+00:00",
    },
  ];

  // Combined data for display
  const dashboardData = users.flatMap((user) =>
    articles.map((article) => ({
      user,
      article,
    }))
  );

  // Function to get status color
  const getStatusColor = (state) => {
    switch (state) {
      case "Pending":
        return "bg-yellow-100 text-amber-800 border-amber-300";
      case "Published":
        return "bg-green-100 text-green-800 border-green-300";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-blue-100 text-blue-800 border-blue-300";
    }
  };

  // Function to get user initials
  const getInitials = (username) => {
    return username.substring(0, 2).toUpperCase();
  };

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-full p-6 bg-white">
      <div className="w-full lg:max-w-4xl lg:ml-60 flex justify-around flex-wrap xl:max-w-7xl xl:ml-75 mb-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {Object.values(stats).map((stat, index) => {
            const isPositive = !stat.change.toString().includes("-");

            return (
              <div
                key={index}
                className={`p-4 sm:p-6 rounded-lg text-white ${stat.color} shadow-md`}
              >
                {/* Title */}
                <div className="uppercase text-xs sm:text-sm font-medium mb-2">
                  {stat.title}
                </div>

                {/* Count */}
                <div className="text-xl sm:text-3xl font-bold mb-2">
                  {stat.count}
                </div>

                {/* Change */}
                <div className="flex justify-between items-center">
                  <span className="text-xs p-2 sm:text-sm">
                    Compared to last week
                  </span>
                  <div className="flex items-center">
                    <span className="text-white flex items-center">
                      <span
                        className={`mr-1 rounded-full bg-white bg-opacity-20 flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6`}
                      >
                        {isPositive ? "↑" : "↓"}
                      </span>
                      <span className="text-xs sm:text-sm">{stat.change}%</span>
                    </span>
                  </div>
                </div>

                {/* SVG Chart */}
                <div className="mt-4 h-8 sm:h-10">
                  <svg viewBox="0 0 100 20" className="w-full h-full">
                    <path
                      d="M0,10 Q15,18 30,12 T60,15 T100,10"
                      fill="none"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* جدول البيانات للشاشات الكبيرة مع تطبيق الفلتر */}
      <div className="overflow-x-auto flex flex-col rounded-lg">
        {/* إضافة مكونات الفلتر والبحث بتصميم محسن */}
        <div className="flex flex-col lg:w-[84%] lg:ml-65 lg:flex-row gap-4 mb-6 px-4 lg:px-0">
          <div className="w-full lg:w-1/2">
            <div className="relative bg-white rounded-lg shadow-sm">
              <input
                type="text"
                className="w-full px-4 py-3 pr-10 border-0 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="relative bg-white rounded-lg shadow-sm">
              <select
                className="w-full px-4 py-3 border-0 rounded-lg appearance-none focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-700"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Published">Published</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <table className="w-[85%] divide-y lg:ml-65 divide-gray-200 border border-gray-100 rounded-lg shadow hidden lg:table">
          {/* الجدول يظهر فقط في الشاشات الكبيرة */}
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                # {/* الرقم */}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Username
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Article Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dashboardData
              .filter(
                (item) =>
                  item.article.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) &&
                  (filterStatus === "" || item.article.status === filterStatus)
              )
              .map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1} {/* الرقم */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-sm">
                        {getInitials(item.user.username)}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.user.username}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.user.email}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900 max-w-xs truncate">
                      {item.article.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(item.article.publishDate)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.article.location.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(
                        item.article.status
                      )}`}
                    >
                      {item.article.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to={`/articledetail/${item.article._id}`}
                      className="text-blue-600 hover:cursor-pointer hover:text-blue-900 "
                    >
                      Read more
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* عرض البطاقات على الشاشات الصغيرة مع تطبيق الفلتر */}
        <div className="lg:hidden">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dashboardData
              .filter(
                (item) =>
                  item.article.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) &&
                  (filterStatus === "" || item.article.status === filterStatus)
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                  {/* الجزء العلوي: رقم السطر */}
                  <div className="text-sm font-medium text-gray-500 mb-4">
                    #{index + 1}
                  </div>

                  {/* الجزء العلوي: صورة المستخدم ومعلوماته */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium shadow-sm">
                      {getInitials(item.user.username)}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-gray-900">
                        {item.user.username}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.user.role}
                      </div>
                    </div>
                  </div>

                  {/* محتوى البطاقة */}
                  <div className="space-y-3">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Email:</span>{" "}
                      {item.user.email}
                    </div>
                    <div className="text-sm text-gray-900">
                      <span className="font-medium">Article Title:</span>{" "}
                      {item.article.title}
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Date:</span>{" "}
                      {formatDate(item.article.publishDate)}
                    </div>
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">Location:</span>{" "}
                      {item.article.location.city}
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          item.article.status
                        )}`}
                      >
                        {item.article.status}
                      </span>
                    </div>
                  </div>

                  {/* الأزرار */}
                  <div className="mt-5 flex justify-between space-x-3">
                    <Link
                      to={`/ArticleDetail/${item.article._id}`}
                      className="px-4 py-2 hover:cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserArticlesDashboard;
