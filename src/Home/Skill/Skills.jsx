import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import js from "../../assets/img/js.png";
import node from "../../assets/img/node.png";
import ex from "../../assets/img/ex.png";
import mongoDb from "../../assets/img/mongoDb.png";
import firebase from "../../assets/img/firebase.png";
import Marquee from "react-fast-marquee";
import git from "../../assets/img/git.png";


const Skills = () => {
    return (
        <div className="pt-20" id="skills" data-aos="fade-up" data-aos-duration="2000">
     <h2 className="text-3xl text-center font-semibold">My Skills</h2>
      <h5 className="text-center text-sm text-gray-400 font-semibold mb-5">
        My Technical Level
      </h5>
        <Marquee speed={150}>
        <div className="my-20 flex justify-center items-center gap-10">
          <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <FaReact className="text-5xl mb-2"></FaReact>
              <p className="text-2xl text-red-500 font-medium">90%</p>
            </div>
            <h1>React</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-down" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={js} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">90%</p>
            </div>
            <h1 className="text-center  font-semibold">JavaScript</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-down" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
            <SiTailwindcss className="text-5xl mb-2 text-blue-400"> </SiTailwindcss>
              <p className="text-2xl text-red-500 font-medium">90%</p>
            </div>
            <h1 className="text-center  font-semibold">Tailwind CSS</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={html} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">90%</p>
            </div>
            <h1 className="text-center  font-semibold">HTML</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-left" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={css} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">90%</p>
            </div>
            <h1 className="text-center  font-semibold">CSS</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={firebase} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">80%</p>
            </div>
            <h1 className="text-center  font-semibold">Firebase</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-right" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={mongoDb} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">70%</p>
            </div>
            <h1 className="text-center  font-semibold">MongoBD</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={node} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">70%</p>
            </div>
            <h1 className="text-center  font-semibold">Node JS</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={ex} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">70%</p>
            </div>
            <h1 className="text-center  font-semibold">Express JS</h1>
          </div>
          <div className="flex flex-col items-center" data-aos="fade-up" data-aos-duration="2000">
            <div className="border-2 border-black rounded-full px-7 py-8 max-w-fit flex flex-col justify-center items-center">
              <img src={git} alt="icon" className="h-12 w-12 mb-2" />
              <p className="text-2xl text-red-500 font-medium">80%</p>
            </div>
            <h1 className="text-center  font-semibold">GitHub</h1>
          </div>
        </div>
        </Marquee>
      </div>
    );
};

export default Skills;