import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import {illustration, skillsSection} from "../../portfolio";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
// import codingPerson from "../../assets/lottie/Cloud robotics abstract.json";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          {/* <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div> */}
          <div className="skills-image-div" style={{ position: "relative" }}>
            {/* Your main image */}
            <img
              alt="My Portrait"
              src={require("../../assets/images/mypic.jpeg")}  // your actual image path
              className="main-skill-image"
              style={{
                width: "60%",
                borderRadius: "20px",
                objectFit: "cover"
              }}
            />

            {/* Small animation overlay in the corner */}
            {/* <div
              className="corner-animation"
              style={{
                position: "absolute",
                top: "0px",         // adjust to move it vertically
                right: "1px",       // adjust to move it horizontally
                width: "80px",       // control size of the animation
                height: "80px"
              }}
            >
              <DisplayLottie animationData={codingPerson} />
            </div> */}
          </div>

        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
