import "./Banner.css";
import Data from "./Data";
import Social from "./Social";

const Banner = () => {
  return (
    <div className="container mt-32 mb-32 mx-auto">
      <section className="relative home section" id="home">
        <div className="flex justify-center">
          <div className="home__content grid">
            <Social />
            <div className="home__img"></div>
            <Data />
          </div>       
        </div>
      </section>
    </div>
  );
};

export default Banner;
