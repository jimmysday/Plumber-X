import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import BlogsData from "../../../public/Blogs.json";
import "aos/dist/aos.css";
import AOS from "aos";
import Loading from "../Shared/Loading";

const Blogs = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [blogsToShow, setBlogsToShow] = useState(6);
  const [loading, setLoading] = useState(false);
  // Split the BlogsData into appropriate parts
  const firstBlog = BlogsData.slice(0, 1);
  const secondBlog = BlogsData.slice(1, 2);
  const otherBlogs = BlogsData.slice(2, BlogsData.length);

  const handleLoadMore = () => {
    setLoading(true);
    setBlogsToShow((prev) => prev + 10);
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden mb-8">
      {/* Top Blogs */}
      <div className="lg:grid grid-flow-row-dense lg:grid-cols-3 grid-cols-2 hidden gap-8 mx-auto max-w-screen-xl mb-8 transition">
        {firstBlog.map((data) => (
          <article
            key={data.id}
            className="lg:col-span-2 relative overflow-hidden shadow w-full duration-300"
            data-aos="fade-up"
          >
            <img
              alt=""
              src={data.image}
              className="absolute inset-0 w-full h-full object-top object-cover"
            />
            <div
              className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-primary to-transparent pt-32 sm:pt-48"
              style={{
                background:
                  "linear-gradient(360deg, #0037C4 0%, rgba(0, 55, 196, 0) 100%)",
              }}
            >
              <div className="p-4 sm:p-6">
                <div className="block text-xs text-neutral/90">
                  <span className="text-5xl font-bold">{data.day}</span>
                  <span className="figtree_font font-semibold block text-base tracking-[8px] uppercase">
                    {data.month}
                  </span>
                </div>

                <Link
                  to={`/blog/details/${data.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h3 className="mt-6 figtree_font text-xl text-neutral">
                    {data.title}
                  </h3>
                </Link>
              </div>
            </div>
          </article>
        ))}
        {secondBlog.map((data) => (
          <article
            key={data.id}
            className="relative overflow-hidden shadow duration-300 hover:shadow-lg hover:-translate-y-1 transition"
            data-aos="fade-up"
          >
            <img
              alt=""
              src={data.image}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-75"
            />
            <div
              className="relative bg-gradient-to-t from-primary to-transparent pt-32 sm:pt-48"
              style={{
                background:
                  "linear-gradient(360deg, #0037C4 0%, rgba(0, 55, 196, 0) 100%)",
              }}
            >
              <div className="p-4 sm:p-6">
                <div className="block text-xs text-neutral/90">
                  <span className="text-5xl font-bold">{data.day}</span>
                  <span className="figtree_font font-semibold block text-base tracking-[8px] uppercase">
                    {data.month}
                  </span>
                </div>
                <Link
                  to={`/blog/details/${data.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <h3 className="mt-6 figtree_font text-xl text-neutral">
                    {data.title}
                  </h3>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Other Blogs */}
      <div className="mx-auto max-w-screen-xl">
        <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center justify-start mx-4 lg:mx-0">
          {otherBlogs.slice(0, blogsToShow).map((data, index) => (
            <div key={index} data-aos="fade-up">
              <Blog data={data} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        {blogsToShow < otherBlogs.length ? (
          <button
            onClick={handleLoadMore}
            className="text-xl text-primary font-medium figtree_font hover:scale-110 translate transition duration-300"
          >
            Load more
          </button>
        ) : (
          <p className="text-xl  font-medium text-gray-400 figtree_font">
            No more blogs to show.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
