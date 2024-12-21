import React from "react";
import Footer from "@/components/footer/Footer";

const ContactPage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="hero-block">
          <div className="hero-heading-wrap">
            <div className="hero-icon">
              <div className="icon-svg w-embed">
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
            <div
              id="w-node-c98478fb-b849-c8b6-5d74-2ac4447cab12-a30fcb40"
              data-w-id="c98478fb-b849-c8b6-5d74-2ac4447cab12"
              className="card"
            >
              <div className="shine-wrap">
                <div className="shine"></div>
              </div>
              <div className="card-content-vertical">
                <img
                  src="images/bildschirmfoto-202023-03-17-20um-2009.43.01.png"
                  loading="lazy"
                  style={{ opacity: 0.5 }}
                  sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, (max-width: 991px) 93vw, 64vw"
                  alt=""
                  srcSet="images/bildschirmfoto-202023-03-17-20um-2009.43.01-p-500.png 500w, images/bildschirmfoto-202023-03-17-20um-2009.43.01-p-800.png 800w, images/bildschirmfoto-202023-03-17-20um-2009.43.01-1.png 2014w"
                  className="map-image"
                />
                <div style={{ opacity: 0 }} className="map-outline"></div>
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
            <a href="#" className="card w-inline-block">
              <div className="shine-wrap">
                <div className="shine"></div>
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
          </div>
        </div>

        <div className="block-divider"></div>

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
                        <path fillRule="evenodd" d="M..." clipRule="evenodd" />{" "}
                        {/* Add paths */}
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
