import { SiNetlify } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoIosGitMerge } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiRender } from "react-icons/si";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // 4 éléments affichés sur l'écran de bureau
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  return (
    <div className="bg-sky-950 text-white py-5" id="skills">
      <div id="container" className="space-y-5">
        <div className="skills-container rounded  pt-10 ">
          <div className="text-center ">
            <h2
              id="skills-title"
              className="text-3xl font-bold mt-5 "
            >
              Mes compétences
            </h2>
          </div>

          <div id="containerLangages" className="my-5 p-2">
            <div id="languages" className="text-center mb-5">
              <h4 className="text-2xl font-semibold m-5">
                Langages de programmation :
              </h4>
              <div
                id="logosLanguages"
                className="bg-gray-100 flex justify-center space-x-4 w-1/2 mx-auto p-4 rounded-lg"
              >
                <FaHtml5 size={50} style={{ color: "#F06529" }} />
                <FaCss3Alt
                  size={50}
                  style={{ color: "rgba(4, 93, 218, 0.5)" }}
                />
                <FaBootstrap
                  size={50}
                  style={{ color: "rgba(102, 16, 242, 0.5)" }}
                />
                <SiTailwindcss
                  size={50}
                  style={{ color: "rgba(0,116,199, 0.5)" }}
                />
                <SiJavascript
                  size={50}
                  style={{ color: "rgba(204, 204, 0, 0.9)" }}
                />
              </div>
            </div>
          </div>

          <div id="containerLangages" className="p-2 ">
            <div id="Technologies" className="text-center m-5">
              <h4 className="text-2xl font-semibold my-5">
                Outils et technologies :
              </h4>
              <div id="logosTechnologies" className="flex justify-center mt-4 ">
                <div className="bg-gray-100 flex justify-center space-x-2 w-1/2 mx-auto p-4 rounded-lg">
                  <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-10-px"
                  >
                    <div className="slider text-center mb-2">
                      <FaReact size={50} style={{ color: "#61DAFB" }} />
                      <p className="logo-name text-black">React</p>
                    </div>
                    <div className="slider text-center">
                      <TbBrandVite size={50} style={{ color: "#646CFF" }} />
                      <p className="logo-name text-black">Vite</p>
                    </div>
                    <div className="slider text-center">
                      <FaReact size={50} style={{ color: "#2D2D2D" }} />
                      <p className="logo-name text-black">React Native</p>
                    </div>
                    <div className="slider text-center">
                      <TbBrandNextjs size={50} style={{ color: "#000000" }} />
                      <p className="logo-name text-black">Next.js</p>
                    </div>
                    <div className="slider text-center">
                      <SiRedux size={50} style={{ color: "#764ABC" }} />
                      <p className="logo-name text-black">Redux</p>
                    </div>
                    <div className="slider text-center">
                      <FaNodeJs size={50} style={{ color: "#539E43" }} />
                      <p className="logo-name text-black">Node.js</p>
                    </div>
                    <div className="slider text-center">
                      <SiExpress size={50} style={{ color: "#808080" }} />
                      <p className="logo-name text-black">Express</p>
                    </div>
                    <div className="slider text-center">
                      <SiMongodb size={50} style={{ color: "#47A248" }} />
                      <p className="logo-name text-black">MongoDB</p>
                    </div>
                    <div className="slider text-center">
                      <SiRender size={45} style={{ color: "#000000" }} />
                      <p className="logo-name text-black">Render</p>
                    </div>
                    <div className="slider text-center">
                      <SiNetlify size={50} style={{ color: "#00C7B7" }} />
                      <p className="logo-name text-black">Netlify</p>
                    </div>
                    <div className="slider text-center">
                      <IoIosGitMerge size={50} style={{ color: "#F1502F" }} />
                      <p className="logo-name text-black">Git</p>
                    </div>
                    <div className="slider text-center">
                      <FaGithub size={50} style={{ color: "#181717" }} />
                      <p className="logo-name text-black">GitHub</p>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <div className="m-5 flex flex-col justify-center text-center p-2">
            <div id="PNbProjectsContainer">
              <p className="text-2xl font-bold p-2">Projets Complets</p>
            </div>
            <div id="NbProjectsContainer" className=" text-center p-2">
              <h3 className="text-2xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                3+
              </h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
