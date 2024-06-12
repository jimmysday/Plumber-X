import React from "react";
import BlogsData from "../../../public/Blogs.json";
import Blog from "./Blog";
import latest_blogs_right_arrow_icon from "../../assets/Images/latest_blogs_right_arrow_icon.png";
import { Link } from "react-router-dom";
const LatestBlogs = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-24">
      <div className="pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-start ">
        <div className="w-[70%]">
          <div className="mb-16">
            <p className="text-primary text-base font-bold mb-5">Latest News</p>
            <h2 className=" text-5xl font-semibold  tracking-tight text-secondary sm:text-5xl">
              From The Blog
            </h2>
            <button className="text-base font-medium uppercase mt-10 flex items-center gap-3 group">
              View all blog
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                <Link to="/blog">
                  <img src={latest_blogs_right_arrow_icon} alt="Right Arrow" />
                </Link>
              </span>
            </button>
          </div>
        </div>
        <div className="pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-start mx-auto max-w-screen-xl">
          {BlogsData.slice(0, 2).map((data) => (
            <Blog key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LatestBlogs;
