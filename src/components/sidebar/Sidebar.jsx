"use client"; // Required for hooks in Next.js
import Image from "next/image";
import { usePathname } from "next/navigation"; // Hook for getting the current path
import Link from "next/link"; // Use Link for navigation
import { useState } from "react"; // To manage hover state

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar visibility
  };
  const pathname = usePathname(); // Get the current path
  const [hoveredTab, setHoveredTab] = useState(null); // Track hovered tab

  const isActive = (path) => pathname === path;

  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
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
                      {/* Icon SVG */}
                    </div>
                  )}
                  {!isActive("/") && (
                    <div className="navbar-inactive-icon w-embed">
                      {/* Icon SVG */}
                    </div>
                  )}
                </div>
                <div>Home</div>
              </div>
            </Link>

            {/* Repeat for other links */}
          </div>
        </div>

        <div className="sidebar-controls">
          <div className="sidebar-controls-wrap">
            <div className="availability-wrap">
              <div className="availability-dot"></div>
              <div className="caption">Available</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar-bg-tablet"></div>

      <div className="sidebar-navbar-tablet">
        <a href="/about" className="sidebar-tablet-brand w-inline-block">
          <div className="sidebar-tablet-avatar-wrap">
            <Image
              src="/images/avatar-05.jpg"
              loading="lazy"
              alt="Brandon Askim Avatar"
              className="sidebar-header-avatar"
              width="40"
              height="40"
            />
            <div className="sidebar-header-avatar-outline"></div>
          </div>
          <div className="sidebar-tablet-avatar-info">
            <div className="sidebar-tablet-avatar-name">Brandon Askim</div>
            <div className="sidebar-tablet-avatar-title">
              <div>UX Designer</div>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="sidebar-tablet-menu w-inline-block"
          onClick={toggleSidebar}
        >
          {/* Toggle button */}
          <div className="menu-burger w-embed">
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
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              ></path>
            </svg>
          </div>
          <div
            className="menu-close w-embed"
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={toggleSidebar}
          >
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
