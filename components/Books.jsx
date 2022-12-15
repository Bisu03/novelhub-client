import React from "react";
import Image from "next/image";

const Books = ({ status, score, title, tags }) => {
  return (
    <>
      <div className=" h-auto w-[160px] bg-skin-color4 rounded-xl ">
        <div className="relative">
          {status && (
            <div
              className={`absolute z-10 ${
                status === "ongoing" ? "bg-skin-color7" : "bg-skin-color6"
              } rounded-br-lg`}>
              <p className="text-xs text-skin-base p-1 ">{status}</p>
            </div>
          )}
          <div
            className="radial-progress text-xs absolute right-2 bottom-2 text-skin-inverted"
            style={{
              "--value": `${score*10}`,
              "--size": "30px",
              "--thickness": "3px",
            }}>
            {score}
          </div>
          <Image
            src="/necro.jpg"
            width={200}
            height={500}
            className="rounded-t-lg "
          />
        </div>

        <div className=""></div>
        <div className="p-2">
          <p className="text-sm text-skin-base">{title}</p>
          {tags && <div className="badge badge-accent">{tags}</div>}
        </div>
      </div>
    </>
  );
};

export default Books;
