import React, { useState } from "react";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

const myProjects = [
  {
    projectTitle: "AI Project Management Platform",
    category: ["fullstack", "angular", "backend"],
    imgPath: "./images/1.jpg",
    description:
      "Built a collaborative project management platform with real-time chat, analytics dashboards, task automation, role-based access, and AI-assisted workflows.",
    liveLink: "",
    githubLink: "",
  },
  {
    projectTitle: "Industrial Maintenance Management System",
    category: ["fullstack", "angular", "backend"],
    imgPath: "./images/2.jpg",
    description:
      "Developed a maintenance management system for intervention requests, technician assignments, equipment tracking, and real-time workflow monitoring.",
    liveLink: "",
    githubLink: "",
  },
  {
    projectTitle: "Interactive Developer Portfolio",
    category: ["react"],
    imgPath: "./images/5.jpg",
    description:
      "Designed and developed a responsive portfolio website to showcase projects, skills, and professional experience with smooth animations and clean UI.",
    liveLink: "https://aminechportfolio.netlify.app/",
    githubLink: "https://github.com/aminechteoui/PortfolioAmine",
  },
];

export default function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    if (buttonCategory === "all") {
      setArr(myProjects);
      return;
    }

    const newArr = myProjects.filter((item) =>
      item.category.includes(buttonCategory)
    );

    setArr(newArr);
  };

  return (
    <main id="Main" className="flex">
      <section className="flex left-section">
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : ""}
        >
          All Projects
        </button>

        <button
          onClick={() => handleClick("fullstack")}
          className={currentActive === "fullstack" ? "active" : ""}
        >
          Full Stack
        </button>

        <button
          onClick={() => handleClick("angular")}
          className={currentActive === "angular" ? "active" : ""}
        >
          Angular
        </button>

        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : ""}
        >
          React
        </button>

        <button
          onClick={() => handleClick("backend")}
          className={currentActive === "backend" ? "active" : ""}
        >
          Backend
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0.4)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.projectTitle}
              className="card"
            >
              <img
                width={266}
                src={item.imgPath}
                alt={`${item.projectTitle} screenshot`}
              />

              <div style={{ width: "266px" }} className="box">
                <h3 className="title">{item.projectTitle}</h3>

                <p className="sub-title">{item.description}</p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    {item.liveLink ? (
                      <a
                        href={item.liveLink}
                        className="icon-link"
                        aria-label={`${item.projectTitle} live demo`}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    ) : (
                      <span
                        className="icon-link disabled-link"
                        aria-label="Live demo not available yet"
                      ></span>
                    )}

                    {item.githubLink ? (
                      <a
                        href={item.githubLink}
                        className="icon-github"
                        aria-label={`${item.projectTitle} GitHub repository`}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    ) : (
                      <span
                        className="icon-github disabled-link"
                        aria-label="GitHub repository not available yet"
                      ></span>
                    )}
                  </div>

                  {item.githubLink ? (
                    <a
                      className="link flex"
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  ) : (
                    <span className="link flex disabled-text">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
}