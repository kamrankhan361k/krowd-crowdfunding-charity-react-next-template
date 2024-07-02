import { categoriesSection } from "@/data/categories";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const { bg, tagline, title, text, categoriesUser, signIn, categories } =
  categoriesSection;

const CategoriesBoxItem = ({ categories = [] }) => {
  return (
    <div className="categories-box-item">
      {categories.map(({ id, icon, title }) => (
        <div key={id} className="item">
          <a href="#">
            <i className={icon}></i>
            <br />
            <span>{title}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

const Categories = () => {
  return (
    <section
      className="categories-area bg_cover"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="categories-content">
              <span>{tagline}</span>
              <h3 className="title">{title}</h3>
              <p>{text}</p>
              <div className="item d-flex align-items-center">
                <div className="thumb">
                  <Image src={categoriesUser.src} alt="" />
                </div>
                <Image src={signIn.src} alt="singin" />
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="categories-box">
              <CategoriesBoxItem categories={categories.slice(0, 3)} />
              <CategoriesBoxItem categories={categories.slice(3)} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
