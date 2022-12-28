import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const bookmarks = () => {
  return (
    <div className="pt-[4rem] lg:pt-[5rem] container ">
      <div className="flex flex-wrap justify-center w-full mb-5 ">
        <Link href={"/details/8732642674"}>
          <div className="mr-3 mb-3 h-auto w-[160px] bg-skin-color4 rounded-xl cursor-pointer ">
            <div className="relative">
              <div className={`absolute z-10 bg-skin-color7 rounded-br-lg`}>
                <p className="text-xs text-skin-base p-1 ">ongoing</p>
              </div>

              <div className="absolute right-2 bottom-2  rounded-full bg-skin-color7 p-[2px] ">
                <div
                  className="radial-progress text-xs  text-skin-yello"
                  style={{
                    "--value": `${7.5 * 10}`,
                    "--size": "30px",
                    "--thickness": "3px",
                  }}>
                  7.5
                </div>
              </div>
              <div className="absolute right-1 top-1 rounded-full p-[2px] ">
                <AiFillCloseCircle className="w-8 h-8 text-skin-red  " />
              </div>
              <Image
                src="/necro.jpg"
                width={200}
                height={500}
                alt="image"
                className="rounded-t-lg "
              />
            </div>

            <div className="p-2">
              <p className="text-sm text-skin-base">Title</p>
              <div className="badge badge-accent">romance</div>
            </div>
          </div>
        </Link>
        <Link href={"/details/8732642674"}>
          <div className="mr-3 mb-3 h-auto w-[160px] bg-skin-color4 rounded-xl cursor-pointer ">
            <div className="relative">
              <div className={`absolute z-10 bg-skin-color7 rounded-br-lg`}>
                <p className="text-xs text-skin-base p-1 ">ongoing</p>
              </div>

              <div className="absolute right-2 bottom-2  rounded-full bg-skin-color7 p-[2px] ">
                <div
                  className="radial-progress text-xs  text-skin-yello"
                  style={{
                    "--value": `${7.5 * 10}`,
                    "--size": "30px",
                    "--thickness": "3px",
                  }}>
                  7.5
                </div>
              </div>
              <div className="absolute right-1 top-1 rounded-full p-[2px] ">
                <AiFillCloseCircle className="w-8 h-8 text-skin-red  " />
              </div>
              <Image
                src="/necro.jpg"
                width={200}
                height={500}
                alt="image"
                className="rounded-t-lg "
              />
            </div>

            <div className="p-2">
              <p className="text-sm text-skin-base">Title</p>
              <div className="badge badge-accent">romance</div>
            </div>
          </div>
        </Link>
        <Link href={"/details/8732642674"}>
          <div className="mr-3 mb-3 h-auto w-[160px] bg-skin-color4 rounded-xl cursor-pointer ">
            <div className="relative">
              <div className={`absolute z-10 bg-skin-color7 rounded-br-lg`}>
                <p className="text-xs text-skin-base p-1 ">ongoing</p>
              </div>

              <div className="absolute right-2 bottom-2  rounded-full bg-skin-color7 p-[2px] ">
                <div
                  className="radial-progress text-xs  text-skin-yello"
                  style={{
                    "--value": `${7.5 * 10}`,
                    "--size": "30px",
                    "--thickness": "3px",
                  }}>
                  7.5
                </div>
              </div>
              <div className="absolute right-1 top-1 rounded-full p-[2px] ">
                <AiFillCloseCircle className="w-8 h-8 text-skin-red  " />
              </div>
              <Image
                src="/necro.jpg"
                width={200}
                height={500}
                alt="image"
                className="rounded-t-lg "
              />
            </div>

            <div className="p-2">
              <p className="text-sm text-skin-base">Title</p>
              <div className="badge badge-accent">romance</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default bookmarks;
