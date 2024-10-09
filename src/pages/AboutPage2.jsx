import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useBasic from "../hooks/useBasics/useBasics";

const AboutPage2 = () => {
  const isAdminRoute = window.location.pathname.startsWith("/admin");
  const screenSize = useBasic((state) => state.screenSize);

  return (
    <>
      {!isAdminRoute && screenSize === "SMALL_SCREEN" && <Header />}
      <section>
        <div className="md:hidden">
          <div className="h-screen w-full relative">
            <img
              src="/images/about-page/about-mobile-background.svg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className=" absolute top-0 w-full h-full">
              <div className="w-full h-full flex items-end">
                <div className="bg-[black] bg-opacity-40 backdrop-blur-sm w-full h-[60%]">
                  <div className="px-5 py-10 overflow-scroll h-full">
                    <div>
                      <div className="flex gap-3 items-center">
                        <div className="bg-[#a2bb3c] h-[0.8rem] w-[0.8rem] rounded-full"></div>
                        <div className="">Why Milkbar?</div>
                      </div>
                    </div>
                    <div className="text-sm mt-5 leading-loose">
                      Milkbar is 'Milkbar' because the my family immigrated from
                      a Greek village to Australia.
                    </div>
                    <div className="text-sm mt-5 leading-loose">
                      Many Greek immigrants opened corner shops, emulating the
                      greek cafe tradition, called "Milkbars". Milkbars became
                      cornerstones of a community in transition from immense
                      loss to prosperity while staying grounded in tradition.
                    </div>
                    <div className="text-sm mt-5 leading-loose">
                      Everything beautiful in life lies in the perpetual state
                      between the classic and the new.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="h-screen w-full relative">
            <img
              src="/images/about-page/about-desktop-background.svg"
              alt=""
              className="w-full h-full object-cover object-center"
            />
            <div className=" absolute top-0 w-full h-full">
              <div className="h-full">
                <div className="w-full h-full flex ">
                  <div className=" w-[60%] xl:w-[50%] bg-[black] bg-opacity-40 backdrop-blur-sm h-full ">
                    <div className="flex justify-end items-center h-full">
                      <div className="px-10 xl:pl-16 xl:pr-[175px] py-10 w-[90%] lg:w-[80%] xl:w-[80%]">
                        <div>
                          <div className="flex gap-3 items-center">
                            <div className="bg-[#a2bb3c] h-[0.8rem] w-[0.8rem] rounded-full"></div>
                            <div className=" lg:text-2xl">Why Milkbar?</div>
                          </div>
                        </div>
                        <div className="text-sm lg:text-base mt-5 lg:mt-16 leading-loose">
                          Milkbar is 'Milkbar' because the my family immigrated
                          from a Greek village to Australia.
                        </div>
                        <div className="text-sm lg:text-base mt-5 lg:mt-7 xl:mt-10 leading-loose">
                          Many Greek immigrants opened corner shops, emulating
                          the greek cafe tradition, called "Milkbars". Milkbars
                          became cornerstones of a community in transition from
                          immense loss to prosperity while staying grounded in
                          tradition.
                        </div>
                        <div className="text-sm lg:text-base mt-5 lg:mt-7 xl:mt-10  leading-loose">
                          Everything beautiful in life lies in the perpetual
                          state between the classic and the new.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[40%] xl:w-[50%] h-full"></div>
                </div>
                <div className="absolute top-0 w-full">
                  <div className="py-10">
                    <div className="text-[white] text-center text-2xl font-medium ">
                      milkbar
                    </div>
                    <hr className="mt-10 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage2;
