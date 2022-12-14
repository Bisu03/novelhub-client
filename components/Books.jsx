import React from "react";
import Image from "next/image";
import Link from "next/link";

const Books = ({ status, score, title, tags }) => {
  return (
    <>
      <Link href={"/details/8732642674"} >
        <div className=" h-auto w-[160px] bg-skin-color4 rounded-xl cursor-pointer ">
          <div className="relative">
            {status && (
              <div
                className={`absolute z-10 ${
                  status === "ongoing" ? "bg-skin-color7" : "bg-skin-color6"
                } rounded-br-lg`}>
                <p className="text-xs text-skin-base p-1 ">{status}</p>
              </div>
            )}
            <div className="absolute right-2 bottom-2  rounded-full bg-skin-color7 p-[2px] ">
              <div
                className="radial-progress text-xs  text-skin-yello"
                style={{
                  "--value": `${score * 10}`,
                  "--size": "30px",
                  "--thickness": "3px",
                }}>
                {score}
              </div>
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
            <p className="text-sm text-skin-base">{title}</p>
            {tags && <div className="badge badge-accent">{tags}</div>}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Books;
