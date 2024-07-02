import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const TestimonialsBox = ({ testimonial = {} }) => {
  const { name, text, image } = testimonial;

  return (
    <div className="testimonials-box mt-30">
      <Row>
        <Col lg={7}>
          <div className="testimonials-content">
            <h4 className="title">{name}</h4>
            <p>{text}</p>
          </div>
        </Col>
        <Col lg={5}>
          <div className="testimonials-thumb text-right">
            <Image
              src={require(`src/assets/images/${image}`).default.src}
              alt=""
            />
            <div className="quote">
              <i className="flaticon-left-quotes-sign"></i>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TestimonialsBox;
