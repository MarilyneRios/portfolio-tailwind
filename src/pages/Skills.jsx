import {
  SiNetlify,
  SiRedux,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiTailwindcss,
  SiRender,
  SiJavascript,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { TbBrandNextjs, TbBrandVite } from "react-icons/tb";
import { IoIosGitMerge } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    mobile: { breakpoint: { max: 767, min: 0 }, items: 2 },
  };

  return (
    <div
      className="bg-sky-950 text-white min-h-screen flex flex-col align-item justify-center"
      id="skills"
    >
      <section className="min-h-screen flex flex-col justify-center items-center px-6 ">

      {/* Title */}
      <h2 className="text-3xl font-bold mt-6">
        Mes compétences
      </h2>

      {/* Langages */}
      <section className="my-6 ">
        <h3 className="text-2xl font-semibold text-center my-6 ">
          Langages de programmation
        </h3>
        
        <div
          className="bg-gray-900 rounded-lg border-[3px] border-zinc-300 shadow-lg 
            p-4 flex justify-center flex-wrap gap-4 max-w-3xl "
        >
          {[
            { Icon: FaHtml5, color: "#F06529", label: "HTML5" },
            { Icon: FaCss3Alt, color: "#0460D9", label: "CSS3" },
            { Icon: FaBootstrap, color: "#6610F2", label: "Bootstrap" },
            { Icon: SiTailwindcss, color: "#38BDF8", label: "Tailwind CSS" },
            { Icon: SiJavascript, color: "#F7DF1E", label: "JavaScript" },
          ].map(({ Icon, color, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-200 rounded-lg p-2 
            shadow-md hover:shadow-[0_10px_20px_rgba(0,255,255,0.4)] transition-all duration-300"
            >
              <Icon size={36} color={color} className="mb-1" />
              <span className="text-black text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="my-6 w-full mx-auto max-h-4xl hy-auto ">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Outils et technologies
        </h3>
        <div className="bg-gray-900 rounded-lg border-[3px] border-zinc-300 min-h-[10rem] shadow-lg p-4 pb-6 ">
          <Carousel
            swipeable
            draggable
            showDots
            containerClass="pb-6" //hauteur des dots
            dotListClass="mt-6 flex justify-center"
            responsive={responsive}
            ssr
            infinite
            autoPlay
            autoPlaySpeed={2500}
            keyBoardControl
            customTransition="ease-in-out 0.7s"
            transitionDuration={700}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {[
              { Icon: FaReact, label: "React", color: "#61DAFB" },
              { Icon: TbBrandVite, label: "Vite", color: "#646CFF" },
              { Icon: FaReact, label: "React Native", color: "#2D2D2D" },
              { Icon: TbBrandNextjs, label: "Next.js", color: "#000000" },
              { Icon: SiRedux, label: "Redux", color: "#764ABC" },
              { Icon: FaNodeJs, label: "Node.js", color: "#539E43" },
              { Icon: SiExpress, label: "Express", color: "#808080" },
              { Icon: SiMongodb, label: "MongoDB", color: "#47A248" },
              { Icon: SiRender, label: "Render", color: "#000000" },
              { Icon: SiNetlify, label: "Netlify", color: "#00C7B7" },
              { Icon: IoIosGitMerge, label: "Git", color: "#F1502F" },
              { Icon: FaGithub, label: "GitHub", color: "#181717" },
            ].map(({ Icon, label, color }, idx) => (
              <div
                key={idx}
                className="text-center py-3 m-2 
                cursor-pointer select-none 
              bg-gray-200 rounded-lg 
                hover:shadow-[0_10px_20px_rgba(0,255,255,0.4)] 
                transition-all duration-300"
              >
                <Icon size={36} color={color} className="mx-auto mb-1" />
                <p className="text-black text-sm font-medium">{label}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Projets complets */}
      <section className="text-center  ">
        <p className="text-2xl font-bold mt-3">Projets Complets</p>
        <h3 className="text-2xl font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          3+
        </h3>
      </section>
      </section>

    </div>
  );
};

export default Skills;
