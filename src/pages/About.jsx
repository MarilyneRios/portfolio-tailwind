import { useState } from "react";
import ContactBtn from "../components/ContactBtn";
// react icons
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoCodepen } from "react-icons/io";

const About = () => {
  const [activeFace, setActiveFace] = useState(""); // vide = spin actif

  const handleFaceClick = (face) => {
    setActiveFace(`show-${face}`);
  };

  return (
    <div
      className="bg-gray-800 text-white py-20 min-h-screen flex flex-col justify-center items-center"
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24 ">
        <div className="flex flex-col md:flex-row items-center md:space-x-">
          {/* left-part-cube-legend */}
 <div className="flex-1 flex flex-col items-center">
        <div className="p-6 ">            
          
          {/* cube 3D */}
            <div
              className={`perspective-800 flex items-center justify-center -translate-y-20 ml-5 p-5`}
              style={{ height: "200px" }}
            >
              <div
                className={`cube ${activeFace ? activeFace : "spin"}`}
              >
                <div
                  className="cube__face cube__face--front bg-gradient-to-r from-green-400 to-blue-500"
                  onClick={() => handleFaceClick("front")}
                >
                  <p>Autodidacte</p>
                </div>
                <div
                  className="cube__face cube__face--back bg-gradient-to-r from-green-400 to-blue-500"
                  onClick={() => handleFaceClick("back")}
                >
                  <p>Curieuse</p>
                </div>
                <div
                  className="cube__face cube__face--right bg-gradient-to-r from-green-400 to-blue-500"
                  onClick={() => handleFaceClick("right")}
                >
                  <p>Créative</p>
                </div>
                <div
                  className="cube__face cube__face--left text-center bg-gradient-to-r from-green-400 to-blue-500"
                  onClick={() => handleFaceClick("left")}
                >
                  <p>Esprit d&apos;équipe</p>
                </div>
                <div
                  className="cube__face cube__face--top bg-gradient-to-r from-green-400 to-blue-500"
                  onClick={() => handleFaceClick("top")}
                >
                  <p>Sociable</p>
                </div>
                <div
                  className="cube__face cube__face--bottom bg-gradient-to-r from-green-400 to-blue-500"
                  onClick={() => handleFaceClick("bottom")}
                >
                  <p>Rigoureuse</p>
                </div>
              </div>
            </div>
           </div>
          </div>

          {/* Right-part-text-content */}
            <div className="flex-1 border-[3px] border-zinc-300 rounded-lg bg-gray-900 shadow-lg p-8">
            <h2 className="text-4xl font-bold text-center mb-8">Qui suis-je ?</h2>
            <p className="text-lg mb-8">
              Passionnée de développement d&apos;applications web et mobiles responsives.
            </p>
            <p className="text-lg mb-6">
              Je m&apos;efforce de créer des applications qui aident les utilisateurs de manière adaptée
              et efficace, tout en apportant des solutions innovantes.
            </p>
            <p className="text-lg mb-6">
              Vous pouvez consulter mon profil GitHub et LinkedIn en cliquant sur les icônes ci-dessous.
            </p>

            {/* Links-réseaux-sociaux */}
            <div className="mt-8 flex justify-center gap-6">
              <a
                href="https://github.com/MarilyneRios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 mt-3 inline-block transition-transform duration-500 hover:text-gray-400 hover:-skew-y-12 hover:rotate-10 hover:scale-150"
              >
                <FaGithub size={50} />
              </a>
              <a
                href="https://www.linkedin.com/in/marilyne-rios-59a13015b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 mt-2 inline-block transition-transform duration-500 hover:text-gray-400 hover:-skew-y-12 hover:rotate-10 hover:scale-150"
              >
                <TiSocialLinkedinCircular size={70} />
              </a>
              <a
                href="https://codepen.io/MarilyneRios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 mt-2 inline-block transition-transform duration-500 hover:text-gray-400 hover:-skew-y-12 hover:rotate-10 hover:scale-150"
              >
                <IoLogoCodepen size={70} />
              </a>
            </div>
            {/* Btn-contact */}
            <div className="mt-8 flex justify-center">
              <ContactBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
