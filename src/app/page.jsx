"use client"; // Only if needed elsewhere for client-side behavior

import { useState } from "react";
import Footer from "@/components/footer/Footer";

const Card = ({
  href,
  heading,
  date,
  readTime,
  badge,
  shineStyle,
  isActive,
  handleMouseMove,
  handleMouseLeave,
}) => (
  <div
    role="listitem"
    className="cms-item w-dyn-item"
    onMouseMove={(e) => handleMouseMove(e, heading)} // Pass card identifier
    onMouseLeave={handleMouseLeave}
  >
    <a href={href} className="card w-inline-block">
      <div className="shine-wrap">
        {isActive && <div className="shine" style={shineStyle}></div>}
      </div>
      <div className="card-content-vertical">
        <div>
          <h2 className="card-heading">{heading}</h2>
        </div>
        <div className="card-meta">
          <div className="card-info">
            <div>{date}</div>
            <div>•</div>
            <div>{readTime}</div>
            <div>min read</div>
          </div>
          <div className="card-cta-wrap">
            {badge && <div className="card-badge">{badge}</div>}
            <div className="card-cta">
              <div className="icon-svg w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default function Home() {
  const [shineStyle, setShineStyle] = useState({});
  const [activeCard, setActiveCard] = useState(null); // Track active card

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to the card
    const y = e.clientY - rect.top; // Mouse Y relative to the card
    setShineStyle({ top: `${y}px`, left: `${x}px` });
    setActiveCard(cardId); // Set this card as active
  };

  const handleMouseLeave = () => {
    setActiveCard(null); // Remove active card on mouse leave
  };

  const cards = [
    {
      href: "/post/7-ways-to-improve-website-usability-and-accessibility",
      heading: "7 Ways To Improve Website Usability And Accessibility",
      date: "May 4, 2023",
      readTime: "5",
      badge: "Featured",
    },
    {
      href: "/post/7-must-have-tools-for-web-designers",
      heading: "7 Must Have Tools For Web Designers",
      date: "May 4, 2023",
      readTime: "10",
      badge: null,
    },
    {
      href: "/post/how-marketing-teams-can-accelerate-speed-to-market",
      heading: "How Marketing Teams Can Accelerate Speed To Market",
      date: "May 4, 2023",
      readTime: "8",
      badge: "Featured",
    },
    {
      href: "/post/14-common-misconceptions-about-web-design",
      heading: "14 Common Misconceptions About Web Design",
      date: "May 4, 2023",
      readTime: "8",
      badge: null,
    },
  ];

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="block-divider"></div>
          <div className="section-block">
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">Notes.</h2>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="_2x-column w-dyn-items">
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    {...card}
                    shineStyle={shineStyle}
                    isActive={activeCard === card.heading}
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="block-divider"></div>
        </div>
        <Footer />
      </main>
    </>
  );
}
