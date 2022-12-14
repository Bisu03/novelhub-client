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
      <div className=" bg-skin-backgroud px-20 py-3 ">
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
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <div className="w-full h-60  ">
              <Image
                src="/1st.jpg"
                width={5000}
                height={1000}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-60">
              <Image
                src="/2nd.jpg"
                width={5000}
                height={1000}
                className="object-cover  "
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div className=" w-full flex justify-between items-center mt-10 ">
          <div className="text-skin-grey text-2xl font-semibold ">
            <h1>Announcement</h1>
          </div>
          <div className="text-skin-base font-semibold">
            <p>View All</p>
          </div>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit consectetur animi amet, earum accusamus quae ad consequatur eveniet quidem commodi ipsum officia nihil suscipit velit vitae! Quis quam magnam vel officia impedit eaque voluptatum itaque illo! Alias atque a eius tempora quaerat quam dolorum. Ea doloribus nemo eveniet, sapiente voluptates illum at, doloremque nam dicta inventore excepturi. Similique velit dicta ipsam harum debitis. Vero dolor sit laborum sed iste cum ex magnam quas laudantium, atque voluptatum ab sequi blanditiis perferendis repudiandae recusandae quia minima! Animi ipsum laudantium obcaecati adipisci harum, tempora esse ducimus. Quod voluptatem architecto cumque fugit, magni eaque aliquam error optio in doloribus delectus praesentium sed consectetur, alias, eum earum ut fuga esse tenetur quas voluptas. In similique nihil aspernatur laboriosam. Aspernatur nam nihil nulla incidunt, magnam harum, minima numquam earum alias beatae odit laudantium hic repellendus ullam obcaecati, quod neque sint vel ea. Quo neque quibusdam quia alias quam consequatur qui illum consectetur debitis. Aperiam repellat, quaerat, consectetur quos, aut modi officiis quis inventore deleniti adipisci labore! Numquam voluptatum accusamus officiis temporibus impedit repellat esse quae autem rerum dolorum a laboriosam distinctio commodi, optio consectetur nobis dignissimos deserunt aspernatur dolor sunt illum voluptatibus? Aperiam possimus minus, ab reiciendis hic voluptate at nam molestiae. Dolore optio aliquid, tenetur nostrum reprehenderit error porro. Assumenda quis consequatur consequuntur, deleniti, officiis minus iusto itaque aperiam dicta dolores eligendi ut nobis odit cum culpa nulla voluptas beatae! Assumenda animi voluptatum perferendis. Illo, accusantium animi necessitatibus eos, quas illum labore facilis odit sequi, veniam nulla dicta. Provident atque exercitationem dicta ducimus aliquid repellendus a. Odio nihil consequatur eius minus corporis aliquid fugit. Sequi, mollitia magni velit eum ex cum voluptas sunt assumenda architecto at non aperiam autem nihil, tempora rem labore. Minima hic exercitationem quibusdam doloribus. Dolorum perspiciatis corrupti exercitationem voluptatem modi nam minus maxime, fugiat, pariatur beatae consequuntur officiis sed eos. Vitae, excepturi est voluptas hic placeat quo ullam nam maiores minima voluptate amet illum suscipit unde natus dignissimos labore quaerat quam laboriosam sunt culpa voluptates qui itaque. Dolorum ut odio eum dolores doloremque laborum architecto optio, ad officia dolore, ducimus necessitatibus facilis eos. Quam odit provident sit officiis quidem nostrum fuga nobis ratione beatae soluta quasi tenetur illo recusandae et, veniam deleniti dolores harum incidunt cupiditate consequuntur iste in est! Voluptatum nihil minima explicabo voluptatibus numquam porro? Tempore provident, debitis quas pariatur optio cumque. Temporibus sapiente quibusdam similique, unde iusto dolor modi. Impedit est eligendi alias possimus libero consequatur placeat, vero sequi iure nobis quos quo ipsum? Atque aperiam perspiciatis fugiat minima? Ab ad vitae nam perspiciatis tempora fugiat voluptates beatae magnam harum eum nemo in molestiae ducimus aut asperiores, assumenda necessitatibus, aliquam placeat cumque quo consequuntur. Illum inventore, cum consequatur dolorem soluta enim facilis asperiores, ducimus assumenda amet dolores explicabo culpa cumque magnam a, eaque qui! Molestias repudiandae optio maiores expedita ducimus veniam! Reprehenderit aliquam consectetur suscipit autem harum sunt iste illum. Eos laudantium omnis quia molestias quisquam possimus. Nisi illo recusandae, vel dolores excepturi voluptatum iusto deleniti aliquam.</p>
      </div>
    </>
  );
}
