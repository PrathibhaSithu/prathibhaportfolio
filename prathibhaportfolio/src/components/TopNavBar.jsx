import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const TopNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Prathibha Sithumini
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="/prathibhaportfolio/public/docs/PrathibhaSithuminiCV.pdf" download ="PrathibhaSithumini'sCV.pdf" className="download-btn group">
          <div className="inner">
            <span>Download CV</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default TopNavBar;
