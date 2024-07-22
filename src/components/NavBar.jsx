import logo from "../assets/nameLogo.png";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-3">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-15" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://linkedin.com/in/devananth-r-5153bb214" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:rdevananth19@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/_aved._.deva_" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
