import { techArea } from "@/data/techArea";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { title, logo, techs } = techArea;

const TechItem = ({ tech = {} }) => {
  const { title, text } = tech;

  return (
    <Col lg={6} md={6}>
      <div className="the-tech-item">
        <h4 className="title">{title}</h4>
        <p>{text}</p>
      </div>
    </Col>
  );
};

const TechArea = () => {
  return (
    <section className="the-tech-area">
      <Container>
        <Row className="no-gutters">
          <Col lg={4}>
            <div className="the-tech-title">
              <h3 className="title">{title}</h3>
            </div>
          </Col>
          <Col lg={8}>
            <div className="the-tech-box">
              <Row className="no-gutters">
                {techs.map((tech) => (
                  <TechItem key={tech.id} tech={tech} />
                ))}
              </Row>
              <div className="tech-logo">
                <Image src={logo.src} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechArea;
