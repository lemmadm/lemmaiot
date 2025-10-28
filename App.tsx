import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CustomSolutionProcess from './components/Pricing';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIAgentModal from './components/AIAgentModal';

const App: React.FC = () => {
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
  
  const handleOpenAgent = () => {
    setIsAgentModalOpen(true);
  };

  const handleCloseAgent = () => {
    setIsAgentModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header onConsultationClick={handleOpenAgent} />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs onConsultationClick={handleOpenAgent} />
        <CustomSolutionProcess />
        {/* <Testimonials /> */}
      </main>
      <Footer />
      <AIAgentModal isOpen={isAgentModalOpen} onClose={handleCloseAgent} />
    </div>
  );
};

export default App;