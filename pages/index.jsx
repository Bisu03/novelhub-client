import Image from "next/image";
import { FaBullhorn } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import Books from "../components/Books";
import Slider from "../components/Slider";

export default function Home({ color }) {
  return (
    <>
      <div className={` ${color == "Dark" ? "bg-skin-backgroud" : "bg-skin-secondary"}  py-3 `}>
        <div className="pt-[2.5rem] lg:pt-[3rem]"></div>
        <Slider />

        <div className=" w-full flex justify-between items-center mt-10 container">
          <div className="text-skin-base text-2xl font-semibold ">
            <h1>Announcement</h1>
          </div>
          <div className="text-skin-grey font-semibold">
            <p>View All</p>
          </div>
        </div>

        <div className="px-20 mt-5 flex justify-center ">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="w-full">
            <SwiperSlide>
              <div className="flex flex-row items-center bg-skin-color4 rounded-3xl p-4 w-[100%] ">
                <div className="h-14 w-14 flex items-center resize-none">
                  <Image
                    src="https://placeimg.com/180/180/arch"
                    width={180}
                    height={180}
                    className="rounded-full object-cover resize-none "
                  />
                </div>
                <div className=" w-full ml-4 ">
                  <h1 className="w-auto text-skin-base ">server maintenance</h1>
                  <p className="text-xs"> 1day ago</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className=" w-full flex justify-between items-center mt-10 container ">
          <div className="text-skin-base text-2xl font-semibold ">
            <h1>New Arrivals</h1>
          </div>
          <div className="text-skin-grey font-semibold">
            {/* <p>View All</p> */}
          </div>
        </div>

        <div className="px-20 mt-5 flex justify-center w-full">
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            // pagination={{
            //   clickable: true,
            // }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 40,
              },
            }}
            modules={[Autoplay, Pagination]}>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Books
                title="Necropolis Immortal"
                score="7.2"
                status="ongoing"
                tags="fantacy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
