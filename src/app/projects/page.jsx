// app/projects/page.jsx

import path from "path";
import fs from "fs"; // fs is a Node.js module, used for file system operations
import matter from "gray-matter";
import ProjectCard from "../../components/ProjectCard";

async function getProjects() {
  const projectsDirectory = path.join(process.cwd(), "content/projects");

  try {
    const fileNames = fs.readdirSync(projectsDirectory); // Use sync version to avoid async/await in this context
    const projects = fileNames.map((fileName) => {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        ...data,
        slug: fileName.replace(/\.md$/, ""),
      };
    });

    return projects;
  } catch (error) {
    console.error("Error reading projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="main">
      {/* Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Block */}
        <div className="hero-block mb-12">
          <div className="hero-heading-wrap flex items-center gap-4 mb-6">
            <div className="hero-icon text-gray-800">
              {/* Hero Icon (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-16 h-16"
              >
                <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
              </svg>
            </div>
            <h1 className="hero-heading text-4xl font-bold">Projects</h1>
          </div>
          <div className="text-lead text-xl text-gray-600">
            Explore my latest works and projects.
          </div>
        </div>

        {/* Divider */}
        <div className="block-divider border-t border-gray-200 my-8"></div>

        {/* Section Block / Projects List */}
        <div className="section-block">
          <div className="_2x-column w-dyn-items grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
