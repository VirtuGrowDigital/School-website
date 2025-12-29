import PageHeader from "../components/PageHeader";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <PageHeader
        title="Contact Us"
        subtitle="We’re here to help you with admissions, academics, and general enquiries"
      />

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow border-b border-[#BAD7C9]">
            <FaPhoneAlt className="text-[#F4B400] text-xl mb-3" />
            <h4 className="font-semibold mb-1 text-[#152C70]">Call Us</h4>
            <p className="text-sm text-gray-600">+91 98765 43210</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border-b border-[#BAD7C9]">
            <FaEnvelope className="text-[#F4B400] text-xl mb-3" />
            <h4 className="font-semibold mb-1 text-[#152C70]">Email</h4>
            <p className="text-sm text-gray-600">info@schoolname.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border-b border-[#BAD7C9]">
            <FaMapMarkerAlt className="text-[#F4B400] text-xl mb-3" />
            <h4 className="font-semibold mb-1 text-[#152C70]">Address</h4>
            <p className="text-sm text-gray-600">
            Berlington,Lucknow 
                  Uttar Pradesh 
                  India
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow border-b border-[#BAD7C9]">
            <FaClock className="text-[#F4B400] text-xl mb-3" />
            <h4 className="font-semibold mb-1 text-[#152C70]">Office Hours</h4>
            <p className="text-sm text-gray-600">Mon – Fri: 9 AM – 5 PM</p>
          </div>

        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="py-20 px-4 bg-[#273867]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="text-white">
            <h2 className="text-3xl font-semibold mb-4">
              Get in Touch With Us
            </h2>
            <p className="text-white/70 leading-relaxed">
              Have questions about admissions, academics, or school life?
              Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          {/* FORM */}
          <form className="bg-white rounded-2xl p-6 shadow space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none"
            />

            <button
              type="submit"
              className="bg-[#F4B400] text-black px-6 py-3 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* ================= MAP SECTION ================= */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            title="School Location"
            src="https://maps.google.com/maps?q=school&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* ================= HELP CTA ================= */}
      <section className="bg-[#152C70] py-20 px-4 text-center text-white border-t border-white/20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Need Immediate Assistance?
        </h2>

        <p className="text-white/70 max-w-xl mx-auto mb-8">
          Our support team is available to guide you through admissions,
          academics, and campus visits.
        </p>

        <button className="bg-[#F4B400] text-black px-6 py-3 rounded-md font-medium">
          Call Support
        </button>
      </section>
    </>
  );
}
