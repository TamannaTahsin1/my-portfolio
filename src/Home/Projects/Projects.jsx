import "./Projects.css";
import img1 from "../../assets/img/f1.png";
import img2 from "../../assets/img/t1.png";
import img3 from "../../assets/img/f2.png";
import { FaArrowRightToBracket } from "react-icons/fa6";


const Projects = () => {
  return (
    <div id="projects">
      <h1 className="text-center font-semibold text-3xl">Projects</h1>
      <h5 className="text-center text-sm text-gray-400 font-semibold mt-2 mb-10">
        Check out my project
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* 1st project */}
        <div className="single-project">
          <img src={img2} className="h-60" alt="" />
          {/* project overlay */}
          <div className="project-overlay">
            <p>
              Project Name: <span>Tutorio</span>
            </p>
            <p>Type: Student & Class management</p>
            <p>Technology: React, Tailwind, JavaScript, ExpressJs, MongoDB</p>
            <div className="flex gap-2">
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href="https://tutorio-client.web.app">Live Link</a>
              </button>
              <div>
                <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                  <a href="https://github.com/TamannaTahsin1/tutorio-client"></a>
                  Github-Client
                </button>
              </div>
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href="https://github.com/TamannaTahsin1/tutorio-server"></a>
                Github-Server
              </button>
            </div>
          </div>
        </div>
        {/* 2nd project */}
        <div className="single-project">
          <img src={img1} alt="" />
          {/* project overlay */}
          <div className="project-overlay">
            <p>
              Project Name: <span>ShareFare</span>
            </p>
            <p>Type: Food Donation</p>
            <p>Technology: React, Tailwind, JavaScript, ExpressJs, MongoDB</p>
            <div className="flex gap-2">
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href=" https://food-donation-client.web.app">Live Link</a>
              </button>
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href="https://github.com/TamannaTahsin1/food-donation-server"></a>
                Github-Client
              </button>
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href="https://github.com/TamannaTahsin1/food-donation-client"></a>
                Github-Server
              </button>
            </div>
          </div>
        </div>
        {/* 3rd project */}
        <div className="single-project">
          <img src={img3} alt="" />
          {/* project overlay */}
          <div className="project-overlay">
            <p>
              Project Name: <span>Fashion Hub</span>
            </p>
            <p>Type: E-commerce</p>
            <p>Technology: React, Tailwind, JavaScript, ExpressJs, MongoDB</p>
            <div className="flex gap-2">
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href="https://fashion-hub-client.web.app/">Live Link</a>
              </button>
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href="https://github.com/TamannaTahsin1/fashion-hub"></a>
                Github-Client
              </button>
              <button className="btn bg-red-700 hover:bg-orange-300 text-white border-none btn-sm">
                <a href="https://github.com/TamannaTahsin1/fashion-hub-server"></a>
                Github-Server
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-32 flex justify-center items-center gap-5">
        <h1 className="text-2xl font-semibold">Visit Here</h1>
        <p className="text-2xl">
          <FaArrowRightToBracket />
        </p>
      
       
        <button className="btn bg-red-700 text-white px-10">
            <a href="https://github.com/TamannaTahsin1">
              More Projects
            </a>
          </button>
    
      
      </div>
    </div>
  );
};

export default Projects;
