import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl">🌐</div>
            <span className="text-2xl font-extrabold text-blue-600 tracking-wide">
              Hack<span className="text-blue-600">-Lab</span>
            </span>
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Center: Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-blue-600 font-semibold border-b-2 border-blue-600"
            >
              Home
            </Link>
            <Link to="/courses" className="text-gray-600 hover:text-blue-600">
              Course
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Right: Login Button */}
          <div className="hidden md:block">
            <Link to="/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link to="/" className="block text-blue-600 font-semibold">
              Home
            </Link>
            <Link to="/courses" className="block text-gray-600 hover:text-blue-600">
              Course
            </Link>
            <Link to="/about" className="block text-gray-600 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="block text-gray-600 hover:text-blue-600">
              Contact
            </Link>
            <Link to="/login">
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
