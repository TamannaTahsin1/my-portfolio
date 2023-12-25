import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";
import './Data.css'
// const sliderVariants ={
//     initial:{
//         x:0,
//     },
//     animate:{
//         x:'-200%',
//         transition:{
//             repeat:Infinity,
//             repeatType:'mirror',
//             duration:20
//         }
//     }
// }
const Data = () => {
  return (
    <div className="home__data">
      <motion.h3
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
        className="text-gray-600 text-2xl font-semibold ml-20 px-5"
      >
        MERN Stack developer
      </motion.h3>
      <motion.h1
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
        className="font-bold text-6xl mb-4 px-5"
      >
        Tamanna Tahsin
      </motion.h1>
      <motion.p
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
        className=" font-semibold my-4 px-5"
      >
        Full Stack Web Developer | Proficient in Front-end and Back-end <br />{" "}
        Technologies, Dedicated to Delivering Innovative and Scalable Solutions
      </motion.p>

      <div className="my-10">
        <a href="#projects">
        <button className="btn bg-red-700 text-white font-bold text-md px-10 rounded-xl m-2">
          See Projects <LuSend />
        </button>
        </a>
      </div>
    </div>
  );
};

export default Data;
