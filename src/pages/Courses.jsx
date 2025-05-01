import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

// Hardcoded course data fallback
const fallbackCourseData = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, and React from scratch.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl_6AuG1TxzQdGmZSN4pF02iLepIl6-4ucQ&s",
    price: "₹1999",
  },
  {
    id: 2,
    title: "Ethical Hacking & Cyber Security",
    description:
      "Learn penetration testing, Kali Linux, and secure networking.",
    image:
      "https://emeritus.org/in/wp-content/uploads/sites/3/2023/10/Ethical-Hacking-vs-Cyber-Security-1140x900-1-768x606.jpg.optimal.jpg",
    price: "₹2499",
  },
  {
    id: 3,
    title: "AI & Machine Learning Mastery",
    description: "Build ML models and AI solutions using Python, TensorFlow.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qthM2MyMCwn04LUar2wnQLQ6GNNczy9TGw&s",
    price: "₹2999",
  },
  {
    id: 4,
    title: "Python for Beginners",
    description: "Start coding with Python – beginner friendly course.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpE_CJvPxG2BqjyCT73AxhEq5wEUOGVViIg&s",
    price: "₹1499",
  },
  {
    id: 5,
    title: "Data Science Bootcamp",
    description:
      "Learn data analysis, statistics, and machine learning using Python.",
    image:
      "https://cdn1.expresscomputer.in/wp-content/uploads/2022/11/21123050/EC_Data_Science_Technology_750.jpg",
    price: "₹3999",
  },
  {
    id: 6,
    title: "Full Stack Web Development",
    description:
      "Learn backend and frontend development with Node.js, React, and MongoDB.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC3YNdKSDEJ6q1H1Js9me5JsY93YvGdgI1Ow&s",
    price: "₹3499",
  },
  {
    id: 7,
    title: "Digital Marketing Mastery",
    description: "Learn SEO, SEM, email marketing, and social media marketing.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7VZCTJlzo8XlOPjnqAAnnlsbiSpTV8VSqA&s",
    price: "₹1599",
  },
  {
    id: 8,
    title: "Cloud Computing with AWS",
    description: "Learn to architect and deploy applications on AWS Cloud.",
    image:
      "https://www.novelvista.com/resources/images/blogs/other/skillcloudfeature.jpg",
    price: "₹3499",
  },
];

const Courses = () => {
  const [courseData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/products");
        const data = res.data;
        if ( data.products && data.products.length > 0) {
          setCourseData(data.products);
        } else {
          setCourseData(fallbackCourseData);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourseData(fallbackCourseData); // fallback on error
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProductData();
  }, []);

  const handleEnrollClick = (course) => {
    // Add the course to the cart
    addToCart(course);

    // Apply a small transition effect before navigating
    setTimeout(() => {
      navigate("/cart"); // Navigate to the cart page
    }, 300); // Wait 300ms for the transition effect
  };

  return (
    <section className="bg-gray-100 py-20" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-blue-600">Courses</span>
        </h2>

        {/* Loading Indicator */}
        {loading ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading courses...</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {courseData.map((course, index) => (
              <div
                key={course.id || index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-bold">
                      {course.price}
                    </span>
                    <button
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition transform hover:scale-105 duration-300 cursor-pointer"
                      onClick={() => handleEnrollClick(course)} // Call handleEnrollClick
                    >
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
