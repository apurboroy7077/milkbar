import React, { useEffect, useRef, useState } from "react";
// import { Link } from 'react-router-dom';
import Gallery1 from "../assets/images/gallery-1.png";
// import Gallery2 from '../assets/images/gallery-2.jpg';
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
import { BACKEND_SERVER_ADDRESS } from "../data/variables/variables-1";
import FeaturedImage from "./featured/FeaturedImage";
import FeaturedMedia from "./featured/FeaturedMedia";
gsap.registerPlugin(ScrollTrigger);

const SingleProjectGallery = (props) => {
  const pinContainerRef = useRef(null);
  const { project } = props;
  const { galleryImages } = project;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const changeWindowWidth = () => {
    setWindowWidth(window.innerWidth); // Adjust the width as needed
  };

  useEffect(() => {
    changeWindowWidth(); // Check on mount

    window.addEventListener("resize", changeWindowWidth); // Listen for resize events

    return () => {
      window.removeEventListener("resize", changeWindowWidth); // Cleanup listener on unmount
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top +=400",
          end: "+=1000",
          scrub: true,
          markers: false,
        },
      });

      tl.to(
        ".gallery_image_1",
        {
          duration: 1,
          x: 0,
          y: -100,
        },
        0
      );
      tl.to(
        ".gallery_image_2",
        {
          duration: 1,
          x: windowWidth < 768 ? (windowWidth < 480 ? -50 : -100) : -300,
          y: -50,
        },
        0
      );
      tl.to(
        ".gallery_content1",
        {
          duration: 0.05,
          autoAlpha: 1,
        },
        0.22
      );
      tl.to(
        ".gallery_content2",
        {
          duration: 0.005,
          autoAlpha: 1,
        },
        0.3
      );
      tl.to(
        ".gallery_image_3",
        {
          duration: 1,
          x: windowWidth < 768 ? (windowWidth < 480 ? 100 : 200) : 300,
          y: 0,
        },
        0
      );
      tl.to(
        ".gallery_image_4",
        {
          duration: 1,
          x: 0,
          y: -110,
        },
        0
      );
    });

    return () => {
      ctx.revert();
    };
  }, [windowWidth]);
  return (
    <>
      <div className="home_gallery_block overflow-hidden ptb-120">
        <div
          className="home_gallery_wrapper position-relative pin-container"
          ref={pinContainerRef}
        >
          <div className="home_gallery_top">
            <div className="home_gallery_image position-relative gallery_image_1 z-2">
              <div className="home_gallery_image_sec">
                {/* <img src={Gallery2} alt="Gallery" className="w-100 position-absolute" /> */}
                <FeaturedMedia featuredImage={galleryImages[2]} />
                <div className="gallery_content gallery_content1 text-left">
                  {/* <h4 className="gallery_content_2">
                    Working with you has been truly wonderful, and I'm delighted
                    to have found your business. You've transformed my brand
                    into something I'm proud to showcase, and you've truly
                    nailed it.
                  </h4>
                  <h6 className="font-14">TORONTO-BASED DEVELOPER</h6> */}
                </div>
              </div>
            </div>
          </div>
          <div className="home_gallery_middle d-flex justify-content-center nowrap">
            <div className="home_gallery_image position-relative gallery_image_2 slide-right">
              <div className="home_gallery_image_sec">
                <FeaturedMedia featuredImage={galleryImages[0]} />
              </div>
            </div>
            <div className="home_gallery_image position-relative gallery_image_3 slide-left">
              <div className="home_gallery_image_sec">
                <FeaturedMedia featuredImage={galleryImages[3]} />
              </div>
              <div className="gallery_content gallery_content2 text-right">
                {/* <h4 className="gallery_content3">
                  The Milkbar team are amazing to work and understood my vision
                  right from the beginning. Will definitely recommend Milkbar to
                  others in the luxury home space.
                </h4>
                <h6 className="font-14">HOUSE OF ONE MIAMI - LA</h6> */}
              </div>
            </div>
          </div>
          <div className="home_gallery_bottom">
            <div className="home_gallery_image position-relative gallery_image_4">
              {/* <img src={Gallery4} alt="Gallery" className="w-100 position-absolute" /> */}
              <FeaturedMedia featuredImage={galleryImages[1]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProjectGallery;
