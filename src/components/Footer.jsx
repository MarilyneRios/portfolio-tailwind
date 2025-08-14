// react icons
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";
import { IoLogoCodepen } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Marilyne Rios</h3>
            <p className="text-gray-400">
              Dévelopeuse Full-Stack localisé en France, spécialisée en web et
              mobile.
            </p>
          </div>
        </div>

        <div
          className="border-t border-gray-800 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Marilyne Rios. copyright.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.linkedin.com/in/marilyne-rios-59a13015b" target="_blank" className="text-gray-400 hover:text-white">
              <TiSocialLinkedinCircular size={30} className="mt-1" />
            </a>
            <a
              href="https://github.com/MarilyneRios"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <FaGithub size={22} className="mt-2" />
            </a>
            <a
              href="https://codepen.io/MarilyneRios"
              target="_blank"
              className="text-gray-400 hover:text-white"
            >
              <IoLogoCodepen size={26} className="mt-2" />
            </a>
            <a
              href="mailto:rios.marilyne@gmail.com" target="_blank"
              className="text-gray-400 hover:text-white "
            >
              <MdMailOutline size={26} className="mt-2" />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
