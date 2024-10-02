import React, { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';
import Gallery2 from "../assets/images/gallery-2.jpg";
import Gallery3 from "../assets/images/gallery-3.png";
import Video from "../assets/videos/single-projectslider-video.mp4";
import Video2 from "../assets/videos/single-projectslider-video2.mp4";
// import Gallery4 from '../assets/images/gallery-4.jpg';
// import Video from '../assets/videos/reviews-video.mp4';
// import Video2 from '../assets/videos/reviews-video2.mp4';
// import Video3 from '../assets/videos/reviews-video3.mp4';
// import ReviewImage1 from '../assets/images/review-image-1.jpg';
// import ReviewImage3 from '../assets/images/review-image-3.jpg';
// import ReviewImage4 from '../assets/images/review-image-4.jpg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SingleProjectGallery() {
  const pinContainerRef = useRef(null);

  return (
    <>
      <div className="home_gallery_block overflow-hidden">
        <div className="gallery-title-container mobile-version">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="5"
            viewBox="0 0 5 5"
            fill="none"
          >
            <circle cx="2.22222" cy="2.22222" r="2.22222" fill="#A2BB3C" />
          </svg>
          <div className="gallery-title-content">
            <h3>full stack development meets experiential design</h3>
            <ul>
              <li>app development</li>
              <li>custom data management solutions</li>
              <li>app integration meets branded ux</li>
            </ul>
          </div>
        </div>
        <div className="gallery-top-container">
          <div className="gallery-content-1">
            <video autoPlay muted loop playsInline className="object-fit-cover">
              <source src={Video2} type="video/mp4" />
            </video>
            <div className="gallery-content-review-title">
              <h4>London-based luxury travel concierge</h4>
              <p>HOSPITALITY · BRAND DIRECTION · PHYSICAL DESIGN</p>
            </div>
          </div>
          <div className="gallery-content-2">
            <div className="gallery-title-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="5"
                viewBox="0 0 5 5"
                fill="none"
              >
                <circle cx="2.22222" cy="2.22222" r="2.22222" fill="#A2BB3C" />
              </svg>
              <div className="gallery-title-content">
                <h3>full stack development meets experiential design</h3>
                <ul>
                  <li>app development</li>
                  <li>custom data management solutions</li>
                  <li>app integration meets branded ux</li>
                </ul>
              </div>
            </div>
            <img src={Gallery2} alt="gallery-2" />
            <p className="gallery-review-title">Tokyo-based coffee company</p>
          </div>
        </div>
        <div className="gallery-bottom-container">
          <div className="gallery-content-3">
            <img src={Gallery3} alt="gallery-3" />
            <p className="gallery-review-title">
              Members-only dating app - launching late 2024
            </p>
          </div>
          <div className="gallery-content-4">
            <video autoPlay muted loop playsInline className="object-fit-cover">
              <source src={Video} type="video/mp4" />
            </video>
            <div className="gallery-content-review-title">
              <h4>Toronto-based architecture firm</h4>
              <p>HOSPITALITY · BRAND DIRECTION · PHYSICAL DESIGN</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
