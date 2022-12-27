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
import Box from "../components/Box";
import Link from "next/link";

export default function Home({ color }) {
  return (
    <>
      <div
        className={` ${
          color == "Dark" ? "bg-skin-backgroud" : "bg-skin-secondary"
        }  py-3 `}>
        <div className="pt-[2.5rem] lg:pt-[3rem]"></div>
        <Slider />

        <div className="container">
          {/* announcement  */}
          <div className=" w-full flex justify-between items-center mt-10 ">
            <div className="text-skin-base text-2xl font-semibold ">
              <h1>Announcement</h1>
            </div>
            <div className="text-skin-grey font-semibold hover:text-teal-600 ">
              <Link href={"/announcement"}>
                <p>View All</p>
              </Link>
            </div>
          </div>

          <div className="  mt-5 flex justify-center ">
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
                <Box />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* 1st slider  */}
          <div className=" w-full flex justify-between items-center mt-10  ">
            <div className="text-skin-base text-2xl font-semibold ">
              <h1>Popular This Week</h1>
            </div>
            <div className="text-skin-grey font-semibold">
              {/* <p>View All</p> */}
            </div>
          </div>

          <div className=" mt-5">
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
                  slidesPerView: 2,
                  spaceBetween: 5,
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

          {/* 2st slider  */}
          <div className=" w-full flex justify-between items-center mt-10  ">
            <div className="text-skin-base text-2xl font-semibold ">
              <h1>New Arrivals</h1>
            </div>
            <div className="text-skin-grey font-semibold">
              {/* <p>View All</p> */}
            </div>
          </div>

          <div className=" mt-5">
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
                  slidesPerView: 2,
                  spaceBetween: 5,
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

          {/* 3rd slides  */}
          <div className=" w-full flex justify-between items-center mt-10  ">
            <div className="text-skin-base text-2xl font-semibold ">
              <h1>Ranking</h1>
            </div>
            <div className="text-skin-grey font-semibold">
              {/* <p>View All</p> */}
            </div>
          </div>
          <div className="flex  mt-4 ">
            <button className="btn btn-md mr-2 border-skin-primary text-skin-inverted ">
              Most Popular
            </button>
            <button className="btn btn-md mr-2 border-skin-primary text-skin-inverted ">
              New
            </button>
            <button className="btn btn-md border-skin-primary text-skin-inverted ">
              High Ranking
            </button>
          </div>

          <div className=" mt-5">
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
                  slidesPerView: 2,
                  spaceBetween: 5,
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

          {/* 4th sildes  */}

          {/* 2st slider  */}
          <div className=" w-full flex justify-between items-center mt-10  ">
            <div className="text-skin-base text-2xl font-semibold ">
              <h1>Novel Just Compleated</h1>
            </div>
            <div className="text-skin-grey font-semibold">
              {/* <p>View All</p> */}
            </div>
          </div>

          <div className=" mt-5">
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
                  slidesPerView: 2,
                  spaceBetween: 5,
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
      </div>
    </>
  );
}
