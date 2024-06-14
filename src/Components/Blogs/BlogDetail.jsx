import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Blog from "./Blog";
import BlogsData from "../../../public/Blogs.json"; // Assuming Blogs.json is in the public directory

const BlogDetail = () => {
  const { id } = useParams(); // Extract the id from the URL parameters
  const [blog, setBlog] = useState(null); // State to store the blog post data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage error state

  useEffect(() => {
    // Fetch the blog post data when the component mounts or id changes
    const fetchBlog = async () => {
      try {
        // Make an HTTP GET request to fetch the blog posts
        const response = await axios.get("/Blogs.json");
        // Find the blog post with the matching id
        const foundBlog = response.data.find(
          (blog) => blog.id === parseInt(id),
        );
        setBlog(foundBlog); // Set the found blog post to the state
      } catch (error) {
        setError("Error fetching blog post"); // Set the error message in case of failure
      } finally {
        setLoading(false); // Set loading to false after the request is completed
      }
    };

    fetchBlog();
  }, [id]); // Re-run the effect if the id changes

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
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

  return (
    <div>
      {/* Header section */}
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[300px] -mb-20">
        <div className="text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-5xl md:text-7xl font-bold text-neutral inline-block px-4 py-2 rounded-t-md mt-20 figtree_font">
            Blog
          </h2>
        </div>
      </div>

      {/* Blog content section */}
      <div className="flex justify-center mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <article className="relative w-full overflow-hidden shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            className="absolute w-full object-cover"
          />

          <div className="relative bg-gradient-to-t from-primary to-transparent pt-32 sm:pt-48">
            <div className="p-4 sm:p-6">
              <div className="block text-xs text-neutral">
                <span className="text-5xl font-semibold md:font-bold">
                  {blog?.day}
                </span>
                <span className="uppercase font-semibold block text-base tracking-[6px] ml-1.5">
                  {blog?.month}
                </span>
              </div>

              <h3 className="mt-6 font-semibold text-xl text-neutral figtree_font">
                {blog?.title || "PLUMBING MAINTENANCE FOR YOUR HOME"}
              </h3>
            </div>
          </div>
        </article>
      </div>

      {/* Blog body section */}
      <div className="my-16 mx-4">
        <div className="max-w-screen-md mx-auto">
          <div dangerouslySetInnerHTML={{ __html: blog?.body }} />
          <div className="flex gap-x-5 mt-12">
            <p className="font-medium text-base">Share</p>
            <div className="flex gap-x-2">
              <a href="#">
                <img
                  className="h-[20px] w-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/65a51a98384771b2a560dba7_social.png"
                  alt="Share on social media"
                />
              </a>
              <a href="#">
                <img
                  className="h-[20px] w-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/659cd6c7f23a24a6056c3f1d_instagram.png"
                  alt="Share on social media"
                />
              </a>
              <a href="#">
                <img
                  className="h-[20px] w-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/65a51a98384771b2a560dba7_social.png"
                  alt="Share on social media"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts section */}
      <div className="px-4 mx-auto max-w-screen-xl">
        <h2 className="text-xl font-semibold mb-8">Related Post</h2>
        <div className="pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-start mx-auto max-w-screen-xl">
          {BlogsData.slice(0, 3).map((data) => (
            <Blog key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
