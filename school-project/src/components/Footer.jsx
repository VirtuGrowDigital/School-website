import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">

      {/* ================= NEWSLETTER ================= */}
      <div className="bg-[#152C70] py-20 px-4 text-center text-white">
        <p className="text-xs uppercase tracking-widest text-purple-300 mb-2">
          Newsletter
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Our Experts Teacher
        </h2>

        <p className="text-sm text-white/70 max-w-xl mx-auto mb-8">
          Problems trying to resolve the conflict between
          the two major realms of Classical physics:
          Newtonian mechanics
        </p>

        {/* INPUT */}
        <div className="max-w-xl  mx-auto flex overflow-hidden rounded-md">
          <input
          style={{ border: "0.5px solid #FDE68A" }} 
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 border-[0.5] border-e-amber-50 text-white outline-none"
          />
          <button className="bg-[#8B5CF6] px-6 py-3 text-white font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* ================= FOOTER LINKS ================= */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-600">

          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Company Info
            </h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Features
            </h4>
            <ul className="space-y-2">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Get In Touch
            </h4>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-purple-500 mt-1" />
                <span>(480) 555-0103</span>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-purple-500 mt-1" />
                <span>
                  Berlington,Lucknow 
                  Uttar Pradesh 
                  India
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="text-purple-500 mt-1" />
                <span>xyzschool@example.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="bg-gray-50 border-t py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>All Right Reserved</p>

          <div className="flex gap-4 text-purple-500">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
