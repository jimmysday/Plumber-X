import BlogsData from "../../../public/Blogs.json";
import Blog from "./Blog";
import latest_blogs_right_arrow_icon from "../../assets/Images/latest_blogs_right_arrow_icon.png";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LatestBlogs = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4  py-20 sm:pb-24 sm:pt-36">
      <div className="lg:grid lg:grid-cols-3 overflow-hidden gap-8 items-center">
        {/* Left section */}
        <div className="lg:col-span-1 mb-12 lg:mb-0" data-aos="fade-right">
          <div className="mb-8 lg:mb-16">
            <p className="text-primary text-base font-bold mb-2 sm:mb-5">
              Latest News
            </p>
            <h2 className="text-3xl figtree_font sm:text-5xl font-semibold tracking-tight text-secondary mb-6 sm:mb-10">
              From The Blog
            </h2>

            <Link
              to="/blogs"
              className="text-base figtree_font font-medium uppercase mt-4 sm:mt-10 flex items-center gap-3 group"
            >
              View all blog
              {/* Arrow icon */}
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                <LazyLoadImage
                  effect="blur"
                  src={latest_blogs_right_arrow_icon}
                  alt="Right Arrow"
                />
              </span>
            </Link>
          </div>
        </div>
        {/* Right section (grid for blogs) */}
        <div
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8"
          data-aos="fade-up"
        >
          {/* Mapping over BlogsData */}
          {BlogsData.slice(0, 2).map((data) => (
            <div key={data.title} data-aos="fade-up">
              <Blog data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
