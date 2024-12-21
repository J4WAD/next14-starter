"use client";
import Image from "next/image";
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
              Art Director &amp; UX Designer open to freelance.
            </h1>
            <div className="text-lead">
              Co-founder of Fouroom. Based in ☂ London.
            </div>
            <div className="content-block">
              <div>
                Im an Art Director &amp; Designer however venture pursuit he am
                mr cordial. Forming musical am hearing studied be luckily.
                Ourselves for determine attending how led gentleman sincerity.
                Valley afford uneasy joy she thrown though bed set. In me
                forming general prudent on country carried. Behaved an or
                suppose justice. Seemed whence how son rather easily and change
                missed.
                <br />
                <br />
                Off apartments invitation are unpleasant solicitude fat
                motionless interested. Hardly suffer wisdom wishes valley as an.
                As friendship advantages resolution it alteration stimulated he
                or increasing.
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
                question: "Do you offer web development service?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
              },
              {
                question: "Do you do branding or art direction?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
              },
              {
                question: "How can I contact you?",
                answer:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
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
