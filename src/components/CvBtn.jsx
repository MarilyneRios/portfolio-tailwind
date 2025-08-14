import cvFile from "../assets/CV_Rios_Marilyne.pdf";

const CvBtn = () => {
  return (
    <div>
      <a
        href={cvFile}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-white font-semibold 
          text-1xl transform transition-transform duration-300 hover:scale-110 px-6 py-2 rounded-full
          hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] active:translate-y-0 active:shadow-inner"
        >
          CV
        </button>
      </a>
    </div>
  );
};

export default CvBtn;
