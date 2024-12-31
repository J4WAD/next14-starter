"use client";
import { useState } from "react";

const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <main className="main">
      <div className="container">
        <div className="container-small">
          <div className="hero-block">
            <h1 className="hero-heading">
              Full Stack Developer & Creative Strategist open to freelance.
            </h1>
            <div className="text-lead">
              Co-founder of SiferOne. Based in Sétif.
            </div>
            <div className="content-block">
              <div>
                I&apos;m a Full Stack Developer & Creative Technologist
                passionate about blending technology and creativity. My work
                focuses on building seamless digital experiences, crafting
                innovative solutions, and optimizing workflows. Always exploring
                new technologies to push boundaries and create impact.
                <br />
                <br />I specialize in scalable web development, intuitive user
                experiences, and strategy-driven design. With a keen eye for
                detail and a focus on functionality, I help bring ideas to life
                with precision and creativity.
              </div>
            </div>
          </div>
        </div>
        <div className="block-divider"></div>
        <div className="section-block">
          <div className="content-title-wrap">
            <div className="content-title-dot"></div>
            <h2 className="content-title">FAQ</h2>
          </div>
          <div className="accordion-list">
            {[
              {
                question: "Do you offer web development services?",
                answer:
                  "Yes, I specialize in full-stack web development, delivering custom websites and applications tailored to your needs, using modern frameworks and scalable technologies.",
              },
              {
                question: "Can you help with branding or content management?",
                answer:
                  "Absolutely. Alongside development, I offer content strategy and management services to ensure your brand's message is clear and impactful across all platforms.",
              },
              {
                question: "How can I get in touch with you?",
                answer:
                  "You can reach me through my contact form on the website or via email (djaouad@siferone.com). I'm also available on LinkedIn for professional inquiries.",
              },
            ].map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`accordion ${isActive ? "open" : "closed"}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-top">
                    <div className="accordion-top-wrap">
                      <div>{faq.question}</div>
                    </div>
                    <div className="accordion-top-icon">
                      <div
                        className={`accordion-top-icon-wrap ${
                          isActive ? "rotated" : ""
                        }`}
                      >
                        <div className="accordion-icon-stripe-1"></div>
                        <div className="accordion-icon-stripe-2"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-bottom"
                    style={{
                      maxHeight: isActive ? "1000px" : "0",
                      opacity: isActive ? 1 : 0,
                      transition: "max-height 0.6s ease, opacity 0.3s ease",
                    }}
                  >
                    <div className="accordion-bottom-wrap">
                      <div>{faq.answer}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="block-divider"></div>
        <div className="section-block">
          <div className="content-title-wrap">
            <div className="content-title-dot"></div>
            <h2 className="content-title">Pricing</h2>
          </div>
          <div>
            <div className="pricing-heading">120€/h</div>
            <div>
              The completion time of a Web project is evaluated at the beginning
              of the mandate and everything is put in place to respect it. Web
              hosting is afford uneasy joy she thrown though bed set. In me
              forming general prudent on country carried to monthly maintenance
              ranging from €120 to €200.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
