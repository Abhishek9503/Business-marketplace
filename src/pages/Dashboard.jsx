// ConsultationPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ConsultationForm from "../components/ConsultationForm";
import WhyChooseUs from "./WhyChooseUs";
import AboutUsCollage from "./AboutUsCollage";
import AboutUsSection from "./AboutUs";
import ProjectsAndClients from "./ProjectsAndClients";
import RealEstateFooter from "./Footer";
import AboutSection from "../components/AboutSection";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-screen bg-gray-100">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Sidebar for Mobile */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

  
      <main className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img loading="lazy"
          src="/Images/hero.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Content Container */}
        <div className="relative z-10 w-full min-h-screen ">
          <div className="container mx-auto px-4 py-12 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <MainContent />
              <ConsultationForm />
            </div>
          </div>
        </div>
      </main>

      <WhyChooseUs />
      <AboutUsCollage />

      <AboutUsSection />

      <ProjectsAndClients />
      <RealEstateFooter />
    </div>
  );
};

export default Dashboard;
