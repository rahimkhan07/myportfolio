import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="purple" style={{ textAlign: "justify" }}>
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
       
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
