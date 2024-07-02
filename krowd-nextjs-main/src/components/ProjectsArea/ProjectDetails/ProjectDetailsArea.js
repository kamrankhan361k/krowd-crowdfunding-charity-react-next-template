import { projectDetailsArea } from "@/data/projectsArea";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  thumb,
  flag,
  tagline,
  country,
  title,
  pledged,
  backers,
  daysLeft,
  raised,
  goal,
  socials,
} = projectDetailsArea;

const ProjectDetailsArea = () => {
  return (
    <section className="project-details-area pt-120 pb-190">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="project-details-thumb">
              <Image src={thumb.src} alt="" />
              <div className="icon">
                <i className="fa fa-heart"></i>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="project-details-content">
              <div className="details-btn">
                <span>{tagline}</span>
                <div className="flag">
                  <Image src={flag.src} alt="" />
                  <p>{country}</p>
                </div>
              </div>
              <h3 className="title">{title}</h3>
              <div className="project-details-item">
                <div className="item text-center">
                  <h5 className="title">${pledged}</h5>
                  <span>Pledged</span>
                </div>
                <div className="item text-center">
                  <h5 className="title">{backers}</h5>
                  <span>Backers</span>
                </div>
                <div className="item text-center">
                  <h5 className="title">{daysLeft}</h5>
                  <span>Days Left</span>
                </div>
              </div>
              <div className="projects-range">
                <div className="projects-range-content">
                  <ul>
                    <li>Raised:</li>
                    <li>{raised}%</li>
                  </ul>
                  <div className="range"></div>
                </div>
              </div>
              <div className="projects-goal">
                <span>
                  Goal: <span>{goal} USD</span>
                </span>
              </div>
              <div className="project-btn mt-25">
                <a className="main-btn" href="#">
                  Back this project
                </a>
              </div>
              <div className="project-share d-flex align-items-center">
                <span>Share this Project</span>
                <ul>
                  {socials.map(({ id, icon, href }) => (
                    <li key={id}>
                      <a href={href}>
                        <i className={icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProjectDetailsArea;
