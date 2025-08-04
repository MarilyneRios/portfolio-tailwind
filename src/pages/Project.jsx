import { useState, useEffect, useRef } from "react";

import cahierDeRecettes from "../assets/cahierDeRecettes.png";
import astuces from "../assets/astucesdapprentissage.png";
import quiz from "../assets/quiz.png";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const projects = [
  {
    id: 1,
    name: "Méthodes pédagogiques",
    technologies: "HTML/CSS/JS",
    comments:"Ce site vous guide dans la création de cartes mentales personnalisées et propose des méthodes de travail efficaces pour renforcer votre apprentissage.",
    image: astuces,
    site: "https://astucesdapprentissage.netlify.app/",
    github: "https://github.com/MarilyneRios/Astuces-D-Apprentissage",
  },
  {
    id: 2,
    name: "Cahier de recettes",
    technologies: "MERN Stack (VITE)",
    comments:"Cette application a été créée avec amour pour les passionnés de cuisine et tous ceux qui aiment partager leurs recettes. L'idée est de partager des recettes simplement comme cela se faisait autrefois.",
    image: cahierDeRecettes,
    site: "https://recettes-entre-amis.onrender.com/",
    github: "https://github.com/MarilyneRios/cahier-reccettes",
  },
  {
    id: 3,
    name: "Movies break Quiz",
    technologies: "Vite ReactJS",
    comments:"Testez votre culture ciné tout en découvrant un exercice d'entrainement frontend avec Vite et React. Bienvenue sur Movies Break Quiz's Marilyne",
    image: quiz,
    site: "https://movies-quiz.netlify.app/",
    github: "https://github.com/MarilyneRios/moviesQuiz",
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [manualInteraction, setManualInteraction] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const flipTimeoutRef = useRef(null);

  const angle = 360 / projects.length;

  // Rotation auto
  useEffect(() => {
    if (!isHovered && !manualInteraction) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, manualInteraction]);

  // Retour automatique d'une carte après 5 secondes
  useEffect(() => {
    if (flippedCard !== null) {
      clearTimeout(flipTimeoutRef.current);
      flipTimeoutRef.current = setTimeout(() => {
        setFlippedCard(null);
      }, 5000);
    }
    return () => clearTimeout(flipTimeoutRef.current);
  }, [flippedCard]);

  const resetManualInteraction = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setManualInteraction(false);
    }, 5000);
  };

  const handleNext = () => {
    setManualInteraction(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    resetManualInteraction();
  };

  const handlePrev = () => {
    setManualInteraction(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    resetManualInteraction();
  };

  const toggleFlip = (id) => {
    setManualInteraction(true);
    setFlippedCard((prev) => (prev === id ? null : id));
    resetManualInteraction();
  };

  return (
    <div className="bg-gray-900 text-white py-16 relative" id="project">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <div
        className="relative w-full h-[500px] carousel-3d mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Flèches */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 
          hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] active:shadow-inner p-2 ml-10 rounded-full"
        >
          <IoIosArrowDropleft size={32} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 
          hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] active:shadow-inner p-2 mr-10 rounded-full"
        >
          <IoIosArrowDropright size={32} />
        </button>

        {/* Carrousel rotatif */}
        <div
          className="relative w-full h-full mx-auto perspective-1000 preserve-3d transition-transform duration-700"
          style={{ transform: `rotateY(-${currentIndex * angle}deg)` }}
        >
          {projects.map((project, index) => {
            const itemAngle = index * angle;
            const isFlipped = flippedCard === project.id;

            return (
              <div
                key={project.id}
                onClick={() => toggleFlip(project.id)}
                className="carousel-item-3d w-[400px] h-[300px] cursor-pointer absolute left-1/2 top-1/2 transform-style-preserve-3d transition-transform duration-700"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(600px) translateX(-50%) translateY(-50%)`,
                }}
              >
                {/* Face avant */}
                <div
                  className="absolute w-full h-full rounded-lg 
                  overflow-hidden backface-hidden transition-transform duration-700
-translate-y-1 shadow-[0_10px_20px_rgba(0,255,255,255.3)] active:translate-y-0 active:shadow-inner                  "
                  style={{
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Face arrière */}
                <div
                  className="absolute w-full h-full rounded-lg  
                    border-2 border-stone-200
                    text-center
                    hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] active:translate-y-0 active:shadow-inner
                    bg-gradient-to-br from-stone-200 to-gray-700 text-white p-4
                    backface-hidden transition-transform duration-700"
                  style={{
                    transform: isFlipped ? "rotateY(0deg)" : "rotateY(-180deg)",
                  }}
                >
                  <h3 className="text-xl font-bold mb-5">{project.name}</h3>
                  <h6 className="text-m text-gray-200  ">{project.technologies}</h6>
                  <p className="text-sm text-gray-200 p-5">{project.comments}</p>
                  <div className="flex justify-center gap-4 mt-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 px-4 py-2 rounded-full text-sm
                       hover:scale-105 transition-transform hover:-translate-y-1
                       hover:shadow-[0_10px_20px_rgba(255,255,255,255.3)]
                       "
                    >
                      GitHub
                    </a>
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 px-4 py-2 rounded-full text-sm 
                      hover:scale-105 transition-transform hover:-translate-y-1 
                      hover:shadow-[0_10px_20px_rgba(255,255,255,255.3)]
                      "
                    >
                      Site
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
