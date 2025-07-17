import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="bggradient w-full padding-x-lg pt-5 pb-6">
    <div relative z-10 px-6 md:px-12>
    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center text-[#fff] mb-8">
        Soft Skills
    </h1>
    </div>
    <div className="mx-auto grid-4-cols">
      {abilities.map(({ imgPath, title }) => (
        <div
          key={title}
          className="card-border rounded-xl p-4 flex flex-col gap-1"
        >
          <div className="size-10 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-black text-2xl font-semibold mt-2">{title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;