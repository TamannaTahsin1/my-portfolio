import Banner from "../Components/Banner/Banner";
import Contacts from "../Pages/Contacts/Contacts";
// import Scroll from "../Components/Scroll/Scroll";
import About from "./About/About";

import Projects from "./Projects/Projects";

import Skills from "./Skill/Skills";
const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
        {/* <Scroll></Scroll>*/}
        <About></About>
        <Projects></Projects>
        {/* <Skill></Skill> */}
        <Skills></Skills>
        <Contacts></Contacts>
      </div>
    </div>
  );
};

export default Home;
