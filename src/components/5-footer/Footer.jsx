import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top flex">
        <ul className="footer-links flex">
          <li>
            <a href="#Hero">About</a>
          </li>

          <li>
            <a href="#Main">Projects</a>
          </li>

          <li>
            <a href="#Skills">Skills</a>
          </li>

          <li>
            <a href="#Speaking">Social</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        <div className="footer-social flex">
          <a
            href="https://github.com/aminechteoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/amine-chteoui-5372bb202/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>

          <a
            href="https://aminechportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio website"
          >
            Portfolio
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Amine Chteoui. All Rights Reserved.</p>
        <p className="built-with">Built with React, Vite & Framer Motion.</p>
      </div>
    </footer>
  );
}