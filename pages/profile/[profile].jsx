import Image from "next/image";
import React from "react";
import { BsFillPenFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";

const profile = () => {
  return (
    <>
      <div className=" justify-center relative flex h-auto lg:mb-5 mb-3 pt-20">
        <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4 h-auto w-auto max-w-[770px] lg:w-[770px]">
          <div className="relative">
            <div className="w-auto max-w-[770px] lg:w-[770px] m-auto overflow-hidden">
              <Image
                src="https://placeimg.com/700/300/arch"
                width={770}
                height={310}
                className="lg:rounded-tr-3xl md:rounded-tr-3xl lg:rounded-tl-3xl md:rounded-tl-3xl object-cover"
              />
            </div>

            <div className="flex absolute inset-x-0 bottom-[-35px] w-full h-auto px-4 justify-between items-center ">
              <div className="flex items-center justify-between w-20 h-20 p-0 cursor-pointer">
                <Image
                  src="https://placeimg.com/180/180/arch"
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>
              <button className="px-4 h-12 justify-center  bg-skin-primary rounded-3xl">
                Edit Profile
              </button>
            </div>
          </div>

          <div className="flex justify-between px-4 mt-16">
            <div className=" h-auto">
              <h6 className="text-md font-[500] leading-4">Biswanath Bera</h6>
              <p className="text-[13px] mt-1 leading-4 text-skin-muted">bisu2834982347</p>
            </div>
            <div className="h-auto text-right">
              <h6 className="text-md font-[500] leading-4">Biswanathbera@gmail.com</h6>
              <p className="text-[13px] mt-1 leading-4 text-skin-muted"></p>
            </div>
          </div>
          <div className="flex justify-between px-4 mt-4">

            <div className="flex">
              <FaBirthdayCake className="mr-2" />
              <p
                target="_blank"
                className="text-[13px] leading-4 text-skin-muted ">
                {profile?.dob || "Birthday not added"}
              </p>
            </div>
          </div>

          <div className=" justify-between px-4 mb-5">
            <div className="flex mt-4">
              <BsFillPenFill className="mr-2" />
              <p className="text-sm leading-4">
                {profile?.bio || "Bio not added"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
