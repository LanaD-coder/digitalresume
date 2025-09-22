import { skills } from "../data";
import { motion } from "framer-motion";

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="container bg-light py-5">
      <h2 className="mb-4">Skills</h2>
      <div className="row g-4">
        {skills.map((skill, index) => (
          <div className="col-6 col-md-3" key={index}>
            <div className="card h-100 text-center shadow-sm p-3 rounded">
              <img
                src={`${process.env.PUBLIC_URL}${skill.image}`}
                className="card-img-top mx-auto rounded shadow-sm skill-image"
                alt={skill.title}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease", // <-- smooth transition
                }}
              />
              <div className="card-body">
                <h6 className="card-title">{skill.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline CSS for hover effect */}
      <style jsx>{`
        .skill-image:hover {
          transform: scale(1.3); /* grows 30% on hover */
        }
      `}</style>
    </section>
  );
}
