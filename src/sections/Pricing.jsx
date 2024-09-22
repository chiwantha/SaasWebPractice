import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

const Pricing = () => {
  return (
    <div className="pb-20">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50
           via-neutral-300 to-neutral-800 bg-clip-text text-transparent"
          >
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-xl shadow-lg bg-neutral-950
                ${
                  plan.popular
                    ? "border border-blue-900/80"
                    : "border border-neutral-800"
                }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase">
                {plan.name}
              </h3>
              <p className=" text-neutral-400 mb-6">{plan.description}</p>
              <div className="text-2xl lg:text-3xl font-medium mb-6">
                {plan.price}
              </div>
              <ul className="mb-8 space-y-2 text-neutral-400">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className={`inline-block h-2 ${
                        plan.popular ? "bg-blue-600" : "bg-neutral-600"
                      } w-2 rounded-full mr-2`}
                    ></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-4 ${
                  plan.popular
                    ? "bg-blue-600 hover:bg-blue-500"
                    : "bg-neutral-600 hover:bg-neutral-500"
                } rounded-lg`}
              >
                {PLANS_CONTENT.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
