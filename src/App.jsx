import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fecthUserData = async () => {
      try {
        const res = await axios.get("/api/api/v1/getUser");
        const data = res.data.data;
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthUserData();
  }, []);

  const handleClick = () => {
    try {
      const res = axios.post("/api/api/v1/postUser", form);

      if (res.status == 201) {
        console.log("from sumbitted");
      }
    } catch (error) {
      console.log("error show", error);
    }
  };

  return (
    <>
      <div className="p-4">
        {userData?.length > 0 ? (
          userData.map((user, index) => (
            <div key={index} className="mb-4 border p-3 rounded shadow">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>

      <div className="w-screen p-4 text-white">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="p-2 m-2 text-black border-1"
          placeholder="Enter name"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="p-2 m-2 text-black border-1"
          placeholder="Enter email"
        />

        <button
        className="p-3 bg-blue-300"
        
        onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}

export default App;
