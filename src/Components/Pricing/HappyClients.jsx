import lacoste from "../../assets/Images/lacoste.png";
const HappyClients = () => {
  // Array of client image URLs
  const clientImages = [
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8cc_image%2014.png",
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8ce_image%2013.png",
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8d0_image%2011.png",
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8d2_image%2010.png",
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8d2_image%2010.png",
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8cc_image%2014.png",
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8ce_image%2013.png",
    "https://assets-global.website-files.com/654db8e1ea37faf3593d0817/6555c957a0510dc07052f8d0_image%2011.png",
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="lg:bg-[#F2F2F2] bg-neutral shadow lg:-mt-40 w-full max-w-screen-lg mx-auto p-10">
        <h2 className="text-center text-xl my-6">Our Happy Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Render client images from array */}
          {clientImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Client ${index + 1}`}
              className="mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
