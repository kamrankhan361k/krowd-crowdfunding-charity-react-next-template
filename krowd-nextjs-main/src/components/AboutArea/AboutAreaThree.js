import { aboutAreaThree } from "@/data/aboutArea";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Reuseable/Title";
import VideoModal from "../Reuseable/VideoModal";

const { tagline, title, image, videoId, aboutTitle, items } = aboutAreaThree;

const AboutItem = ({ item = {} }) => {
  const { title, text } = item;

  return (
    <div className="about-item">
      <i className="flaticon-checkmark"></i>
      <h3 className="title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const AboutAreaThree = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="about-3-area">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Title title={title} tagline={tagline} className="text-center" />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="about-thumb">
                <Image src={image.src} alt="thumb" />
                <a
                  onClick={() => setOpen(true)}
                  className="video-popup cursor-pointer"
                >
                  <i className="fa fa-play"></i>
                </a>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content">
                <div className="about-title">
                  <h3 className="title">{aboutTitle}</h3>
                </div>
                {items.map((item) => (
                  <AboutItem item={item} key={item.id} />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId={videoId} />
    </>
  );
};

export default AboutAreaThree;
