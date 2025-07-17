import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  // const rydeRef = useRef(null);
  // const libraryRef = useRef(null);
  // const ycDirectoryRef = useRef(null);

  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );
    });
    
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8">
             My Work Showcase
            </h1>
        </div>

        <div className="showcaselayout">
          
          <div className="project-list-wrapper overflow-hidden">
            {/* Home Energy Management System */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/hems.jpg"
                  alt="HEMS"
                />
              </div>
              <h2> Home Energy Management System </h2>
              <h4>
                 Final year research project with AI and IoT developed using Python and frontend with reactjs
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Home-Energy-Management-System-Com-Web.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link  
              </a>
            </div>

            {/* Vehicle Registration */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img 
                  src="/images/projects/vehiclereg.png" 
                  alt="Vehicle Registration"
                />
              </div>
              <h2>Vehicle Registration</h2>
              <h4>
                Register vehicles for pay the fine, login and registration and People can pay fine after create account and fill the data. 
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Mobile-Application-with-full-crud-Opparation.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link  
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Pet Clinic and Accessory Shop Management */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/petshop.png"
                  alt="Pet shop"
                />
              </div>
              <h2> Pet Care and Pet Shop Management </h2>
              <h4>
                Channel patients and sell Accessory shop & admin control system Using MERN Stack.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Pet-Care-and-Pet-Accessories-Shopping-System.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* Knowledge Hub  */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img 
                  src="/images/projects/books.jpg" 
                  alt="Book Library Application" 
                />
              </div>
              <h2>Knowledge Hub</h2>
              <h4> 
                Share educational notes and materials through the application. Kotlin based application specially designs to help the students in pandemic situation. login data and soft copies of the uploaded documents.  
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Book-Library-Application.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Voyage LK */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/voyagelk.jpg"
                  alt="Voyage LK"
                />
              </div>
              <h2>Voyage LK</h2>
              <h4>
                Kotlin based mobile application project to help traveler to locate the places and find the nearest hotel and allow hotel owners to promote their hotels. 
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/VoyageLK-Mobile-Application" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* Responsive Portfolio Website Template */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img 
                  src="/images/projects/miniport.png" 
                  alt="Responsive Portfolio Website Template"
                />
              </div>
              <h2>Responsive Portfolio Template</h2>
              <h4>
                Modern and responsive web page desigusing HTML, CSS, and JavaScript for showcasing personal and professional achievements, with a clean and professional layout.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Mini_Responsive_Portfolio_Template.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                 GitHub Link 
              </a>
            </div>
          </div>

          
          {/* Eco Clean */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/ecoclean.jpg"
                  alt=""
                />
              </div>
              <h2>Eco Clean</h2>
              <h4>
                Garbage management mobile application. App allows collector to indicate filled bins, locate garbage bins, and track the status of their requests.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Eco-Clean-MobileApp" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* Starfield Animation */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img 
                  src="/images/projects/Starfieldani.png" 
                  alt="" 
                />
              </div>
              <h2>
                Starfield Animation
              </h2>
              <h4>
                This project showcases dynamic motion graphics using Three.js in a React environment. It consists of two interactive visual effects
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Hovering-Stars" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                 GitHub Link 
              </a>
            </div>
          </div>
        </div>

        <div className="showcaselayout mt-4">
          {/* Mushroom Page */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/mushroom.png"
                  alt=""
                />
              </div>
              <h2>Mushroom Home Page </h2>
              <h4>
                Designed using HTML and CSS. The page showcases a clean and modern layouts. 
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Home-Page-With-Top-Nav" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link  
              </a>
            </div>

            {/* Lover Store */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img src="/images/projects/lovers.png" alt="Lover Store" />
              </div>
              <h2>Lover Store</h2>
              <h4>Simple Frontend design from html css and JS </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Lovers-Store" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link 
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Animated Web Clock */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/clock.png"
                  alt="Animated Web Clock"
                />
              </div>
              <h2>Animated Web Clock</h2>
              <h4>
                Simple and elegant design clock for web development biginers.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Digital_Clock_-" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* Business Frontend */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img src="/images/projects/connecto.jpg" alt="Dessertshop" />
              </div>
              <h2>Business Frontend</h2>
              <h4>Simple Frontend design from html css </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Assignment-2" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* gradiant border cards */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/bordercards.png"
                  alt="Online Fashion Store"
                />
              </div>
              <h2>Gradiant Border Cards</h2>
              <h4>
                Gradient cards used for web development. Developed using HTML CSS JS PHP.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Gradient_Border_Cards" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* The Desert Shop */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img src="/images/projects/dessertshop.png" alt="Dessertshop" />
              </div>
              <h2>The Desert Shop</h2>
              <h4>Simple Frontend design from html css </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Desert-Shop" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>

          
          {/* Online Fashion Store */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/onlfashion.jpg"
                  alt="Online Fashion Store"
                />
              </div>
              <h2>Online Fashion Store</h2>
              <h4>
                Web application with full CRUD using HTML CSS JS PHP.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Online-Fashion-Store.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* Java Script Calculator */}
            <div className="project" ref={addToRefs}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/cal.png" 
                alt="YC Directory App" 
              />
              </div>
              <h2>The Javascript Calculator</h2>
              <h4>Simple calculator from javascript. Build as a javascript beginner</h4>
              <a 
                href="https://github.com/PrathibhaSithu/JavaScript-Calculator.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
