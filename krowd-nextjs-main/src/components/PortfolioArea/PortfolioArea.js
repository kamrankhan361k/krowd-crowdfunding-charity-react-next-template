import { portfolioArea } from "@/data/portfolioArea";
import React from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PortfolioItem from "./PortfolioItem";

SwiperCore.use([Autoplay]);

const options = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
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

const PortfolioArea = () => {
  return (
    <div className="portfolio-area">
      <Container fluid>
        <div className="portfolio-active">
          <Swiper {...options}>
            <div className="swiper-wrapper">
              {portfolioArea.map((portfolio) => (
                <SwiperSlide key={portfolio.id}>
                  <PortfolioItem portfolio={portfolio} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioArea;
