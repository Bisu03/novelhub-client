import Image from "next/image";
import { FaBullhorn } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Home() {
  return (
    <>
      <div className=" bg-skin-backgroud  py-3 ">
        <div className="pt-20"></div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}>
          <SwiperSlide>
            <Image
              src="https://placeimg.com/300/300/arch"
              width={2000}
              height={500}
              className=" object-cover fixed blur-sm opacity-50 -z-10 "
            />

            <div className=" flex justify-between h-auto w-full px-20 py-4 ">
              <Image
                src="https://placeimg.com/300/300/arch"
                width={300}
                height={500}
                className=" object-cover rounded-xl "
              />

              <div className="card-body">
                <h2 className="card-title text-5xl ">Star Odyssey</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos ex autem quidem quisquam dolores illum ab eum
                  beatae? Tenetur, asperiores accusantium. Numquam harum
                  voluptatibus, accusantium fuga cum velit eius illo illum
                  delectus, nemo doloremque veniam nisi magnam. Nulla eveniet
                  iure fugiat dolorum veritatis voluptatum quae magni
                  praesentium consectetur fuga. Commodi.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn glass btn-wide rounded-full">
                    Read
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://placeimg.com/300/300/arch"
              width={2000}
              height={500}
              className=" object-cover fixed blur-sm opacity-50 -z-10 "
            />

            <div className=" flex justify-between h-auto w-full px-20 py-4 ">
              <Image
                src="https://placeimg.com/300/300/arch"
                width={300}
                height={500}
                className=" object-cover rounded-xl "
              />

              <div className="card-body">
                <h2 className="card-title text-5xl ">Star Odyssey</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos ex autem quidem quisquam dolores illum ab eum
                  beatae? Tenetur, asperiores accusantium. Numquam harum
                  voluptatibus, accusantium fuga cum velit eius illo illum
                  delectus, nemo doloremque veniam nisi magnam. Nulla eveniet
                  iure fugiat dolorum veritatis voluptatum quae magni
                  praesentium consectetur fuga. Commodi.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn glass btn-wide rounded-full">
                    Read
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://placeimg.com/300/300/arch"
              width={2000}
              height={500}
              className=" object-cover fixed blur-sm opacity-50 -z-10 "
            />

            <div className=" flex justify-between h-auto w-full px-20 py-4 ">
              <Image
                src="https://placeimg.com/300/300/arch"
                width={300}
                height={500}
                className=" object-cover rounded-xl "
              />

              <div className="card-body">
                <h2 className="card-title text-5xl ">Star Odyssey</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos ex autem quidem quisquam dolores illum ab eum
                  beatae? Tenetur, asperiores accusantium. Numquam harum
                  voluptatibus, accusantium fuga cum velit eius illo illum
                  delectus, nemo doloremque veniam nisi magnam. Nulla eveniet
                  iure fugiat dolorum veritatis voluptatum quae magni
                  praesentium consectetur fuga. Commodi.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn glass btn-wide rounded-full">
                    Read
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className=" w-full flex justify-between items-center mt-10 px-20 ">
          <div className="text-skin-base text-2xl font-semibold ">
            <h1>Announcement</h1>
          </div>
          <div className="text-skin-grey font-semibold">
            <p>View All</p>
          </div>
        </div>

        <div className="px-20 mt-5">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            // pagination={{
            //   clickable: true,
            // }}
            breakpoints={{
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
            modules={[Pagination]}>
            <SwiperSlide>
              <div class="flex flex-row items-center bg-skin-color4 rounded-3xl p-4 w-[100%] ">
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
            <SwiperSlide>
              <div class="flex flex-row items-center bg-skin-color4 rounded-3xl p-4 w-[100%] ">
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
            <SwiperSlide>
              <div class="flex flex-row items-center bg-skin-color4 rounded-3xl p-4 w-[100%] ">
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
            <SwiperSlide>
              <div class="flex flex-row items-center bg-skin-color4 rounded-3xl p-4 w-[100%] ">
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
            <SwiperSlide>
              <div class="flex flex-row items-center bg-skin-color4 rounded-3xl p-4 w-[100%] ">
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
      </div>
    </>
  );
}
