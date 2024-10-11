import React from "react";
import { BACKEND_SERVER_ADDRESS } from "../data/variables/variables-1";
import BrandLogo from "../assets/images/meso.svg";

function brandDirection({ project, brandSection }) {
  const { projectLogo } = project;
  return (
    <>
      <div className="brand_direction position-relative">
        <div className="text-center fw-200">
          <h6 className="text-uppercase m-0">Brand Direction</h6>
          <div className="dotdivider text-center">
            <span></span>
          </div>
          <p className="font-messina">{project?.brandDirection}</p>
          <div className="brand_logo d-flex align-items-center justify-content-center nowrap">
            <div className="common_brand_logo">
              <img
                src={`${BACKEND_SERVER_ADDRESS}${projectLogo}`}
                alt="project logo"
                className="min-w-[231px] h-[30px]"
              />
              {/* <img src={brandSection.brandNameOne} alt="Logo" /> */}
            </div>
            <div className="common_brand_logo active">
              <img
                src={`${BACKEND_SERVER_ADDRESS}${projectLogo}`}
                alt="project logo"
                className="min-w-[231px] h-[30px]"
              />
              {/* <img src={BrandLogo} alt="Logo" /> */}
            </div>
            <div className="common_brand_logo">
              <img
                src={`${BACKEND_SERVER_ADDRESS}${projectLogo}`}
                alt="project logo"
                className="min-w-[231px] h-[30px]"
              />
              {/* <img src={BrandLogo} alt="Logo" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default brandDirection;
