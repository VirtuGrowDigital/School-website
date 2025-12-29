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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">

        <h1 className="text-white text-3xl md:text-5xl 2xl:text-6xl font-semibold">
          Welcome to Our School
        </h1>

        <p className="text-white mt-2 md:text-lg">
          Shaping Futures With Excellence and Values
        </p>

        <div className="flex gap-4 mt-6">
          {/* APPLY NOW BUTTON */}
          <button
            onClick={onApplyClick}
            className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium"
          >
            Admissions Inquiry
          </button>

          <button className="bg-white text-black px-6 py-3 rounded-md font-medium">
            Visit the Admission Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
