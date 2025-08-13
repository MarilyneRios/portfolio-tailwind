import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import AboutImage from "../assets/back.jpg";
import portrait from "../assets/portraitPro.png";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <div
      className="bg-sky-950 text-white py-20 min-h-screen flex flex-col justify-center items-center"
      id="contact"
    >
      {/* Title */}
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Me contacter</h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left - Infos */}
          <div className="flex-1">
            <div
              className="border-[3px] border-zinc-300 rounded-lg bg-gray-900 
            shadow-lg p-8 transition-all duration-300 
            hover:shadow-[0_10px_20px_rgba(0,255,255,0.5)]"
            >
              <h3
                className="text-3xl font-bold text-transparent 
              bg-clip-text
               bg-gradient-to-r from-green-400 to-blue-500 mb-4"
              >
                Discutons
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Disponible pour discuter de projets de développement web ou
                d&apos;opportunités de collaboration.
                <br />
                N&apos;hésitez pas à me contacter.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:rios.marilyne.dev@gmail.com"
                  className="flex items-center p-3 rounded-lg bg-gray-800
                   hover:bg-sky-700
                   
                   hover:text-white transition-all duration-300"
                >
                  <FaEnvelope className="text-green-400 mr-3" />
                  rios.marilyne@gmail.com
                </a>

                <a
                  href="tel:0781141969"
                  className="flex items-center p-3 rounded-lg bg-gray-800 
                  hover:bg-sky-700 hover:text-white transition-all duration-300"
                >
                  <FaPhone className="text-green-400 mr-3" />
                  07 81 14 19 69
                </a>

                <a
                  href="https://www.google.com/maps?q=Bourg+Saint+Andéol,+Ardèche,+France"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg bg-gray-800
                   hover:bg-sky-700 hover:text-white transition-all duration-300"
                >
                  <FaMapMarkedAlt className="text-green-400 mr-3" />
                  Bourg Saint Andéol, Ardèche, France
                </a>
              </div>
            </div>
          </div>

          {/* Right - Image Flip */}
          <div className="flex-1 flex justify-center mt-10 md:mt-0">
            <div className="w-80 h-80 group perspective">
              <div
                className="relative w-full h-full 
                transform transition-transform duration-700 
                preserve-3d group-hover:rotate-y-180 hover:-translate-y-1 
                hover:shadow-[0_10px_20px_rgba(0,255,255,0.5)] active:translate-y-0 active:shadow-inner"
              >
                {/* Recto */}
                <img
                  src={AboutImage}
                  alt="Portrait recto"
                  className="absolute w-full h-full rounded-lg 
                  object-cover backface-hidden"
                />
                {/* Verso */}
                <img
                  src={portrait}
                  alt="Portrait verso"
                  className="absolute w-full h-full rounded-lg 
                  object-cover transform rotate-y-180 backface-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
