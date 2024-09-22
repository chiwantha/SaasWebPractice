import { motion } from "framer-motion";
import { TESTIMONIALS_CONTENT } from "../constants";

const Testimonials = () => {
  return (
    <div id="testimonial" className="">
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8 border-t pt-16 border-neutral-800"
        >
          <h2
            className="text-3xl lg-text-5xl tracking-tighter bg-gradient-to-t from-neutral-50 
            via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
          >
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{TESTIMONIALS_CONTENT.sectionDescription}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
              key={index}
              className="mt-10 flex flex-col items-center
                 justify-center overflow-hidden rounded-xl bg-neutral-900/50 border
                 border-neutral-900 p-10"
            >
              <p className="text-neutral-200 mb-4">{review.review}</p>
              <div className="flex items-center justify-center mt-4">
                <img
                  src={review.image}
                  alt={review.alt}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div className="">
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-sm font-bold text-white"
                  >
                    {review.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-sm text-gray-500"
                  >
                    {review.title}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
