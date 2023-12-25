import { FaLocationDot } from "react-icons/fa6";
import { SlBookOpen } from "react-icons/sl";
import { GrContactInfo } from "react-icons/gr";
import { AiFillFilePdf } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mt-60 mb-40" id="about">
      <motion.h2
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }}
        className="text-3xl text-center font-semibold"
      >
        About Me
      </motion.h2>
      <motion.h5 initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }} className="text-center text-sm text-gray-400 font-semibold mb-5">
        My introduction
      </motion.h5>
      <motion.div initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }} className="grid grid-cols-1 md:grid-cols-3 lg:mx-40 font-bold p-5">
        <div className="card w-60 bg-base-100 shadow-xl mb-2">
          <div className="card-body">
            <h2 className="text-center text-2xl">
              <FaLocationDot />
            </h2>
            <p>Khulna, Bangladesh</p>
          </div>
        </div>
        <div className="card w-60 bg-base-100 shadow-xl mb-2">
          <div className="card-body">
            <h2 className="text-center text-2xl">
              <SlBookOpen />
            </h2>
            <p>B.Sc in CSE</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl mb-2">
          <div className="card-body"> 
            <h2 className="text-center text-3xl">
              <GrContactInfo />
            </h2>
            <p>tamannatahsin648@gmail.com</p>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{
          duration: "1",
        }} className="lg:flex lg:justify-center lg:items-center mt-5 text-gray-400 font-semibold gap-20 p-5 ">
        I completed my graduation from Northern University of Business and
        Technology <br /> Khulna in Computer Science and Engineering. Now, I am
        a skilled full-stack <br /> developer with expertise in both front-end
        and back-end development, utilizing <br /> popular frameworks to write
        efficient code. I have successfully contributed to <br /> various
        projects. With a goal to become a web developer, I aspire to work with{" "}
        <br /> Google one day.
        <div>
          <a href="https://drive.google.com/uc?export=download&id=1svkv1syKxX17u_hkDuOij35tLUQ7k6Hi">
          <button className="btn bg-red-700 text-white px-5 mt-2">
            Download Resume <AiFillFilePdf />
          </button>
          </a>
         
        </div>
      </motion.div>
    </div>
  );
};

export default About;
