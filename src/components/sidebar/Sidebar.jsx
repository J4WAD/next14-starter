"use client"; // Required for hooks in Next.js
import Image from "next/image";

import { usePathname } from "next/navigation"; // Hook for getting the current path
import Link from "next/link"; // Use Link for navigation
import { useState } from "react"; // To manage hover state

const Sidebar = () => {
  const pathname = usePathname(); // Get the current path
  const [hoveredTab, setHoveredTab] = useState(null); // Track hovered tab

  const isActive = (path) => pathname === path;

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <Link href="/about" className="sidebar-header-wrap w-inline-block">
            <div className="sidebar-header-avatar-wrap">
              <Image
                src="/images/avatar-05.jpg"
                loading="lazy"
                height="92"
                width="92"
                alt="Profile Avatar"
                className="sidebar-header-avatar"
              />
              <div className="sidebar-header-avatar-outline"></div>
            </div>
            <div className="sidebar-header-info">
              <div className="sidebar-header-name">Djaouad Azzouz</div>
              <div className="sidebar-header-title">
                <div>Full Stack Dev</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="sidebar-navbar">
          <div className="navbar-list">
            {/* Home Tab */}
            <Link
              href="/"
              className={`navbar-link w-inline-block ${
                isActive("/") ? "w--current" : ""
              }`}
              onMouseEnter={() => setHoveredTab("/")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {isActive("/") && <div className="navbar-link-active-bg"></div>}
              {hoveredTab === "/" && !isActive("/") && (
                <div className="navbar-link-hover-bg"></div>
              )}
              <div className="w-layout-grid navbar-link-content">
                <div className="navbar-icon-wrap">
                  {isActive("/") && (
                    <div className="navbar-active-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {!isActive("/") && (
                    <div className="navbar-inactive-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>

                <div>Home</div>
              </div>
            </Link>

            <div className="navbar-list-divider"></div>
            <Link
              href="/projects"
              className={`navbar-link w-inline-block ${
                isActive("/projects") ? "w--current" : ""
              }`}
              onMouseEnter={() => setHoveredTab("/projects")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {isActive("/projects") && (
                <div className="navbar-link-active-bg"></div>
              )}
              {hoveredTab === "/projects" && !isActive("/projects") && (
                <div className="navbar-link-hover-bg"></div>
              )}
              <div className="w-layout-grid navbar-link-content">
                <div className="navbar-icon-wrap">
                  {isActive("/projects") && (
                    <div className="navbar-active-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
                      </svg>
                    </div>
                  )}
                  {!isActive("/projects") && (
                    <div className="navbar-inactive-icon w-embed">
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
                          d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div>Projects</div>
              </div>
            </Link>
            <div className="navbar-list-divider"></div>
            <Link
              href="/notes"
              className={`navbar-link w-inline-block ${
                isActive("/notes") ? "w--current" : ""
              }`}
              onMouseEnter={() => setHoveredTab("/notes")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {isActive("/notes") && (
                <div className="navbar-link-active-bg"></div>
              )}
              {hoveredTab === "/notes" && !isActive("/notes") && (
                <div className="navbar-link-hover-bg"></div>
              )}
              <div className="w-layout-grid navbar-link-content">
                <div className="navbar-icon-wrap">
                  {isActive("/notes") && (
                    <div className="navbar-active-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                      </svg>
                    </div>
                  )}
                  {!isActive("/notes") && (
                    <div className="navbar-inactive-icon w-embed">
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
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div>Notes</div>
              </div>
            </Link>

            <div className="navbar-list-divider"></div>
            <Link
              href="/tools"
              className={`navbar-link w-inline-block ${
                isActive("/tools") ? "w--current" : ""
              }`}
              onMouseEnter={() => setHoveredTab("/tools")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {isActive("/tools") && (
                <div className="navbar-link-active-bg"></div>
              )}
              {hoveredTab === "/tools" && !isActive("/tools") && (
                <div className="navbar-link-hover-bg"></div>
              )}
              <div className="w-layout-grid navbar-link-content">
                <div className="navbar-icon-wrap">
                  {isActive("/tools") && (
                    <div className="navbar-active-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                        <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                        <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
                      </svg>
                    </div>
                  )}
                  {!isActive("/tools") && (
                    <div className="navbar-inactive-icon w-embed">
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
                          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div>Tools</div>
              </div>
            </Link>

            <div className="navbar-list-divider"></div>
            {/* About Tab */}
            <Link
              href="/about"
              className={`navbar-link w-inline-block ${
                isActive("/about") ? "w--current" : ""
              }`}
              onMouseEnter={() => setHoveredTab("/about")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {isActive("/about") && (
                <div className="navbar-link-active-bg"></div>
              )}
              {hoveredTab === "/about" && !isActive("/about") && (
                <div className="navbar-link-hover-bg"></div>
              )}
              <div className="w-layout-grid navbar-link-content">
                <div className="navbar-icon-wrap">
                  {isActive("/about") && (
                    <div className="navbar-active-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                  {!isActive("/about") && (
                    <div className="navbar-inactive-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div>About</div>
              </div>
            </Link>
            <div className="navbar-list-divider"></div>
            {/* Contact Tab */}
            <Link
              href="/contact"
              className={`navbar-link w-inline-block ${
                isActive("/contact") ? "w--current" : ""
              }`}
              onMouseEnter={() => setHoveredTab("/contact")}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {isActive("/contact") && (
                <div className="navbar-link-active-bg"></div>
              )}
              {hoveredTab === "/contact" && !isActive("/contact") && (
                <div className="navbar-link-hover-bg"></div>
              )}
              <div className="w-layout-grid navbar-link-content">
                <div className="navbar-icon-wrap">
                  {isActive("/contact") && (
                    <div className="navbar-active-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                        <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                      </svg>
                    </div>
                  )}

                  {!isActive("/contact") && (
                    <div className="navbar-inactive-icon w-embed">
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
                          d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div>Contact</div>
              </div>
            </Link>
          </div>
        </div>
        <div class="sidebar-controls">
          <div class="sidebar-controls-wrap">
            <div class="availability-wrap">
              <div class="availability-dot"></div>
              <div class="caption">Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
