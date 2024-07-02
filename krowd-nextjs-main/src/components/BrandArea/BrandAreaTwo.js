import { brands } from "@/data/brandArea";
import React from "react";
import { Container, Image } from "react-bootstrap";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay]);

const options = {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
};

const BrandItem = ({ image }) => {
  return (
    <div className="brand-item text-center">
      <Image src={image.src} alt="" />
    </div>
  );
};

const BrandAreaTwo = ({ className = "" }) => {
  return (
    <div className={`brand-area-2 pt-120 pb-120 ${className}`}>
      <Container>
        <div className="brand-active">
          <Swiper {...options}>
            <div className="swiper-wrapper">
              {brands.map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <BrandItem image={image} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default BrandAreaTwo;
