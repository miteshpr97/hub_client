import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(BASE_URL + "/api/v1/getUser");
        setUserData(res.data.data || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/v1/deleteUser/${userId}`);
      if (res.status === 200) {
        console.log("user deleted successfully");

        const updatedUsers = await axios.get(
         BASE_URL +  "/api/v1/getUser"
        );
        setUserData(updatedUsers.data.data || []);
      }
    } catch (error) {
      console.log(error, "error to delete user");
    }
  };

  return (
    <div className="w-full p-6 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          User List
        </h2>

        {userData.length > 0 ? (
          userData.map((user, index) => (
            <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-800">
                <strong>Name:</strong> {user.name}
              </p>
              <p className="text-gray-800">
                <strong>Email:</strong> {user.email}
              </p>
              <button
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 cursor-pointer"
                onClick={() => handleDeleteUser(user._id)}
              >
                delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
