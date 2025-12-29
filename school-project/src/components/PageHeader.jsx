import React from "react";

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="bg-[#152C70] py-20 px-4 text-center text-white">
      <h1 className="text-4xl md:text-5xl font-semibold mb-3">
        {title}
      </h1>

      {subtitle && (
        <p className="text-white/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </section>
  );
};

export default PageHeader;
