import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  console.log(form);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get("/api/api/v1/getUser");
        setUserData(res.data.data || []);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  const handleClick = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const res = await axios.post("/api/api/v1/postUser", form);

      if (res.status === 201) {
        console.log("Form submitted");
        setForm({ name: "", email: "", password: "" }); // Reset all fields
        // Refresh user list after adding
        const updatedUsers = await axios.get("/api/api/v1/getUser");
        setUserData(updatedUsers.data.data || []);
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left side (Form) */}
      <div className="w-1/2 p-6 overflow-y-auto">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Add User</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            onClick={handleClick}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded transition duration-300 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Right side (User list) */}
      <div className="w-1/2 p-6 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">User List</h2>

          {userData.length > 0 ? (
            userData.map((user, index) => (
              <div key={index} className="mb-4 bg-white p-4 rounded-lg shadow-md">
                <p className="text-gray-800">
                  <strong>Name:</strong> {user.name}
                </p>
                <p className="text-gray-800">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
