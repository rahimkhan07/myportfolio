import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import GitHubRepos from "./GitHubRepos";
import Particle from "../Particle";
import GitHubCalendar from "react-github-calendar";
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
        {/* ── GitHub Repositories Section ── */}
        <GitHubRepos />

        {/* ── Divider ── */}
        <hr style={{ borderColor: "#65799b", margin: "40px 0" }} />

        {/* ── GitHub Contributions Calendar ── */}
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong>
        </h1>
        <p style={{ color: "#65799b" }}>My GitHub contribution activity over the past year.</p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            overflowX: "auto",
          }}
        >
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <GitHubCalendar
              username="rahimkhan07"
              blockSize={14}
              blockMargin={5}
              color="#65799b"
              fontSize={14}
              style={{ maxWidth: "100%" }}
            />
          </Col>
        </Row>

        {/* ── Divider ── */}
        <hr style={{ borderColor: "#65799b", margin: "40px 0" }} />

        {/* ── Project Cards Section ── */}
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
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
              description="Build a Recipe Finder app using React.js and Hooks, integrating API for recipes. Search favorite recipes easily with user-friendly design and responsive interface."
              ghLink="https://github.com/rahimkhan07/Recipe-Finder-App"
              // demoLink="https://your-recipe-app.vercel.app"  ← add your Vercel URL here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="NewsApp"
              description="Develop a news app using React.js and the News API to display current articles."
              ghLink="https://github.com/rahimkhan07/News-App"
              // demoLink="https://your-newsapp.vercel.app"  ← add your Vercel URL here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-commerce App"
              description="An E-commerce web app built using ReactJS, HTML, CSS, and Bootstrap offers responsive design, user-friendly interfaces, dynamic product listings, and efficient cart management for seamless online shopping experiences."
              ghLink="https://github.com/rahimkhan07/E-commerce.git"
              // demoLink="https://your-ecom-app.vercel.app"  ← add your Vercel URL here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A Weather web app built with ReactJS, HTML, and CSS integrates a Weather API to provide real-time weather updates, current date, and time. It offers responsive design and accurate forecasts for user convenience."
              ghLink="https://github.com/rahimkhan07/Weather-App.git"
              // demoLink="https://your-weather-app.vercel.app"  ← add your Vercel URL here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rentcar}
              isBlog={false}
              title="RentCar Website"
              description="A rent car website built with PHP, HTML, CSS, Bootstrap, and MySQL provides responsive design, car listings, booking forms, secure user login, real-time availability checks, and a database for managing rentals and user data."
              ghLink="https://github.com/rahimkhan07/rentCar.git"
              // demoLink="" ← add your Vercel URL here if deployed
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
