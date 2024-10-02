import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y, Scrollbar } from "swiper/modules";
import WhatsappLogo from "../assets/images/wh-1.png";
import WhatsappLogo2 from "../assets/images/wh-2.png";
import WomanLogo from "../assets/images/woman.png";

export default function ReviewSlider() {
  return (
    <div className="review-swiper-container">
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
        spaceBetween={30}
        slidesPerView={3.8}
        navigation={{
          nextEl: ".service-arrow-right",
          prevEl: ".service-arrow-left",
        }}
        scrollbar={{
          draggable: true,
          el: ".service-swiper-custom-scrollbar",
        }}
        loop={false}
        breakpoints={{
          320: {
            slidesPerView: 1.6,
            spaceBetween: 10,
            centeredSlides: true,
          },
          769: {
            spaceBetween: 15,
            slidesPerView: 2.8,
          },
          769: {
            spaceBetween: 15,
            slidesPerView: 2.8,
          },
          1025: {
            spaceBetween: 12,
            slidesPerView: 2.8,
          },
        }}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
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
          <SwiperSlide>
            <div className="review-slide-2">
              <div className="whatsapp-review">
                <img src={WhatsappLogo} alt="whastapp-review-logo" />
                <img src={WhatsappLogo2} alt="whastapp-review-logo" />
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
            <div className="review-slide-1">
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
    </div>
  );
}
