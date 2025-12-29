import React from "react";
import girlImg from "../assets/girl-banner.png"; // your NO-BUTTON image

const WhyChooseSection = () => {
  return (
    <section className="relative w-full py-10 md:py-20">
      
      {/* IMAGE FULL WIDTH */}
      <div className="relative w-full">
        <img
          src={girlImg}
          alt="Student"
          className="w-full h-auto object-cover"
        />

        {/* BUTTONS ABOVE IMAGE */}
       {/* BUTTONS ABOVE IMAGE — FIXED POSITION */}
<div
  className="
    absolute 
   mt-15     /* adjust vertical alignment */
    left-[62%]     /* adjust horizontal alignment */

    -translate-x-1/2 
    -translate-y-1/2

    flex gap-3 md:gap-4 
    z-20
  "
>
<button
  className="
    bg-yellow-400 text-black 
    rounded-md shadow

    /* FONT SIZE */
    text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl

    /* PADDING → FIX HEIGHT/WIDTH REACTIVELY */
    px-3 py-1
    sm:px-4 sm:py-2
    md:px-5 md:py-2.5
    lg:px-6 lg:py-3
    xl:px-7 xl:py-3.5
    2xl:px-8 2xl:py-4
  "
>
  Get Quote Now
</button>

<button
  className="
    bg-white text-black 
    rounded-md shadow

    /* FONT SIZE */
    text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl

    /* PADDING → FIX HEIGHT/WIDTH REACTIVELY */
    px-3 py-1
    sm:px-4 sm:py-2
    md:px-5 md:py-2.5
    lg:px-6 lg:py-3
    xl:px-7 xl:py-3.5
    2xl:px-8 2xl:py-4
  "
>
  Learn More
</button>

</div>

      </div>

      {/* TEXT BLOCK (RIGHT SIDE) */}
   

    </section>
  );
};

export default WhyChooseSection;
