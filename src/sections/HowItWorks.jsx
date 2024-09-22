import { HOW_IT_WORKS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const HowItWorks = () => {
  //aluth
  const setpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div id="works" className="pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-12 border-t border-neutral-800">
          <h2
            className="text-3xl lg:text-5xl tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600
            bg-clip-text text-transparent"
          >
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl shadow-xl flex flex-col justify-between"
            >
              <div className="">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-neutral-400 mb-4">{step.description}</p>
              </div>
              <div className="flex justify-center">
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="rounded-lg"
                />
              </div>

              {/* {step.users && (
                <div className="flex justify-between items-center mt-4">
                  <div className="flex -space-x-2">
                    {step.users.map((user, userIndex) => (
                      <img
                        key={userIndex}
                        src={user}
                        alt={`person ${userIndex + 1}`}
                        className="h-12 w-12 rounded-lg border-2 border-black"
                      />
                    ))}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg">
                    <div className="">Connect</div>
                  </button>
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
