import React, { useEffect, useRef, useState } from "react";

const AlumniMeet = () => {
  // ✅ FIXED EVENT DATE (15 DAYS FROM FIRST LOAD)
  const eventDateRef = useRef(
    new Date().getTime() + 15 * 24 * 60 * 60 * 1000
  );

  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = eventDateRef.current - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* CARD */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">

          {/* 🔹 0.3px DIVIDER (DESKTOP ONLY) */}
          <div
            className="hidden md:block absolute top-0 bottom-0 left-1/2"
            style={{
              width: "0.3px",
              backgroundColor: "rgba(255,255,255,0.35)",
              transform: "translateX(-50%)",
            }}
          />

          {/* LEFT SIDE */}
          <div className="bg-[#152C70] text-white p-8 md:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Alumni Meet 2025
              </h3>

              <p className="text-sm font-extralight text-white/50 leading-relaxed mb-6">
                Join us for a memorable reunion and celebrate our shared
                memories, achievements, and the bonds that unite us.
                Reconnect with old friends and make new connections.
              </p>

              <div className="space-y-2 text-sm text-white/80">
                <div>📅 March 15, 2025</div>
                <div>⏰ 10:00 AM – 5:00 PM</div>
                <div>📍 School Campus Auditorium</div>
              </div>
            </div>

            <button
              className="
                mt-8 w-fit
                bg-[#F4B400] text-black
                px-6 py-3 rounded-md
                font-medium
                hover:brightness-95 transition
              "
            >
              Register Now
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#273867] text-white p-8 md:p-10 flex flex-col justify-center">
            <p className="text-sm text-white/70 mb-6">
              Event Starts In
            </p>

            <div className="flex gap-4 flex-wrap">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    bg-white text-black
                    w-20 h-20
                    rounded-xl
                    flex flex-col items-center justify-center
                  "
                >
                  <span className="text-xl font-semibold">
                    {item.value}
                  </span>
                  <span className="text-xs text-gray-600">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AlumniMeet;
