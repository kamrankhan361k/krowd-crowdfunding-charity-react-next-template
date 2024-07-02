import { exploreProjects } from "@/data/projectsArea";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Reuseable/Title";
import SingleExploreProject from "./SingleExploreProject";

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const { tagline, title, projects } = exploreProjects;

const ExploreProjects = () => {
  return (
    <section className="explore-projects-3-area">
      <Container fluid className="p-0">
        <Row className="justify-content-center">
          <Col lg={8}>
            <Title title={title} tagline={tagline} className="text-center" />
          </Col>
        </Row>
        <div className="explore-project-2-active">
          <Swiper {...options}>
            <div className="swiper-wrapper">
              {projects.slice(0, 5).map((project) => (
                <SwiperSlide key={project.id}>
                  <SingleExploreProject project={project} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default ExploreProjects;
