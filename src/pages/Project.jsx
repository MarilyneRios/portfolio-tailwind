import { useState, useEffect, useRef } from "react";
import cahierDeRecettes from "../assets/cahierDeRecettes.png";
import astuces from "../assets/astucesdapprentissage.png";
import quiz from "../assets/quiz.png";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

// Liste des projets affichés dans le carrousel
const projects = [
  {
    id: 1,
    name: "Méthodes pédagogiques",
    technologies: "HTML/CSS/JS",
    comments:
      "Ce site vous guide dans la création de cartes mentales personnalisées et propose des méthodes de travail efficaces pour renforcer votre apprentissage.",
    image: astuces,
    site: "https://astucesdapprentissage.netlify.app/",
    github: "https://github.com/MarilyneRios/Astuces-D-Apprentissage",
  },
  {
    id: 2,
    name: "Cahier de recettes",
    technologies: "MERN Stack (VITE)",
    comments:
      "Cette application a été créée avec amour pour les passionnés de cuisine et tous ceux qui aiment partager leurs recettes.",
    image: cahierDeRecettes,
    site: "https://recettes-entre-amis.onrender.com/",
    github: "https://github.com/MarilyneRios/cahier-reccettes",
  },
  {
    id: 3,
    name: "Movies break Quiz",
    technologies: "Vite ReactJS",
    comments:
      "Testez votre culture ciné tout en découvrant un exercice d'entraînement frontend avec Vite et React.",
    image: quiz,
    site: "https://movies-quiz.netlify.app/",
    github: "https://github.com/MarilyneRios/moviesQuiz",
  },
];

const Project = () => {
  const [isHovered, setIsHovered] = useState(false); // Pour stopper la rotation auto au survol
  const [flippedCard, setFlippedCard] = useState(null); // ID de la carte retournée
  const [rotation, setRotation] = useState(0); // Angle actuel du carrousel
  const carouselInnerRef = useRef(null); // Référence à la div interne
  const intervalRef = useRef(null); // Référence à l’intervalle de rotation auto

  const angle = 360 / projects.length; // Angle entre chaque carte

  // --- Fonctions de navigation ---
  const prevCard = () => {
    // Sens antihoraire = on ajoute l’angle
    setRotation((prevRotation) => (prevRotation + angle) % 360);
  };

  const nextCard = () => {
    // Sens horaire = on soustrait l’angle
    setRotation((prevRotation) => (prevRotation - angle + 360) % 360);
  };


  // --- Rotation automatique (toujours sens antihoraire) ---
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        prevCard(); // Avance toujours en sens antihoraire
      }, 2000);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovered, angle]);


  // --- Fonction pour retourner une carte ---
const toggleFlip = (id) => {
  setFlippedCard((prev) => {
    if (prev === id) {
      return null; // la remettre droite
    } else {
         setTimeout(() => {
        setFlippedCard(null); // après "x" secondes → remettre droite
      }, 8000);
      return id;
    }
  });
};


  // --- Calcul de l'index courant pour les points de pagination ---
  const normalizedIndex =
    ((Math.round(rotation / angle) % projects.length) + projects.length) %
    projects.length;

  return (
    <div className="bg-gray-800 text-white py-20 min-h-screen flex flex-col justify-center items-center" id="project">
      <div className="bg-gray-900 text-white py-3 relative border-[3px] border-zinc-300 rounded-lg shadow-xl w-full max-w-4xl mx-auto px-6 min-h-[250px]">
        <h2 className="text-4xl font-bold text-center mt-6">My Projects</h2>

        {/* --- Carrousel --- */}
        <div
          className="relative w-full h-[500px] overflow-hidden flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Bouton gauche */}
          <button
            onClick={prevCard}
            className="
            absolute left-2 top-1/2 -translate-y-1/2 z-10
             bg-gray-700/70 text-white rounded-full 
             hover:bg-gradient-to-r from-green-400 to-blue-500 
             p-2"
          >
            <IoIosArrowDropleft size={32} />
          </button>

          {/* Bouton droit */}
          <button
            onClick={nextCard}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
             bg-gray-700/70 text-white rounded-full 
             hover:bg-gradient-to-r from-green-400 to-blue-500 
             p-2"
          >
            <IoIosArrowDropright size={32} />
          </button>

          {/* Structure du carrousel */}
          <div className="carousel-3d w-[370px] h-[330px] mx-auto">
            <div
              ref={carouselInnerRef}
              className="carousel-inner relative w-full h-full"
              style={{ transform: `rotateY(${rotation}deg)` }} // Pas de signe "-" ici pour le sens anti horaire
            >
              {projects.map((project, index) => {
                const itemAngle = index * angle; // Angle propre à chaque carte
                const isFlipped = flippedCard === project.id;
                return (
                  <div
                    key={project.id}
                    onClick={() => toggleFlip(project.id)}
                    className="carousel-item-3d absolute w-[350px] h-[270px] cursor-pointer left-1/2 top-1/2 transform-style-preserve-3d transition-transform duration-700 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotateY(${itemAngle}deg) translateZ(420px) translateY(-120px)`,
                    }}
                  >
                    {/* Face avant */}
                    <div
                      className="
                      absolute w-full h-full rounded-lg 
                      overflow-hidden backface-hidden 
                      transition-transform duration-700 ease-in-out
                      hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] 
                      active:translate-y-0 active:shadow-inner
                      "
                      style={{
                        transform: isFlipped
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute bottom-0 w-full 
                      bg-gradient-to-t from-black/100 to-transparent 
                      py-2 px-4 text-center text-base font-semibold"
                      >
                        {project.name}
                      </div>
                    </div>

                    {/* Face arrière */}
                    <div
                      className="
                      absolute w-full h-full rounded-lg border-2 border-gray-300 
                      text-center 
                      bg-gradient-to-br from-stone-200 to-gray-700 text-white p-4 
                      backface-hidden transition-transform duration-700 ease-in-out 
                       -translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] 
                      "
                      style={{
                        transform: isFlipped
                          ? "rotateY(0deg)"
                          : "rotateY(-180deg)",
                      }}
                    >
                      <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                      <h6 className="text-xs text-gray-200 mb-2">
                        {project.technologies}
                      </h6>
                      <p className="text-sm text-gray-50 mb-3">
                        {project.comments}
                      </p>
                      <div className="flex justify-center gap-3 mt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            bg-gray-800 px-4 py-1.5 rounded-full text-sm font-medium
                            transition-all duration-300 ease-in-out
                            transform hover:scale-105
                            hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
                            hover:ring-2 hover:ring-cyan-400/70 hover:ring-offset-2 hover:ring-offset-gray-900
                          "
                        >
                          GitHub
                        </a>

                        <a
                          href={project.site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                           bg-gray-800 px-4 py-1.5 rounded-full text-sm font-medium
                            transition-all duration-300 ease-in-out
                            transform hover:scale-105
                            hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]
                            hover:ring-2 hover:ring-cyan-400/70 hover:ring-offset-2 hover:ring-offset-gray-900
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

        {/* --- Pagination (petits points) --- */}
        <div className="mt-5 flex justify-center gap-2">
          {projects.map((_, idx) => (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full ${
                idx === normalizedIndex ? "bg-sky-600" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;