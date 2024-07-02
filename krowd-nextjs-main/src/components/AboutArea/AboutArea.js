import { aboutArea } from "@/data/aboutArea";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";

const {
  thumb1,
  thumb2,
  tagline,
  title,
  text,
  lists,
  experience,
  experienceText,
} = aboutArea;

const AboutArea = () => {
  return (
    <section className="about-area pt-120 pb-120">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-thumb">
              <Image src={thumb1.src} alt="about" />
              <div className="thumb">
                <Image src={thumb2.src} alt="" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-content">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <p>{text}</p>
              <div className="list">
                <ul>
                  {lists.map((list, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i> {list}
                    </li>
                  ))}
                </ul>
                <div className="box text-center">
                  <h4 className="title">{experience}</h4>
                  <TextSplit text={experienceText} as="span" />
                </div>
              </div>
              <Link className="main-btn" href="/about">
                Discover more
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutArea;
