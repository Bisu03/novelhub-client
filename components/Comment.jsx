import Image from "next/image";
import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Comment = () => {
  return (
    <>
      <div className="flex h-auto w-full px-2 bg-skin-color4 p-6 rounded-xl">
        <div className="flex items-center justify-center w-12 h-12 cursor-pointer">
          <Image
            src="https://placeimg.com/180/180/arch"
            width={180}
            height={180}
            alt="image"
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex justify-between  rounded-lg w-full h-full mx-4 ">
          <div className="flex flex-col justify-between  ">
            <h6 className="text-base">Biswanath Bera</h6>
            <p className="text-[13px] text-skin-base">
              biswanathbera@gmail.com
            </p>
            <div>
              <p className="text-[10px] text-skin-inverted mb-3">1day ago</p>
              <p className="w-[100%] text-sm text-slate-200 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur consectetur veniam, sapiente numquam rerum nostrum esse minima corporis quis?
              </p>
            </div>
          </div>
          <div className="w-auto flex justify-end">
            <AiFillDelete className="w-7 h-7 ml-5 resize-none" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
