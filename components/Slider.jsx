import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div>
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
            alt="image"
            className=" object-cover fixed blur-md opacity-40 -z-10  "
          />

          <div className=" flex  lg:flex-nowrap md:flex-nowrap flex-wrap lg:justify-between md:justify-between justify-center h-auto w-full px-20 py-4 ">
            <Image
              src="/necro.jpg"
              width={200}
              height={200}
              alt="image"
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
        <SwiperSlide>
          <Image
            src="/necro.jpg"
            width={2000}
            height={500}
            alt="image"
            className=" object-cover fixed blur-md opacity-40 -z-10  "
          />

          <div className=" flex  lg:flex-nowrap md:flex-nowrap flex-wrap lg:justify-between md:justify-between justify-center h-auto w-full px-20 py-4 ">
            <Image
              src="/necro.jpg"
              width={200}
              height={200}
              alt="image"
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
    </div>
  );
};

export default Slider;
