import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_APP_EMAILJS_USER_ID,
        }
      )
      .then(
        (result) => {
          console.log("Message envoyé !");
          toast.success("Message envoyé !");
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Erreur lors de l'envoi.");
        }
      );
  };

  return (
    <div className="bg-sky-950 text-white py-20 min-h-screen flex flex-col justify-center items-center" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Me contacter</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Discutons</h3>
            <p>Disponible pour discuter de projets de développement web ou d'opportunités de collaboration. N'hésitez pas à me contacter.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2' />
              <a href="mailto:rios.marilyne.dev@gmail.com" className='hover:underline'>
                rios.marilyne@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2' />
              <span>07 81 14 19 69</span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
              <span>Bourg Saint Andéol, Ardèche, France</span>
            </div>
          </div>

          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Votre nom</label>
                <input
                  type="text"
                  name="user_name"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Entrer votre nom'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  name="user_email"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Entrer votre Email'
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message"
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Entrer votre Message'
                  required
                />
              </div>
              <button
                type="submit"
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full 
                hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,255,255,255.3)] active:translate-y-0 active:shadow-inner'
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
