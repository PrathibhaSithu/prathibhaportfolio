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


// import from "";
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
    imgPath: "/images/webdev.png",
    logoPath: "/images/Frontend Developer.png",
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
    imgPath: "/images/mobileapp.png",
    logoPath: "/images/mobileappdev.png",
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
    imgPath: "/images/socialicons/github.png",
    link: "https://github.com/PrathibhaSithu",
  },
  {
    name: "linkedin",
    imgPath: "/images/socialicons/linkedin.png",
    link: "https://www.linkedin.com/in/prathisithumini",
  },
  {
    name: "google dev",
    imgPath: "/images/socialicons/googledev.png",
    link: "https://g.dev/prathibhasithumini_dev",
  },
  {
    name: "instagram",
    imgPath: "/images/socialicons/instagram.png",
    link: "https://www.instagram.com/prathibhasithumini/",
  },
  {
    name: "facebook",
    imgPath: "/images/socialicons/facebook.png",
    link: "https://www.facebook.com/PrathibhaSithumini",
  },
];

// http://192.168.231.50/

const education = [
  {
    icon: "/images/university.png", 
    title: "Bachelor's Degree",
    description: "B.Sc. in Computer Science, XYZ University, 2021",
  },
  {
    icon: "/images/diploma.png",
    title: "Master's Degree",
    description: "M.Sc. in Software Engineering, ABC Institute, 2023",
  },
  {
    icon: "/images/highschool.png",
    title: "High School",
    description: "ABC High School, Science Major, 2017",
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
