"use client"; // Only if needed elsewhere for client-side behavior

import { useState } from "react";
import Footer from "@/components/footer/Footer";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <main className="main">
        <div className="container">
          <div className="block-divider"></div>
          <div className="section-block">
            <div className="content-title-wrap">
              <div className="content-title-dot"></div>
              <h2 className="content-title">Notes.</h2>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="_2x-column w-dyn-items">
                <div
                  role="listitem"
                  className="cms-item w-dyn-item"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <a
                    href="/post/7-ways-to-improve-website-usability-and-accessibility"
                    className="card w-inline-block"
                  >
                    <div className="shine-wrap">
                      <div
                        className={`shine ${hovered ? "is-opacity-50" : ""}`}
                      ></div>
                    </div>
                    <div className="card-content-vertical">
                      <div>
                        <h2 className="card-heading">
                          7 Ways To Improve Website Usability And Accessibility
                        </h2>
                      </div>
                      <div className="card-meta">
                        <div className="card-info">
                          <div>May 4, 2023</div>
                          <div>•</div>
                          <div>5</div>
                          <div>min read</div>
                        </div>
                        <div className="card-cta-wrap">
                          <div className="card-badge">Featured</div>
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
              </div>
            </div>
          </div>
          <div className="block-divider"></div>
        </div>
        <Footer />
      </main>
    </>
  );
}
