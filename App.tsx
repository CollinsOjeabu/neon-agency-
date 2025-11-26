
import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { WorkGrid } from './components/WorkGrid';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { WorksPage } from './pages/WorksPage';
import { AboutPage } from './pages/AboutPage';
import { UpdatesPage } from './pages/UpdatesPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      // Remove the '#' and default to 'home' if empty
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Set initial page based on current URL
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle Scroll to Top on page change
  useEffect(() => {
    // We use a small timeout to ensure the DOM has updated before scrolling
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 10);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'works':
        return <WorksPage />;
      case 'about':
        return <AboutPage />;
      case 'updates':
        return <UpdatesPage />;
      case 'capabilities':
        return <CapabilitiesPage />;
      default:
        // 'home' or any unknown route renders the Landing Page sections
        return (
          <>
            <Hero />
            <Manifesto />
            <WorkGrid />
            <Team />
          </>
        );
    }
  };

  return (
    <div className="bg-brand-black text-white selection:bg-neon selection:text-black cursor-none min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <main className="flex-grow">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
