import { teamArea } from "@/data/teamArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const { bg, tagline, title } = teamArea;

const TeamArea = () => {
  return (
    <section
      className="team-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <Title
              title={title}
              tagline={tagline}
              className="section-title-2 text-center"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TeamArea;
