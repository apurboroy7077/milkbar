import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y, Scrollbar } from "swiper/modules";
import WhatsappLogo from "../assets/images/wh-1.png";
import WhatsappLogo2 from "../assets/images/wh-2.png";
import WomanLogo from "../assets/images/woman.png";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";

export default function ReviewSlider() {
  return (
    <div className="review-swiper-container mt-32 px-5 lg:px-10">
      <div className="review-swiper-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="#A2BB3C" />
        </svg>
        <label>FROM CLIENTS</label>
      </div>
      <Swiper
        modules={[Navigation, A11y, Scrollbar]}
        freeMode={true}
        spaceBetween={100}
        slidesPerView={3}
        navigation={{
          nextEl: ".review-arrow-right",
          prevEl: ".review-arrow-left",
        }}
        scrollbar={{
          draggable: true,
          el: ".review-swiper-custom-scrollbar",
        }}
        loop={false}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
            centeredSlides: true,
          },
          550: {
            spaceBetween: 70,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 70,
            slidesPerView: 3,
          },
          1025: {
            spaceBetween: 100,
            slidesPerView: 3,
          },
          1024: {
            spaceBetween: 100,
            slidesPerView: 3,
          },
          1280: {
            spaceBetween: 200,
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide className="">
            <div className="review-slide-1 ">
              <p className="">
                Working with you has been truly wonderful, and I'm delighted to
                have found your business. You've transformed my brand into
                something I'm proud to showcase, and you've truly nailed it.
              </p>
              <p>TORONTO-BASED DEVELOPER </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-slide-2  w-full">
              <div className="whatsapp-review min-w-full">
                <img
                  src={WhatsappLogo}
                  alt="whastapp-review-logo"
                  className="min-w-full"
                />
                <img
                  src={WhatsappLogo2}
                  alt="whastapp-review-logo"
                  className="min-w-full"
                />
              </div>
              <div className="other-contact-review">
                <img src={WomanLogo} alt="woman-logo" />
                <div className="contact-info">
                  <p>ROSALIND WEINBERG</p>
                  <p>@withrosalind</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-slide-1 ">
              <p className="">
                Working with you has been truly wonderful, and I'm delighted to
                have found your business. You've transformed my brand into
                something I'm proud to showcase, and you've truly nailed it.
              </p>
              <p>TORONTO-BASED DEVELOPER </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-slide-1 ">
              <p>
                Working with you has been truly wonderful, and I'm delighted to
                have found your business. You've transformed my brand into
                something I'm proud to showcase, and you've truly nailed it.
              </p>
              <p>TORONTO-BASED DEVELOPER </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-slide-1">
              <p>
                Working with you has been truly wonderful, and I'm delighted to
                have found your business. You've transformed my brand into
                something I'm proud to showcase, and you've truly nailed it.
              </p>
              <p>TORONTO-BASED DEVELOPER </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="slider_nav d-flex align-items-center justify-content-center nowrap mt-20 lg:mt-28">
        <button className="review-arrow-left arrow common_slider_arrow d-flex align-items-center justify-content-center">
          <img src={LeftArrow} alt="Image" />
        </button>
        <div className="review-swiper-custom-scrollbar slider_scrollbar"></div>
        <button className="review-arrow-right arrow common_slider_arrow d-flex align-items-center justify-content-center">
          <img src={RightArrow} alt="Image" />
        </button>
      </div>
    </div>
  );
}
