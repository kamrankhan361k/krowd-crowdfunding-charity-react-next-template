import bg from "@/images/page-title-bg.jpg";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "./Link";

const PageTitle = ({ title = "", page = "", parent = "" }) => {
  return (
    <section
      className="page-title-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <div className="page-title-content">
              <h3 className="title">{title}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  {parent && (
                    <li className="breadcrumb-item active" aria-current="page">
                      {parent}
                    </li>
                  )}
                  <li className="breadcrumb-item active" aria-current="page">
                    {page || title}
                  </li>
                </ol>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PageTitle;
