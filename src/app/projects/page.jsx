"use client";

import { useState } from "react";

const ProjectsPage = () => {
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

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="hero-block">
            <div className="hero-heading-wrap">
              <div className="hero-icon">
                <div className="icon-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
                  </svg>
                </div>
              </div>
              <h1 className="hero-heading">Projects</h1>
            </div>
            <div className="text-lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
              nulla.
            </div>
          </div>
          <div className="block-divider"></div>
          <div className="section-block">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div
                  role="listitem"
                  className="work-thumb w-dyn-item"
                  onMouseMove={(e) => handleMouseMove(e, "stord")}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="/project/stord" className="card w-inline-block">
                    <div className="shine-wrap">
                      {activeCard === "stord" && (
                        <div className="shine" style={shineStyle}></div>
                      )}
                    </div>
                    <div className="project-thumb-portrait">
                      <img
                        loading="lazy"
                        alt=""
                        src="images/tyler-nix-6b5hhx83tbo-unsplash-201-20-1-.jpg"
                        className="thumb-image"
                      />
                    </div>
                    <div className="project-thumb-portrait-info">
                      <h2 className="card-heading">Stord</h2>
                    </div>
                  </a>
                </div>
                <div
                  role="listitem"
                  className="work-thumb w-dyn-item"
                  onMouseMove={(e) => handleMouseMove(e, "bergen")}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="/project/bergen" className="card w-inline-block">
                    <div className="shine-wrap">
                      {activeCard === "bergen" && (
                        <div className="shine" style={shineStyle}></div>
                      )}
                    </div>
                    <div className="project-thumb-portrait">
                      <img
                        loading="lazy"
                        alt=""
                        src="images/room-xnpmvekj6pe-unsplash-20-1-201-20-2-20-1-.jpg"
                        className="thumb-image"
                      />
                    </div>
                    <div className="project-thumb-portrait-info">
                      <h2 className="card-heading">Bergen</h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
