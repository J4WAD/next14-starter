"use client";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import Image from "next/image";
const ContactPage = () => {
  // 1. Store the styles for the shine and the currently active card
  const [shineStyle, setShineStyle] = useState({});
  const [activeCard, setActiveCard] = useState(null);

  // 2. Handlers to update shine position and show/hide the shine
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
    <main className="main">
      <div className="container">
        <div className="hero-block">
          <div className="hero-heading-wrap">
            <div className="hero-icon" style={{ fontSize: "64px" }}>
              <div className="icon-svg w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "64px", height: "64px" }}
                >
                  <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                  <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                </svg>
              </div>
            </div>
            <h1 className="hero-heading">Contact</h1>
          </div>
          <div className="text-lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum
            nulla.
          </div>
        </div>

        <div className="block-divider"></div>
        <div className="section-block">
          <div className="content-title-wrap">
            <div className="content-title-dot"></div>
            <h2 className="content-title">Stay connected</h2>
          </div>

          <div className="w-layout-grid _4x-column">
            {/* CARD 1 */}
            <div
              id="w-node-c98478fb-b849-c8b6-5d74-2ac4447cab12-a30fcb40"
              data-w-id="c98478fb-b849-c8b6-5d74-2ac4447cab12"
              className="card"
              onMouseMove={(e) => handleMouseMove(e, "card1")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="shine-wrap">
                {/* Conditionally render shine */}
                {activeCard === "card1" && (
                  <div className="shine" style={shineStyle}></div>
                )}
              </div>
              <div className="card-content-vertical">
                <image
                  src="../../images/bildschirmfoto-202023-03-17-20um-2009.43.01.png"
                  loading="lazy"
                  style={{ opacity: 0.5 }}
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 93vw, 64vw"
                  alt=""
                  srcSet="images/bildschirmfoto-202023-03-17-20um-2009.43.01-p-500.png 500w, images/bildschirmfoto-202023-03-17-20um-2009.43.01-p-800.png 800w, images/bildschirmfoto-202023-03-17-20um-2009.43.01-1.png 2014w"
                  className="map-image"
                />
                <div className="map-outline"></div>
                <div className="map-info">
                  <div className="map-info-item">
                    <div className="w-layout-grid map-links-grid">
                      <div id="w-node-_093978ed-d865-aab7-a8b5-c090d453e27a-a30fcb40">
                        <div className="map-info-heading">Brandon Brekstad</div>
                        <div>113 Baker St, London W1U 6RS, UK</div>
                      </div>
                      <div id="w-node-_2c986120-4a92-938d-1d24-6b52be79ada7-a30fcb40">
                        <a href="#" className="button-small is-map w-button">
                          Go
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="map-info-item is-last">
                    <div className="w-layout-grid map-links-grid">
                      <div
                        id="w-node-_514b6dfd-cb5e-8d8e-9d05-c59369cbd762-a30fcb40"
                        className="map-links"
                      >
                        <a href="tel:+49123456789" className="text-link">
                          +49123456789
                        </a>
                        <a
                          href="mailto:hello@template.com"
                          className="text-link"
                        >
                          hello@template.com
                        </a>
                      </div>
                      <div
                        id="w-node-_514b6dfd-cb5e-8d8e-9d05-c59369cbd767-a30fcb40"
                        className="map-buttons"
                      >
                        <a href="#" className="button-small is-circle w-button">
                          ☎️
                        </a>
                        <a href="#" className="button-small is-circle w-button">
                          📫
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <a
              href="#"
              className="card w-inline-block"
              onMouseMove={(e) => handleMouseMove(e, "card2")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="shine-wrap">
                {activeCard === "card2" && (
                  <div className="shine" style={shineStyle}></div>
                )}
              </div>
              <div className="card-content-vertical">
                <div className="app-list-wrap">
                  <div>
                    <div className="app-list">
                      <div className="app-wrap">
                        <div className="app-icon w-embed">
                          <svg
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="0"
                              fill="#006699"
                            ></rect>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M14.7344 29V15.5053H10.249V29H14.7344ZM12.4917 13.6629C14.0558 13.6629 15.0294 12.6266 15.0294 11.3316C15.0002 10.0075 14.0558 9 12.5214 9C10.9871 9 9.98389 10.0075 9.98389 11.3316C9.98389 12.6266 10.9572 13.6629 12.4625 13.6629H12.4916H12.4917Z"
                              fill="white"
                            ></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M17.2163 29H21.7016V21.464C21.7016 21.0607 21.7308 20.6578 21.8492 20.3695C22.1735 19.5636 22.9115 18.7291 24.1506 18.7291C25.7736 18.7291 26.4229 19.9666 26.4229 21.7807V29H30.9078V21.2624C30.9078 17.1174 28.695 15.1887 25.744 15.1887C23.3243 15.1887 22.262 16.5412 21.6718 17.4624H21.7017V15.5053H17.2164C17.2753 16.7716 17.2164 29 17.2164 29H17.2163Z"
                              fill="white"
                            ></path>
                          </svg>
                        </div>
                        <div className="app-outline"></div>
                      </div>
                      <div>LinkedIn</div>
                    </div>
                  </div>
                  <div id="w-node-_586e4c93-2eba-d515-1276-04e6e65a44a7-a30fcb40">
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

            {/* CARD 3 */}
            <a
              href="#"
              className="card w-inline-block"
              onMouseMove={(e) => handleMouseMove(e, "card3")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="shine-wrap">
                {activeCard === "card3" && (
                  <div className="shine" style={shineStyle}></div>
                )}
              </div>
              <div
                className="card-content-vertical"
                style={{ backgroundColor: "rgb(28, 28, 28)" }}
              >
                <div className="app-list-wrap">
                  <div>
                    <div className="app-list">
                      <div className="app-wrap">
                        <div className="app-icon w-embed">
                          <svg
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="40" height="40" rx="0" fill="white" />
                            <path
                              d="M17.9792 12.2719C17.4566 12.1263 16.9114 12.4199 16.7615 12.9277C16.6117 13.4356 16.9139 13.9653 17.4365 14.1109L25.3857 16.3257C25.9084 16.4714 26.4536 16.1777 26.6034 15.6699C26.7533 15.162 26.4511 14.6323 25.9285 14.4867L17.9792 12.2719Z"
                              fill="#222222"
                            />
                            <path
                              d="M15.7848 16.238C15.9346 15.7302 16.4798 15.4365 17.0025 15.5822L24.9517 17.797C25.4743 17.9426 25.7765 18.4723 25.6267 18.9802C25.4768 19.488 24.9316 19.7816 24.409 19.636L16.4597 17.4212C15.9371 17.2756 15.6349 16.7458 15.7848 16.238Z"
                              fill="#222222"
                            />
                            <path
                              d="M16.0253 18.8924C15.5026 18.7468 14.9575 19.0404 14.8076 19.5483C14.6577 20.0561 14.9599 20.5859 15.4826 20.7315L20.4035 22.1025C20.9262 22.2482 21.4713 21.9545 21.6212 21.4467C21.7711 20.9389 21.4689 20.4091 20.9462 20.2635L16.0253 18.8924Z"
                              fill="#222222"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.4646 10.2181C13.9441 8.59302 15.6887 7.65339 17.3612 8.11937L28.7172 11.2834C30.3897 11.7494 31.3567 13.4445 30.8772 15.0696L26.5354 29.7819C26.0559 31.407 24.3113 32.3466 22.6388 31.8806L11.2828 28.7166C9.61031 28.2506 8.64328 26.5555 9.12285 24.9304L13.4646 10.2181ZM16.8185 9.95841L28.1745 13.1224C28.8017 13.2972 29.1643 13.9328 28.9845 14.5423L24.6428 29.2546C24.4629 29.864 23.8087 30.2163 23.1815 30.0416L11.8255 26.8776C11.1983 26.7028 10.8357 26.0672 11.0155 25.4578L15.3572 10.7454C15.5371 10.136 16.1913 9.78367 16.8185 9.95841Z"
                              fill="#222222"
                            />
                          </svg>
                        </div>
                        <div className="app-outline" />
                      </div>
                      <div>Read CV</div>
                    </div>
                  </div>
                  <div
                    id="w-node-_85d6ab6b-30bd-fc24-366d-845f7e32044a-a30fcb40"
                    className="card-cta"
                  >
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
            </a>

            {/* CARD 4 */}
            <a
              id="w-node-_5949b375-8fd2-7519-620c-0a4d7ee3d0d8-a30fcb40"
              href="#"
              className="card w-inline-block"
              onMouseMove={(e) => handleMouseMove(e, "card4")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="shine-wrap">
                {activeCard === "card4" && (
                  <div className="shine" style={shineStyle}></div>
                )}
              </div>
              <div
                className="card-content-vertical"
                style={{ backgroundColor: "rgb(28, 28, 28)" }}
              >
                <div className="contact-card-grid">
                  <div
                    id="w-node-_5949b375-8fd2-7519-620c-0a4d7ee3d0da-a30fcb40"
                    className="contact-card-list"
                  >
                    <div className="app-list">
                      <div className="app-wrap">
                        <div className="app-icon w-embed">
                          <svg
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="0"
                              fill="#D15584"
                            ></rect>
                            <g clipPath="url(#clip0_920_2756)">
                              <path
                                d="M8 20C8 17.824 8.53602 15.816 9.608 13.976C10.68 12.136 12.136 10.68 13.976 9.608C15.816 8.53599 17.824 8 20 8C22.176 8 24.184 8.53599 26.024 9.608C27.864 10.68 29.32 12.136 30.392 13.976C31.464 15.816 32 17.824 32 20C32 22.176 31.464 24.184 30.392 26.024C29.32 27.864 27.864 29.32 26.024 30.392C24.184 31.464 22.176 32 20 32C17.824 32 15.816 31.464 13.976 30.392C12.136 29.32 10.68 27.864 9.608 26.024C8.53602 24.184 8 22.176 8 20ZM9.992 20C9.992 22.496 10.832 24.696 12.512 26.6C13.28 25.096 14.496 23.664 16.16 22.304C17.824 20.944 19.448 20.088 21.032 19.736C20.792 19.176 20.56 18.672 20.336 18.224C17.584 19.104 14.608 19.544 11.408 19.544C10.784 19.544 10.32 19.536 10.016 19.52C10.016 19.584 10.012 19.664 10.004 19.76C9.99601 19.856 9.992 19.936 9.992 20ZM10.304 17.528C10.656 17.56 11.176 17.576 11.864 17.576C14.536 17.576 17.072 17.216 19.472 16.496C18.256 14.336 16.92 12.536 15.464 11.096C14.2 11.736 13.116 12.624 12.212 13.76C11.308 14.896 10.672 16.152 10.304 17.528ZM13.88 27.896C15.688 29.304 17.728 30.008 20 30.008C21.184 30.008 22.36 29.784 23.528 29.336C23.208 26.6 22.584 23.952 21.656 21.392C20.184 21.712 18.7 22.52 17.204 23.816C15.708 25.112 14.6 26.472 13.88 27.896ZM17.552 10.328C18.96 11.784 20.264 13.6 21.464 15.776C23.64 14.864 25.28 13.704 26.384 12.296C24.528 10.76 22.4 9.992 20 9.992C19.184 9.992 18.368 10.104 17.552 10.328ZM22.328 17.48C22.568 17.992 22.84 18.64 23.144 19.424C24.328 19.312 25.616 19.256 27.008 19.256C28 19.256 28.984 19.28 29.96 19.328C29.832 17.152 29.048 15.216 27.608 13.52C26.568 15.072 24.808 16.392 22.328 17.48ZM23.744 21.104C24.56 23.472 25.112 25.904 25.4 28.4C26.664 27.584 27.696 26.536 28.496 25.256C29.296 23.976 29.776 22.592 29.936 21.104C28.768 21.024 27.704 20.984 26.744 20.984C25.864 20.984 24.864 21.024 23.744 21.104Z"
                                fill="white"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_920_2756">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="translate(8 8)"
                                ></rect>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="app-outline" />
                      </div>
                      <div>Dribbble</div>
                    </div>
                    <div
                      id="w-node-_5949b375-8fd2-7519-620c-0a4d7ee3d0e1-a30fcb40"
                      className="button-small"
                    >
                      <div>Follow</div>
                      <div className="text-muted">1.2K</div>
                    </div>
                  </div>
                  <div
                    id="w-node-_022b3e29-975d-00d0-46f4-1a691728e27c-a30fcb40"
                    className="contact-card-square"
                  >
                    <img
                      src="images/tyler-nix-6b5hhx83tbo-unsplash-201-20-1--1.jpg"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 44vw, 30vw"
                      srcSet="images/tyler-nix-6b5hhx83tbo-unsplash-201-20-1-p-500-1.jpg 500w, images/tyler-nix-6b5hhx83tbo-unsplash-201-20-1-p-800-1.jpg 800w, images/tyler-nix-6b5hhx83tbo-unsplash-201-20-1--2.jpg 853w"
                      alt=""
                      className="thumb-image"
                    />
                    <div className="outline-10px" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="block-divider"></div>
        <div className="section-block">
          <div className="content-title-wrap">
            <div className="content-title-dot"></div>
            <h2 className="content-title">Send a message</h2>
          </div>
          <div className="form-block w-form">
            <form
              id="send-a-message"
              name="email-form"
              data-name="Email Form"
              method="get"
              data-wf-page-id="641340483d66b769a30fcb40"
              data-wf-element-id="dded5a54-873d-d79f-ebda-88c1618dbf95"
            >
              <div className="w-layout-grid _4x-column">
                <input
                  className="text-field w-node-dded5a54-873d-d79f-ebda-88c1618dbf98-a30fcb40 w-input"
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="Your Name"
                  type="text"
                  id="name"
                />
                <input
                  className="text-field w-node-dded5a54-873d-d79f-ebda-88c1618dbf9b-a30fcb40 w-input"
                  maxLength={256}
                  name="email"
                  data-name="Email"
                  placeholder="Your Email"
                  type="email"
                  id="email"
                  required
                />
                <textarea
                  placeholder="Your Message..."
                  maxLength={5000}
                  id="field"
                  name="field"
                  data-name="Field"
                  className="text-field is-area w-node-a612c34c-b2f2-57d5-3790-23f702446650-a30fcb40 w-input"
                ></textarea>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  id="w-node-dded5a54-873d-d79f-ebda-88c1618dbf9c-a30fcb40"
                  className="button w-button"
                  value="Submit"
                />
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>

        <div className="block-divider"></div>

        <div className="section-block">
          <div className="container-small">
            <div className="newsletter-wrap">
              <div className="newsletter-image-wrap">
                <div className="newsletter-image">
                  <div className="newsletter-image-icon-size">
                    <div className="icon-svg w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M..." clipRule="evenodd" />
                        {/* Add any additional paths if needed */}
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="newsletter-image-outline"></div>
              </div>
              <div className="newsletter-content">
                <div className="newsletter-content-top">
                  <h2 className="card-heading">
                    Get notified when we release new products.
                  </h2>
                  <div>
                    We never share your data, and we send approximately 1-2
                    emails per month.
                  </div>
                </div>
                <div className="form-block w-form">
                  <form id="email-form" name="email-form" method="get">
                    <div className="w-layout-grid newsletter-grid">
                      <input
                        className="text-field w-input"
                        maxLength="256"
                        name="Email"
                        placeholder="Your Email"
                        type="email"
                        required
                      />
                      <input
                        type="submit"
                        className="button is-submit w-button"
                        value="Subscribe now"
                      />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ContactPage;
