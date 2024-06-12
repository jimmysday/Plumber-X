import { FaChevronDown } from "react-icons/fa";

export const FAQ = () => {
  return (
    <div>
      <div className="">
        <div className="px-4 w-full flex md:flex-row flex-col gap-20 md:gap-40 justify-start max-w-screen-xl py-20 lg:py-24 mx-auto">
          <div>
            <p className="text-primary font-bold mb-4">FAQ</p>
            <h1 className="text-3xl md:text-5xl font-semibold">
              Frequently asked questions
            </h1>
          </div>
          <div className="space-y-4  w-full">
            <details
              className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-sm"
              open
            >
              <summary className="flex cursor-pointer w-full items-center justify-between gap-1.5 rounded-lg  p-4 text-secondary">
                <h2 className="text-xl font-bold -xl w-full">
                  1. How can I contact Moral Maintenance for plumbing services?
                </h2>
                <FaChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 pb-4 leading-relaxed text-secondary text-base">
                You can reach us by phone at 437-214-6535 or via our contact
                form on the website. We're available to assist you promptly.
              </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-secondary">
                <h2 className="text-xl font-bold -xl">
                  2. What plumbing services does Moral Maintenance offer?
                </h2>

                <FaChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 pb-4 leading-relaxed text-secondary text-base">
                We provide a wide range of plumbing services, including pipe
                repairs, drain cleaning, water heater installation/repair, and
                emergency plumbing services.
              </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-secondary">
                <h2 className="text-xl font-bold -xl">
                  3. Do you offer emergency plumbing services?
                </h2>

                <FaChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 pb-4 leading-relaxed text-secondary text-base">
                Yes, we understand that plumbing emergencies can happen at any
                time. We provide 24/7 emergency plumbing services to address
                urgent issues.
              </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-secondary">
                <h2 className="text-xl font-bold -xl">
                  4. How do you ensure the quality of your plumbing work
                </h2>

                <FaChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 pb-4 leading-relaxed text-secondary text-base">
                Our team consists of highly skilled and certified plumbers who
                adhere to the highest industry standards. We also back our work
                with a satisfaction guarantee.
              </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden bg-white rounded-sm">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 text-secondary">
                <h2 className="text-xl font-bold -xl">
                  5. Are you licensed and insured?
                </h2>

                <FaChevronDown className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" />
              </summary>

              <p className="mt-4 px-4 pb-4 leading-relaxed text-secondary text-base">
                Yes, we are fully licensed and insured, providing peace of mind
                to our customers.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
