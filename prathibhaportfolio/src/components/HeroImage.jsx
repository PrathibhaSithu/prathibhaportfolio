
import DP from "/images/hero/me.jpg";

const HeroImage = () => {
  return (
    <div className="relative top-1/4  flex flex-col items-center justify-center ">
      <img
        src={DP}
        alt="Prathibha Sithumini"
        className="md:w-[300px] w-[200px] rounded-full shadow-lg"
      />
    </div>
  );
};

export default HeroImage;
