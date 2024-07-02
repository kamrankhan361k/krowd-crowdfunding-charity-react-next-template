import { brandArea } from "@/data/brandArea";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { title, brands } = brandArea;

const BrandItem = ({ brand }) => {
  const { image, className = "" } = brand;

  return (
    <Col lg={4} md={4} sm={4}>
      <div className={`brand-item text-center${className}`}>
        <Image src={image.src} alt="" />
      </div>
    </Col>
  );
};

const BrandArea = () => {
  return (
    <section className="brand-area">
      <Container>
        <div className="brand-box pt-100">
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="brand-content">
                <h3 className="title">{title}</h3>
              </div>
            </Col>
            <Col lg={8}>
              <Row>
                {brands.map((brand) => (
                  <BrandItem key={brand.id} brand={brand} />
                ))}
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default BrandArea;
