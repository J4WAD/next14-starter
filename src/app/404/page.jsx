"use client";
import { useState } from "react";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="main">
      <div className="container-404">
        <div className="hero-block">
          <h1 className="hero-heading">Coming soon...</h1>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
