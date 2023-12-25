import Banner from "../Components/Banner/Banner";
import Contacts from "../Pages/Contacts/Contacts";
// import Scroll from "../Components/Scroll/Scroll";
import About from "./About/About";

import Projects from "./Projects/Projects";
import Skill from "./Skill/Skill";
const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        {/* <Scroll></Scroll>*/}
        <About></About>
        <Projects></Projects>
        <Skill></Skill>
        <Contacts></Contacts>
      </div>
    </div>
  );
};

export default Home;
