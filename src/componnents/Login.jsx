
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  console.log();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleClick = async () => {
    if (!form.email.trim() || !form.password.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const res = await axios.post(
        BASE_URL + "/api/v1/login",
        form,
        { withCredentials: true }  
      );
      

      const { token, user, message } = res.data;

      // Save to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert(message); // "Login successful"
      // Optionally redirect to another page

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Something went wrong");
        console.log(error);
      }
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left side (Form) */}
      <div className="w-full p-6 ">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
            Login
          </h2>

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
            Login
          </button>
        </div>
      </div>


    </div>
  );
};

export default Login;
