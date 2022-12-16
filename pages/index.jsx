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

export default function Home() {
  return (
    <>
      <div className=" bg-skin-backgroud  py-3 ">
        <div className="pt-[2.5rem] lg:pt-[3rem]"></div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}>
          <SwiperSlide>
            <Image
              src="/necro.jpg"
              width={2000}
              height={500}
              className=" object-cover fixed blur-md opacity-40 -z-10  "
            />

            <div className=" flex  lg:flex-nowrap md:flex-nowrap flex-wrap lg:justify-between md:justify-between justify-center h-auto w-full px-20 py-4 ">
              <Image
                src="/necro.jpg"
                width={200}
                height={200}
                className=" object-cover rounded-xl "
              />

              <div className=" lg:ml-4 ml-0 mt-2 lg:mt-0 flex items-center  justify-start  ">
                <div>
                  <h2 className="card-title text-3xl lg:text-6xl md:text-6xl font-serif text-skin-base ">
                    Star Odyssey
                  </h2>
                  <p className=" hidden lg:block md:block text-skin-base ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos ex autem quidem quisquam dolores illum ab eum
                    beatae? Tenetur, asperiores accusantium. Numquam harum Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit.
                    Dignissimos ex autem quidem quisquam dolores illum ab eum
                    beatae? Tenetur, asperiores accusantium. Numquam harum
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn glass lg:btn-wide btn-block rounded-full mt-2 lg:mt-0">
                      Read
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

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
            className="w-full"
            >
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
