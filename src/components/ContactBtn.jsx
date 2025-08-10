const ContactBtn = () => {
  return (
    <div id="ContactBtn" className="flex justify-center md:justify-end">
      <a href="#contact">
        <button 
        className="
        bg-gradient-to-r from-green-400 to-blue-500 text-yellow-50 px-6 py-2 rounded-full 
        transition-transform duration-300 hover:scale-110 text-1xl 
        hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] active:translate-y-0 active:shadow-inner
        "
        >
          Me contacter
        </button>
      </a>
    </div>
  );
};

export default ContactBtn;
