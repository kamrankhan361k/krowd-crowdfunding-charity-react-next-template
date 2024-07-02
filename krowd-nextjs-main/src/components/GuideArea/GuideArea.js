import { guideArea } from "@/data/guideArea";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const { bg, tagline, title } = guideArea;

const GuideArea = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <section
      className="guide-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="section-title text-center">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                  />
                  <button className="main-btn main-btn-2">Signup now</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GuideArea;
