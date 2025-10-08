import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";

import ecom from "../../Assets/Projects/e-com.png";
import recipe from "../../Assets/Projects/Recipe-App.png";
import rentcar from "../../Assets/Projects/rentcar.png";
import newsapp from "../../Assets/Projects/newsapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#65799b" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe-Finder"
              description="Build a Recipe Finder app using React.js and Hooks, integrating API for recipes. Search favorite recipes easily with user-friendly design and responsive interface. "
              ghLink="https://github.com/rahimkhan07/Recipe-Finder-App"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="NewsApp"
              description="Develop a news app using React.js and the News API to display current articles"
              ghLink="https://github.com/rahimkhan07/News-App"
              demoLink=""
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce App"
              description="An E-commerce web app built using ReactJS, HTML, CSS, and Bootstrap offers responsive design, user-friendly interfaces, dynamic product listings, and efficient cart management for seamless online shopping experiences."
              ghLink="https://github.com/rahimkhan07/E-commerce.git"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A Weather web app built with ReactJS, HTML, and CSS integrates a Weather API to provide real-time weather updates, current date, and time. It offers responsive design and accurate forecasts for user convenience."
              ghLink="https://github.com/rahimkhan07/Weather-App.git"
              demoLink=""
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentcar}
              isBlog={false}
              title="RentCar Website"
              description="A rent car website built with PHP, HTML, CSS, Bootstrap, and MySQL provides responsive design, car listings, booking forms, secure user login, real-time availability checks, and a database for managing rentals and user data."
              ghLink="https://github.com/rahimkhan07/rentCar.git"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
