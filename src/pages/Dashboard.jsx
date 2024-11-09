// ConsultationPage.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ConsultationForm from "../components/ConsultationForm";
import WhyChooseUs from "../section/WhyChooseUsSection";
import AboutUsCollage from "../section/AboutUsCollage";
import AboutUsSection from "../section/AboutUsSection";
import ProjectsAndClients from "../section/ProjectsAndClients";
import RealEstateFooter from "../section/FooterSection";
import HeroSection from "../section/HeroSection";

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

      <HeroSection />
      <WhyChooseUs />
      <AboutUsCollage />
      <ProjectsAndClients />
      <RealEstateFooter />
    </div>
  );
};

export default Dashboard;
