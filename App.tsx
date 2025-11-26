import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { WorkGrid } from './components/WorkGrid';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { WorksPage } from './components/WorksPage';
import { AboutPage } from './components/AboutPage';
import { UpdatesPage } from './components/UpdatesPage';
import { CapabilitiesPage } from './components/CapabilitiesPage';
import { NavigationProvider } from './components/NavigationContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    if (page === 'contact') {
      // Handle contact scroll separately
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage(page);
    }
  };

  // Handle Scroll to Top on page change
  useEffect(() => {
    if (currentPage !== 'contact') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
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
        // 'home' renders the Landing Page sections
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
    <NavigationProvider value={{ currentPage, navigateTo }}>
      <div className="bg-brand-black text-white selection:bg-neon selection:text-black cursor-none min-h-screen flex flex-col">
        <CustomCursor />
        <Navbar />
        
        <main className="flex-grow">
          {renderPage()}
        </main>
        
        <Footer />
      </div>
    </NavigationProvider>
  );
}

export default App;