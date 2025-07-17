import { socialImgs } from "../constants";

const ContactMe = () => {
  

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-8 gap-6">
        {socialImgs.map(({ imgPath, name }) => (
          <div
            
            className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-[#8C715A] rounded-full mb-4">
              <img src={imgPath} alt={name} className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-1">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactMe;

