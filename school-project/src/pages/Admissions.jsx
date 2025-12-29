import PageHeader from "../components/PageHeader";

export default function Admissions() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <PageHeader
        title="Admissions"
        subtitle="Your journey towards quality education begins here"
      />

      {/* ================= ADMISSION OVERVIEW ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto text-center">
        <p className="text-[#BAD7C9] text-sm mb-3">Admissions Information</p>

        <h2 className="text-2xl md:text-3xl font-semibold text-[#152C70] mb-4">
          Join Our Learning Community
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Our admissions process is transparent, structured, and student-focused.
          We welcome learners who aspire to grow academically, socially, and ethically.
        </p>
      </section>

      {/* ================= ADMISSION PROCESS ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#152C70]">
          Admission Process
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            ["Step 1", "Enquiry", "Submit an enquiry form or visit the campus."],
            ["Step 2", "Application", "Complete the admission application."],
            ["Step 3", "Assessment", "Student interaction or academic assessment."],
            ["Step 4", "Confirmation", "Seat confirmation after verification."],
          ].map(([step, title, desc], i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow border-b border-[#BAD7C9]"
            >
              <p className="text-sm text-[#BAD7C9] mb-2">{step}</p>
              <h3 className="text-lg font-semibold mb-3 text-[#152C70]">
                {title}
              </h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STREAMS OFFERED ================= */}
      <section className="bg-[#273867] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">
            Streams Offered (Senior Classes)
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Science", "Physics, Chemistry, Mathematics, Biology"],
              ["Commerce", "Accountancy, Business Studies, Economics"],
              ["Arts", "History, Political Science, Psychology"],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-white text-black rounded-2xl p-6 border-b border-[#BAD7C9]"
              >
                <h3 className="font-semibold text-lg mb-2 text-[#152C70]">
                  {title}
                </h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEE STRUCTURE ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#152C70]">
          Fee Structure Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Primary School", "₹45,000 / year"],
            ["Secondary School", "₹60,000 / year"],
            ["Senior Secondary", "₹75,000 / year"],
          ].map(([level, fee], i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 text-center shadow border-b border-[#BAD7C9]"
            >
              <p className="font-medium text-[#152C70]">{level}</p>
              <p className="text-xl font-semibold text-[#F4B400] mt-2">
                {fee}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SCHOLARSHIP ================= */}
      <section className="bg-[#152C70] py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Scholarships & Financial Aid
            </h2>
            <p className="text-white/70">
              Merit-based and need-based scholarships are available for deserving
              students to ensure equal access to quality education.
            </p>
          </div>

          <ul className="space-y-3 text-white/80">
            <li>✔ Merit-based scholarships</li>
            <li>✔ Sports & talent quota</li>
            <li>✔ Financial assistance programs</li>
            <li>✔ Sibling concessions</li>
          </ul>
        </div>
      </section>

      {/* ================= FAQs ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-[#152C70]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {[
            ["Is there an entrance exam?", "Yes, for selected grades."],
            ["Do you offer transport facilities?", "Yes, with safe routes."],
            ["Can parents visit the campus?", "Campus visits are encouraged."],
          ].map(([q, a], i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow border-b border-[#BAD7C9]"
            >
              <p className="font-medium text-[#152C70]">{q}</p>
              <p className="text-sm text-gray-600 mt-2">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        className="bg-[#273867] py-20 px-4 text-center text-white border-t"
        style={{ borderTop: "0.3px solid rgba(255,255,255,0.35)" }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Start Your Admission Today
        </h2>

        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Secure your child’s future by enrolling them in an institution that
          values excellence, integrity, and growth.
        </p>

        <button className="bg-[#F4B400] text-black px-6 py-3 rounded-md font-medium">
          Apply for Admission
        </button>
      </section>
    </>
  );
}
