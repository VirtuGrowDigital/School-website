import PageHeader from "../components/PageHeader";

const upcomingEvents = [
  {
    title: "Annual Function 2025",
    date: "15 March 2025",
    desc: "A grand celebration of talent, culture, and achievements.",
  },
  {
    title: "Science Exhibition",
    date: "22 April 2025",
    desc: "Showcasing innovation, creativity, and student projects.",
  },
  {
    title: "Sports Meet",
    date: "10 May 2025",
    desc: "Encouraging teamwork, fitness, and sportsmanship.",
  },
];

export default function Events() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <PageHeader
        title="School Events"
        subtitle="Celebrating moments that shape learning, culture, and community"
      />

      {/* ================= UPCOMING EVENTS ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#152C70]">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl shadow-md p-6
                border-b border-[#BAD7C9]
                hover:shadow-lg transition
              "
            >
              <p className="text-sm text-[#BAD7C9] mb-2">
                {event.date}
              </p>

              <h3 className="font-semibold text-lg mb-3 text-[#152C70]">
                {event.title}
              </h3>

              <p className="text-sm text-gray-600 mb-6">
                {event.desc}
              </p>

              <button className="bg-[#F4B400] px-4 py-2 rounded-md font-medium">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EVENT HIGHLIGHTS ================= */}
      <section className="bg-[#273867] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          {[
            { value: "50+", label: "Events Hosted" },
            { value: "10K+", label: "Participants" },
            { value: "200+", label: "Awards Won" },
            { value: "15+", label: "Annual Celebrations" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-3xl font-semibold text-[#F4B400]">
                {item.value}
              </p>
              <p className="text-sm text-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PAST EVENTS ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#152C70]">
          Past Events
        </h2>

        <div className="space-y-8">
          {[
            {
              year: "2024",
              title: "Golden Jubilee Celebration",
              desc: "Celebrating 50 years of excellence in education.",
            },
            {
              year: "2023",
              title: "Inter-School Debate Competition",
              desc: "Fostering critical thinking and communication skills.",
            },
            {
              year: "2022",
              title: "Cultural Fest",
              desc: "A vibrant display of music, dance, and traditions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex gap-6 items-start
                pb-6 border-b border-gray-200
                last:border-b-0
              "
            >
              <div className="text-[#F4B400] font-semibold text-xl">
                {item.year}
              </div>

              <div>
                <h4 className="font-medium text-lg mb-1 text-[#152C70]">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
  className="
    bg-[#152C70]
    py-20 px-4
    text-center text-white
    border-b
  "
  style={{ borderBottom: "0.3px solid rgba(255,255,255,0.35)" }}
>
  <h2 className="text-2xl md:text-3xl font-semibold mb-4">
    Be a Part of Our Upcoming Events
  </h2>

  <p className="text-white/70 max-w-xl mx-auto mb-8">
    Join us in celebrating excellence, creativity, and unforgettable
    moments at our school.
  </p>

  <button className="bg-[#F4B400] text-black px-6 py-3 rounded-md font-medium">
    Contact for Event Participation
  </button>
</section>

    </>
  );
}
