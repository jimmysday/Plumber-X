import React, { useState, useEffect, useRef } from "react";
import { IoCall } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavbarForPhone = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close
  const menuRef = useRef(null); // Ref to handle click outside the menu

  // Function to handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Add event listener to detect clicks outside the menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="navbar bg-primary lg:hidden md:py-6">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
          >
            <img
              className="lg:h-auto md:h-10"
              src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555a221f45bcbd11acc33ec_logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* Menu Button */}
        <div className="navbar-end">
          <div className="dropdown lg:hidden dropdown-end" ref={menuRef}>
            <button
              className="rounded-lg bg-neutral p-2 lg:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {/* Hamburger Menu Icon */}
                <path
                  className={!menuOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                {/* Close Menu Icon */}
                <path
                  className={menuOpen ? "block" : "hidden"}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <Link
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline"
                    to="/pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline"
                    to="/team"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline flex items-center gap-2"
                  >
                    <IoCall /> 123-456-789
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarForPhone;
