import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sunil Gupta </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently doing an internship as a Junior Laravel Developer at Aspiring Web Solutions.
            <br />
            I am pursuing a BSc in Computer Science from Annasaheb Vartak College in Vasai.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riffle Shooting
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping 😴 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I love Software and people who built them"{" "}
          </p>
          <footer className="blockquote-footer">Sunil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
