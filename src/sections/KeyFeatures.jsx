import { KEY_FEATURES_CONTENT } from "../constants";
import { motion } from "framer-motion";

const KeyFeatures = () => {
  return (
    <div className="pb-16">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600
            bg-clip-text text-transparent"
          >
            {KEY_FEATURES_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{KEY_FEATURES_CONTENT.sectionDescription}</p>
        </motion.div>

        <motion.div className="flex flex-wrap justify-between">
          {KEY_FEATURES_CONTENT.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center items-center mb-4"
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-2 text-neutral-400"
              >
                {feature.description}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFeatures;
