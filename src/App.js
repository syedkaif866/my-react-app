import React from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import SectionDivider from './components/SectionDivider';
import Companies from './components/Companies';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import FeaturesSecond from './components/FeaturesSecond';
import FAQ from './components/FAQ';
import Blog from "./components/Blog";
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroHeader />
      <SectionDivider />
      <Companies />
      <SectionDivider />
      <Features />
      <Testimonial />
      <FeaturesSecond />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Blog />
      <SectionDivider />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
