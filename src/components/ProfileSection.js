import React from "react";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="container bg-light text-center py-5 d-flex align-items-center"
      style={{
        minHeight: "100vh",
        paddingTop: "10px",
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile-bg.png`}
              alt="Profile"
              className="img-fluid shadow-lg"
              style={{
                width: "80%",
                height: "auto",
                maxHeight: "70vh",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
          <div className="col-md-6 text-start">
            <h1 className="display-4">
              <strong>Illana De Beer</strong>, <br></br> get to know me...
            </h1>{" "}
            <p className="lead">
              {" "}
              Recently I read a book by Jeffrey Fischer,
              <em>The Next Conversation: Argue Less, Learn More.</em> <br></br>
              In it, he encourages people to reflect on their personal
              values—three guiding principles that shape who you are. <br></br>
              <br></br>
              His was inspiring:<br></br> 1. Where there is room for kindness, I
              will use it.
              <br></br> 2. Tell them who I am without saying a word.
              <br></br> 3. If I can’t be a bridge, I’ll be a lighthouse.{" "}
              <br></br>
              <br></br>
              You might think, <em>“What an unusual way to start a resume.”</em>
              <br></br>
              <br></br>
              But as a 44-year-old who has lived in Asia, Europe, Great Britain,
              and Africa, and worked across diverse industries, I’ve come to
              realize that a career in tech is about more than just coding—it’s
              about the mindset and values you bring to solving problems. That’s
              why I built this site: to share not only my projects but also the
              way I approach full-stack program design. To me, development is
              more than learning frameworks or languages—it’s about creating
              thoughtful, functional, and human-centered systems. My projects
              reflect both my technical journey and my personal style: practical
              yet creative, structured yet flexible. Alongside coding, I bring a
              strong background in logistics and graphic design, which gives me
              a unique lens as a developer: I think in terms of both systems and
              experiences. Whether building front-end interfaces or back-end
              architectures, I aim to design solutions that connect people,
              processes, and possibilities.
              <br></br>I hope you enjoy exploring my work as much as I’ve
              enjoyed designing and building it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
