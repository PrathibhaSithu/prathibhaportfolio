import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Buttons from "../components/Buttons";
import { words } from "../constants";
import Starfield from "../components/Starfield";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, opacity: 1, 
        stagger: 0.2, 
        duration: 1, 
        ease: "power2.inOut" 
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="../assets/images/bg.png" alt="bg dots" />
      </div>

      <div className="hero-layout">
        {/* LEFT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Hello 👋 
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-[#FFF5DE]"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Prathibha Sithumini</h1>
              <h3 className="text-3xl text-[#2C2C2C]">
                Frontend Developer
                <br /> 
                QA Engineer
                <br />
                Mobile Developer                
              </h3>
            </div>

            <Buttons
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT Section */}
        <figure>
          <div className="hero-3d-layout">
            <Starfield/>
            <SocialLinks/>
          </div>
        </figure>
      </div>

    </section>
  );
};

export default Hero;