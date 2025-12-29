import React from "react";
import galleryBanner from "../assets/gallery-big.png";
import h1 from "../assets/h1.png";

const GalleryBanner = () => {
  return (

    <div className="w-full">
      <h1 style={{ fontFamily: 'Lava Devanagari' }}
 className="flex justify-center mt-10 mb-10 font-bold text-4xl">
      Annual Function Highlights
      </h1>
      <img
        src={galleryBanner}
        alt="Annual Function Highlights"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default GalleryBanner;
