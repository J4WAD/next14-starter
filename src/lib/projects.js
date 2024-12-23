// lib/projects.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

/**
 * Fetch all projects.
 * @returns {Array} List of project objects.
 */
export async function getProjects() {
  const fileNames = fs.readdirSync(projectsDirectory);
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
}

/**
 * Fetch a single project by slug.
 * @param {string} slug - The slug of the project.
 * @returns {Object|null} The project object or null if not found.
 */
export async function getProject(slug) {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...data,
      slug,
      content,
    };
  } catch (error) {
    console.error(`Error fetching project with slug "${slug}":`, error);
    return null;
  }
}
