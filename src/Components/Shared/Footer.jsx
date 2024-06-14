import { FaFacebook } from "react-icons/fa";
import { FaSlack } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-neutral figtree_font">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 lg:pt-40 sm:px-6 lg:px-8">
          {/* Logo in the center */}
          <div className="flex justify-center">
            <img
              className="w-52 md:w-auto"
              src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555a4cd2b90bfcd296b083d_logo%20(1).png"
              alt="Logo"
            />
          </div>

          {/* Primary navigation links */}
          <ul className="mt-8 flex flex-wrap text-[15px] justify-center gap-6">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Service</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>

          {/* Secondary navigation links */}
          <ul className="mt-4 flex text-[15px] flex-wrap justify-center gap-6">
            <li>
              <Link to="#">License</Link>
            </li>
            <li>
              <Link to="#">Changelog</Link>
            </li>
            <li>
              <Link to="#">Style Guide</Link>
            </li>
            <li>
              <Link to="#">404</Link>
            </li>
            <li>
              <Link to="#">Password Protection</Link>
            </li>
          </ul>

          {/* Social media icons */}
          <ul className="mt-8 flex justify-center gap-6 md:gap-8">
            <li>
              <a href="https://www.facebook.com/" aria-label="Facebook">
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="https://x.com/?lang=en" aria-label="Twitter">
                <TfiTwitterAlt className="h-6 w-6 text-neutral" />
              </a>
            </li>
            <li>
              <a href="https://slack.com/" aria-label="Slack">
                <FaSlack className="h-6 w-6" />
              </a>
            </li>
          </ul>

          {/* Footer bottom text with design and power credits */}
          <div className="flex justify-between mt-20">
            <p className="text-center">
              <span className="text-[#FFFFFF99]">Design & Development by </span>
              <span className="text-neutral font-bold">Webloo.io</span>
            </p>
            <p className="text-center">
              <span className="text-[#FFFFFF99]">Powered by </span>
              <span className="text-neutral font-bold">Webflow</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
