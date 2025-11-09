import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAgentModal from './components/AIAgentModal';

import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ToolsPage from './pages/ToolsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
  
  const handleOpenAgent = () => {
    setIsAgentModalOpen(true);
  };

  const handleCloseAgent = () => {
    setIsAgentModalOpen(false);
  };

  const props = { onConsultationClick: handleOpenAgent };

  let Component;
  switch (window.location.pathname) {
    case '/':
      Component = <HomePage {...props} />;
      break;
    case '/about':
      Component = <AboutPage />;
      break;
    case '/services':
      Component = <ServicesPage />;
      break;
    case '/tools':
      Component = <ToolsPage {...props} />;
      break;
    case '/contact':
      Component = <ContactPage />;
      break;
    default:
      Component = <NotFound />;
  }


  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header onConsultationClick={handleOpenAgent} />
      <main className="flex-grow">
        {Component}
      </main>
      <Footer />
      <AIAgentModal isOpen={isAgentModalOpen} onClose={handleCloseAgent} />
    </div>
  );
};

export default App;
