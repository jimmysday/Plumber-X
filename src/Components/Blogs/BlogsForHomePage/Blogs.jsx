import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="grid grid-cols-3 gap-8 items-center justify-start mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-8">
        <p className="font-bold text-base leading-6 text-primary">
          latest news
        </p>
        <h1 className="font-semibold text-5xl">
          From the <br /> Blog
        </h1>
        <div className="inline-block">
          <a
            className="group relative block bg-primary rounded overflow-hidden px-5 py-[10px] focus:outline-none focus:ring"
            href="#"
            style={{ display: "inline-block" }}
          >
            <span className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-primary"></span>
            <span className="relative  font-medium text-white transition-colors text-base group-hover:text-white">
              Book an appointment
            </span>
          </a>
        </div>
      </div>
      <Blog />
      <Blog />
    </div>
  );
};

export default Blogs;
