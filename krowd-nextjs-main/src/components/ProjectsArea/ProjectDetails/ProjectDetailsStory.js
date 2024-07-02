import { projectDetailsStory } from "@/data/projectsArea";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { id, text, lists, text2, items, text3, image, images } =
  projectDetailsStory;

const ProjectDetailsStory = ({ getClassName }) => {
  return (
    <div className={getClassName?.(id)} id={id} role="tabpanel">
      <div className="project-details-content-top">
        <p>{text}</p>
        <ul>
          {lists.map((list, i) => (
            <li key={i}>
              <i className="flaticon-check"></i> {list}
            </li>
          ))}
        </ul>
        <div className="project-details-thumb">
          <Image src={image.src} alt="" />
        </div>
      </div>
      <div className="project-details-item">
        <p>{text2}</p>
        {items.map(({ id, title, text, className = "" }) => (
          <div className={`item ${className}`} key={id}>
            <i className="flaticon-checkmark"></i>
            <h5 className="title">{title}</h5>
            <p>{text}</p>
          </div>
        ))}
        <Row>
          {images.map((image, i) => (
            <Col lg={6} md={6} sm={6} key={i}>
              <div className="project-details-thumb">
                <Image src={image.src} alt="" />
              </div>
            </Col>
          ))}
        </Row>
        <p className="text">{text3}</p>
      </div>
    </div>
  );
};

export default ProjectDetailsStory;
