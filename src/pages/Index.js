import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { deviceType } from "react-device-detect";
import Features from "../component/Features";

//import images
import images1 from "../images/mmra1.png";
import images2 from "../images/mmra2.jpg";
import images3 from "../images/mmra3.jpg";

import phone from "../images/phone.png";

function Index() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="">
      <div className="relative  ">
        <div className="">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            slidesToSlide={deviceType !== "mobile" ? 1 : 1}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 3000ms ease-in-out"
            transitionDuration={3000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item padding-40px"
            className="relative">
            <div className="pt-16 md:pt-12 md:py-0">
              <div className=" w-full  ml-8  flex items-center h-[30vh] md:h-[80vh] absolute">
                <div className="grid grid-cols-2">
                  <div className=" z-50 text-white  text-base md:text-4xl lg:text-5xl font-bold drop-shadow-md text-left ">
                    <p className="tracking-wide md:tracking-wider leading-relaxed">
                      Comprehensive Cybersecurity and Data Protection Solutions
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[40vh] md:h-[80vh] lg:h-[100vh] absolute w-full z-40 bg-black bg-opacity-60"></div>
              <div className="w-full relative  object-cover   md:h-[80vh] lg:h-[100vh] rounded-full ">
                <img src={images3} alt="MMRA Images" className="w-full" />
              </div>
            </div>
            <div className="pt-16 md:pt-12 md:py-0">
              <div className=" w-full  ml-8  flex items-center h-[30vh] md:h-[80vh] absolute">
                <div className="grid grid-cols-2">
                  <div className="  z-50 text-white  text-base md:text-4xl lg:text-5xl font-bold drop-shadow-md text-left ">
                    <p className="tracking-wide md:tracking-wider leading-relaxed">
                      Explore a comprehensive collection of relevant laws and
                      regulations governing data protection, cybersecurity and
                      electronic transactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[40vh] md:h-[80vh] lg:h-[100vh] absolute w-full z-40 bg-black bg-opacity-60"></div>
              <div className="w-full relative  object-cover   md:h-[80vh] lg:h-[100vh] rounded-full ">
                <img src={images3} alt="MMRA Images" className="w-full" />
              </div>
            </div>
            <div className="pt-16 md:pt-12 md:py-0">
              <div className=" w-full  ml-8  flex items-center h-[30vh] md:h-[80vh] absolute">
                <div className="grid grid-cols-2">
                  <div className=" z-50 text-white text-base md:text-4xl lg:text-5xl font-bold drop-shadow-md text-left ">
                    <p className="tracking-wide md:tracking-wider leading-relaxed">
                      Your Trusted Partner for Cybersecurity and Data Protection
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[40vh] md:h-[80vh] lg:h-[100vh] absolute w-full z-40 bg-black bg-opacity-60"></div>
              <div className="w-full relative  object-cover   md:h-[80vh] lg:h-[100vh] rounded-full ">
                <img src={images2} alt="MMRA Images" className="w-full" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="mt-8 md:mt-12 mx-2 md:mx-8">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 mt-4 gap-2 text-base  ">
          <div className="text-base rounded-2xl bg-primary text-white p-4 shadow-md">
            Hello bruh what the fuck are you doing, I needyou to get the fuck
            away from life. The next time a see you it will be your funeral ui
            laborum do tempor aliqua qui labore reprehenderit. Dolore velit sint
            officia do ut consectetur laborum officia. Laborum ea ea quis
          </div>

          <div className="text-base rounded-2xl bg-primary text-white p-4 shadow-md">
            Qui laborum do tempor aliqua qui labore reprehenderit. Dolore velit
            sint officia do ut consectetur laborum officia. Laborum ea ea quis
            culpa deserunt mollit mollit qui veniam voluptate cupidatat laboris
          </div>

          <div className="text-base rounded-2xl bg-primary text-white p-4 shadow-md">
            Qui laborum do tempor aliqua qui labore reprehenderit. Dolore velit
            sint officia do ut consectetur laborum officia. Laborum ea ea quis
            culpa deserunt mollit mollit qui veniam voluptate cupidatat laboris
            reprehenderit labore.
          </div>

          <div className="text-base rounded-2xl bg-primary text-white p-4 shadow-md">
            Qui laborum do tempor aliqua qui labore reprehenderit. Dolore velit
            sint officia do ut consectetur laborum officia. Laborum ea ea quis
            culpa deserunt mollit mollit qui veniam voluptate cupidatat laboris
          </div>
        </div>

        <div className="md:w-full lg:w-3/4 text-gray-700 leading-6 md:leading-10  text-center text-lg md:text-3xl font-semibold  mx-auto italic md:mt-24 mt-12">
          "Data protection is a crucial human right in the digital era, not only
          to comply with laws but also to preserve privacy and give individuals
          authority over their personal information."
        </div>

        <Features />
        <div className="w-full   py-4 my-8 md:my-24" id="act">
          <div className="xl:w-3/4 mx-auto md:flex md:justify-between md:gap-2 lg:gap-4">
            <div className="w-full px-4 flex items-center">
              <div className="text-left lg:text-base md:text-sm">
                <div className="md:text-2xl lg:text-3xl font-semibold font-sans uppercase">
                  Learn the laws governing cyber Security And Data Protection
                </div>
                We aim to empower users with knowledge, practical advice, latest
                information and laws in the realm of data protection,
                cybersecurity and electronic transactions. Our goal is to help
                you navigate the digital landscape with confidence and safeguard
                your digital assets.
                <br></br>
                <a className="underline italic font-medium py-2 text-primary">
                  Learn More <i class="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img src={phone} alt="MMRA Images" />
            </div>
          </div>
        </div>

        <div className="w-full  bg-primary py-4" id="tips">
          <div className="xl:w-3/4 mx-auto md:flex md:justify-between md:gap-2 lg:gap-4">
            <div className="w-full flex justify-center">
              <img src={phone} alt="MMRA Images" />
            </div>
            <div className="w-full px-4 flex items-center text-gray-200">
              <div className="text-left lg:text-base md:text-sm">
                <div className="md:text-2xl lg:text-3xl font-semibold font-sans uppercase text-gray-100">
                  Get some Tips on your Data Protection
                </div>
                Learn about the importance of compliance with data protection
                laws for both individuals and organizations. Empower yourself
                with knowledge, understand your rights and discover practical
                steps to safeguard your data. Let’s navigate the intricate
                landscape of data protection and foster a secure digital future.
                <br></br>
                <a className="underline italic font-medium py-2 text-gray-100">
                  Learn More <i class="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full   py-4 my-12 md:my-24" id="news">
          <div className="xl:w-3/4 mx-auto md:flex md:justify-between md:gap-2 lg:gap-4">
            <div className="w-full px-4 flex items-center">
              <div className="text-left lg:text-base md:text-sm">
                <div className="md:text-2xl lg:text-3xl font-semibold font-sans uppercase">
                  Read the latest new on cyber Security and Data Protection
                  Rights
                </div>
                Committed to providing you with the most relevant and up-to-date
                news on cybersecurity and data protection. By staying informed,
                you can proactively protect yourself, your organization and your
                digital assets from evolving threats.
                <br></br>
                <a className="underline italic font-medium py-2 text-primary">
                  Learn More <i class="fa-solid fa-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <img src={phone} alt="MMRA Images" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Index;
