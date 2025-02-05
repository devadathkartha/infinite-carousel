"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
];

const InfiniteCarousel = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <div
        className="relative w-[90vw] h-[320px] p-[20px]"
        onMouseEnter={() => document.querySelector(".swiper")?.swiper?.autoplay.stop()}
        onMouseLeave={() => document.querySelector(".swiper")?.swiper?.autoplay.start()}
        >
        <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            speed={800}
            autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            }}
            navigation={true}
            breakpoints={{
            768: { slidesPerView: 2 },
            }}
            className="w-full h-full"
        >
            {images.map((img, i) => (
            <SwiperSlide key={i} className="relative w-full h-[320px]">
                <Image
                src={img}
                alt={`Slide ${i}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                />
            </SwiperSlide>
            ))}
        </Swiper>

        <style jsx>{`
            .swiper-wrapper {
            transition-timing-function: cubic-bezier(0.4,0,0.57,0.99) !important;
            }
        `}</style>
        </div>
    </div>
  );
};

export default InfiniteCarousel;
