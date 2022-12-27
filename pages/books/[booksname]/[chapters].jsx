import Image from "next/image";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import {
  BsBookHalf,
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";

const chapters = () => {
  return (
    <>
      <div className="container bg-skin-backgroud pt-[2.5rem] lg:pt-[5rem]">
        <div className="bg-skin-color4 p-5 ">
          <div className="flex w-full justify-between items-center ">
            <div className="flex  items-center">
              <BsArrowLeftCircle className="h-8 w-8 mr-1" />
              <p>Previous</p>
            </div>
            <div className="flex items-center">
              <p>Next</p>
              <BsArrowRightCircle className="h-8 w-8 ml-1" />
            </div>
          </div>
          <hr className="bg-skin-color4 mt-5 " />
          <section className="text-skin-grey body-font">
            <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
              <Image
                className=" mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://placeimg.com/200/300/arch"
                width={200}
                height={200}
              />
              <div className="w-full md:w-2/3 flex flex-col items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Novel Name - Chaptert 1
                </h1>
                <p className=" leading-relaxed">
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
            <p className=" text-lg">
             lorem1000
            </p>
          </div>
        </div>
      </div>
      <div className="btm-nav bg-skin-color7 z-10 ">
        <button>
          <BsFillArrowLeftSquareFill className="h-5 w-5" />
          <span className="btm-nav-label">Previous</span>
        </button>
        <button>
          <BsBookHalf className="h-5 w-5" />
          <span className="btm-nav-label">Chapters</span>
        </button>
        <button className="active">
          <AiFillSetting className="h-5 w-5" />
          <span className="btm-nav-label">Setting</span>
        </button>
        <button>
          <BsFillArrowRightSquareFill className="h-5 w-5" />
          <span className="btm-nav-label">Next</span>
        </button>
      </div>
    </>
  );
};

export default chapters;
