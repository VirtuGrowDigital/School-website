import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ApplyNowModal from "./components/ApplyNowModal";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [openApply, setOpenApply] = useState(false);

  return (
    <>
      {/* NORMAL NAVBAR — NOT on Home */}
      {!isHome && <Navbar onApplyClick={() => setOpenApply(true)} />}

      <Routes>
        <Route
          path="/"
          element={<Home onApplyClick={() => setOpenApply(true)} />}
        />
        <Route path="/events" element={<Events />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* APPLY NOW MODAL */}
      {openApply && (
        <ApplyNowModal onClose={() => setOpenApply(false)} />
      )}

      <Footer />
    </>
  );
}

export default App;
