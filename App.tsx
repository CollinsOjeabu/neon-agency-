import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { WorkGrid } from './components/WorkGrid';
import { Team } from './components/Team';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-dark text-white selection:bg-neon selection:text-black cursor-none">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <Manifesto />
        <WorkGrid />
        <Team />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;