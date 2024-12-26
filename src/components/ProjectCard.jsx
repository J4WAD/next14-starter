// app/projects/ProjectCard.jsx
"use client";

import { useState } from "react";

export default function ProjectCard({ project }) {
  const [style, setStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
    setIsHovered(false);
  };

  return (
    <div
      role="listitem"
      className="work-thumb w-dyn-item"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <a
        href={`/projects/${project.slug}`}
        className="card w-inline-block transform transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden"
      >
        {/* Shine Wrap */}
        <div className="shine-wrap relative overflow-hidden">
          {isHovered && (
            <div
              className="shine absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
              style={style}
            />
          )}
        </div>

        {/* Thumbnail / Image */}
        <div className="project-thumb-portrait relative aspect-[4/3] overflow-hidden">
          <img
            loading="lazy"
            alt={project.title}
            src={project.thumbnail}
            className="thumb-image object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Info Section */}
        <div className="project-thumb-portrait-info">
          <div className="space-beetween">
            <h2 className="card-heading">{project.title}</h2>
          </div>
          <div className="card-meta">
            <div className="card-info">
              <div className="card-tag is-light">{project.category}</div>
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

          {/* Technologies */}
        </div>
      </a>
    </div>
  );
}
