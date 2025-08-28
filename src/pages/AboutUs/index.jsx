import React from "react";
import AboutUs from "../../components/AboutUs";
import Certificates from "../../components/SGTCertificate";
import SGTGallery from "../../components/SGTgallery";
import FounderSection from "../../components/CEOsection";
import TeamSection from "../../components/TeamSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutUs />
      <FounderSection />
      <TeamSection />
      <Certificates />
      <SGTGallery />
    </div>
  );
};
export default AboutPage;
