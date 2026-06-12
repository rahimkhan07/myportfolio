import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";



function Home() {

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name text-#65799b">
                I'M
                <strong className="main-name"> RAHIM KHAN</strong>
              </h1>
              <p style={{ marginLeft: "8vh" }}>
                A passionate Web App Developer focused on building modern, scalable applications and continuously exploring new tools and frameworks to stay ahead in the evolving tech landscape. Strong collaborator with a growth mindset and a commitment to delivering quality user experiences.
              </p>


              <div style={{ padding: 0, textAlign: "left", marginLeft: "8vh", marginBottom: "10vh" }}>
                <Type />
              </div>

              <div>

                {/* <button onClick={handleDownload} style={{ padding: "1vh", marginLeft: "8vh", border: "none", border: " 2px solid #65799b", borderRadius: "1vh", color: "#65799b", fontWeight: "bold", cursor: "pointer", zIndex:1000, position:"relative" }}> Get  Resume </button> */}
            
                {/* <button style={{ padding: "1vh", marginLeft: "8vh", border: "none", border: " 2px solid #65799b", borderRadius: "1vh", color: "#65799b", fontWeight: "bold", cursor: "pointer" }}> Get In Touch</button> */}
              </div>
    
            </Col>


            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "480px", marginLeft: "5vh" }}
              />
            </Col>
          </Row>
          
        </Container>
      </Container>
      
      <Home2 />
      
    </section>
  );
}


export default Home;
