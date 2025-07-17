import { socialImgs } from "../constants";

const SocialLinks = () => {
  return (
    <div className="bg-[#8C715A] fixed top-1/2 right-0 -translate-y-1/2 h-140 w-14 z-50 flex flex-col justify-center items-center py-4 space-y-4 rounded-4xl mr-5">

      {socialImgs.map(({ name, imgPath, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
        >
          <img
            src={imgPath}
            alt={name}
            className="w-10 h-10 rounded-full bg-white/20 p-1"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
