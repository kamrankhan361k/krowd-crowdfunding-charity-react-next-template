import { superstarsArea } from "@/data/superstarsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import VisibilityCountUp from "../Reuseable/VisibilityCountUp";

const { icon, title, text, count, experience, title2, text2 } = superstarsArea;

const SuperstarsArea = () => {
  return (
    <section className="superstars-area">
      <Container>
        <Row>
          <Col lg={6} md={8}>
            <div className="superstars-content">
              <div className="icon">
                <i className={icon}></i>
              </div>
              <h3 className="title">{title}</h3>
              <p>{text}</p>
              <div className="box text-center">
                <h4 className="title">
                  <span className="odometer">
                    <VisibilityCountUp count={count} />
                  </span>
                  k
                </h4>
                <span>
                  <TextSplit text={experience} />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="superstars-find-it">
        <h3 className="title">{title2}</h3>
        <p>{text2}</p>
        <Link className="main-btn" href="#">
          Sign up now
        </Link>
      </div>
    </section>
  );
};

export default SuperstarsArea;
