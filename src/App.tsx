import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TinaEditProvider } from 'tinacms';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';
import BlogPost from './components/BlogPost';
import TinaAdmin from './components/TinaAdmin';

function App() {
  const [currentView, setCurrentView] = React.useState<'home' | 'blog'>('home');

  return (
    <TinaEditProvider
      editMode={
        <TinaAdmin />
      }
    >
      <Routes>
        <Route path="/admin" element={<TinaAdmin />} />
        <Route path="/admin/*" element={<TinaAdmin />} />
        <Route path="/blog" element={
          <div className="min-h-screen">
            <Header onNavigate={setCurrentView} currentView="blog" />
            <BlogPost onNavigate={setCurrentView} />
            <Footer />
            <FloatingCallButton />
          </div>
        } />
        <Route path="/" element={
          <div className="min-h-screen">
            <Header onNavigate={setCurrentView} currentView="home" />
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
        } />
      </Routes>
    </TinaEditProvider>
  );
}

export default App;