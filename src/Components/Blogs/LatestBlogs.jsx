
import BlogsData from "../../../public/Blogs.json";
import Blog from "./Blog";
import latest_blogs_right_arrow_icon from "../../assets/Images/latest_blogs_right_arrow_icon.png";
import { Link } from "react-router-dom";

const LatestBlogs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 sm:py-24">
      <div className="lg:grid lg:grid-cols-3 gap-8 items-center">
        {/* Left section */}
        <div className="lg:col-span-1 mb-12 lg:mb-0">
          <div className="mb-8 lg:mb-16">
            <p className="text-primary text-base font-bold mb-2 sm:mb-5">
              Latest News
            </p>
            <h2 className="text-3xl figtree_font sm:text-5xl font-semibold tracking-tight text-secondary mb-6 sm:mb-10">
              From The Blog
            </h2>

            <Link
              to="/blog"
              className="text-base figtree_font font-medium uppercase mt-4 sm:mt-10 flex items-center gap-3 group"
            >
              View all blog
              {/* Arrow icon */}
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                <img src={latest_blogs_right_arrow_icon} alt="Right Arrow" />
              </span>
            </Link>
          </div>
        </div>
        {/* Right section (grid for blogs) */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Mapping over BlogsData */}
          {BlogsData.slice(0, 2).map((data) => (
            <Blog key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;
