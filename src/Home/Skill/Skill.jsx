import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import react from "../../assets/img/react.png";
import js from "../../assets/img/js.png";
import node from "../../assets/img/node.png";
import ex from "../../assets/img/ex.png";
import mongoDb from "../../assets/img/mongoDb.png";
import firebase from "../../assets/img/firebase.png";
import git from "../../assets/img/git.png";
import Marquee from "react-fast-marquee";

const Skill = () => {
  return (
    <div className="my-20" id="skills">
      <h2 className="text-3xl text-center font-semibold">My Skills</h2>
      <h5 className="text-center text-sm text-gray-400 font-semibold mb-5">
        My Technical Level
      </h5>
      <Marquee speed={150}>
        <div className="my-20 flex justify-center items-center gap-3">
          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center ">
            <div className="card-body items-center text-center">
              <img src={html} alt="" />
              <h2 className="card-title">HTML</h2>
              <p className="text-gray-400 font-semibold">Advance</p>
            </div>
          </div>

          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl">
            <div className="card-body items-center text-center">
              <img src={css} alt="" />
              <h2 className="card-title">CSS</h2>
              <p className="text-gray-400 font-semibold">Advance</p>
            </div>
          </div>

          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl">
            <div className="card-body items-center text-center">
              <img src={react} className="w-[48px]" alt="" />
              <h2 className="card-title">React</h2>
              <p className="text-gray-400 font-semibold">Advance</p>
            </div>
          </div>

          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl">
            <div className="card-body items-center text-center">
              <img src={js} alt="" />
              <h2 className="card-title">JavaScript</h2>
              <p className="text-gray-400 font-semibold">Advance</p>
            </div>
          </div>

          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl">
            <div className="card-body items-center text-center">
              <img src={node} className="w-[48px]" alt="" />
              <h2 className="card-title">Node.js</h2>
              <p className="text-gray-400 font-semibold">Intermediate</p>
            </div>
          </div>

          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl">
            <div className="card-body items-center text-center">
              <img src={ex} alt="" />
              <h2 className="card-title">Express.js</h2>
              <p className="text-gray-400 font-semibold">Intermediate</p>
            </div>
          </div>

          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl">
            <div className="card-body items-center text-center">
              <img src={mongoDb} className="w-[48px]" alt="" />
              <h2 className="card-title">MongoDb</h2>
              <p className="text-gray-400 font-semibold">Intermediate</p>
            </div>
          </div>

          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl">
            <div className="card-body items-center text-center">
              <img src={firebase} alt="" />
              <h2 className="card-title">Firebase</h2>
              <p className="text-gray-400 font-semibold">Advance</p>
            </div>
          </div>
          <div className="card w-48 bg-slate-200 text-black flex justify-center items-center shadow-xl mr-3">
            <div className="card-body items-center text-center">
              <img src={git} alt="" />
              <h2 className="card-title">Git Hub</h2>
              <p className="text-gray-400 font-semibold">Advance</p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Skill;
