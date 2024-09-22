import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, trasition: { straggerChildern: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="pt-28 lg:pt-36"
    >
      <div className="max-w-7xlmx mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          variants={fadeInUp}
          className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs"
        >
          {HERO_CONTENT.badgeText}
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-8xl font-semibold tracking-tighter pb-5 bg-gradient-to-b
         from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-neutral-400 max-w-xl"
        >
          {HERO_CONTENT.subHeading}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-10 flex justify-center flex-wrap gap-2"
        >
          <a
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
          <a
            href="/"
            className="inline-block border border-gray-500 hover:border-gray-400 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </motion.div>

        <motion.div variants={fadeIn} className="py-10">
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-center mb-8"
          >
            {HERO_CONTENT.trustedByText}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8"
          >
            {BRAND_LOGOS.map((logo, index) => (
              <div key={index} className="mt-5">
                {logo.src}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn} className="mt-5">
          <img
            src={heroImage}
            alt="Hero.Jpg"
            className="w-full h-auto rounded-3xl border border-e-neutral-800 mb-20"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
