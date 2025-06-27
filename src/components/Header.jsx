import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  
  const location = useLocation();

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/image/image.png" width={50} />
            <span className="ml-3 text-xl">Amazone</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="/"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/" && "font-bold text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/about" && "font-bold text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/contact" && "font-bold text-gray-900"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/services"
              className={`mr-5 hover:text-gray-900 ${
                location.pathname === "/services" && "font-bold text-gray-900"
              }`}
            >
              Services
            </Link>
          </nav>
          <button className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
