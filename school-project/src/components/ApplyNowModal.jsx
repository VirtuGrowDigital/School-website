import React from "react";

const ApplyNowModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative bg-white rounded-2xl shadow-xl w-[90%] max-w-md p-6 z-10">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-[#152C70]">
          Apply for Admission
        </h2>

        <p className="text-sm text-gray-600 mb-6">
          Fill in your details and our admissions team will contact you.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Student Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none"
          />

          <input
            type="email"
            placeholder="Parent Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none"
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none"
          />

          <select className="w-full border border-gray-300 px-4 py-3 rounded-md outline-none">
            <option>Select Class</option>
            <option>Nursery</option>
            <option>Primary</option>
            <option>Secondary</option>
            <option>Senior Secondary</option>
          </select>

          <button
            type="submit"
            className="w-full bg-[#F4B400] text-black py-3 rounded-md font-medium"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowModal;
