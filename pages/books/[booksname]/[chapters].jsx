import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillSetting, AiOutlineFontSize } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";

const chapters = () => {
  const [fontSize, setfontSize] = useState("16");
  const [lignHight, setlignHight] = useState("16");
  const [showSettings, setshowSettings] = useState(false);
  const [showChapters, setshowChapters] = useState(false);

  useEffect(() => {
    console.log(fontSize);
  }, [setfontSize]);

  return (
    <>
      <div className="lg:container bg-skin-backgroud pt-[2.5rem] lg:pt-[5rem] pb-5 ">
        <div className="bg-skin-color4 p-5 rounded-xl">
          <div className="flex w-full justify-between items-center ">
            <div className="flex  items-center">
              <BsArrowLeftCircle className="h-8 w-8 mr-1" />
              <p>Previous</p>
            </div>
            {/* <div className="flex  items-center">
                <Image
                className=" object-cover object-center rounded"
                alt="hero"
                src="https://placeimg.com/50/50/arch"
                width={50}
                height={50}
              />
            </div> */}
            <div className="flex items-center">
              <p>Next</p>
              <BsArrowRightCircle className="h-8 w-8 ml-1" />
            </div>
          </div>
          <hr className="bg-skin-color4 mt-5 " />
          <section className="text-skin-grey body-font">
            <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
              {/* <Image
                className=" mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://placeimg.com/200/300/arch"
                width={200}
                height={200}
              /> */}
              <div className="w-full md:w-2/3 flex flex-col items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-skin-base">
                  Novel Name - Chaptert 1
                </h1>
                <p className=" leading-relaxed text-skin-inverted">
                  Author name :- xyz
                </p>
              </div>
            </div>
          </section>
          <hr className="bg-skin-color4 mt-5 " />
          <div className="w-full flex flex-col pt-4">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Chapter 1
            </h1>
            <p
              style={{
                fontSize: fontSize + "px",
                lineHeight: lignHight + "px",
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              earum quibusdam at perspiciatis iste ea consequuntur ipsam? Ab
              nemo soluta enim laboriosam iure saepe tempora tenetur at quaerat
              vitae a adipisci possimus placeat eaque aliquam reprehenderit,
              excepturi sint deleniti impedit veritatis fuga eos labore. Unde
              accusantium culpa facilis asperiores minima animi labore laborum,
              sunt quisquam aliquam incidunt, reprehenderit facere enim eum
              voluptatem magnam commodi similique ad nesciunt molestias! Magnam
              dolorem veritatis illo commodi, quibusdam, amet qui, dolorum
              voluptatem debitis nostrum dolor odio? Cupiditate debitis cum
              facilis corporis atque quis consequatur culpa, a et accusantium,
              repellendus mollitia accusamus laboriosam minima illum? Dolorum
              voluptates rem nostrum adipisci, saepe quae vel impedit qui,
              reprehenderit cupiditate atque ut? Quidem, nihil accusamus? Ipsa
              architecto, deleniti doloremque hic vitae, voluptates delectus
              repellendus fugit accusamus provident sed harum dolorum corporis
              officiis esse iure, quod veniam obcaecati. Esse quis velit
              perspiciatis corrupti eaque reiciendis rerum temporibus sint non
              assumenda, consectetur tenetur magnam officia nihil animi iure
              dignissimos eos ullam nostrum in est ipsa quae illo! Ea aut error
              quod totam! Incidunt, et voluptates? Temporibus, totam aliquid.
              Magni facere dignissimos necessitatibus similique fuga. Quas, hic
              earum, voluptatem eius dicta, perferendis magnam quae consequuntur
              voluptas sunt necessitatibus. Animi repudiandae alias autem dolore
              delectus maxime molestias deserunt aut tenetur fuga iure sint in
              quas, non laborum exercitationem explicabo impedit ducimus eum
              recusandae! Soluta itaque maxime ab laboriosam molestias rerum
              veritatis odit libero molestiae quas, aspernatur, tempora dicta
              harum minus veniam tenetur? Facilis harum vero tempore voluptatem
              possimus repellat dolorem quaerat debitis sit suscipit omnis
              beatae deleniti, fugit, commodi doloribus officia nesciunt placeat
              nobis dolor dignissimos eius qui! Quos rerum enim et earum facere.
              Totam eligendi optio nam alias natus illo vero cumque obcaecati,
              id nostrum in minima enim autem impedit, vel mollitia? Eaque
              possimus earum animi similique modi? Autem repellendus est
              laboriosam id nam aspernatur minima impedit vitae cum eos earum
              officiis possimus excepturi sequi labore nesciunt magni, deserunt
              illo repellat vel illum praesentium pariatur enim. Praesentium
              quos voluptatibus vitae voluptas vero excepturi totam nihil earum
              tempore iste architecto, suscipit quod aut facere recusandae
              impedit doloremque magnam ratione magni repellat iusto? Quod ipsa
              fugiat sapiente tempora recusandae nisi, eos eaque autem, vitae
              facere totam quae ab pariatur aut tenetur. Aliquid aperiam nulla
              sequi a explicabo tempora recusandae voluptatem optio repudiandae
              nobis non animi ratione, distinctio voluptas quia labore vero
              eaque accusamus odio id ab fugiat sit dolorem. Ullam non autem
              facilis minima quas ducimus, fugit delectus quis aliquam! Quo
              explicabo quibusdam enim temporibus expedita, ducimus atque minima
              sequi vitae impedit tenetur perspiciatis voluptas doloribus
              obcaecati reiciendis deleniti excepturi ad maxime libero neque. Ex
              laboriosam voluptatum soluta iure laudantium expedita et, at harum
              nesciunt eos odio? Laudantium iste quibusdam vitae neque optio
              repellat ipsam nam, atque autem hic distinctio consectetur
              explicabo adipisci reiciendis error tempora veniam, inventore
              assumenda aperiam. Laboriosam perspiciatis laborum excepturi
              repellat facilis. Delectus inventore ratione veniam, rerum
              cupiditate ipsam nesciunt pariatur cum hic praesentium architecto
              et at ipsum, error doloribus provident quibusdam tenetur quasi?
              Placeat soluta similique vero, debitis consequuntur perferendis
              officiis amet, porro at, quo rem quod minima voluptatem ut
              suscipit nisi adipisci earum tempora. Libero voluptatem dolor, ab
              quibusdam exercitationem necessitatibus, a nostrum ut tempora
              quidem sequi in. Distinctio porro, quaerat ipsa, excepturi
              doloremque impedit suscipit tempore architecto necessitatibus
              tempora quos itaque dignissimos consectetur accusamus vero vel eum
              similique, assumenda ipsam nihil voluptatibus? Mollitia minus, aut
              sunt sint qui consectetur! Voluptatibus perferendis exercitationem
              deserunt minima, consectetur doloremque quis illum nesciunt
              repudiandae voluptate unde sapiente, optio molestiae eligendi
              ratione magnam? A adipisci autem dolores velit sequi magnam magni?
              Quam repellendus sapiente commodi sed recusandae vel porro!
              Placeat nisi nemo quo facilis est rem perspiciatis asperiores
              similique hic perferendis corrupti quisquam possimus quas tempora
              optio incidunt ipsa dicta quibusdam, minima iusto. Qui, sapiente
              molestias culpa omnis dolorem ipsum amet quia fugiat obcaecati
              quis labore nemo dolor exercitationem explicabo quidem sint
              perferendis nostrum harum autem esse dignissimos, illum ad. Optio
              dolores in natus officia nemo! Et, error ullam fugiat esse fugit
              consectetur sed, rem id incidunt labore laboriosam est libero
              veniam repellendus similique reiciendis distinctio! Nisi facere
              voluptas fuga autem et amet deleniti aliquam repellat eligendi
              reprehenderit optio consectetur quaerat ipsam architecto nam,
              incidunt, dolore repellendus minima unde hic repudiandae id
              ratione quod praesentium. Et eos dolores laborum pariatur ullam
              facere animi deserunt laudantium, ipsam, repellat ex
              necessitatibus enim commodi nesciunt. Fugit, magnam perspiciatis
              ad dolor, unde quae totam ducimus quaerat quisquam odit sunt nemo
              doloribus? Qui consequatur, perspiciatis corrupti ex suscipit
              vitae doloremque delectus enim labore earum dolorem animi, ut
              adipisci. Voluptate molestiae eaque amet, suscipit aut rerum quis
              minima repudiandae necessitatibus ullam magni rem obcaecati, quia
              non, dolorum asperiores corrupti quaerat ratione iure. Distinctio
              aut, incidunt reprehenderit consequatur recusandae rem quos qui
              pariatur nam accusamus quae officiis velit excepturi inventore
              minus molestias eligendi doloribus ipsam id iste neque. Error
              molestiae similique, dolores, rerum dolorem ea magni maxime
              eveniet officiis cupiditate, obcaecati ab sed ratione doloremque
              mollitia fugit hic quae. Cupiditate qui consectetur ad porro? Quo
              unde saepe assumenda autem ducimus? Tempore natus laudantium
              dolorem molestiae quos. Nam nihil libero, iste odio dolor repellat
              minus? Obcaecati eos perferendis qui doloribus alias impedit
              necessitatibus voluptatum non laudantium inventore molestiae,
              asperiores fuga harum vero sequi quas. Praesentium optio cum
              aspernatur illum blanditiis modi fugit quisquam ab quo maiores vel
              natus, nostrum voluptatem fuga sapiente perspiciatis temporibus
              accusamus nobis alias qui deserunt, assumenda odit autem magnam!
              Sequi, incidunt? Saepe aliquid delectus minus repudiandae omnis,
              quasi corporis. Eveniet nisi vel, corporis numquam reiciendis
              autem mollitia qui dolore atque. Totam omnis necessitatibus
              inventore rerum quibusdam illum numquam ipsa commodi quam voluptas
              possimus dolorem sapiente, corporis odio sequi eligendi ea sint
              sunt ex, consectetur nostrum aspernatur porro quos facilis? Ut sed
              harum nam cum maxime expedita, maiores minus numquam quae sit?
              Dolores autem impedit quos commodi voluptatibus at laborum
              molestiae temporibus porro, accusamus deleniti iure. Repellendus
              nobis repudiandae quod assumenda nesciunt autem, mollitia
              provident fugit rerum, corrupti consequuntur quaerat explicabo et
              aspernatur est iste ex. Veritatis est voluptas nesciunt obcaecati,
              dolores sed dicta quidem minima?
            </p>
          </div>
        </div>
      </div>

      {showSettings && (
        <div className="flex justify-center">
          <div
            className="fixed h-auto w-auto 
           bg-skin-color7 bottom-16 mb-3 z-10 p-5 rounded-2xl">
            <div className="flex justify-between mb-5 ">
              <p className="mr-5">Font Size</p>
              <input
                type="range"
                min="0"
                max="30"
                value={fontSize}
                onChange={(e) => setfontSize(e.target.value)}
                className="range w-48 "
              />
            </div>
            <div className="flex justify-between  ">
              <p className="mr-5">Font Spacing</p>
              <input
                type="range"
                min="0"
                max="60"
                className="range w-48 "
                value={lignHight}
                onChange={(e) => setlignHight(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      <div className="btm-nav bg-skin-color7 z-20 ">
        <button
          onClick={() => setshowChapters(!showChapters)}
         >
          <div className="flex items-center ">
            <HiOutlineMenuAlt1 className="h-5 w-5  " />
            <p className="ml-2 hidden lg:block " >Novel Name - Chaptert 1</p>
          </div>
        </button>
        <button onClick={() => setshowSettings(!showSettings)}>
          <AiOutlineFontSize className="h-5 w-5" />
        </button>
        <button>
          <BsFillArrowLeftSquareFill className="h-5 w-5" />
        </button>
        <button>
          <BsFillArrowRightSquareFill className="h-5 w-5" />
        </button>
      </div>

      {showChapters && (
        <div className="fixed top-14 left-0  z-10 ">
          <div className="drawer-side h-full  ">
            <ul className="menu flex-nowrap p-4 w-80 h-[86vh] bg-skin-backgroud text-base-content overflow-y-scroll ">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a className="active">Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Sidebar Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default chapters;
