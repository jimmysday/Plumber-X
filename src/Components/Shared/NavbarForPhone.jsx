import React, { useState, useEffect, useRef } from "react";
import { IoCall } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, NavLink } from "react-router-dom";

const NavbarForPhone = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
  const navItemStyle = `py-2 text-base font-semibold rounded-lg hover:underline underline-offset-8 focus:outline-none focus:shadow-outline`;
  return (
    <div>
      <div className="navbar bg-primary lg:hidden md:py-6  ">
        {/* Logo */}
        <div className="navbar-start">
          <Link to="/">
            <LazyLoadImage
              effect="blur"
              className="sm:h-7 "
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
                className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink className={navItemStyle} to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <Link className={navItemStyle} to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className={navItemStyle} to="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className={navItemStyle} to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className={navItemStyle} to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className={navItemStyle} to="/pricing">
                    Pricing
                  </Link>
                </li>
                {/* <li>
                  <Link className={navItemStyle} to="/team">
                    Team
                  </Link>
                </li> */}
                <li>
                  <a
                    href="tel:(604) 720 3999"
                    className="px-4 py-2 mt-2 text-base font-semibold rounded-lg md:mt-0 md:ml-2 hover:underline underline-offset-8 focus:outline-none focus:shadow-outline flex items-center gap-2"
                  >
                    <IoCall /> (604) 720 3999
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <hr className="w-full lg:hidden" />
    </div>
  );
};

export default NavbarForPhone;
