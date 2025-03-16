import React, { useState, useEffect } from "react";
import axios from "axios";
function Users() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserProfile();
  }, []);

  // GET user profile
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          withCredentials: true,
        }
      );
      console.log("✅ User profile fetched:", response.data);
      setUser(response.data.user);
    } catch (error) {
      console.error(
        "❌ Error fetching profile:",
        error.response?.data || error.message
      );
    }
  };
  console.log(user)
  return <></>;
}

export default Users;
