import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebook } from "react-icons/fa";
import { FaSlack } from "react-icons/fa6";
import { TfiTwitterAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  const currentUrl = window.location.href;
  // Social media share URLs
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl,
  )}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl,
  )}&text=Check%20out%20this%20amazing%20blog%20post!`;
  const slackShareUrl = `https://slack.com/share?text=Check%20out%20this%20amazing%20blog%20post!&url=${encodeURIComponent(
    currentUrl,
  )}`;
  return (
    <div>
      <footer className="bg-primary text-neutral figtree_font">
        <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-8 lg:pt-40 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex justify-center" data-aos="fade-up">
            <LazyLoadImage
              effect="blur"
              className="w-52 md:w-auto"
              src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555a4cd2b90bfcd296b083d_logo%20(1).png"
              alt="Logo"
            />
          </div>

          {/*navigation links */}
          <ul
            className="mt-8 flex flex-wrap text-[15px] justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/blogs">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Secondary navigation links */}
          <ul
            className="mt-4 flex text-[15px] flex-wrap justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li>
              <Link className="cursor-not-allowed" to="#">
                License
              </Link>
            </li>
            <li>
              <Link className="cursor-not-allowed" to="#">
                Changelog
              </Link>
            </li>
            <li>
              <Link className="cursor-not-allowed" to="#">
                Style Guide
              </Link>
            </li>
            <li>
              <Link className="cursor-not-allowed" to="#">
                404
              </Link>
            </li>
            <li>
              <Link className="cursor-not-allowed" to="#">
                Password Protection
              </Link>
            </li>
          </ul>

          {/* Social media icons */}
          <ul
            className="mt-8 flex justify-center gap-6 md:gap-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <li>
              <a
                href={facebookShareUrl}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href={twitterShareUrl}
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TfiTwitterAlt className="h-6 w-6 text-neutral" />
              </a>
            </li>
            <li>
              <a
                href={slackShareUrl}
                aria-label="Slack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSlack className="h-6 w-6" />
              </a>
            </li>
          </ul>

          {/* Footer bottom text with design and power credits */}
          <div
            className="flex justify-between mt-20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-center">
              <span className="text-[#FFFFFF99]">Design & Development by </span>
              <span className="text-neutral font-bold">
                Webloo.io
              </span>
            </p>
            <p className="text-center">
              <span className="text-[#FFFFFF99]">Powered by </span>
              <span className="text-neutral font-bold">
                Webflow
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
