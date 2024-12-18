const Footer = () => {
  return (
    <div className="footer-meta">
      <div className="footer-meta-list">
        <ul role="list" className="footer-meta-socials w-list-unstyled">
          <li>
            <a href="#" className="button w-button">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="button w-button">
              Behance
            </a>
          </li>
          <li>
            <a href="#" className="button w-button">
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="footer-meta-info">
          <div>
            <div className="footer-meta-inline">A product of </div>
            <a
              href="https://www.instagram.com/j4wad"
              target="_blank"
              className="link"
            >
              J4LABS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
