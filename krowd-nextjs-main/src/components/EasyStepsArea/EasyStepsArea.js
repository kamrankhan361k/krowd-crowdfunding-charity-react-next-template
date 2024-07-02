import { easyStepsArea } from "@/data/easyStepsArea";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import Title from "../Reuseable/Title";

const { tagline, title, steps, text } = easyStepsArea;

const StepsItem = ({ step = {} }) => {
  const { id, image, icon, title } = step;

  return (
    <Col lg={3} md={6}>
      <div className="easy-steps-item mt-50 text-center">
        <div className="thumb">
          <Image
            src={require(`src/assets/images/${image}`).default.src}
            alt=""
          />
          <i className={icon}></i>
        </div>
        <br />
        <span>0{id}</span>
        <h4 className="title">
          <a href="#">{title}</a>
        </h4>
      </div>
    </Col>
  );
};

const EasyStepsArea = () => {
  return (
    <section className="easy-steps-area pb-120">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title title={title} tagline={tagline} className="text-center" />
          </Col>
        </Row>
        <Row>
          {steps.map((step) => (
            <StepsItem step={step} key={step.id} />
          ))}
        </Row>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="easy-steps-content text-center">
              <p>{text}</p>
              <Link className="main-btn" href="/single-project">
                Start a Project
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EasyStepsArea;
