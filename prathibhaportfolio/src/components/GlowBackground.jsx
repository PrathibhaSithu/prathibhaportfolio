
const GlowBackground = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[700px] h-[350px] rounded-full bg-gradient-to-r from-purple-700 via-blue-500 to-purple-700 blur-2xl opacity-60 rotate-180"></div>
        <div className="w-[700px] h-[350px] rounded-full border-t-[10px] border-purple-400 opacity-30 absolute top-0"></div>
      </div>
    </div>
  );
};

export default GlowBackground;
