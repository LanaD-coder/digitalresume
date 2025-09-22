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
          {/* Left column with image + personal info */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile-bg.png`}
              alt="Profile"
              className="img-fluid shadow-lg mb-3"
              style={{
                width: "80%",
                height: "auto",
                maxHeight: "70vh",
                borderRadius: "10px",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
              }}
            />

            <br></br>
            <br></br>

            {/* Personal info section */}
            <div className="row text-start d-inline-block">
              {/* English column */}
              <div className="col-auto pe-4">
                <ul className="list-unstyled mb-0">
                  <li>
                    <strong>Date of Birth:</strong> 09 February 1981
                  </li>
                  <li>
                    <strong>Nationality:</strong> South African
                  </li>
                  <li>
                    <strong>Languages:</strong> English - Mother tongue, German
                    - B2 Niveau, Afrikaans - Mother tongue
                  </li>
                  <li>
                    <strong>German Work Visa:</strong> Yes
                  </li>
                  <li>
                    <strong>Address:</strong> Much 53804, Germany
                  </li>
                </ul>
              </div>
              <br></br>
              <br></br>
              {/* German column */}
              <div
                className="col-auto"
                style={{ color: "grey", fontSize: "0.9rem" }}
              >
                <ul className="list-unstyled mb-0">
                  <li>
                    <strong>Geburtsdatum:</strong> 09. Februar 1981
                  </li>
                  <li>
                    <strong>Nationalität:</strong> Südafrikanisch
                  </li>
                  <li>
                    <strong>Sprachen:</strong> Englisch – Muttersprache, Deutsch
                    – B2 Niveau, Afrikaans – Muttersprache
                  </li>
                  <li>
                    <strong>Deutsche Arbeitserlaubnis:</strong> Ja
                  </li>
                  <li>
                    <strong>Adresse:</strong> Much 53804, Deutschland
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column with text */}
          <div className="col-md-6 text-start">
            <h1 className="display-4">
              <strong>Illana De Beer</strong>, <br /> get to know me...
            </h1>
            <p className="lead">
              I read a book recently by Jeffrey Fischer,
              <em> The Next Conversation: Argue Less, Learn More.</em> <br />
              In it, he encourages people to reflect on their personal
              values—three guiding principles that shape who you are. <br />
              <br />
              His was inspiring:
              <br /> 1. Where there is room for kindness, I will use it.
              <br /> 2. Tell them who I am without saying a word.
              <br /> 3. If I can’t be a bridge, I’ll be a lighthouse.
              <br />
              <br />
              You might think, <em>“What an unusual way to start a resume.”</em>
              <br />
              <br />
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
              <br />I hope you enjoy exploring my work as much as I’ve enjoyed
              designing and building it.
            </p>

            {/* German translation below in light grey */}
            <p style={{ color: "grey", fontSize: "0.95rem" }}>
              Ich habe kürzlich ein Buch von Jeffrey Fischer gelesen,
              <em> The Next Conversation: Argue Less, Learn More.</em> Darin
              ermutigt er die Menschen, über ihre persönlichen Werte
              nachzudenken – drei Leitprinzipien, die prägen, wer man ist.
              <br />
              <br />
              Seine waren inspirierend:
              <br /> 1. Wo es Raum für Freundlichkeit gibt, werde ich ihn
              nutzen.
              <br /> 2. Sagen Sie ihnen, wer ich bin, ohne ein Wort zu sagen.
              <br /> 3. Wenn ich keine Brücke sein kann, werde ich ein
              Leuchtturm sein.
              <br />
              <br />
              Vielleicht denken Sie:{" "}
              <em>
                „Was für eine ungewöhnliche Art, einen Lebenslauf zu beginnen.“
              </em>
              <br />
              <br />
              Aber als 44-Jährige, die in Asien, Europa, Großbritannien und
              Afrika gelebt und in verschiedenen Branchen gearbeitet hat, habe
              ich erkannt, dass eine Karriere in der Technologie mehr ist als
              nur Programmieren – es geht um die Denkweise und die Werte, die
              man beim Lösen von Problemen einbringt. Deshalb habe ich diese
              Seite erstellt: um nicht nur meine Projekte zu teilen, sondern
              auch meine Herangehensweise an Full-Stack-Programmdesign. Für mich
              bedeutet Entwicklung mehr, als nur Frameworks oder Sprachen zu
              lernen – es geht darum, durchdachte, funktionale und
              menschenzentrierte Systeme zu schaffen. Meine Projekte spiegeln
              sowohl meinen technischen Werdegang als auch meinen persönlichen
              Stil wider: praktisch und dennoch kreativ, strukturiert und doch
              flexibel. Neben dem Programmieren bringe ich einen starken
              Hintergrund in Logistik und Grafikdesign mit, der mir eine
              einzigartige Perspektive als Entwicklerin verleiht: Ich denke
              sowohl in Bezug auf Systeme als auch auf Erlebnisse. Ob beim
              Erstellen von Front-End-Oberflächen oder Back-End-Architekturen –
              mein Ziel ist es, Lösungen zu entwerfen, die Menschen, Prozesse
              und Möglichkeiten verbinden.
              <br />
              Ich hoffe, Sie genießen es, meine Arbeit zu erkunden, so sehr wie
              ich es genossen habe, sie zu entwerfen und zu erstellen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
