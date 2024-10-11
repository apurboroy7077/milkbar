import React from "react";
import { BACKEND_SERVER_ADDRESS } from "../../data/variables/variables-1";
import FeaturedImage from "../featured/FeaturedImage";
import FeaturedVideo from "../featured/FeaturedVideo";
import FeaturedMedia from "../featured/FeaturedMedia";

const HeroSectionOfProjectDetailsPage = (props) => {
  const { project } = props;
  const { title, bannerImage, featuredImage, projectLogo } = project;
  return (
    <>
      <section className="md:mb-10">
        <div className="md:hidden">
          <div className="relative ">
            <img
              src="/images/project/project-details-hero-background-mobile.svg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className="bg-[black] h-full w-full absolute top-0 bg-opacity-[35%] object-cover object-center backdrop-blur-sm">
              <div className="relative  h-full">
                <div>
                  <div className="h-[9rem]   bg-gradient-to-b from-[#010101] to-transparent"></div>
                </div>
                <div className="mt-20">
                  <div className="flex items-center justify-center">
                    <div className="w-[323px] h-[187px]">
                      <img
                        src="/images/project/demo-project-image.svg"
                        alt=""
                        className="w-full h-full object-cover object-center"
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="text-2xl px-5 text-center mt-16 opacity-[0.65]">
                  toronto-based architecture firm
                </div>
                <div className="text-3xl px-5 text-center mt-3   ">
                  <span className="font-medium">contempo</span>
                  <span className="opacity-[0.8]">studio</span>
                </div>
                <div className="h-[5rem] absolute w-full bottom-0    bg-gradient-to-b from-transparent to-[#131313]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative">
            <img
              src={`${BACKEND_SERVER_ADDRESS}${bannerImage}`}
              alt=""
              className="w-full h-[50rem] object-cover object-center"
            />
            <div className="bg-[black] backdrop-blur-sm bg-opacity-[35%] absolute top-0 h-full w-full d-flex project-detail-hero-section">
              <div className="m-auto">
                <div className="mt-20">
                  <div className="flex items-center justify-center">
                    <div className="w-[600px] h-[347px]">
                      <FeaturedMedia featuredImage={featuredImage} />
                    </div>
                  </div>
                </div>
                <div className="text-[28px] px-5 text-center mt-16 opacity-[0.65]">
                  {title}
                </div>
                <div className="d-flex justify-content-center mt-[24px]">
                  <img src={`${BACKEND_SERVER_ADDRESS}${projectLogo}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionOfProjectDetailsPage;
