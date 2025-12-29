import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onApplyClick }) => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `cursor-pointer transition ${
      isActive ? "text-yellow-600" : "hover:text-yellow-600 text-gray-700"
    }`;

  return (
    <nav className="rounded-md px-2 py-1 md:px-8 md:py-2 lg:px-10 lg:py-3 xl:px-10 xl:py-3">
      <div className="flex items-center">

        {/* DESKTOP MENU */}
        <ul
          className="
            hidden md:flex mr-auto
            gap-4 lg:gap-8 xl:gap-12 2xl:gap-16
            font-light
            sm:text-[16px]
            text-[18px]
            lg:text-[20px]
            xl:text-[20px]
            2xl:text-[30px]
          "
        >
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/events" className={linkClass}>Event</NavLink>
          <NavLink to="/academics" className={linkClass}>Academics</NavLink>
          <NavLink to="/admissions" className={linkClass}>Admissions</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </ul>

        {/* APPLY NOW (DESKTOP → MODAL) */}
        <button
          onClick={onApplyClick}
          className="
            hidden md:block
            bg-yellow-400 text-black
            px-3 py-1
            lg:px-5 lg:py-2
            xl:px-6 xl:py-3
            2xl:px-7 2xl:py-3
            sm:text-[16px]
            text-[18px]
            lg:text-[20px]
            xl:text-[20px]
            2xl:text-[30px]
            rounded-md font-medium ml-4
          "
        >
          Apply Now
        </button>

        {/* MOBILE MENU BUTTON — RIGHT */}
        <button
          className="md:hidden text-gray-800 ml-auto"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                !open
                  ? "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  : "M6 18L18 6M6 6l12 12"
              }
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mt-4 md:hidden bg-gray-200 p-7 opacity-80 rounded-2xl">
          <ul className="flex flex-col gap-4 font-medium text-gray-700 text-base">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/events" onClick={() => setOpen(false)}>Event</NavLink>
            <NavLink to="/academics" onClick={() => setOpen(false)}>Academics</NavLink>
            <NavLink to="/admissions" onClick={() => setOpen(false)}>Admissions</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </ul>

          {/* APPLY NOW (MOBILE → MODAL) */}
          <button
            onClick={() => {
              setOpen(false);
              onApplyClick();
            }}
            className="w-full mt-4 bg-yellow-400 px-5 py-2 rounded-md font-medium"
          >
            Apply Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
