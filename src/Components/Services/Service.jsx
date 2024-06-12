import React from "react";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { title, id, day, month } = data || {};

  return (
    <div className="mx-auto p-1">
      <Link to={`/services/details/${id}`}>
        <div className="relative">
          <img
            className="w-full h-60 object-cover rounded-t-lg"
            src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664aef03a622385b5ef8c9b6_Industrial_Maintenance_Activity-p-500.png"
            alt=""
          />
          <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent h-full w-full opacity-50 rounded-t-lg"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-3xl font-bold">{title || "Service Title"}</p>
          </div>
        </div>
        <div className="bg-white p-6 relative -mt-12 z-10 shadow-lg rounded-b-lg mx-4">
          <p className="text-xl font-semibold mb-4">Residential</p>
          <div className="grid grid-cols-2 gap-x-4 border-b pb-4 mb-4">
            <div className="flex items-center gap-x-4 p-2 border-r">
              <img
                className="w-[38px]"
                src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0fcf26e49ef57db90c0f_Emergency_Response_Image.png"
                alt=""
              />
              <p className="text-base">Preventive Maintenance</p>
            </div>
            <div className="flex items-center gap-x-4 p-2">
              <img
                className="w-[38px]"
                src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0fcf26e49ef57db90c0f_Emergency_Response_Image.png"
                alt=""
              />
              <p className="text-base">Drain Cleaning Service</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-x-4 p-2 border-r">
              <img
                className="w-[38px]"
                src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0fcf26e49ef57db90c0f_Emergency_Response_Image.png"
                alt=""
              />
              <p className="text-base">Sewer Installations</p>
            </div>
            <div className="flex items-center gap-x-4 p-2">
              <img
                className="w-[38px]"
                src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664b0fcf26e49ef57db90c0f_Emergency_Response_Image.png"
                alt=""
              />
              <p className="text-base">Pipe Repairs and Installations</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
