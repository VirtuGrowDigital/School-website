import Navbar from "./Navbar";

const HeroNavbar = ({ onApplyClick }) => {
  return (
    <div className="absolute top-4 md:top-6 right-4 md:right-6 z-30">
      <Navbar onApplyClick={onApplyClick} />
    </div>
  );
};

export default HeroNavbar;
