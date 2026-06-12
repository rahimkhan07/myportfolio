import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiShopify,
  SiWordpress,
} from "react-icons/si";
import {
  TbBrandOpenai,
  TbSparkles,
  TbBrain,
} from "react-icons/tb";

function Toolstack() {
  return (
    <>
      {/* ── Tools I Use ── */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiShopify />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiWordpress />
        </Col>
      </Row>

      {/* ── AI Tools I Use ── */}
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">AI</strong> Tools I Use
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {/* ChatGPT / OpenAI */}
        <Col xs={4} md={2} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="tech-icons" title="ChatGPT">
            <TbBrandOpenai />
          </div>
          <p style={{ fontSize: "0.85em", marginTop: "6px", marginBottom: 0, color: "#65799b", textAlign: "center" }}>
            ChatGPT
          </p>
        </Col>

        {/* Gemini */}
        <Col xs={4} md={2} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="tech-icons" title="Gemini">
            <TbSparkles />
          </div>
          <p style={{ fontSize: "0.85em", marginTop: "6px", marginBottom: 0, color: "#65799b", textAlign: "center" }}>
            Gemini
          </p>
        </Col>

        {/* Claude */}
        <Col xs={4} md={2} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="tech-icons" title="Claude">
            <TbBrain />
          </div>
          <p style={{ fontSize: "0.85em", marginTop: "6px", marginBottom: 0, color: "#65799b", textAlign: "center" }}>
            Claude
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
