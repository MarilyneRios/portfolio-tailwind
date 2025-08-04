import React, { useState } from "react";
import ContactBtn from "./ContactBtn";

const Navbar = () => {
  // Utilisez l'état pour contrôler l'affichage du menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-stone-900 fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Bouton du menu mobile */}
            <button
              onClick={toggleMobileMenu} // Ajoutez l'événement de clic
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto rounded-full border border-white-100"
                src="logoDevGreen.png"
                alt="Logo Marilyne Rios"
              />
              <span className="ml-3 text-2xl font-bold text-white">Rios Marilyne</span>
            </div>

            {/* Liens de navigation */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#home" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="#about" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  About
                </a>
                <a href="#skills" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Compétences
                </a>
                <a href="#project" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                  Projets
                </a>
              </div>
            </div>
          </div>
          {/* Btn contacter en fin de div */}
          <ContactBtn/>
          <div>

          </div>
        </div>
      </div>

      {/* Menu mobile : affichez-le uniquement si `isMobileMenuOpen` est vrai */}
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#home" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">
              Home
            </a>
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              About
            </a>
            <a href="#skills" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Compétences
            </a>
            <a href="#project" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Projets
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
