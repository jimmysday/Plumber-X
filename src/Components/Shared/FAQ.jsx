import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronDown } from "react-icons/fa";

// FAQ data array
const faqData = [
  {
    question: "1. How can I contact Moral Maintenance for plumbing services?",
    answer:
      "You can reach us by phone at 437-214-6535 or via our contact form on the website. We're available to assist you promptly.",
  },
  {
    question: "2. What plumbing services does Moral Maintenance offer?",
    answer:
      "We provide a wide range of plumbing services, including pipe repairs, drain cleaning, water heater installation/repair, and emergency plumbing services.",
  },
  {
    question: "3. Do you offer emergency plumbing services?",
    answer:
      "Yes, we understand that plumbing emergencies can happen at any time. We provide 24/7 emergency plumbing services to address urgent issues.",
  },
  {
    question: "4. How do you ensure the quality of your plumbing work?",
    answer:
      "Our team consists of highly skilled and certified plumbers who adhere to the highest industry standards. We also back our work with a satisfaction guarantee.",
  },
  {
    question: "5. Are you licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured, providing peace of mind to our customers.",
  },
];

export const FAQ = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="">
        <div className="px-4 w-full flex md:flex-row flex-col gap-20 md:gap-0 justify-start max-w-screen-xl py-16 sm:py-24 mx-auto">
          {/* FAQ title section */}
          <div>
            <p className="text-primary font-bold mb-4">FAQ</p>
            <h1 className="text-3xl w-[70%] sm:w-auto md:text-5xl font-semibold figtree_font">
              Frequently asked questions
            </h1>
          </div>

          {/* FAQ items section */}
          <div className="space-y-3 md:space-y-4 w-full figtree_font">
            {/* Mapping through faqData array to render FAQ items */}
            {faqData.map((faq, index) => (
              <details
                key={index}
                className="group [&_summary::-webkit-details-marker]:hidden bg-neutral rounded-sm"
                open={index === 0} // Open the first FAQ item by default
                data-aos="fade-up"
              >
                <summary className="flex cursor-pointer w-full items-center justify-between gap-1.5 rounded-lg p-4 text-secondary transition-transform duration-300">
                  <h2 className="md:text-xl text-base md:font-bold font-semibold w-full">
                    {faq.question}
                  </h2>
                  <FaChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                </summary>

                <p className="mt-4 px-4 pb-4 leading-relaxed text-secondary text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
