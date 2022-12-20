import Image from "next/image";
import React from "react";

const Box = ({ color }) => {
  return (
    <div className="flex justify-center lg:justify-start md:justify-start  w-full ">
      <div
        className={`bg-skin-color4  p-1 rounded-xl shadow-black drop-shadow-md`}>
        <div className="h-full  flex  items-center   p-4 rounded-lg">
          <Image
            src="https://placeimg.com/180/180/arch"
            width={50}
            height={50}
            alt="image"
            className="rounded-full object-cover resize-none "
          />
          <div className="flex-grow ml-2 ">
            <h2 className="text-skin-base title-font font-medium">
              Server Maintenance
            </h2>
            <p className="text-skin-inverted text-xs">posted 1day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
