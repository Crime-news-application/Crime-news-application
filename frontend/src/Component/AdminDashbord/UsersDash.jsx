import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaSearch,
  FaFilter,
  FaBars,
  FaTrash,
  FaUserEdit,
} from "react-icons/fa";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const usersPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        setUsers(response.data.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // تصفية المستخدمين حسب البحث والدور
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = selectedRole === "all" || user.role === selectedRole;

    return matchesSearch && matchesRole;
  });

  // حساب الصفحات
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // معالجة حذف المستخدم
  const handleDelete = (userId) => {
    // هنا ستضيف منطق الحذف باستخدام API
    if (window.confirm("هل أنت متأكد من رغبتك في حذف هذا المستخدم؟")) {
      console.log("حذف المستخدم ذو المعرف:", userId);
      // axios.delete(`http://localhost:5000/api/users/${userId}`)
      //   .then(() => {
      //     setUsers(users.filter(user => user._id !== userId));
      //   })
      //   .catch(error => console.error("خطأ في حذف المستخدم:", error));
    }
  };

  // معالجة تغيير دور المستخدم
  const handleRoleChange = (userId) => {
    const newRole = prompt("أدخل الدور الجديد (user, admin, editor):", "user");
    if (newRole) {
      console.log("تغيير دور المستخدم ذو المعرف:", userId, "إلى:", newRole);
      // axios.put(`http://localhost:5000/api/users/${userId}/role`, { role: newRole })
      //   .then(() => {
      //     setUsers(users.map(user =>
      //       user._id === userId ? { ...user, role: newRole } : user
      //     ));
      //   })
      //   .catch(error => console.error("خطأ في تحديث دور المستخدم:", error));
    }
  };

  return (
    <div className="max-w-7xl lg:ml-75 flex flex-col">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[var(--screen-red)] text-center bg-white rounded-lg py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[var(--screen-red)]">
        USERS
      </h1>

      {/* Toggle Filters Button for Mobile */}
      <button
        className="md:hidden w-full mb-4 p-3 bg-white rounded-lg shadow flex items-center justify-center"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FaBars className="mr-2" />
        <span>
          {showFilters ? "Hide Search Options" : "Show Search Options"}
        </span>
      </button>

      {/* Filters Section */}
      <div
        className={`bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-md mb-4 sm:mb-6 flex flex-col md:flex-row gap-4 ${
          showFilters ? "block" : "hidden md:flex"
        }`}
      >
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Search by username or email..."
            className="w-full p-3 sm:p-4 pl-10 border border-gray-300 rounded-lg focus:ring-[var(--screen-red)] focus:border-[var(--screen-red)] transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="w-full md:w-1/2 relative">
          <select
            className="w-full p-3 sm:p-4 pl-10 border border-gray-300 rounded-lg bg-white focus:ring-[var(--screen-red)] focus:border-[var(--screen-red)] transition-all"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="user">User</option>
            <option value="editor">Editor</option>
          </select>
          <FaFilter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Users Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full hover:shadow-lg transition-all duration-300">
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7585ff] mx-auto"></div>
            <p className="text-gray-500 text-lg mt-4">Loading users...</p>
          </div>
        ) : (
          <>
            {/* Table View for Large Screens */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#fff3f3]">
                  <tr>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--screen-red)]">
                      Username
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--screen-red)]">
                      Email
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--screen-red)]">
                      Role
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--screen-red)]">
                      Subscription
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--screen-red)]">
                      Created At
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--screen-red)]">
                      Status
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-[var(--screen-red)]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {currentUsers.map((user) => (
                    <tr
                      key={user._id}
                      className="hover:bg-[#f9feff] transition-colors duration-200"
                    >
                      <td className="px-4 py-3">
                        <div className="text-sm text-gray-700 font-medium">
                          {user.username}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-900">{user.email}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#fff3f3] text-[var(--screen-red)]">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {user.subscriptionPlan || "None"}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            user.isActivated
                              ? "bg-[var(--screen-red)] text-white"
                              : "bg-gray-400 text-white"
                          }`}
                        >
                          {user.isActivated ? "Activated" : "Deactivated"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2 justify-end">
                          <button
                            className="p-2 hover:cursor-pointer text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
                            onClick={() => handleRoleChange(user._id)}
                            title="Edit Role"
                          >
                            <FaUserEdit className="w-5 h-5" />
                          </button>
                          <button
                            className="p-2 hover:cursor-pointer text-[#d94e5c] hover:bg-[#fbeaec] rounded-full transition-colors duration-200 mr-2"
                            onClick={() => handleDelete(user._id)}
                            title="Delete User"
                          >
                            <FaTrash className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card View for Mobile */}
            <div className="md:hidden flex flex-col">
              {currentUsers.map((user) => (
                <div
                  key={user._id}
                  className="border-b border-gray-200 p-4 hover:bg-[#f9feff]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-lg font-medium text-gray-900">
                      {user.username}
                    </div>
                    <div className="flex">
                      <button
                        className="p-2 hover:cursor-pointer text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200 ml-1"
                        onClick={() => handleRoleChange(user._id)}
                        title="Edit Role"
                      >
                        <FaUserEdit className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 hover:cursor-pointer text-[#d94e5c] hover:bg-[#fbeaec] rounded-full transition-colors duration-200"
                        onClick={() => handleDelete(user._id)}
                        title="Delete User"
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-sm text-gray-700 mb-2">
                    <span className="font-medium">Email: </span>
                    {user.email}
                  </div>

                  <div className="flex flex-wrap gap-2 justify-between items-center mt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#f3f4ff] text-[#7585ff]">
                      {user.role}
                    </span>

                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        user.isActivated
                          ? "bg-[var(--screen-red)] text-white"
                          : "bg-gray-400 text-white"
                      }`}
                    >
                      {user.isActivated ? "Activated" : "Deactivated"}
                    </span>

                    <span className="text-xs text-gray-500">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {filteredUsers.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No users match your search</p>
          </div>
        )}

        {/* Pagination */}
        {filteredUsers.length > 0 && !loading && (
          <div className="flex justify-center items-center p-4 border-t border-gray-200">
            <div className="flex space-x-1">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md text-sm ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-[#fff3f3] hover:text-[var(--screen-red)] border border-gray-300"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-md text-sm ${
                      currentPage === page
                        ? "bg-[var(--screen-red)] text-white"
                        : "bg-white text-gray-700 hover:bg-[#fff3f3] hover:text-[var(--screen-red)] border border-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md text-sm ${
                  currentPage === totalPages
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white text-gray-700 hover:bg-[#fff3f3] hover:text-[var(--screen-red)] border border-gray-300"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
