"use client"; // Only if needed elsewhere for client-side behavior

import { useState } from "react";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

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

export default function Home() {
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

  const projects = [
    {
      href: "/project/stord",
      heading: "Stord",
      tag: "Design",
      description: "Dark Mode Portfolio Webflow Template",
      images: [
        "/images/gallery-image-02.jpg",
        "/images/gallery-image-03.jpg",
        "/images/gallery-image-04.jpg",
      ],
    },
  ];

  const tools = [
    {
      href: "https://www.webflow.com",
      icon: "/images/webflow-icon.png",
      title: "Webflow",
      description:
        "A user-friendly and intuitive website builder that makes creating pages easy even for those who don’t write code.",
      badge: "Favorite",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.framer.com/",
      icon: "/images/icon-loom.webp",
      title: "Framer",
      description:
        "Webflow is a user-friendly and intuitive website builder that makes creating pages easy even for those who don’t write code.",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.readymag.com",
      icon: "/images/icon-rm.png",
      title: "Readymag",
      description:
        "Readymag is a web-based tool that allows you to design digital publications, websites, presentations, and more.",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.loom.com/",
      icon: "/images/icon-loom.webp",
      title: "Loom",
      description:
        "Loom is a platform to capture video and screen recordings to communicate with your team or clients quickly.",
      width: 40,
      height: 40,
    },
  ];

  return (
    <>
      <main className="main">
        <div className="container">
          <div>
            <div className="container-small align-left">
              <div className="hero-block">
                <h1 className="hero-heading">
                  Full Stack Developer and Creative Strategist open to freelance
                  worldwide.
                </h1>
                <div className="text-lead">
                  Founder of J4LABS. Based in ALGERIA.
                </div>
              </div>
            </div>
          </div>
          <div className="block-divider"></div>
          <div className="section-block">
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">Projects.</h2>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    role="listitem"
                    className="w-dyn-item"
                    onMouseMove={(e) => handleMouseMove(e, project.heading)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link href={project.href} className="card w-inline-block">
                      <div className="shine-wrap">
                        {activeCard === project.heading && (
                          <div className="shine" style={shineStyle}></div>
                        )}
                      </div>
                      <div className="card-content-vertical">
                        <div className="card-meta">
                          <div className="card-info">
                            <div className="card-tag">{project.tag}</div>
                          </div>
                          <div className="card-cta-wrap">
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
                        <div>
                          <h2 className="card-heading">{project.heading}</h2>
                          <div className="card-heading is-text">
                            {project.description}
                          </div>
                        </div>
                        <div className="w-layout-grid thumb-3x-column">
                          {project.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`card-thumb-static-wrap ${
                                imgIndex > 0 ? "hide-portrait" : ""
                              }`}
                            >
                              <div className="card-thumb">
                                <img
                                  src={image}
                                  alt=""
                                  loading="lazy"
                                  width={500}
                                  height={300}
                                  className="thumb-image"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="block-divider"></div>
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">Notes.</h2>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="_2x-column w-dyn-items">
                {notes.map((note, index) => (
                  <Card
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
            <div className="block-divider"></div>
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">Tools.</h2>
              <div className="content-title is-text">
                Aenean faucibus nibh et justo cursus id rutrum.
              </div>
            </div>
            <div className="w-layout-grid _2x-column">
              {tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.href}
                  target="_blank"
                  className="card w-inline-block"
                  rel="noopener noreferrer"
                  onMouseMove={(e) => handleMouseMove(e, tool.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="shine-wrap">
                    {activeCard === tool.title && (
                      <div className="shine" style={shineStyle}></div>
                    )}
                  </div>
                  <div className="card-content-vertical">
                    <div className="tools-head-long">
                      <div className="app-wrap">
                        <img
                          src={tool.icon}
                          loading="lazy"
                          alt=""
                          className="sidebar-header-avatar"
                        />
                        <div className="app-outline"></div>
                      </div>
                      <div className="card-cta-wrap">
                        {tool.badge && (
                          <div className="card-badge is-orange">
                            {tool.badge}
                          </div>
                        )}
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
                    <div>
                      <h2 className="card-heading">{tool.title}</h2>
                      <div>{tool.description}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
