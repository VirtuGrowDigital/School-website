import PageHeader from "../components/PageHeader";
import galleryImage from "../assets/GalleryBanner.jpg"; // placeholder image

const galleryItems = Array.from({ length: 8 });

export default function Gallery() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <PageHeader
        title="Gallery"
        subtitle="A glimpse into life, learning, and celebrations at our school"
      />

      {/* ================= GALLERY INTRO ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <p className="text-[#BAD7C9] text-sm mb-3">
          Moments & Memories
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#152C70] mb-4">
          Capturing Our School Journey
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          From academic achievements to cultural celebrations and sports events,
          our gallery reflects the vibrant and inspiring environment of our school.
        </p>
      </section>

      {/* ================= GALLERY FILTER (UI ONLY) ================= */}
      <section className="pb-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {["All", "Events", "Academics", "Sports", "Cultural"].map((cat, i) => (
            <button
              key={i}
              className="
                px-5 py-2 rounded-full
                border border-[#BAD7C9]
                text-sm font-medium
                hover:bg-[#F4B400] hover:border-[#F4B400]
                transition
              "
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryItems.map((_, i) => (
            <div
              key={i}
              className="
                rounded-2xl overflow-hidden
                shadow
                border-b border-[#BAD7C9]
                hover:shadow-lg transition
              "
            >
              <img
                src={galleryImage}
                alt="School Gallery"
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED SECTION ================= */}
      <section className="bg-[#273867] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Annual Function Highlights
            </h2>

            <p className="text-white/70 leading-relaxed">
              Our annual functions bring together students, teachers, and parents
              to celebrate talent, creativity, and cultural diversity. These moments
              create lifelong memories and strengthen our school community.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={galleryImage}
              alt="Annual Function"
              className="w-full h-64 object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="
          bg-[#152C70]
          py-20 px-4
          text-center text-white
          border-t
        "
        style={{ borderTop: "0.3px solid rgba(255,255,255,0.35)" }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Want to See More Moments?
        </h2>

        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Visit our campus or follow us on social media to stay updated with
          the latest events and celebrations.
        </p>

        <button className="bg-[#F4B400] text-black px-6 py-3 rounded-md font-medium">
          Explore More
        </button>
      </section>
    </>
  );
}
