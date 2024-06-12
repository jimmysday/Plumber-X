const Breadcrumb = () => {
  return (
    <div className="bg-primary py-8 h-[400px] mb-[420px] ">
      <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
        <h2 className="text-6xl md:text-7xl  font-bold text-white  inline-block px-4 py-2 rounded-t-md mt-20">
          About Us
        </h2>
        <div className="top-64 left-0 right-0 flex flex-col max-w-screen-xl mx-auto bg-white shadow-md rounded-md overflow-hidden absolute">
          <img
            src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c1cada4a7160b405e8bc_Group%20158.png"
            alt="About Us"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
