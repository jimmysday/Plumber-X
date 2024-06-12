import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    // Save theme preference to local storage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <div className="relative z-50">
        <div className="w-full  text-white bg-primary ">
          <div className="flex flex-col max-w-screen-xl  px-4 mx-auto lg:items-center lg:justify-between lg:flex-row md:px-6 lg:px-8  ">
            <div className="flex flex-row items-center   justify-between py-4">
              <Link
                to="/"
                className="text-lg font-semibold tracking-widest  uppercase rounded-lg  focus:outline-none focus:shadow-outline"
              >
                <img
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555a221f45bcbd11acc33ec_logo.png"
                  alt="logo"
                />
              </Link>
              <button
                className="rounded-lg bg-[#4E6EC0] p-2 lg:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    className={menuOpen ? "hidden" : "block"}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    className={menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <nav
              className={`${
                menuOpen ? "flex" : "hidden"
              } flex-col flex-grow pb-4 lg:pb-0 lg:flex lg:justify-end lg:flex-row sm:border-0 border border-x-0 border-t-1 border-b-0 `}
            >
              <a
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline"
                href="#"
              >
                Home
              </a>
              <Link
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline"
                to="/about"
              >
                About
              </Link>
              <Link
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline"
                to="/services"
              >
                Services
              </Link>
              <Link
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline"
                to="/blogs"
              >
                Blogs
              </Link>
              <Link
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline"
                to="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline"
                to="/team"
              >
                Team
              </Link>
              {/* With Dropdown  */}
              {/* <div
                className="relative"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="flex flex-row  bg-primary items-center w-full px-4 py-2 mt-2 text-base font-semibold text-left  rounded-lg      md:w-auto md:inline md:mt-0 md:ml-2   hover:underline underline-offset-4 focus:outline-none focus:shadow-outline"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <span>More</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                      dropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  className={`${
                    dropdownOpen ? "block" : "hidden"
                  } absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right`}
                >
                  <div className="px-2 pt-2 pb-4 bg-primary border-white border  rounded-md shadow-lg ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        className="flex flex-row items-start rounded-lg  p-2         focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        <div className="bg-white text-primary rounded-lg p-3">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="md:h-6 md:w-6 h-4 w-4"
                          >
                            <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold hover:underline underline-offset-4">
                            Appearance
                          </p>
                          <p className="text-base">Easy customization</p>
                        </div>
                      </a>
                      <a
                        className="flex flex-row items-start rounded-lg  p-2          focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        <div className=" bg-white text-primary rounded-lg p-3">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="md:h-6 md:w-6 h-4 w-4"
                          >
                            <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold hover:underline underline-offse4-8">
                            Comments
                          </p>
                          <p className="text-base">Check your latest comments</p>
                        </div>
                      </a>
                      <a
                        className="flex flex-row items-start rounded-lg  p-2          focus:outline-none focus:shadow-outline"
                        href="#"
                      >
                        <div className=" bg-white text-primary rounded-lg p-3">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="md:h-6 md:w-6 h-4 w-4"
                          >
                            <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold hover:underline underline-offset48">
                            Analytics
                          </p>
                          <p className="text-base">
                            Take a look at your statistics
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <Link
                to=""
                className="px-4 py-2 mt-2 text-base font-semibold  rounded-lg       md:mt-0 md:ml-2    hover:underline underline-offset-8  focus:outline-none focus:shadow-outline flex items-center gap-2  "
              >
                <IoCall /> 123-456-789
              </Link>
              <a
                className="group hidden   border-white relative lg:flex items-center justify-center rounded  overflow-hidden bg-primary  mr-4  px-5   focus:outline-none focus:ring"
                href="#"
              >
                <span className="absolute inset-y-0 left-0 w-[0px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>

                <span className="relative text-base font-medium text-white transition-colors group-hover:text-white">
                  Book an apppointment
                </span>
              </a>
              <label className="swap swap-rotate my-4 md:my-0">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={handleToggle}
                />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
