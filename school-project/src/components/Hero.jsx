import heroImg from "../assets/Subtract.png";
import HeroNavbar from "./HeroNavbar";

const Hero = ({ onApplyClick }) => {
  return (
    <section className="relative w-full">

      <img
        src={heroImg}
        alt="School"
        className="w-full h-auto object-cover rounded-2xl"
      />

      {/* HERO NAVBAR */}
      <HeroNavbar onApplyClick={onApplyClick} />

      {/* HERO CONTENT */}
      <div className="
  absolute inset-0 
  flex flex-col items-center justify-center 
  text-center z-20 
  px-4
">

  <h1 className="
    text-white font-semibold
    text-xl sm:text-2xl md:text-5xl 2xl:text-6xl
    leading-tight
  ">
    Welcome to Our School
  </h1>

  <p className="
    text-white 
    mt-1 sm:mt-2
    text-xs sm:text-sm md:text-lg
  ">
    Shaping Futures With Excellence and Values
  </p>

  <div className="
    flex flex-col sm:flex-row
    gap-2 sm:gap-4
    mt-3 sm:mt-6
  ">
    {/* APPLY NOW BUTTON */}
    <button
      onClick={onApplyClick}
      className="
        bg-yellow-400 text-black 
        px-4 py-2 sm:px-6 sm:py-3
        rounded-md font-medium
        text-xs sm:text-sm md:text-base
      "
    >
      Admissions Inquiry
    </button>

    <button
      className="
        bg-white text-black 
        px-4 py-2 sm:px-6 sm:py-3
        rounded-md font-medium
        text-xs sm:text-sm md:text-base
      "
    >
      Visit the Admission Page
    </button>
  </div>
</div>

    </section>
  );
};

export default Hero;
