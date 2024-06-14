import { Link } from "react-router-dom";

// Service component to display individual service details
const Service = ({ data }) => {
  // Destructure data object to get necessary properties
  const { title, id, day, month } = data || {};

  return (
    <div className="mx-auto p-1 figtree_font">
      <Link to={`/services/details/${id}`}>
        <div className="relative ">
          {/* Service image */}
          <img
            className="w-full lg:h-96 h-80 object-cover rounded-b"
            src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664aef03a622385b5ef8c9b6_Industrial_Maintenance_Activity-p-500.png"
            alt=""
          />
          <div className="absolute top-0 left-0 bg-gradient-to-t from-black to-transparent h-full w-full opacity-50 rounded-t-lg"></div>
        </div>

        {/* Service details container */}
        <div className="bg-neutral p-6 relative -mt-20 z-10 shadow rounded mx-4">
         
          <p className="text-xl font-semibold mb-4">Residential</p>

          {/* Service features grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:border-b lg:pb-4 lg:mb-4 mb-0">
            <div className="flex items-center gap-x-4 p-2 lg:border-r">
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

          {/* Additional service features grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
            <div className="flex items-center gap-x-4 p-2 lg:border-r">
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
              <p className="text-base">Pipe Repairs</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
