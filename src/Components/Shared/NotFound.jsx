import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center gap-x-16 gap-y-16 bg-neutral px-6 md:px-10 py-16 lg:py-24 mx-4">
          <div>
            <h1 className="bg-primary mb-6 text-neutral font-extrabold text-9xl inline-block pt-16 px-4">
              404
            </h1>
            <p className="text-5xl mb-4 font-extrabold">Page not Found</p>
            <p className="text-base line-height-28 font-medium text-gray">
              Sorry, the page you are looking for could not be found. It may
              have been moved, deleted, or it never existed in the first place.
            </p>
          </div>

          {/* Plumber model image */}
          <img
            className="lg:w-[35%] md:w-60"
            src="https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555cd3e20c295a71712cc21_WhatsApp%20Image%202023-11-01%20at%2016.30.23_1297d1e5.jpg"
            alt="Plumber Model"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
