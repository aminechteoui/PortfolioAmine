import "./skills.css";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Front-End",
    skills: [
      { icon: "⚡", name: "Angular" },
      { icon: "⚛️", name: "React.js" },
      { icon: "🟨", name: "JavaScript ES6+" },
      { icon: "🎨", name: "HTML5 & CSS3" },
      { icon: "🔷", name: "TypeScript" },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { icon: "🍃", name: "Spring Boot" },
      { icon: "🐍", name: "Django" },
      { icon: "🟢", name: "Node.js / Express.js" },
      { icon: "🔗", name: "REST APIs" },
    ],
  },
  {
    title: "Database",
    skills: [
      { icon: "🐘", name: "PostgreSQL" },
      { icon: "🍃", name: "MongoDB" },
      { icon: "🗄️", name: "MySQL" },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { icon: "🐙", name: "Git" },
      { icon: "🌐", name: "GitHub" },
      { icon: "🐳", name: "Docker" },
      { icon: "📮", name: "Postman" },
      { icon: "🎯", name: "Figma" },
    ],
  },
];

const currentStack = [
  "Angular",
  "Spring Boot",
  "PostgreSQL",
  "Django",
  "React",
  "Docker",
  "GitHub",
];

const Skills = () => {
  return (
    <section id="Skills" className="container">
      <div className="main-title">
        <span className="section-label">Technical Expertise</span>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <span>My </span>Skills
        </motion.h1>

        <p>
          I continuously improve my technical skills through real-world
          projects, problem solving, and hands-on development. My expertise
          covers modern web technologies, backend systems, databases, and
          software engineering best practices.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h2>{group.title}</h2>

            <div className="tags">
              {group.skills.map((skill) => (
                <span key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="current-stack">
        <h3>Currently Working With</h3>

        <div className="current-tags">
          {currentStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;