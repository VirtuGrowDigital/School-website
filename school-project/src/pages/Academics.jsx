import PageHeader from "../components/PageHeader";

export default function Academics() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <PageHeader
        title="Academics"
        subtitle="Building strong foundations through quality education and innovation"
      />

      {/* ================= ACADEMIC OVERVIEW ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <p className="text-[#BAD7C9] text-sm mb-3">
          Our Academic Philosophy
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#152C70] mb-4">
          Excellence in Teaching & Learning
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Our academic framework is designed to nurture curiosity,
          encourage critical thinking, and prepare students for
          lifelong success through a balanced blend of theory,
          practice, and values.
        </p>
      </section>

      {/* ================= ACADEMIC PROGRAMS ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#152C70]">
          Academic Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Primary Education",
              desc: "Strong foundational learning with focus on literacy, numeracy, and creativity.",
            },
            {
              title: "Secondary Education",
              desc: "Concept-based learning that promotes analytical thinking and subject mastery.",
            },
            {
              title: "Senior Secondary",
              desc: "Advanced academic preparation aligned with higher education and career paths.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                p-6
                shadow
                border-b border-[#BAD7C9]
                hover:shadow-lg transition
              "
            >
              <h3 className="text-lg font-semibold mb-3 text-[#152C70]">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TEACHING METHODOLOGY ================= */}
      <section className="bg-[#273867] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-white/70 leading-relaxed">
              We adopt modern pedagogical approaches that integrate
              experiential learning, digital tools, and continuous
              assessment to ensure deep understanding and academic excellence.
            </p>
          </div>

          <ul className="space-y-4 text-white/80">
            <li>✔ Student-centric learning approach</li>
            <li>✔ Smart classrooms & digital content</li>
            <li>✔ Continuous assessment & feedback</li>
            <li>✔ Activity-based & experiential learning</li>
          </ul>

        </div>
      </section>

      {/* ================= ACADEMIC FACILITIES ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#152C70]">
          Academic Facilities
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Smart Classrooms",
            "Science & Computer Labs",
            "Well-Stocked Library",
            "Learning Resource Center",
          ].map((facility, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-xl
                p-5
                text-center
                shadow
                border-b border-[#BAD7C9]
              "
            >
              <p className="font-medium text-[#152C70]">
                {facility}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ACADEMIC HIGHLIGHTS ================= */}
      <section className="bg-[#152C70] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">

          {[
            { value: "100%", label: "Board Results" },
            { value: "30+", label: "Qualified Faculty" },
            { value: "15+", label: "Years of Excellence" },
            { value: "500+", label: "Successful Alumni" },
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

      {/* ================= CTA ================= */}
      <section
        className="bg-[#273867] py-20 px-4 text-center text-white border-t"
        style={{ borderTop: "0.3px solid rgba(255,255,255,0.35)" }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to Begin Your Academic Journey?
        </h2>

        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Explore our admissions process and become a part of a learning
          environment that inspires excellence and growth.
        </p>

        <button className="bg-[#F4B400] text-black px-6 py-3 rounded-md font-medium">
          View Admissions
        </button>
      </section>
    </>
  );
}
