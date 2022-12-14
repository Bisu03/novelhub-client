import Image from "next/image";
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
          <div className="text-skin-grey text-2xl font-semibold ">
            <h1>Announcement</h1>
          </div>
          <div className="text-skin-base font-semibold">
            <p>View All</p>
          </div>
        </div>

        
      </div>
    </>
  );
}
