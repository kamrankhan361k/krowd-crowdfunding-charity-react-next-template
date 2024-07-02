import { galleryPage } from "@/data/portfolioArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PortfolioItem from "./PortfolioItem";

const GalleryPage = () => {
  return (
    <div className="gallery-page-area">
      <Container>
        <Row>
          {galleryPage.map((portfolio) => (
            <Col key={portfolio.id} lg={4} md={6} sm={6}>
              <PortfolioItem portfolio={portfolio} className=" mt-30" />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default GalleryPage;
