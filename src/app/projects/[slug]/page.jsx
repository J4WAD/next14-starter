// app/projects/[slug]/page.jsx
import { getProject } from "@/lib/projects"; // Adjust the import path as necessary
import Image from "next/image"; // Recommended for optimized images
import Link from "next/link";
import { Promise } from "es6-promise";
export default async function ProjectPage({ params }) {
  const { slug } = params;
  const project = await getProject(slug);

  if (!project) {
    // If project is not found, render a custom 404 message
    return (
      <main className="main">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <p className="mt-4">
            We couldn’t find the project you were looking for.
          </p>
          <Link href="/projects" className="text-blue-500 mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const { title, description, thumbnail, technologies, content } = project;

  return (
    <main className="main">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="hero-block mb-12">
          <div className="hero-heading-wrap flex items-center gap-4 mb-6">
            <div className="hero-icon text-gray-800">
              {/* Reuse the same SVG as in the ProjectsPage */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16"
              >
                <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
              </svg>
            </div>
            <h1 className="hero-heading text-4xl font-bold">{title}</h1>
          </div>
          <div className="text-lead text-xl text-gray-600">{description}</div>
        </div>

        {/* Divider */}
        <div className="block-divider border-t border-gray-200 my-8"></div>

        {/* Project Details */}
        <div className="section-block">
          {/* Thumbnail */}
          {thumbnail && (
            <div className="relative w-full h-64 mb-8">
              {/* Using Next.js Image for optimization */}
              <Image
                src={thumbnail}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </main>
  );
}
