import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
  const navItemStyle = `px-4 py-2 mt-2 text-base font-semibold rounded-lg md:mt-0 md:ml-2 hover:underline underline-offset-8 focus:outline-none focus:shadow-outline`;
  // for dark mode
  // const handleToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  return (
    <div className="overflow-hidden lg:-mb-[70px] ">
      <div className="relative z-50 hidden lg:block ">
        <div className="w-full text-neutral bg-transparent py-2 shadow ">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto lg:items-center lg:justify-between lg:flex-row md:px-6 lg:px-8 ">
            <div className="flex flex-row items-center justify-between py-4 ">
              {/* logo  */}
              <NavLink
                to="/"
                className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline"
              >
                <LazyLoadImage
                  effect="blur"
                  className="lg:h-auto md:h-10"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555a221f45bcbd11acc33ec_logo.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            {/* Navigation Links */}
            <nav className="flex flex-grow lg:flex lg:justify-end lg:flex-row">
              <NavLink className={navItemStyle} to="/">
                Home
              </NavLink>
              <NavLink className={navItemStyle} to="/about">
                About
              </NavLink>
              <NavLink className={navItemStyle} to="/services">
                Services
              </NavLink>
              <NavLink className={navItemStyle} to="/blogs">
                Blogs
              </NavLink>
              <NavLink className={navItemStyle} to="/contact">
                Contact
              </NavLink>
              <NavLink className={navItemStyle} to="/pricing">
                Pricing
              </NavLink>
              {/* <NavLink className={navItemStyle} to="/team">
                Team
              </NavLink> */}
              <a
                href="tel:(604) 720 3999"
                className="px-4  py-2 mt-2 text-base phoneNumber font-semibold rounded-lg md:mt-0 md:ml-2 hover:underline underline-offset-8 focus:outline-none focus:shadow-outline flex items-center gap-2"
              >
                <IoCall /> (604) 720 3999
              </a>

              <Link
                className="group hidden border-white relative lg:flex items-center justify-center rounded overflow-hidden bg-primary mr-4 px-5 focus:outline-none focus:ring"
                to="/contact"
              >
                <span className="absolute inset-y-0 left-0 w-[0px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>
                <span className="relative text-base font-medium text-neutral transition-colors group-hover:text-neutral">
                  Book an appointment
                </span>
              </Link>
              {/* light mode and dark mode */}
              {/* <label className="swap swap-rotate my-4 md:my-0">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={handleToggle}
                />
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
