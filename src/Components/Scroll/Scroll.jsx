import { BsFillMouseFill } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 5,
      repeat: Infinity,
    },
  },
};
const Scroll = () => {
  return (
    <div className="lg:flex items-center ml-80 my-20 gap-2">
      <motion.div initial="initial" animate="scrollButton" className="text-4xl">
        <BsFillMouseFill />
      </motion.div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="text-xl"
      >
        {" "}
        Scroll Down{" "}
      </motion.div>
      <div>
        <FaArrowDown />
      </div>
    </div>
  );
};

export default Scroll;
