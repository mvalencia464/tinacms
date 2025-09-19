import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import BlogPost from './components/BlogPost';

function App() {
  const [currentView, setCurrentView] = React.useState<'home' | 'blog'>('home');

  if (currentView === 'blog') {
    return (
      <div className="min-h-screen">
        <Header onNavigate={setCurrentView} currentView={currentView} />
        <BlogPost onNavigate={setCurrentView} />
        <Footer />
        <FloatingCallButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header onNavigate={setCurrentView} currentView={currentView} />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;