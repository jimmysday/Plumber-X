import Blog from "./Blog";
import BlogsData from "../../../public/Blogs.json";
import { Link } from "react-router-dom";
const Blogs = () => {
  return (
    <div>
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[350px] -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-6xl md:text-7xl  font-bold text-white  inline-block px-4 py-2 rounded-t-md mt-20">
            Blog
          </h2>
        </div>
      </div>
      {/* Top Blogs  */}
      <div className="lg:grid grid-flow-row-dense lg:grid-cols-3 grid-cols-2 hidden  gap-8    mx-auto max-w-screen-xl mb-8">
        <article className="lg:col-span-2   relative overflow-hidden shadow transition hover:shadow-lg w-full">
          <img
            alt=""
            src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b1361670a28fda46e854b_Lawn%20Mowing%20Tips%20for%20a%20Lush%20and%20Green%20Yard-p-500.jpeg"
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
                dateTime="2022-10-10"
                className="block text-xs text-white/90"
              >
                <span className="text-5xl font-bold">22</span>
                <span className="font-semibold block text-base tracking-[10px]">
                  AUG
                </span>
              </time>
              <Link to={`/blog/details/`}>
                <h3 className="mt-6 text-xl text-white">
                  Why Should I Invest in a Smart Thermostat?
                </h3>
              </Link>
            </div>
          </div>
        </article>
        <article className="  relative overflow-hidden shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b13bd111f7e71f0cfc848_Home%20Maintenance.jpeg"
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
              <div className="block text-xs text-white/90">
                <span className="text-5xl font-bold">28</span>
                <span className="font-semibold block text-base tracking-[8px] uppercase">
                  AUG
                </span>
              </div>
              <Link to={`/blog/details/`}>
                <h3 className="mt-6 text-xl text-white">
                  Why Should I Invest in a Smart Thermostat?
                </h3>
              </Link>
            </div>
          </div>
        </article>
      </div>
      <div className="pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-start mx-auto max-w-screen-xl">
        {BlogsData.map((data) => (
          <Blog key={data.title} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
