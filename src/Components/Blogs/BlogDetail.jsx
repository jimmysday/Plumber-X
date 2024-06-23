import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import be_icon from "../../assets/Images/be_icon.png";
import facebook_icon from "../../assets/Images/facebook_icon.png";
import instagram_icon from "../../assets/Images/Instagram_icon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlogsData from "../../../public/Blogs.json";
import Blog from "./Blog";
import { Helmet } from "react-helmet-async";
import Loading from "../Shared/Loading";

const BlogDetail = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { title } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get("/Blogs.json");

        const foundBlog = response.data.find(
          (blog) =>
            blog.title.replace(/\s+/g, "-").toLowerCase() ===
            title.toLowerCase(),
        );
        setBlog(foundBlog);
      } catch (error) {
        setError("Error fetching blog post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [title]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-700">
          Blog post not found
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>{blog.title}</title>
      </Helmet>
      {/* Header section */}
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[300px] lg:h-[480px]  -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-5xl md:text-7xl  font-bold text-neutral  inline-block px-4 py-2 rounded-t-md mt-20 lg:mt-36 figtree_font">
            Blog
          </h2>
        </div>
      </div>

      {/* Blog content section */}
      <div className="flex justify-center mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <article
          className="relative w-full overflow-hidden shadow transition duration-300 hover:shadow-lg"
          data-aos="fade-up"
        >
          <img
            alt={blog.title}
            src={blog.image}
            className="absolute w-full  object-cover"
          />

          <div className="relative bg-gradient-to-t from-primary to-transparent pt-32 sm:pt-48">
            <div className="p-4 sm:p-6">
              <div className="block text-xs text-neutral">
                <span
                  className="text-5xl font-semibold md:font-bold"
                  data-aos="fade-right"
                >
                  {blog.day}
                </span>
                <span
                  className="uppercase font-semibold block text-base tracking-[6px] ml-1.5"
                  data-aos="fade-left"
                >
                  {blog.month}
                </span>
              </div>

              <h3
                className="mt-6 font-semibold text-xl text-neutral figtree_font"
                data-aos="fade-up"
              >
                {blog.title || "PLUMBING MAINTENANCE FOR YOUR HOME"}
              </h3>
            </div>
          </div>
        </article>
      </div>

      {/* Blog body section */}
      <div className="my-16 mx-4" data-aos="fade-up">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-3xl font-bold mb-8">Introduction</h1>
          <div dangerouslySetInnerHTML={{ __html: blog.body }} />
          <div className="flex gap-x-5 mt-12">
            <p className="font-medium text-base">Share</p>
            <div className="flex gap-x-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  className="h-[20px] w-auto"
                  src={facebook_icon}
                  alt="Share on Facebook"
                />
              </a>
              <a
                href={`https://www.instagram.com/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  className="h-[20px] w-auto"
                  src={instagram_icon}
                  alt="Share on Instagram"
                />
              </a>
              <a
                href={`https://www.behance.net/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LazyLoadImage
                  effect="blur"
                  className="h-[20px] w-auto"
                  src={be_icon}
                  alt="Share on Behance"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts section */}
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="text-xl font-semibold mb-8" data-aos="fade-left">
          Related Posts
        </h2>
        <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-start mx-auto max-w-screen-xl">
          {BlogsData.slice(0, 4)
            .filter((relatedBlog) => relatedBlog.title !== blog.title)
            .map((data, index) => (
              <Blog key={index} data={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
