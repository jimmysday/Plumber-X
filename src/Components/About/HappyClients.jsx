import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// clients Logos
import happy_client_logo_1 from "../../assets/Images/happy_client_logo_1.png";
import happy_client_logo_2 from "../../assets/Images/happy_client_logo_2.png";
import happy_client_logo_3 from "../../assets/Images/happy_client_logo_3.png";
import happy_client_logo_4 from "../../assets/Images/happy_client_logo_4.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HappyClients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Array of client logos
  const clientLogos = [
    {
      src: happy_client_logo_1,
      alt: "Client Logo 1",
    },
    {
      src: happy_client_logo_2,
      alt: "Client Logo 2",
    },
    {
      src: happy_client_logo_3,
      alt: "Client Logo 3",
    },
    {
      src: happy_client_logo_4,
      alt: "Client Logo 4",
    },
  ];

  return (
    <div className="max-w-screen-xl overflow-hidden mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Mapping over clientLogos array */}
        {clientLogos.map((client, index) => (
          <LazyLoadImage
            effect="blur"
            key={index}
            className="mx-auto"
            src={client.src}
            alt={client.alt}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          />
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
