const Footer = () => {
  return (
    <div className="footer-meta">
      <div className="footer-meta-list">
        <ul role="list" className="footer-meta-socials w-list-unstyled">
          <li>
            <a
              href="https://github.com/J4WAD"
              target="_blank"
              className="button w-button"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/jawadmalik11"
              target="_blank"
              className="button w-button"
            >
              Behance
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dj-azz/"
              target="_blank"
              className="button w-button"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="footer-meta-info">
          <div>
            <div className="footer-meta-inline">Designed and Developed by </div>
            <a
              href="https://www.linkedin.com/in/dj-azz/"
              target="_blank"
              className="link"
            >
              Djaouad Azzouz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
