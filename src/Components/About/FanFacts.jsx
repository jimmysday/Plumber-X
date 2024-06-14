const FanFacts = () => {
  // Array of objects for  data
  const sections = [
    {
      heading: "Background",
      content:
        "We've been a trusted partner in plumbing services since 2000. With a foundation built on expertise and reliability, we have proudly served countless households and businesses in Ontario.",
    },
    {
      heading: "Experience",
      content:
        "Our experience spans over two decades of providing exceptional plumbing solutions. From routine maintenance to complex installations, our team is equipped to handle all your plumbing needs.",
    },
    {
      heading: "Commitment",
      content:
        "We are committed to delivering the highest standards of service to our clients. Our dedication to quality, integrity, and customer satisfaction drives everything we do.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:gap-20 grid-cols-1 lg:grid-cols-2">
        <div className="px-4">
          <p className="text-base text-primary font-bold mb-4 text-center md:text-left">
            Why Choose Us?
          </p>
          <h1 className="text-3xl figtree_font sm:text-4xl md:text-5xl font-semibold text-center md:text-left">
            Our exceptional flair for wowing clients sets us apart from the
            rest.
          </h1>
          <div className="py-8 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:border-r md:border-gray-300">
                <p className="text-4xl sm:text-5xl font-bold leading-none text-primary">
                  640+
                </p>
                <p className="text-base mt-4 sm:mt-6 text-gray-800">
                  Faucets Fixed
                </p>
              </div>
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-bold leading-none text-primary">
                  640+
                </p>
                <p className="text-base mt-4 sm:mt-6 text-gray-800">
                  Satisfaction Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 figtree_font">
          {/* Mapping array */}
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              {/* Heading */}
              <h1 className="text-lg sm:text-xl font-semibold mt-5 mb-2">
                {section.heading}
              </h1>
              {/* Description */}
              <p className="text-base text-gray-800">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanFacts;
