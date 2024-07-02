import { faqTitleArea } from "@/data/faqArea";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchIcon from "../Header/SearchIcon";

const { tagline, title } = faqTitleArea;

const FaqTitleArea = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <section className="faq-title-area">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="section-title text-center">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <form onSubmit={handleSubmit(onSubmit)} className="input-box">
                    <input
                      type="text"
                      placeholder="Search here anything..."
                      name="search"
                    />
                    <button>
                      <SearchIcon color="#674df0" />
                    </button>
                  </form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FaqTitleArea;
