import React from "react";
import BlogsData from "../../../public/Blogs.json";
import Service from "./Service";

const AllServices = () => {
  return (
    <div>
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[350px] -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-6xl md:text-7xl  font-bold text-white  inline-block px-4 py-2 rounded-t-md mt-20">
            Services
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen-xl mx-auto gap-y-20 gap-x-10 px-4">
        {BlogsData.map((data) => (
          <Service key={data.title} data={data} />
        ))}
      </div>
    </div>
  );
};

export default AllServices;
