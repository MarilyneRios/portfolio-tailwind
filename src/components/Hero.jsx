import ContactBtn from "./ContactBtn";
import CvBtn from "./CvBtn";
import { useState, useEffect } from "react";



const Hero = () => {
  // états pour chaque partie du texte
  const [text1, setText1] = useState(""); // "Je m'appelle"
  const [text2, setText2] = useState(""); // "Marilyne Rios"
  const [text3, setText3] = useState(""); // ", je suis une développeuse Full-Stack."
  const [text4, setText4] = useState(""); // "Faciliter la vie avec des applications web et mobile modernes et responsives."

  // Texte complet à afficher lettre par lettre
  const firstPart = "Je m'appelle ";
  const namePart = "Marilyne Rios";
  const thirdPart = ", je suis une développeuse Full-Stack.";
  const fourthPart =
    "Faciliter la vie avec des applications web et mobile modernes et responsives.";

  const [partIndex, setPartIndex] = useState(0); // Indice de la partie à animer
  const delta = 100; // Vitesse de l'animation
  const period = 500; // Répétition de l'animation

  // logique de l'animation machine à écrire
  useEffect(() => {
    let timeout = null;

    const animateText = () => {
      if (partIndex === 0) {
        // Animation de la première partie ("Je m'appelle")
        setText1(firstPart.substring(0, text1.length + 1));
        if (text1 === firstPart) {
          setPartIndex(1); // Passer à la partie suivante
        }
      } else if (partIndex === 1) {
        // Animation de la deuxième partie ("Marilyne Rios")
        setText2(namePart.substring(0, text2.length + 1));
        if (text2 === namePart) {
          setPartIndex(2); // Passer à la partie suivante
        }
      } else if (partIndex === 2) {
        // Animation de la troisième partie (", je suis une développeuse Full-Stack.")
        setText3(thirdPart.substring(0, text3.length + 1));
        if (text3 === thirdPart) {
          setPartIndex(3); // Passer à la partie suivante
        }
      } else if (partIndex === 3) {
        // Animation de la quatrième partie (", je suis une développeuse Full-Stack.")
        setText4(fourthPart.substring(0, text4.length + 1));
        if (text4 === fourthPart) {
          clearTimeout(timeout); // Stop l'animation lorsque tout est fini
        }
      }
    };

    // Appeler animateText à chaque delta millisecondes
    timeout = setTimeout(() => {
      animateText();
    }, delta);

    return () => clearTimeout(timeout); // Nettoyage lors du démontage
  }, [text1, text2, text3, text4, partIndex, delta]);

  return (
    <div
      className="bg-sky-950 text-white text-center py-16 min-h-screen flex flex-col justify-center items-center"
      id="home"
    >
      {/*

       */}
     

      <h1 className="text-4xl font-bold">
        {/* Affiche le texte animé : "Je m'appelle" */}
        <span className="wrap text-white">{text1}</span>
        {/* Affiche le texte animé : "Marilyne Rios" */}
        <span className="wrap text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
          {text2}
        </span>
        {/* Affiche le texte animé: ", je suis une développeuse Full-Stack." */}
        <span className="wrap text-white">{text3}</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        {/* Affiche la quatrième partie animée */}
        <span className="wrap">{text4}</span>
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <ContactBtn />
        <CvBtn />
      </div>
    </div>
  );
};

export default Hero;
