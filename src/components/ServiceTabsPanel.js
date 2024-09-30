import React, { useState, useRef, useEffect } from "react";
import Item1 from "../assets/images/service-slide-1.jpg";
import Item2 from "../assets/images/gulet.jpeg";
import Item3 from "../assets/images/home-banner.jpg";
import Item4 from "../assets/images/social-media-banner.jpg";
import Item5 from "../assets/images/work-3.jpg";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import TabArrow from "../assets/images/right_arrow_icon.svg";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// import 'swiper/swiper-bundle.min.css';

import config from "../config";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectFade,
  Thumbs,
  FreeMode,
  Pagination,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";

function ServiceTabsPanel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const [services, setServices] = useState([]);
  const [imageArray, setImageArray] = useState([]);
  const tabRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/api/admin/get-services`,
          { withCredentials: true }
        );
        var images = [];
        if (Array.isArray(response.data)) {
          setServices(response.data); // Set the fetched projects to state

          Promise.all(
            response.data.map((item) => {
              images.push({ image: item.featuredImage, des: item.description });
            })
          );

          setImageArray(images);
        } else {
          console.log("Unexpected response format");
        }
        // setProjects(response.data); // Set the fetched projects to state
      } catch (err) {
        console.log("Failed to fetch services");
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (tabRef.current) {
      const activeItem = tabRef.current.children[activeIndex];
      console.log("activeItem", activeItem);
      if (activeItem) {
        const tabRect = tabRef.current.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const offset =
          itemRect.left + itemRect.width / 2 - tabRect.left - tabRect.width / 2;

        tabRef.current.scrollTo({
          left: offset,
          behavior: "smooth", // Optional: smooth scrolling
        });
      }
    }
  }, [activeIndex]);

  const renderDescription = (des) => {
    if (!des) return;
    var words = des.split(" ");
    words = words.slice(0, 3).join(" ");
    const removed = des.replace(words, "");

    return `<strong>${words}</strong> ${removed}`;
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const makeActiveItem = () => {
    setActiveIndex(1);
  };
  console.log(activeIndex);

  return (
    <>
      <div className="services_tabs_panel position-relative pb-120">
        <div className="service_tabs_wrapper position-relative">
          {/* <div className='service_tab_items hideonmobile'> */}
          <div className="service_tab_items_wrapper">
            <h6 className="services_tab_title">Services</h6>
            <div className="service_tab_items" ref={tabRef}>
              <div className="service_tab_item_title_container">
                {services.map((item, index) => (
                  <div
                    className={`service_tab_item ${
                      activeIndex === index ? "active" : ""
                    }`} // Add 'active' class if current
                    key={index}
                    style={{ margin: "10px 0", cursor: "pointer" }} // Vertical spacing
                    onClick={() => {
                      setActiveIndex(index);
                      setIsVisible(false); // Update active index
                      setTimeout(() => {
                        setIsVisible(true);
                      }, 300);
                    }}
                  >
                    <div className="service-name">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`service_tab_item_content_container ${
                  isVisible ? "active" : ""
                }`}
              >
                <div className="service_desc">
                  <span className="icon">
                    <img
                      src={TabArrow}
                      alt={`${services[activeIndex]?.title} Icon`}
                    />
                  </span>
                  <div className="item_content_inner_container">
                    <span className="text">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: renderDescription(
                            services[activeIndex]?.description
                          ),
                        }}
                      />
                    </span>
                    <button
                      type="button"
                      className="get_a_quote_btn"
                      onClick={() => navigate("/contact")}
                    >
                      Get a Quote
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="59"
                        height="1"
                        viewBox="0 0 59 1"
                        fill="none"
                      >
                        <line
                          x1="0.888916"
                          y1="0.222236"
                          x2="58.6667"
                          y2="0.222236"
                          stroke="white"
                          stroke-width="0.444444"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={false}
                            direction={'vertical'}
                            spaceBetween={35}
                            slidesPerView={5}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper"
                        >
                          
                            <SwiperSlide>
                                <div className='service_tab_item'>
                                    <div className='service-name'>
                                        <h3>consulting</h3>
                                    </div>
                                    <div className='service_desc'>
                                        <span className='icon'><img src={TabArrow} alt="Service Image" /></span>
                                        <span className='text'>
                                            <strong>app-like website design</strong> for portfolio, e-commerce, hospitality websites, and more.
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='service_tab_item'>
                                    <div className='service-name'>
                                        <h3>web and app design</h3>
                                    </div>
                                    <div className='service_desc'>
                                        <span className='icon'><img src={TabArrow} alt="Service Image" /></span>
                                        <span className='text'>
                                            <strong>app-like website design</strong> for portfolio, e-commerce, hospitality websites, and more.
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='service_tab_item '>
                                    <div className='service-name'>
                                        <h3>branding</h3>
                                    </div>
                                    <div className='service_desc'>
                                        <span className='icon'><img src={TabArrow} alt="Service Image" /></span>
                                        <span className='text'>
                                            <strong>brand design and development</strong> from logo design to ground-up concept.
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='service_tab_item'>
                                    <div className='service-name'>
                                        <h3>development</h3>
                                    </div>
                                    <div className='service_desc'>
                                        <span className='icon'><img src={TabArrow} alt="Service Image" /></span>
                                        <span className='text'>
                                            <strong>app-like website design</strong> for portfolio, e-commerce, hospitality websites, and more.
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='service_tab_item'>
                                    <div className='service-name'>
                                        <h3>social media</h3>
                                    </div>
                                    <div className='service_desc'>
                                        <span className='icon'><img src={TabArrow} alt="Service Image" /></span>
                                        <span className='text'>
                                            <strong>app-like website design</strong> for portfolio, e-commerce, hospitality websites, and more.
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper> */}

          {/* </div> */}
          <div
            className={`service_tab_images ${
              isVisible ? "service_tab_image_active" : ""
            }`}
          >
            <img
              src={config.BASE_URL + imageArray[activeIndex]?.image}
              alt="services"
            />
          </div>

          <div className="slider_nav d-flex align-items-center justify-content-center nowrap">
            <button className="service-arrow-left arrow common_slider_arrow d-flex align-items-center justify-content-center">
              <img src={LeftArrow} alt="Left Arrow" />
            </button>
            <div className="service-swiper-custom-scrollbar swiper-pagination"></div>
            <button className="service-arrow-right arrow common_slider_arrow d-flex align-items-center justify-content-center">
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceTabsPanel;
