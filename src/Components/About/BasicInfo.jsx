import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import basic_info_img1 from "../../assets/Images/basic_info_img1.png";
import basic_info_img2 from "../../assets/Images/basic_info_img2.png";
const BasicInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="max-w-screen-xl figtree_font mx-auto py-12 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* First section */}
      <div data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-end">
          <div data-aos="fade-up" data-aos-duration="800">
            <h1 className="text-3xl sm:text-3xl lg:text-5xl font-semibold mb-4 md:mb-6 lg:mb-8">
              The intelligent way to manage any{" "}
              <br className="hidden md:block" /> project.
            </h1>
            <p
              className="text-base text-gray-600"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              We have the ability to perform specialized plumbing and hydronic
              work at a reasonable price. In order to provide customers with
              quality service, we have implemented systems which allow
              successful project management to get the job complete on schedule
              and on budget.
            </p>
          </div>
          <LazyLoadImage
            effect="blur"
            src={basic_info_img1}
            alt="Project Management"
            className="w-full h-auto"
            data-aos="fade-left"
            data-aos-duration="1200"
          />
        </div>
      </div>

      {/* Second section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 mt-16 md:mt-28 items-end">
        <LazyLoadImage
          effect="blur"
          src={basic_info_img2}
          alt="Associations"
          className="w-full h-auto hidden md:block"
          data-aos="fade-right"
          data-aos-duration="1000"
        />
        <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
          <h1 className="text-3xl sm:text-3xl lg:text-5xl font-semibold mb-4 md:mb-6 lg:mb-8">
            Membership in the <br className="hidden md:block" /> following{" "}
            <br className="hidden md:block" /> associations
          </h1>
          <p
            className="text-base text-gray-600"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            We have the ability to perform specialized plumbing and hydronic
            work at a reasonable price. In order to provide customers with
            quality service, we have implemented systems which allow successful
            project management to get the job complete on schedule and on
            budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
