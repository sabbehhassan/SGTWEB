import React from "react";
import HeroSection from "../../components/HeroSection";
import AboutUs from "../../components/AboutUs";
import SkillsSection from "../../components/SkillsSection";
import ProgressStats from "../../components/Progress";
import ContactUs from "../../components/ContactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs showButton={true} />
      <SkillsSection />
      <ProgressStats />
      <ContactUs />
    </div>
  );
};

export default Home;
