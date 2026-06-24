import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef(null);

  return (
    <section id="Hero" className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./mmm.jpg"
            className="avatar"
            alt="Amine Chteoui Profile"
          />

          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software Engineer | Full-Stack Web & Mobile Developer (Angular,
          Django, Flutter)
        </motion.h1>

        <p className="sub-title">
          Software Engineer specialized in Full-Stack Web & Mobile Development
          with experience in Angular, Django, Node.js, and Flutter.
          <br />
          <br />
          I build scalable applications, AI-powered solutions, and modern user
          experiences with a strong focus on performance, maintainability, and
          clean architecture.
          <br />
          <br />
          My projects include AI-powered collaborative platforms, maintenance
          management systems, and modern web applications focused on
          performance, usability, and business value.
          <br />
          <br />
          Currently seeking opportunities to contribute, learn, and grow within
          innovative engineering teams.
        </p>

        <div id="Speaking" className="all-icons flex">
          <a
            href="https://www.facebook.com/aammiin/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <div className="icon icon-facebook2"></div>
          </a>

          <a
            href="https://www.instagram.com/amine.chtiouiii/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <div className="icon icon-instagram"></div>
          </a>

          <a
            href="https://github.com/aminechteoui"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <div className="icon icon-github"></div>
          </a>

          <a
            href="https://www.linkedin.com/in/amine-chteoui-5372bb202/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>

        <div className="hero-actions">
          <a href="/Amine_Chteoui_CV.pdf" download className="cv-btn">
            Download CV
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current?.setSpeed?.(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;