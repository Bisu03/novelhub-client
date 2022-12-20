import Image from "next/image";
import React from "react";

const details = () => {
  return (
    <section className="  text-skin-grey bg-skin-backgroud body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
            <Image
              src="https://placeimg.com/500/500/arch"
              width={500}
              height={500}
              alt="image"
              className=" object-cover resize-none "
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Novel NAME
            </h2>
            <h1 className="text-skin-muted text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                Reviews
              </a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                Details
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam iligo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Score</span>
              <span className="ml-auto text-white">2</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Chapters</span>
              <span className="ml-auto text-white">2</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-gray-500">Status</span>
              <span className="ml-auto text-white">Ongoing</span>
            </div>
            <div className="flex">
              {/* <span className="title-font font-medium text-2xl text-white">
                $58.00
              </span> */}
              <button className="flex w-full  justify-center text-white bg-skin-color6  border border-skin-color5 py-2 px-6 focus:outline-none  rounded">
                Read
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default details;
