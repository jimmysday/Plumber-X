import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import input_field_Image from "../../assets/Images/input_field_Image.png";
import checkMark from "../../assets/Images/checkmark.png";
import { Helmet } from "react-helmet-async";
import Loading from "../Shared/Loading";
const ServiceDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [imageName, setImageName] = useState("");

  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const { name: title } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get("/Services.json");

        const foundService = response.data.find(
          (service) =>
            service.name.replace(/\s+/g, "-").toLowerCase() ===
            title.toLowerCase(),
        );
        setService(foundService);
      } catch (error) {
        setError("Error fetching service. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [title]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-semibold text-gray-700">
          Blog post not found
        </div>
      </div>
    );
  }

  const onSubmit = (data) => {
    reset();
    setSuccessMessage("Appointment booked successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 200000) {
        alert("Please upload an image less than 200KB.");
        return;
      }
      setImageName(file.name);
      const reader = new FileReader();
      reader.onload = () => {};
      reader.readAsDataURL(file);
    }
  };

  const {
    name,
    mainImage,
    process,
    reasons,
    shortDescription,
    serviceInclude,
  } = service || {};

  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>{name}</title>
      </Helmet>
     
      <div className="bg-primary lg:py-8 sm:h-[400px] h-[300px] lg:h-[480px]  -mb-20">
        <div className="  text-center md:text-left relative mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
          <h2 className="text-5xl md:text-7xl  font-bold text-neutral  inline-block px-4 py-2 rounded-t-md mt-20 lg:mt-36 figtree_font">
            Service
          </h2>
        </div>
      </div>
      {/* Main content */}
      <div
        className="max-w-screen-xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 pb-10 figtree_font"
        data-aos="fade-up"
      >
        {/* Left section with service details */}
        <div className="flex-1">
          <div>
            <img
              className="w-full h-96 bg-cover object-cover"
              src={mainImage}
              alt={name}
            />
            <div
              className="bg-neutral p-8 shadow -mt-20 relative z-10 mx-2 md:mx-10"
              data-aos="fade-up"
            >
              <h2 className="text-xl font-semibold mb-4">Residential</h2>
              <h3 className="md:text-5xl text-4xl mb-4 font-semibold">
                {name}
              </h3>
              <div className="md:flex justify-between gap-10 mt-10">
                <div className="mb-4">
                  <h4 className="font-bold text-xl mb-2">Process</h4>
                  <p>{process}</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Reasons</h4>
                  <p>{reasons}</p>
                </div>
              </div>
            </div>
            <div
              className="bg-neutral p-8 shadow mt-20 lg:mt-10 relative z-10 mx-2 md:mx-10"
              data-aos="fade-up"
            >
              <h1 className="font-semibold text-xl">
                Our Residential Plumbing Services include:
              </h1>
              <p className="text-[#676767] my-6">{shortDescription}</p>
              <div className="text-[#676767]">
                {serviceInclude.map((feature, index) => (
                  <div className="flex gap-x-4 mt-4" key={index}>
                    <img className="h-[14px]" src={checkMark} alt="" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right section with appointment form */}
        <div
          className="w-full lg:w-1/3 p-8 bg-neutral shadow mt-16 lg:mt-0"
          data-aos="fade-up"
        >
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
                {...register("fullName", {
                  required: "This field is required",
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Email Address"
                className="w-full px-3 py-2 border rounded-md"
                type="email"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Mobile"
                className="w-full px-3 py-2 border rounded-md"
                type="tel"
                {...register("mobile", { required: "This field is required" })}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Address"
                className="w-full px-3 py-2 border rounded-md"
                type="text"
                {...register("address", { required: "This field is required" })}
              />
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address.message}</p>
              )}
            </div>

            <div className="w-full mb-4">
              <input
                id="file-input"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label
                htmlFor="file-input"
                className="cursor-pointer flex flex-col items-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition"
              >
                <img
                  src={input_field_Image}
                  alt="Upload Icon"
                  className="mb-4"
                />
                <span className="text-[#676767]">Upload Photo</span>
              </label>
            </div>

            {imageName && (
              <div className="mb-4 text-[#676767]">
                Image Name: <strong>{imageName}</strong>
              </div>
            )}

            <div className="mb-4">
              <textarea
                rows="6"
                placeholder="Tell Us More About Your Issue"
                className="w-full px-3 py-2 border rounded-md"
                {...register("issue", { required: "This field is required" })}
              />
              {errors.issue && (
                <p className="text-red-500 text-sm">{errors.issue.message}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Date of Visit"
                className="w-full px-3 py-2 uppercase border rounded-md"
                type="date"
                {...register("dateOfVisit", {
                  required: "This field is required",
                })}
              />
              {errors.dateOfVisit && (
                <p className="text-red-500 text-sm">
                  {errors.dateOfVisit.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <input
                placeholder="Time of Visit"
                className="w-full uppercase px-3 py-2 border rounded-md"
                type="time"
                {...register("timeOfVisit", {
                  required: "This field is required",
                })}
              />
              {errors.timeOfVisit && (
                <p className="text-red-500 text-sm">
                  {errors.timeOfVisit.message}
                </p>
              )}
            </div>

            <button
              className="w-full mt-4 bg-primary text-xl font-semibold text-neutral py-[10px] px-5 rounded-md"
              type="submit"
            >
              Book an appointment
            </button>
          </form>

          {successMessage && (
            <div className="mt-4 text-green-600 text-center">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
