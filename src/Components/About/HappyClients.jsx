
const HappyClients = () => {
  // Array of client logos
  const clientLogos = [
    {
      src: "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8cc_image%2014.png",
      alt: "Client Logo 1",
    },
    {
      src: "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8cc_image%2014.png",
      alt: "Client Logo 2",
    },
    {
      src: "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8cc_image%2014.png",
      alt: "Client Logo 3",
    },
    {
      src: "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8cc_image%2014.png",
      alt: "Client Logo 4",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Mapping over clientLogos array */}
        {clientLogos.map((client, index) => (
          <img
            key={index}
            className="mx-auto"
            src={client.src}
            alt={client.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
