import { skills } from "../data";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section id="skills" className="container bg-light py-5">
      <h2 className="mb-4">Skills</h2>
      <div className="row g-4">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-3" key={index}>
            {/* motion.div wraps the card */}
            <motion.div
              className="card h-100 text-center shadow-sm p-3 rounded"
              whileHover={{ rotateY: 360 }}
              transition={{ duration: 0.8 }}
              style={{
                transformStyle: "preserve-3d", // ensures smooth 3D rotation
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}${skill.image}`}
                className="card-img-top mx-auto rounded shadow-sm skill-image"
                alt={skill.title}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div className="card-body">
                <h6 className="card-title">{skill.title}</h6>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
