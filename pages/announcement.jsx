import Image from "next/image";
import React from "react";

const announcement = () => {
  return (
    <>
      <div className="flex justify-center w-full lg:justify-start md:justify-start container  pt-[2.5rem] lg:pt-[5rem] mb-5 ">
        <div
          className={`bg-skin-color4 h-full w-full  flex justify-cente  p-1 rounded-xl shadow-black drop-shadow-md `}>
          <div className="h-full w-full  flex justify-center  items-start   p-4 rounded-lg">
            <Image
              src="https://placeimg.com/180/180/arch"
              width={50}
              height={50}
              alt="image"
              className="rounded-full object-cover resize-none "
            />
            <div className="flex-grow ml-2 ">

              <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Server Maintenance
                </div>
                <div className="collapse-content">
                  <p>
                    Server crash for overloading
                  </p>
                </div>
              </div>

              <p className="text-skin-inverted text-xs pt-2 ">posted 1day ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default announcement;
