import React from "react";
const Location = () => {
  return (
    <div>
      <section className="text-secondary body-font relative">
        <div className="relative inset-0 bg-gray-300">
          <iframe
            className="w-full h-[80vh] lg:h-[500px]"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.85033088698!2d-79.68986981747848!3d43.718065587884716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2z4Kaf4Kaw4Kao4KeN4Kaf4KeLLCDgpoXgpqjgp43gpp_gpr7gprDgpr_gppMsIOCmleCmvuCmqOCmvuCmoeCmvg!5e0!3m2!1sbn!2sbd!4v1718084317027!5m2!1sbn!2sbd"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
          ></iframe>
          <div className="hidden max-w-screen-lg px-4 lg:grid  md:grid-cols-3 gap-8 mx-auto justify-center absolute left-0 right-0 -top-[700px]   lg:top-48 transform translate-y-full ">
            <div className="bg-white bg-opacity-90 px-10 py-8 rounded shadow-lg text-center w-[288px]">
              <div className="text-blue-700 ">
                <img
                  className="mx-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80943df10ce5148ad6c_Office%20Icon.png"
                  alt=""
                />
              </div>
              <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
                Head Office
              </h2>
              <p className="text-gray-700 text-base">
                2972 Westheimer Rd. Santa <br /> Ana, Illinois 85486
              </p>
            </div>
            <div className="bg-white bg-opacity-90 px-10 py-8 rounded shadow-lg text-center w-[288px]">
              <div className="text-blue-700 mb-2">
                <img
                  className="mx-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80954a19f8ef87c9325_Call%20Iocn.png"
                  alt=""
                />
              </div>
              <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
                Phone Numbers
              </h2>
              <p className="text-gray-700 text-base">(302) 555-0107</p>
              <p className="text-gray-700 text-base">plumber@example.com</p>
            </div>
            <div className="bg-white bg-opacity-90 px-10 py-8 rounded shadow-lg text-center w-[288px]">
              <div className="text-blue-700 mb-2">
                <img
                  className="mx-auto"
                  src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/664ad80914892609d0a65274_Timer%20Icon.png"
                  alt=""
                />
              </div>
              <h2 className="text-lg font-base font-semibold text-gray-900 my-3">
                Working Time
              </h2>
              <p className="text-gray-700 text-base">24/7 Hour Service</p>
              <p className="text-gray-700 text-base">365 Days</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
