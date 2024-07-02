import { contactInfoArea } from "@/data/contactArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const ContactInfoArea = () => {
  return (
    <section className="contact-info-area">
      <Container fluid className="p-0">
        <Row className="no-gutters justify-content-center">
          {contactInfoArea.map(({ id, title, icon, text, lists = [] }) => (
            <Col key={id} lg={4} md={9}>
              <div
                className={`contact-info-item${id !== 1 ? ` item-${id}` : ""}`}
              >
                <div className="icon">
                  <i className={icon}></i>
                </div>
                <h4 className="title">{title}</h4>
                {text && <TextSplit text={text} as="p" />}
                {lists.length > 0 && (
                  <ul>
                    {lists.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContactInfoArea;
