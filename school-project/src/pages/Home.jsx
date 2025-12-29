import Hero from "../components/Hero";
import WhyChooseSection from "../components/WhyChooseSection";
import AnnualFunctionGallery from "../components/AnnualFunctionGallery";
import BatchesCarousel from "../components/BatchesCarousel";
import AlumniMeet from "../components/AlumniMeet";

import Footer from "../components/Footer";

export default function Home({ onApplyClick }) {
  return (
    <>
      <Hero onApplyClick={onApplyClick} />
      <WhyChooseSection />
      <AnnualFunctionGallery />
      <BatchesCarousel />
      <AlumniMeet />
     
   
    </>
  );
}
