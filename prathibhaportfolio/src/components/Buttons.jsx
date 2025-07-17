import downArrow from "/images/arrow-down.svg";
const Buttons = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); 

        const target = document.getElementById("about");

        if (target && id) {
          const offset = window.innerHeight * 0.15; 

          
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={downArrow} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Buttons;
