import Creative from "/images/hero/creative.svg";
import Develop from "/images/hero/develop.svg";
import Designs from "/images/hero/designs.svg";
import Code from "/images/hero/code.svg";
import Idea from "/images/hero/ideas.svg";
import Communication from "/images/communication.png";
import Leadership from "/images/leadership.png";
import ProblemSolve from "/images/problemsolve.png";
import Quality from "/images/quality.png";
import TimeManagement from "/images/timemanagement.png";
import TeamWork from "/images/teamwork.png";
import Creativity from "/images/creative.png";
import html from "/images/logos/html.png";
import react from "/images/logos/react.png";
import vuejs from "/images/logos/vuejs.png";
import css from "/images/logos/css.png";
import tailwind from "/images/logos/TailwindCSS.png";
import js from "/images/logos/js.png";
import three from "/images/logos/three.png";
import selenium from "/images/logos/Selenium.png";
import postman from "/images/logos/Postman.png";
import flutter from "/images/logos/Flutter.png";
import dart from "/images/logos/Dart.png";
import kotlin from "/images/logos/Kotlin.png";
import java from "/images/logos/Java.png";
import firebase from "/images/logos/Firebase.png";
import figma from "/images/logos/Figma.png";
import canva from "/images/logos/Canva.png";
import github from "/images/logos/github.png";
import gitlab from "/images/logos/GitLab.png";
import illustrator from "/images/logos/AI.png";
import vscode from "/images/logos/vscode.png";
import androidStudio from "/images/logos/AndroidStudio.png";
import JobImg11 from "/images/webdev.png";
import JobImg12 from "/images/Frontend Developer.png";
import JobImage01 from "/images/mobileapp.png";
import JobImage02 from "/images/mobileappdev.png";
import githublink from "/images/socialicons/github.png";
import linkedin from "/images/socialicons/linkedin.png";
import googledev from "/images/socialicons/googledev.png";
import instagram from "/images/socialicons/instagram.png";
import facebook from "/images/socialicons/facebook.png";
import university from "/images/university.png";
import diploma from "/images/diploma.png";
import highschool from "/images/highschool.png";



// import from ;
const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Contacts",
    link: "#contacts",
  },
];

const words = [
  { text: "Creative", imgPath: Creative },
  { text: "Develop", imgPath: Develop },
  { text: "Designs", imgPath: Designs },
  { text: "Code", imgPath: Code },
  { text: "Ideas", imgPath: Idea },
  { text: "Testing", imgPath: Idea },
  { text: "Designs", imgPath: Designs },
  { text: "Code", imgPath: Code },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Web Projects" },
  { value: 16, suffix: "+", label: "Mobile App Projects" },
  { value: 30, suffix: "", label: "UI / UX Projects" },
];

const abilities = [
  {
    imgPath: Communication,
    title: "Communication",
  },
  {
    imgPath: Leadership,
    title: "Leadership",
  },
  {
    imgPath: ProblemSolve,
    title: "Problem Solving",
  },
  {
    imgPath: Quality,
    title: "Quality Focus",
  },
  {
    imgPath: TimeManagement,
    title: "Time Management",
  },
  {
    imgPath: TeamWork,
    title: "Team Work",
  },
  {
    imgPath: Creativity,
    title: "Creative",
  },
];

const techStackImgs = [
  { 
    name: "HTML", 
    imgPath: html 
  },
  { 
    name: "React JS", 
    imgPath: react 
  },
  { 
    name: "Vue JS", 
    imgPath: vuejs 
  },
  { 
    name: "CSS", 
    imgPath: css 
  },
  { 
    name: "Tailwind CSS", 
    imgPath: tailwind 
  },
  { 
    name: "JavaScript", 
    imgPath: js 
  },
  { 
    name: "Three JS", 
    imgPath: three 
  },
  { 
    name: "Selenium", 
    imgPath: selenium 
  },
  { 
    name: "Postman", 
    imgPath: postman 
  },
  { 
    name: "Flutter", 
    imgPath: flutter 
  },
  { 
    name: "Dart", 
    imgPath: dart 
  },
  { 
    name: "Kotlin", 
    imgPath: kotlin 
  },
  { 
    name: "Java Mobile", 
    imgPath: java 
  },
  { 
    name: "Firebase Database", 
    imgPath: firebase 
  },
  { 
    name: "Figma", 
    imgPath: figma 
  },
  { 
    name: "Canva", 
    imgPath: canva 
  },
  { 
    name: "GitHub", 
    imgPath: github 
  },
  { 
    name: "GitLab", 
    imgPath: gitlab 
  },
  { 
    name: "Adobe Illustrator", 
    imgPath: illustrator 
  },
  { 
    name: "VsCode", 
    imgPath: vscode 
  },
  { 
    name: "Android Studio", 
    imgPath: androidStudio 
  },
];

const expCards = [
  {
    description: "ITMD Ministry of finance Sri Lanka, worked on designing and developing user-friendly web interfaces for internal government portals in a structured government IT environment.",
    imgPath: JobImg11,
    logoPath: JobImg12,
    title: "Frontend Developer",
    date: "Auguest 2024 - Present",
    responsibilities: [
      "Developed front-end interfaces using Vue.js, HTML, CSS, and JavaScript.",
      "Designed UI/UX wireframes and prototypes using Figma.",
      "Conducted manual testing of developed systems.",
      "Optimized web applications for maximum speed and scalability.",
      "Collaborated with backend developers to improve accessibility, responsiveness, and performance across multi-department applications.",
      "Tested APIs using Postman to ensure seamless integration and functionality.",
    ],
  },
  {
    description: "Jacklup Solutions, work as a mobile app developer, focusing on creating user-friendly and efficient mobile applications for various clients.",
    imgPath: JobImage01,
    logoPath: JobImage02,
    title: "Mobile Application Developer",
    date: "February 2024 - July 2024",
    responsibilities: [
      "Developed cross-platform mobile applications based on user requirements and product goals. ",
      "Designed intuitive and responsive mobile UI/UX using Figma, ensuring seamless user experience.",
      "Conducted testing and debugging to ensure app stability and performance across devices.",
      "Collaborated with product manager and other developers to refine features and user flows.",
    ],
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: githublink,
    link: "https://github.com/PrathibhaSithu",
  },
  {
    name: "linkedin",
    imgPath: linkedin,
    link: "https://www.linkedin.com/in/prathisithumini",
  },
  {
    name: "google dev",
    imgPath: googledev,
    link: "https://g.dev/prathibhasithumini_dev",
  },
  {
    name: "instagram",
    imgPath: instagram,
    link: "https://www.instagram.com/prathibhasithumini/",
  },
  {
    name: "facebook",
    imgPath: facebook,
    link: "https://www.facebook.com/PrathibhaSithumini",
  },
];

const education = [
  {
    icon: university,
    title: "Bachelor's Degree",
    description: "B.Sc. in Information Technology, SLIIT University, 2025",
  },
  {
    icon: diploma,
    title: "Diploma",
    description: "Level 5 Diploma in ICT, VTA, 2022",
  },
  {
    icon: highschool,
    title: "School",
    description: "St. Joseph's Girls Collage, Engineering Technology, 2019",
  },
];



export {
  words,
  abilities,
  counterItems,
  expCards,
  socialImgs,
  techStackImgs,
  navLinks,
  education,
};
