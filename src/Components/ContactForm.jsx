import { useForm } from "react-hook-form";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form data submitted:", data);
  };
  let inputFieldStyle = `focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-secondary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`;
  let inputFieldLableStyle = `leading-7 text-sm text-secondary`;
  return (
    <section className="text-secondary bg-white  body-font mx-auto relative  max-w-screen-xl">
      <div className="px-4 md:px-16 py-24  ">
        <div className="flex md:flex-row flex-col justify-between gap-20">
          <div className="lg:w-2/2 md:w-2/3 w-full">
            <div className="flex flex-col  w-full mb-16  border border-x-0 border-b-1 border-t-0  pb-16">
              <h1 className="font-bold text-5xl  title-font mb-4 text-secondary">
                Get in <span className="text-primary">touch</span>
              </h1>
              <p className="  leading-relaxed text-xl font-medium">
                Send your message to us
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-wrap -m-2"
            >
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="Name" className={`${inputFieldLableStyle}`}>
                    Name*
                  </label>
                  <input
                    placeholder="John Doe"
                    type="text"
                    {...register("name", { required: true })}
                    className={`w-full bg-white bg-opacity-50 rounded border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } ${inputFieldStyle}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className={`${inputFieldLableStyle}`}>
                    Email Address*
                  </label>
                  <input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    {...register("email", { required: true })}
                    className={`w-full bg-white bg-opacity-50 rounded border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } ${inputFieldStyle}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label htmlFor="phone" className={`${inputFieldLableStyle}`}>
                    Phone*
                  </label>
                  <input
                    type="text"
                    placeholder="+0123 456 789"
                    {...register("phone", { required: true })}
                    className={`w-full bg-white bg-opacity-50 rounded border ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    } ${inputFieldStyle}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full md:w-1/2">
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className={`${inputFieldLableStyle}`}
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    placeholder="Plumber"
                    {...register("subject", { required: true })}
                    className={`w-full bg-white bg-opacity-50 rounded border ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    } ${inputFieldStyle}`}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`${inputFieldLableStyle}`}
                  >
                    Message*
                  </label>
                  <textarea
                    placeholder="Your message hoes here"
                    {...register("message", { required: true })}
                    className={`w-full bg-white bg-opacity-50 rounded border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-secondary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      This field is required
                    </p>
                  )}
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex  md:ms-auto mx-auto  text-white bg-primary border-0 py-[10px] px-[30px] focus:outline-none text-[15px] transition hover:scale-105 hover:shadow-xl font-semibold rounded text-lg"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              className="w-full"
              src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c8d1ff2373b364c32e99_Rectangle%203419.png"
              alt="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c8d1ff2373b364c32e99_Rectangle%203419.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
