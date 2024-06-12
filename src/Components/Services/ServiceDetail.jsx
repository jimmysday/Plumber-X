import React from "react";
import { useForm } from "react-hook-form";
import input_field_Image from "../../assets/Images/input_field_Image.png";
const ServiceDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[350px] -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-6xl md:text-7xl  font-bold text-white  inline-block px-4 py-2 rounded-t-md mt-20">
            Services
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 pb-10">
        <div className="flex-1">
          <div>
            <img
              className="w-full"
              src="https://assets-global.website-files.com/6555a58bd247940a6073a360/664ad151ad188b5f03df190d_Living_Room_Cleaning_Illustration-p-800.jpeg"
              alt=""
            />
            <div className="bg-white p-8 shadow-lg -mt-20 relative z-10 mx-2 md:mx-10">
              <h2 className="text-xl font-semibold mb-4">Residential</h2>
              <h3 className="text-5xl mb-4 font-semibold">
                Preventive Maintenance
              </h3>
              <div className="md:flex justify-between gap-10 mt-10">
                <div className="mb-4">
                  <h4 className="font-bold text-xl mb-2">Process</h4>
                  <p>
                    We've been a trusted partner in plumbing services since
                    2000. With a foundation built on expertise and reliability,
                    we have proudly served countless households and businesses
                    in Ontario.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Reasons</h4>
                  <p>
                    Our mission is to be the trusted community plumbing service,
                    delivering top-tier solutions that resolve immediate issues
                    while ensuring the lasting well-being of our clients'
                    properties.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg mt-10 relative z-10 mx-2 md:mx-10">
              <h1 className="font-semibold text-xl">
                Our Residential Plumbing Services include:
              </h1>
              <p className="text-[#676767] my-6">
                You can get a wireless headset that is completely without wires
                or one that requires a belt pack.
              </p>
              <div className="text-[#676767]">
                <div className="flex gap-x-4 mt-4">
                  <img
                    className="h-[14px]"
                    src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555f110ee1c01bfc7d01cfb_check-mark-black-outline.png"
                    alt=""
                  />
                  <p>
                    Material Selection: Choose from a range of top-quality
                    materials, tailored to your needs and preferences for the
                    best fence installation or repair.
                  </p>
                </div>
                <div className="flex gap-x-4 mt-4">
                  <img
                    className="h-[14px]"
                    src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555f110ee1c01bfc7d01cfb_check-mark-black-outline.png"
                    alt=""
                  />
                  <p>
                    Material Selection: Choose from a range of top-quality
                    materials, tailored to your needs and preferences for the
                    best fence installation or repair.
                  </p>
                </div>
                <div className="flex gap-x-4 mt-4">
                  <img
                    className="h-[14px]"
                    src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555f110ee1c01bfc7d01cfb_check-mark-black-outline.png"
                    alt=""
                  />
                  <p>
                    Material Selection: Choose from a range of top-quality
                    materials, tailored to your needs and preferences for the
                    best fence installation or repair.
                  </p>
                </div>
                <div className="flex gap-x-4 mt-4">
                  <img
                    className="h-[14px]"
                    src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555f110ee1c01bfc7d01cfb_check-mark-black-outline.png"
                    alt=""
                  />
                  <p>
                    Material Selection: Choose from a range of top-quality
                    materials, tailored to your needs and preferences for the
                    best fence installation or repair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-normal mb-3 text-primary">FREE QUOTE</h2>
          <h3 className="text-xl font-semibold mb-8">
            Schedule Service Online
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                placeholder="Full Name"
                className="w-full focus:border-primary px-3 py-2 border rounded-md"
                type="text"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Email Address"
                className="w-full px-3 py-2 border rounded-md"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Mobile"
                className="w-full px-3 py-2 border rounded-md"
                type="tel"
                {...register("mobile", { required: true })}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Address"
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>
            <div className="w-full mb-4">
              <input id="file-input" type="file" className="hidden" />
              <label
                htmlFor="file-input"
                className="cursor-pointer flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition"
              >
                <img
                  src={input_field_Image}
                  alt="Upload Icon"
                  className="mb-4"
                />
                <span className="text-[#676767] ">Upload Photo</span>
              </label>
            </div>

            <div className="mb-4">
              <textarea
                rows="6"
                placeholder="Tell Us More About Your Issue"
                className="w-full px-3 py-2 border rounded-md"
                {...register("issue")}
              />
            </div>

            <div className="mb-4">
              <input
                placeholder="Date of Visit"
                className="w-full px-3 py-2 uppercase border rounded-md"
                type="date"
                {...register("dateOfVisit")}
              />
            </div>

            <div className="mb-4">
              <input
                placeholder="Time of Visit"
                className="w-full uppercase px-3 py-2 border rounded-md"
                type="time"
                {...register("timeOfVisit")}
              />
            </div>

            <button
              className="w-full mt-4 bg-primary text-xl font-semibold text-white py-[10px] px-5 rounded-md "
              type="submit"
            >
              Book an appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
