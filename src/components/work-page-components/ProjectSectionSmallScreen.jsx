import React from "react";

const ProjectSectionSmallScreen = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-10 md:gap-20 lg:gap-32">
          <div>
            <div className=" h-[25rem] sm:h-[30rem] lg:h-[30rem] xl:h-[42rem]   relative overflow-hidden rounded ">
              <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                <img
                  src="/images/landing-page/ocean.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-50">
                  <div className=" h-full flex justify-center items-center">
                    <div className="w-[80%]">
                      <div>
                        <video className="w-full" autoPlay loop muted>
                          <source src="/videos/boat.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                        London-based luxury travel concierge
                      </div>
                      <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                        HOSPITALITY-BRAND DIRECTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[15rem] sm:h-[20rem] lg:h-[25rem]  relative overflow-hidden rounded">
              <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                <img
                  src="/images/landing-page/house-2.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                  <div className=" h-full flex justify-center items-center">
                    <div className="w-[80%]">
                      <div className="flex justify-center items-center">
                        <video className="w-full" autoPlay loop muted>
                          <source src="/videos/house.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="px-3">
              <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                London-based luxury travel concierge
              </div>
              <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                HOSPITALITY-BRAND DIRECTION
              </div>
            </div>
          </div>

          <div>
            <div className="h-[15rem] sm:h-[20rem] lg:h-[25rem]  relative overflow-hidden rounded">
              <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                <img
                  src="/images/landing-page/header-image.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                  <div className=" h-full flex justify-center items-center">
                    <div className="w-[60%]">
                      <div className="flex justify-center items-center">
                        <div className="flex justify-between items-end">
                          <div className="w-[30%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                            <img
                              src="/images/landing-page/13-time.jpg"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="w-[30%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                            <img
                              src="/images/landing-page/girl-looking.jpg"
                              alt=""
                              className="w-full"
                            />
                          </div>
                          <div className="w-[30%] rounded-lg overflow-hidden transition-all duration-700 hover:translate-y-[-1rem] cursor-pointer">
                            <img
                              src="/images/landing-page/mobile-image-3.jpg"
                              alt=""
                              className="w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="px-3">
              <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                London-based luxury travel concierge
              </div>
              <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                HOSPITALITY-BRAND DIRECTION
              </div>
            </div>
          </div>
          <div>
            <div className=" h-[25rem] sm:h-[30rem] lg:h-[30rem] xl:h-[42rem]   relative overflow-hidden rounded ">
              <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                <img
                  src="/images/landing-page/inside-house.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                  <div className=" h-full flex justify-center items-center">
                    <div className="w-[80%]">
                      <div className="flex justify-center items-center">
                        <video
                          className="w-[30%] rounded-xl sm:rounded-2xl md:rounded-3xl"
                          autoPlay
                          loop
                          muted
                        >
                          <source src="/videos/mobile.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                        London-based luxury travel concierge
                      </div>
                      <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                        HOSPITALITY-BRAND DIRECTION
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            <div className=" h-[25rem] sm:h-[30rem] lg:h-[30rem] xl:h-[42rem]   relative overflow-hidden rounded ">
              <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                <img
                  src="/images/landing-page/ocean.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-50">
                  <div className=" h-full flex justify-center items-center">
                    <div className="w-[80%]">
                      <div>
                        <video className="w-full" autoPlay loop muted>
                          <source src="/videos/boat.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                        London-based luxury travel concierge
                      </div>
                      <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                        HOSPITALITY-BRAND DIRECTION
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[15rem] sm:h-[20rem] lg:h-[25rem]  relative overflow-hidden rounded">
              <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
                <img
                  src="/images/landing-page/house-2.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
                  <div className=" h-full flex justify-center items-center">
                    <div className="w-[80%]">
                      <div className="flex justify-center items-center">
                        <video className="w-full" autoPlay loop muted>
                          <source src="/videos/house.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="px-3">
              <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
                London-based luxury travel concierge
              </div>
              <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
                HOSPITALITY-BRAND DIRECTION
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSectionSmallScreen;
