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
        <div className="project-thumb-portrait-info p-6 bg-white">
          <div className="space-beetween flex justify-between items-center mb-2">
            <h2 className="card-heading text-2xl font-semibold text-gray-800">
              {project.title}
            </h2>
          </div>
          <p className="text-gray-600 line-clamp-2">{project.description}</p>

          {/* Technologies */}
          {project.technologies && (
            <div className="card-meta mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="card-tag is-light px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
