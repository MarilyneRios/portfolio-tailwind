import { SiNetlify, SiRedux, SiMongodb, SiMongoose, SiExpress, SiTailwindcss, SiRender, SiJavascript } from "react-icons/si";
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { TbBrandNextjs, TbBrandVite } from "react-icons/tb";
import { IoIosGitMerge } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 4 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 3, slidesToSlide: 3 },
    mobile: { breakpoint: { max: 767, min: 0 }, items: 2, slidesToSlide: 2 },
  };

  return (
    <div className="bg-sky-950 text-white py-10 min-h-screen" id="skills">
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-4xl font-extrabold text-center p-8 my-8">
          Mes compétences
        </h2>

        {/* Langages */}
        <section>
          <h3 className="text-2xl font-semibold p-8 my-8 text-center">
            Langages de programmation
          </h3>
          <div className="bg-gray-100 mx-auto max-w-xl p-6 rounded-lg flex justify-around flex-wrap gap-6 shadow-lg">
            <FaHtml5 size={60} color="#F06529" aria-label="HTML5" className="hover:scale-110 transition-transform" />
            <FaCss3Alt size={60} color="rgba(4, 93, 218, 0.8)" aria-label="CSS3" className="hover:scale-110 transition-transform" />
            <FaBootstrap size={60} color="rgba(102, 16, 242, 0.8)" aria-label="Bootstrap" className="hover:scale-110 transition-transform" />
            <SiTailwindcss size={60} color="rgba(0,116,199, 0.8)" aria-label="Tailwind CSS" className="hover:scale-110 transition-transform" />
            <SiJavascript size={60} color="rgba(204, 204, 0, 0.9)" aria-label="JavaScript" className="hover:scale-110 transition-transform" />
          </div>
        </section>

        {/* Technologies */}
        <section>
          <h3 className="text-2xl font-semibold p-8 my-8 text-center">
            Outils et technologies
          </h3>
          <div className="bg-gray-100 mx-auto max-w-5xl p-6 rounded-lg shadow-lg">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2500}
              keyBoardControl={true}
              customTransition="ease-in-out 0.7s"
              transitionDuration={700}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-10-px"
              aria-label="Carousel des technologies"
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
                  className="text-center p-2 cursor-pointer select-none"
                  tabIndex={0}
                  aria-label={label}
                  role="img"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.click();
                  }}
                >
                  <Icon size={50} color={color} className="mx-auto mb-2 hover:scale-110 transition-transform" />
                  <p className="text-black font-semibold text-lg">{label}</p>
                </div>
              ))}
            </Carousel>
          </div>
        </section>

        {/* Projets complets */}
        <section className="text-center p-8 my-8">
          <p className="text-2xl font-bold mb-2">Projets Complets</p>
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            3+
          </h3>
        </section>
      </div>
    </div>
  );
};

export default Skills;
