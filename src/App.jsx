import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Staff from "./components/Staff";
import Video from './components/Video';


const Home = () => (
  <>
    <HeroSection />
    {/* <FeatureSection /> */}
    {/* <Workflow /> */}
    {/* <Pricing /> */}
    <Video/>
    <Testimonials />
  </>
);


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-2 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;