import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

const bookmarks = () => {
  return (
    <div className="pt-[4rem] lg:pt-[5rem] container ">
      <div className="flex flex-wrap justify-center w-full mb-5 ">
        <Link href={"/details/8732642674"}>
          <div className=" mr-3 mb-3 h-auto w-auto bg-skin-color4 rounded-xl cursor-pointer flex p-5">
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
              <Image
                src="/necro.jpg"
                width={200}
                height={300}
                alt="image"
                className="rounded-lg "
              />
            </div>
            <div className="w-full mx-2 ">
              <div className="flex w-full justify-between items-center ">
                <h1>name of novel</h1>

                <AiFillDelete className="w-5 h-5" />
              </div>
              <div className="text-skin-base text-sm title-font font-medium mb-1 flex items-center ">
                <BsFillPersonFill className="mr-2" />
                <h4>xyz author</h4>
              </div>
              <div className="text-skin-base text-sm title-font font-medium mb-1 flex items-center ">
                <BiWorld className="mr-2" />
                <h4>China</h4>
              </div>
              <div className="flex mt-6 items-center ">
                <div className="flex items-center ">
                  <div className="badge badge-outline mr-1 ">neutral</div>
                  <div className="badge badge-outline mr-1 ">neutral</div>
                  <div className="badge badge-outline mr-1 ">neutral</div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default bookmarks;
