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
      href: "/404",
      heading: "7 Ways To Improve Website Usability And Accessibility",
      date: "May 4, 2024",
      readTime: "5",
      badge: "Featured",
    },
    {
      href: "/404",
      heading: "7 Must Have Tools For Web Designers",
      date: "May 4, 2024",
      readTime: "10",
      badge: null,
    },
  ];

  const projects = [
    {
      href: "/projects/pubdec",
      heading: "PUBDEC",
      tag: "Web Dev",
      description:
        "Dark, Glassmorphisme, Gradient, Minimalistic Website for PUBDEC ",
      images: [
        "/images/pubdecgallery-05.png",
        "/images/pubdecgallery-06.png",
        "/images/pubdecgallery-07.png",
      ],
    },
  ];

  const tools = [
    {
      href: "https://www.NextJS.org",
      icon: "/images/NextJS13.svg",
      title: "NextJS",
      description:
        "A React framework for building fast, SEO-friendly web apps with server-side rendering and static site generation.",
      badge: "Favorite",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.visualstudio.com/",
      icon: "/images/vscode.svg",
      title: "VSCode",
      description:
        "A lightweight, versatile code editor with built-in debugging, extensions, and Git integration for seamless development.",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.postgresql.com",
      icon: "/images/postgresql.svg",
      title: "PostgreSQL",
      description:
        "A robust, open-source database system known for reliability, scalability, and advanced features.",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.docker.com/",
      icon: "/images/docker.svg",
      title: "Docker",
      description:
        "A platform for building, sharing, and running applications in lightweight, portable containers.",
      width: 40,
      height: 40,
    },
    {
      href: "https://github.com/",
      icon: "/images/github.svg",
      title: "GitHub",
      description:
        "A platform for hosting, managing, and collaborating on software projects using Git.",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.figma.com/",
      icon: "/images/figma.svg",
      title: "Figma",
      description:
        "A collaborative design tool for creating user interfaces, prototypes, and design systems.",
      width: 40,
      height: 40,
    },
    {
      href: "https://www.adobe.com/products/illustrator.html",
      icon: "/images/ai.svg",
      title: "Adobe Illustrator",
      description:
        "A vector graphics editor for creating logos, illustrations, and complex designs.",
      width: 40,
      height: 40,
    },
    {
      href: "https://tailwindcss.com/",
      icon: "/images/tailwind.svg",
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for building custom designs quickly and efficiently.",
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
                  Co-Founder of SiferOne. Based in ALGERIA.
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
            {/* 
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
*/}
            <div className="block-divider"></div>
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">Tools.</h2>
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
