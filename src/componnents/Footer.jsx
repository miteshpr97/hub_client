import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="hover:text-indigo-400"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-indigo-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-indigo-400">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-indigo-400">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              
              <li>
                <Link to="/contact" className="hover:text-indigo-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="https://facebook.com"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to="https://twitter.com"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  to="https://linkedin.com"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
