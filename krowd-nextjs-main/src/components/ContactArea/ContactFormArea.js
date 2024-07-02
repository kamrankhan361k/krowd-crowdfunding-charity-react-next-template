import { contactFormArea } from "@/data/contactArea";
import handleSubmit from "@/utils/handleSubmit";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";

const { tagline, title, inputs } = contactFormArea;

const ContactFormArea = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <section className="contact-form-area">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title title={title} tagline={tagline} className="text-center" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
              <div className="conact-form-item">
                <Row>
                  {inputs.map(({ id, type, name, placeholder, cols, rows }) => (
                    <Col key={id} lg={type ? 6 : 12} md={type ? 6 : 12}>
                      <div className="input-box mt-20">
                        {type ? (
                          <input
                            type={type}
                            placeholder={placeholder}
                            name={name}
                          />
                        ) : (
                          <textarea
                            id="#"
                            cols={cols}
                            rows={rows}
                            placeholder={placeholder}
                            name={name}
                          ></textarea>
                        )}
                      </div>
                    </Col>
                  ))}
                  <Col lg={12}>
                    <div className="input-box mt-20 text-center">
                      <button className="main-btn" type="submit">
                        Submit message
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
            </form>
            <p className="form-message"></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactFormArea;
