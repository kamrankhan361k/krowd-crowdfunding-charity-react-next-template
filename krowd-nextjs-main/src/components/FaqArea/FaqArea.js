import { faqArea } from "@/data/faqArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Faqs from "./Faqs";

const { bg, tagline, title, text, categories, faqs } = faqArea;

const Category = ({ category = {} }) => {
  const { href, icon, text } = category;
  return (
    <div className="item">
      <a href={href}>
        <i className={icon}></i>
        <br />
        <span>{text}</span>
      </a>
    </div>
  );
};

const FaqArea = () => {
  return (
    <section
      className="faq-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col lg={6}>
            <div className="faq-content">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <p>{text}</p>
              <div className="categories-box-item">
                {categories.map((category) => (
                  <Category key={category.id} category={category} />
                ))}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <Faqs faqs={faqs} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqArea;
