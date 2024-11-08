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

      {/* Main Content */}
      {/* Main Content */}
      <main className="relative flex flex-col md:flex-row items-center justify-center md:justify-between p-8 md:p-16 lg:p-24">
        {/* Background Image */}
        <img
          src="/Images/hero.svg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Main Content (set higher z-index to appear above background) */}
        <div className="relative z-10 w-full h-full  flex justify-between items-center">
          <MainContent />
          <ConsultationForm />
        </div>
      </main>

      <WhyChooseUs/>
      <AboutUsCollage/>

      <AboutUsSection/>

      <ProjectsAndClients/>
      <RealEstateFooter/>
    </div>
  );
};

export default Dashboard;
