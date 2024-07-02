import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useSwiperSlide } from "swiper/react";
import Link from "../Reuseable/Link";

const SingleBanner = ({
  singleSlide = {},
  isBannerTwo = false,
  isBannerThree = false,
}) => {
  const { isActive } = useSwiperSlide();

  const { bg, text, title, banner, banner1, banner2 } = singleSlide;

  return (
    <div
      className={`banner-area bg_cover d-flex ${
        isBannerThree ? "banner-3-area align-items-end" : "align-items-center"
      }`}
      style={{
        backgroundImage: `url(${
          require(`src/assets/images/${bg}`).default.src
        })`,
      }}
    >
      <Container>
        <Row
          className={
            isBannerTwo || isBannerThree
              ? "justify-content-start"
              : "justify-content-center"
          }
        >
          <Col lg={8}>
            <div
              className={`banner-content${
                !isBannerTwo && !isBannerThree ? " text-center" : ""
              }`}
            >
              {!isBannerTwo && !isBannerThree && (
                <div
                  className={`box${isActive ? " animated fadeInDown" : ""}`}
                ></div>
              )}
              {!isBannerTwo && !isBannerThree && <br />}
              {!isBannerTwo && !isBannerThree && (
                <span className={isActive ? " animated fadeInLeft" : ""}>
                  {text}
                </span>
              )}
              <h3
                className={`title${isActive ? " animated fadeInRightBig" : ""}`}
              >
                {title}
              </h3>
              <Link
                className={`main-btn${isActive ? " animated zoomIn" : ""}`}
                href="/single-project"
              >
                Start a Project
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      {!isBannerTwo && !isBannerThree && (
        <div
          className={`banner-line${isActive ? " animated fadeInRightBig" : ""}`}
        >
          <Image src={banner.src} alt="" />
        </div>
      )}
      {isBannerTwo && (
        <>
          <div className="banner-color-shadow">
            <Image src={banner.src} alt="" />
          </div>
          <div className="banner-line">
            <Image src={banner1.src} alt="" />
          </div>
          <div className="banner-line-2">
            <Image src={banner2.src} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleBanner;
