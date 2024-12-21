"use client";

import { useState } from "react";

const NotesCard = ({
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
    onMouseMove={(e) => handleMouseMove(e, heading)}
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

const NotesPage = () => {
  const [shineStyle, setShineStyle] = useState({});
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setShineStyle({ top: `${y}px`, left: `${x}px` });
    setActiveCard(cardId);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  const notes = [
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
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="hero-block">
          <div className="hero-heading-wrap">
            <div className="hero-icon" style={{ fontSize: "64px" }}>
              <div className="icon-svg w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "64px", height: "64px" }}
                >
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
              </div>
            </div>
            <h1 className="hero-heading">Notes</h1>
          </div>
          <div className="text-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
            nulla.
          </div>
        </div>
        <div className="block-divider"></div>
        <div className="section-block">
          <div className="content-title-wrap">
            <div className="content-title-dot"></div>
            <h2 className="content-title">Featured Posts</h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="_2x-column w-dyn-items">
              {notes.map((note, index) => (
                <NotesCard
                  key={index}
                  {...note}
                  shineStyle={shineStyle}
                  isActive={activeCard === note.heading}
                  handleMouseMove={handleMouseMove}
                  handleMouseLeave={handleMouseLeave}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotesPage;
