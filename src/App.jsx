import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import OurCenters from "./Pages/OurCenter";
import RigistrationForm from "./Pages/Registration";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      {/* Fixed Header */}
      <Header />

      {/* Page Content (header height offset) */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/ourcenters" element={<OurCenters />} />
          <Route path="/rigistrationform" element={<RigistrationForm />} />
          <Route path="/contactus" element={<Contact />} />
          
          
        </Routes>
      

      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
