
import DP from "/images/hero/me.jpg";

const HeroImage = () => {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4">
      <img
        src={DP}
        alt="Prathibha Sithumini"
        className="md:w-[300px] w-[200px] rounded-full shadow-lg"
      />
    </div>
  );
};

export default HeroImage;
