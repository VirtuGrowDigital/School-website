import React from "react";
import galleryImage from "../assets/GalleryBanner.jpg"; // your existing image

const GalleryBanner = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <img
          src={galleryImage}
          alt="School Gallery"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default GalleryBanner;
