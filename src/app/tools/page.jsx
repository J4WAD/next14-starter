"use client";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

const ToolCard = ({
  href,
  heading,
  description,
  tags,
  iconSrc,
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card w-inline-block"
    >
      <div className="shine-wrap">
        {isActive && <div className="shine" style={shineStyle}></div>}
      </div>
      <div className="card-content-vertical">
        <div className="tools">
          <div className="tools-head">
            <div className="tools-icon">
              <img src={iconSrc} alt={heading} className="image-background" />
              <div className="app-outline"></div>
            </div>
            <div>
              <h2 className="card-heading">{heading}</h2>
            </div>
          </div>
          <div className="card-text-2-lines">{description}</div>
        </div>
        <div className="card-meta">
          <div className="card-info">
            {tags.map((tag, index) => (
              <div key={index} className="card-tag">
                {tag}
              </div>
            ))}
          </div>
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
    </a>
  </div>
);

const ToolsPage = () => {
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

  const tools = [
    {
      href: "https://www.framer.com/",
      heading: "Webflow",
      description:
        "Webflow is a user-friendly and intuitive website builder that makes creating pages easy even for those who don’t write code.",
      tags: ["Design", "No Code", "Website Builder"],
      iconSrc: "images/webflow-icon.png",
    },
    {
      href: "https://www.readymag.com/",
      heading: "Readymag",
      description:
        "Readymag is a web-based tool that allows you to design digital publications, websites, presentations, and more in a simple way.",
      tags: ["Design", "No Code", "Website Builder"],
      iconSrc: "images/icon-rm.png",
    },
    {
      href: "https://www.figma.com/",
      heading: "Figma",
      description:
        "Figma is a web-based interface design application to collaborate in managing design projects.",
      tags: ["Design", "Prototype", "Feedback"],
      iconSrc: "images/figma_icon.png",
    },
    {
      href: "https://www.frame.io/",
      heading: "Frame",
      description:
        "Frame.io is one central hub that lets you share media, track feedback, and streamline your workflow.",
      tags: ["Video", "Collaboration", "Feedback"],
      iconSrc: "images/image_1598362758.jpeg",
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
                  <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                  <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                  <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                </svg>
              </div>
            </div>
            <h1 className="hero-heading">Tools</h1>
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
            <h2 className="content-title">Design.</h2>
            <div className="content-title is-text">
              Seamlessly integrate your engineering workflows
            </div>
          </div>
          <div className="w-layout-grid _2x-column">
            {tools.map((tool, index) => (
              <ToolCard
                key={index}
                {...tool}
                shineStyle={shineStyle}
                isActive={activeCard === tool.heading}
                handleMouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ToolsPage;
