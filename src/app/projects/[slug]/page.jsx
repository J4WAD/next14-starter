import { getProject } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import ReactMarkdown from "react-markdown";

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return (
      <main className="main">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold">Project Not Found</h2>
          <p className="mt-4">
            We couldnt find the project you were looking for.
          </p>
          <Link href="/projects" className="text-blue-500 mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const {
    title,
    description,
    category,
    thumbnail,
    content,
    gallery_image_1,
    gallery_image_2,
    gallery_image_3,
    year,
    team,
    awards,
    live_preview_link,
    next_project,
    related_projects,
  } = project;

  return (
    <div className="main">
      <div className="container">
        {/* Hero Section */}
        <div className="container-small align-left">
          <div className="hero-block">
            <h1 className="hero-heading">{title.replace(/'/g, "&apos;")}</h1>

            <div className="text-lead">{description}</div>
          </div>
        </div>

        <div>
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link href="/projects" className="breadcrumb-link">
              <div className="flex items-center gap-2">
                <div className="navbar-icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
                  </svg>
                </div>
                <div>Projects</div>
              </div>
            </Link>
            <div className="breadcrumb-divider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <Link
              href={`/project-category/${category?.toLowerCase()}`}
              className="breadcrumb-link"
            >
              <div className="flex items-center gap-2">
                <div className="navbar-icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25z"
                    />
                  </svg>
                </div>
                <div>{category}</div>
              </div>
            </Link>
            <div className="breadcrumb-divider">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
            <div className="breadcrumb-page-title">{title}</div>
          </div>

          {/* Content */}
          <div className="content-block">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* Gallery */}
          <div className="content-block">
            <div className="_1x-column">
              {gallery_image_1 && (
                <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
                  <div className="product-image-wrap">
                    <Image
                      src={gallery_image_1}
                      alt={`${title} gallery image 1`}
                      width={1440}
                      height={900}
                      className="product-image"
                      sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 63vw"
                    />
                    <div className="product-image-outline"></div>
                  </div>
                </div>
              )}
              {gallery_image_2 && (
                <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
                  <div className="product-image-wrap">
                    <Image
                      src={gallery_image_2}
                      alt={`${title} gallery image 2`}
                      width={1440}
                      height={900}
                      className="product-image"
                      sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 63vw"
                    />
                    <div className="product-image-outline"></div>
                  </div>
                </div>
              )}
              {gallery_image_3 && (
                <div role="listitem" className="w-dyn-item w-dyn-repeater-item">
                  <div className="product-image-wrap">
                    <Image
                      src={gallery_image_3}
                      alt={`${title} gallery image 3`}
                      width={1440}
                      height={900}
                      className="product-image"
                      sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 94vw, 63vw"
                    />
                    <div className="product-image-outline"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Year */}
          {year && (
            <div className="content-block">
              <div className="w-layout-grid content-grid">
                <div className="content-title-wrap">
                  <div className="content-title-dot"></div>
                  <h2 className="content-title">Year</h2>
                </div>
                <div>{year}</div>
              </div>
            </div>
          )}

          {/* Team */}
          {team && (
            <div>
              <div className="content-divider"></div>
              <div className="content-block">
                <div className="w-layout-grid content-grid">
                  <div className="content-title-wrap">
                    <div className="content-title-dot"></div>
                    <h2 className="content-title">Team</h2>
                  </div>
                  <div>
                    <div className="w-dyn-list">
                      <div role="list" className="team-list">
                        <div role="listitem" className="w-dyn-item">
                          <Link href="/team/mable-marvin" className="team-link">
                            <Image
                              src="/images/avatar-01.jpg"
                              alt="Team member avatar"
                              width={40}
                              height={40}
                              className="team-avatar"
                            />
                            <div>by</div>
                            <div className="team-name">{team}</div>
                            <div className="team-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                              >
                                <path d="M6.23 20.23L8 22l10-10L8 2 6.23 3.77 14.46 12z" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Awards */}
          {awards && awards.length > 0 && (
            <div>
              <div className="content-divider"></div>
              <div className="content-block">
                <div className="w-layout-grid content-grid">
                  <div className="content-title-wrap">
                    <div className="content-title-dot"></div>
                    <h2 className="content-title">Awards</h2>
                  </div>
                  <div className="awards-rte">
                    {awards.map((award, index) => (
                      <p key={index}>
                        <a
                          href={award.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {award.name}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Live Preview */}
          {live_preview_link && (
            <div className="content-block">
              <div className="content-divider"></div>
              <div className="content-block">
                <div className="w-layout-grid content-grid">
                  <div className="content-title-wrap">
                    <div className="content-title-dot"></div>
                    <h2 className="content-title">Live Preview</h2>
                  </div>
                  <div>
                    <a
                      href={live_preview_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-rounded-small w-button"
                    >
                      Live Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Next Project */}
        {next_project && (
          <>
            <div className="block-divider"></div>
            <div className="section-block">
              <div className="content-title-wrap">
                <div className="content-title-dot"></div>
                <h2 className="content-title">Next Project</h2>
              </div>
              <Link href={`/project/${next_project.slug}`} className="card">
                <div className="card-content-vertical">
                  <div className="card-meta">
                    <div className="card-info">
                      <div className="card-tag">{next_project.category}</div>
                    </div>
                    <div className="card-cta-wrap">
                      <div className="card-cta">
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
                  <div>
                    <h2 className="card-heading">{next_project.title}</h2>
                    <div className="card-heading is-text">
                      {next_project.description}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
