import React, { useState } from "react";

import v1 from "../assets/video1.mp4";
import v2 from "../assets/video2.mp4";
import v3 from "../assets/video3.mp4";

const videos = [
  { id: 1, src: v1 },
  { id: 2, src: v2 }, // CENTER FIRST
  { id: 3, src: v3 },
];

const SLIDE_WIDTH = 70; // %
const GAP = 24; // px (gap-6)

const BatchesCarousel = () => {
  // 👇 start from SECOND video
  const [index, setIndex] = useState(1);

  const next = () => {
    setIndex((i) => (i < videos.length - 1 ? i + 1 : i));
  };

  const prev = () => {
    setIndex((i) => (i > 0 ? i - 1 : i));
  };

  return (
    <section className="py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

       {/* TEXT ABOVE VIDEO */}
<div className="max-w-4xl mx-auto text-center px-4 mb-10">

{/* FIRST LINE */}
<p className="text-sm md:text-base font-medium mb-3 text-[#BAD7C9]">
  Our Academic & Competitive Exam Batches
</p>

{/* SECOND LINE */}
<h2 style={{ fontFamily: 'Lava Devanagari' }} className="text-2xl md:text-4xl font-semibold text-black mb-4">
  Our Learning Batches in Action
</h2>

{/* THIRD LINE */}
<p className="text-[10px] md:text-extralight text-[#B9B3D6] max-w-2xl mx-auto leading-relaxed">
  Explore recorded batch videos showcasing IAS preparation, academic
  coaching, and student success stories—each reflecting the quality
  education delivered at our school, from schooling to competitive
  exam readiness.
</p>

</div>


        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30
                       bg-white shadow w-10 h-10 rounded-full"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30
                       bg-white shadow w-10 h-10 rounded-full"
          >
            ›
          </button>

          {/* VIEWPORT */}
          <div className="overflow-hidden">
            <div
              className="flex justify-center gap-6 transition-transform duration-500"
              style={{
                transform: `translateX(calc(${-(index - 1) * SLIDE_WIDTH}%))`,
              }}
            >
              {videos.map((v, i) => (
                <div
                  key={v.id}
                  className="shrink-0 w-[70%]"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-black">

                    <video
                      src={v.src}
                      muted
                      preload="metadata"
                      className="w-full h-72 md:h-96 object-cover"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BatchesCarousel;
