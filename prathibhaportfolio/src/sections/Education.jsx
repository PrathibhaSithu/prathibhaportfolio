import TitleHeader from "../components/TitleHeader";
import { education } from "../constants";

const Education = () => {
  return (
    <div id="education" className="py-12 px-4 bggradient ">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="My Academic Journey"
          sub="🎓 Education Milestones ✨ "
        />
       
      <div className="max-w-6xl mx-auto text-center md:mt-10 mt-12">
        
        <div className="grid md:grid-cols-3 gap-6">
          {education.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-pink-300 bg-yellow-100 mb-4">
                <img src={icon} alt={title} className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
      </div> 
    </div>
  );
};

export default Education;
