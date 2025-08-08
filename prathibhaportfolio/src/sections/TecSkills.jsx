import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../constants";
import Starfield from "../components/Starfield";

const TecSkills = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.inOut", 
        stagger: 0.2, 
        scrollTrigger: {
          trigger: "#skills", 
          start: "top center", 
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding mb-4 bggradient">
      <Starfield/>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🏅Technical Skills 🎈 "
        />
        <div className="tech-grid">
          {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="tec skills" />
                </div>
                <div className="absolute inset-0 bg-[#8c715a3c] bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TecSkills;
