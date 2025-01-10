import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> <strong>Rahim</strong> </span>
            from <span className="purple"> <strong>Lucknow - Uttar Pradesh</strong></span>
            <br />
            Frontend developer, I create web pages with UI / UX user interface, 
            
            <br />
            I have 2 years of experience and many happy clients with the project that I created for them.
            <br />
            <br />

            <i class="fa-solid fa-envelope"></i> i.raheem727@gmail.com
            <br />
            <i class="fas fa-phone"></i> 7275138280
            
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
