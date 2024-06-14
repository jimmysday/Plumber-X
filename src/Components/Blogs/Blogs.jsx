import Blog from "./Blog";
import BlogsData from "../../../public/Blogs.json";
import { Link } from "react-router-dom";

const Blogs = () => {
  // Split the BlogsData into appropriate parts
  const firstBlog = BlogsData.slice(0, 1);
  const secondBlog = BlogsData.slice(1, 2);
  const otherBlogs = BlogsData.slice(1, 6);
  console.log(firstBlog);

  return (
    <div>
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[300px] -mb-20">
        <div className="text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-5xl md:text-7xl font-bold text-neutral inline-block px-4 py-2 rounded-t-md mt-20 figtree_font">
            Blog
          </h2>
        </div>
      </div>

      {/* Top Blogs */}
      <div className="lg:grid grid-flow-row-dense lg:grid-cols-3 grid-cols-2 hidden gap-8 mx-auto max-w-screen-xl mb-8">
        {firstBlog.map((data) => (
          <article
            key={data.id}
            className="lg:col-span-2 relative overflow-hidden shadow transition hover:shadow-lg w-full"
          >
            <img
              alt=""
              src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b12d631cbc6b02fe6de59_A%20man%20is%20working-p-500.jpeg"
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
                <time
                  dateTime={data.date}
                  className="block text-xs text-neutral/90"
                >
                  <span className="text-5xl font-bold">
                    {new Date(data.date).getDate()}
                  </span>
                  <span className="font-semibold block text-base tracking-[10px] figtree_font">
                    {new Date(data.date).toLocaleString("default", {
                      month: "short",
                    })}
                  </span>
                </time>
                <Link to={`/blog/details/${data.id}`}>
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
            className="relative overflow-hidden shadow transition hover:shadow-lg"
          >
            <img
              alt=""
              src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b12d631cbc6b02fe6de59_A%20man%20is%20working-p-500.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
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
                  <span className="text-5xl font-bold">
                    {new Date(data.date).getDate()}
                  </span>
                  <span className="font-semibold block text-base tracking-[8px] figtree_font uppercase">
                    {new Date(data.date).toLocaleString("default", {
                      month: "short",
                    })}
                  </span>
                </div>
                <Link to={`/blog/details/${data.id}`}>
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
        <div className="pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center justify-start mx-4 lg:mx-0">
          {otherBlogs.map((data) => (
            <Blog key={data.title} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
