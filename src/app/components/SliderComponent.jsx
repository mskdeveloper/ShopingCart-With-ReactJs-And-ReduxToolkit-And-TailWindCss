"use client";
import Slider from "react-slick";
import slider1 from "/public/images/image1.jpg";
import slider2 from "/public/images/image2.jpg";
import slider3 from "/public/images/image3.jpg";
import Image from "next/image";
const SliderComponent = () => {
  const slides = [slider1, slider2, slider3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full mx-auto my-8" id="home">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <div className="relative w-full h-[500px]">
              <Image src={slide} alt="" fill className="rounded-3xl" />
              {/*Dark Overelay at The Image */}
              <div className="absolute inset-0 bg-black opacity-30 rounded-3xl"></div>
              {/*Conditional Overlay Text For Each Slide */}
              {index === 0 && (
                <div className="absolute inset-0 flex justify-center md:justify-start">
                  <div className="pl-0 sm:pl-20 h-full flex flex-col justify-center items-center space-y-4">
                    <span className="text-white text-5xl lg:text-7xl font-extrabold uppercase text-center">
                      New Collection
                    </span>
                    <span className="text-[#a91f64] text-6xl md:text-9xl font-bold text-center">
                      2025
                    </span>
                  </div>
                </div>
              )}
              {index === 1 && (
                <div className="absolute inset-0 flex justify-center md:justify-start">
                  <div className="pl-0 sm:pl-20 h-full flex flex-col justify-center items-center space-y-4">
                    <span className="text-white text-5xl lg:text-7xl font-extrabold uppercase text-center">
                      Deal
                    </span>
                    <span className="text-[#a91f64] text-6xl md:text-9xl font-bold text-center">
                      Of The Week
                    </span>
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="absolute inset-0 flex justify-center md:justify-start">
                  <div className="pl-0 sm:pl-20 h-full flex flex-col justify-center items-center space-y-4">
                    <span className="text-white text-5xl lg:text-7xl font-extrabold uppercase text-center">
                      Hot Offers
                    </span>
                    <span className="text-[#a91f64] text-6xl md:text-9xl font-bold text-center">
                      50%
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
