import { Link } from "react-router-dom";
import { FaFacebookSquare , FaGithub  } from "react-icons/fa";
import { RiDiscordFill } from "react-icons/ri";

const Social = () => {
    return (
        <div className="home__social text-red-700">
            <Link to={'https://www.facebook.com/tamanna.tahsin.31'} className="home__social-icon" target="_blank"><FaFacebookSquare /></Link>
            <Link className="home__social-icon" target="_blank"><RiDiscordFill /></Link>
            <Link to='https://github.com/TamannaTahsin1' className="home__social-icon" target="_blank"><FaGithub /></Link>
        </div> 
    );
};

export default Social;