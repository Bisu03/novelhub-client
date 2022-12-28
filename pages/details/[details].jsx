import Image from "next/image";
import React from "react";
import {
  BsFillBookmarkFill,
  BsFillPersonFill,
  BsStarFill,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import Comment from "../../components/Comment";
import Link from "next/link";

const details = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center absolute -z-10 ">
        <Image
          alt="image"
          width={2000}
          height={500}
          className=" object-cover fixed blur-md opacity-20 -z-10"
          src="/necro.jpg"
        />
      </div>
      <section className="text-gray-400 bg-transparent body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="w-full lg:w-[450px] h-auto flex justify-center ">
              <Image
                alt="image"
                width={500}
                height={500}
                className=" object-cover object-center rounded"
                src="/necro.jpg"
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-skin-base tracking-widest badge badge-accent">
                Ongoing
              </h2>
              <h1 className="text-skin-base text-3xl title-font font-medium mb-1">
                Necropolis Immortal
              </h1>
              <div className="text-skin-base text-sm title-font font-medium mb-1 flex items-center ">
                <BsFillPersonFill className="mr-2" />
                <h4>xyz author</h4>
              </div>
              <div className="text-skin-base text-sm title-font font-medium mb-1 flex items-center ">
                <BiWorld className="mr-2" />
                <h4>China</h4>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-skin-red"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-skin-red"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-skin-red"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-skin-red"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-skin-red"
                    viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3">4 Star</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-skin-base space-x-2">
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed text-skin-base">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <div className="flex items-center ">
                  <span className="mr-3 ">Tags:</span>
                  <div className="badge badge-outline mr-1 ">neutral</div>
                  <div className="badge badge-outline mr-1 ">neutral</div>
                  <div className="badge badge-outline mr-1 ">neutral</div>
                </div>
                {/* <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border border-gray-700 focus:ring-2 focus:ring-indigo-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-indigo-500 text-white pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-skin-base pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div> */}
              </div>
              <div className="flex">
                {/* <span className="title-font font-medium text-2xl text-white">
                  $58.00
                </span> */}
                <Link
                  href={"/books/booksname/id21231"}
                  className="flex ml-auto">
                  <button className=" text-skin-base bg-skin-color7 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600  ease-in-out duration-300 rounded-xl">
                    Start Reading
                  </button>
                </Link>
                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-skin-base ml-4">
                  <BsFillBookmarkFill className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* reviews */}
      <div className="bg-skin-backgroud relative container">
        <div className=" w-full flex justify-between items-center pt-10 ">
          <div className="text-skin-base text-2xl font-semibold ">
            <h1>Reviews</h1>
          </div>
          <div className="text-skin-grey font-semibold">
            {/* <p>View All</p> */}
          </div>
        </div>

        <div className="w-full bg-skin-color4 p-6 rounded-xl mt-2">
          <div className="flex justify-center flex-col mb-2 ">
            <div className="flex justify-center text-skin-red ">
              <h1 className="text-2xl ">Rate Us</h1>
            </div>
            <div className="flex justify-center">
              <div className="rating rating-lg">
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                  checked
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
              </div>
            </div>
          </div>
          <div className="form-control pt-5 ">
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Write A Review"></textarea>
            <label className="label">
              <span className="label-text-alt">0 Words</span>
              <button className="flex ml-auto text-skin-base bg-skin-primary border-0 py-2 px-6 focus:outline-none rounded-xl">
                Submit
              </button>
            </label>
          </div>
        </div>

        <div className=" w-full flex justify-between items-center pt-10 ">
          <div className="text-skin-base text-xl font-semibold ">
            <h1>1 Reviews</h1>
          </div>
          <div className="text-skin-grey font-semibold">
            <p>View All</p>
          </div>
        </div>

        <div className=" flex justify-center w-full h-auto py-4 ">
          <Comment />
        </div>
      </div>
    </>
  );
};

export default details;
