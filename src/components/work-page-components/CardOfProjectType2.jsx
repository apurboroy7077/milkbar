import React from "react";

const CardOfProjectType2 = (props) => {
  const { data } = props;
  const {
    name,
    category,
    videoSrc,
    backgroundImageSrc,
    id,
    videoResolutionType,
  } = data;

  return (
    <>
      <div>
        <div className="h-[15rem] sm:h-[20rem] lg:h-[25rem]  relative overflow-hidden rounded">
          <div className="h-full transition-all duration-700 hover:scale-[1.05] cursor-pointer">
            <img
              src={backgroundImageSrc}
              alt=""
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute top-0 h-full w-full bg-[black] bg-opacity-60">
              <div className=" h-full flex justify-center items-center">
                <div className="w-[80%]">
                  <div className="flex justify-center items-center">
                    {videoResolutionType === "REGULAR" && (
                      <video className="w-full" autoPlay loop muted>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {videoResolutionType === "MOBILE" && (
                      <video
                        className="w-[30%] rounded-[11%]"
                        autoPlay
                        loop
                        muted
                      >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="px-3">
          <div className="mt-5 md:mt-10  text-[white] opacity-[0.7] md:text-lg">
            {name}
          </div>
          <div className="mt-3 md:mt-4 text-[white] opacity-[0.7] text-xs md:text-sm">
            {category}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOfProjectType2;
