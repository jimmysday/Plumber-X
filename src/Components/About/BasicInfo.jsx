import React from "react";

const BasicInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
              The intelligent way to manage any{" "}
              <br className="hidden md:block" /> project.
            </h1>
            <p className="text-base text-gray-600">
              We have the ability to perform specialized plumbing and hydronic
              work at a reasonable price. In order to provide customers with
              quality service, we have implemented systems which allow
              successful project management to get the job complete on schedule
              and on budget.
            </p>
          </div>
          <img
            src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8c7_Rectangle%203439%20(1).png"
            alt="Project Management"
            className="w-full h-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-16 md:mt-28 items-end">
          <img
            src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8c7_Rectangle%203439%20(1).png"
            alt="Associations"
            className="w-full h-auto"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8">
              Membership in the <br className="hidden md:block" /> following{" "}
              <br className="hidden md:block" /> associations
            </h1>
            <p className="text-base text-gray-600">
              We have the ability to perform specialized plumbing and hydronic
              work at a reasonable price. In order to provide customers with
              quality service, we have implemented systems which allow
              successful project management to get the job complete on schedule
              and on budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
