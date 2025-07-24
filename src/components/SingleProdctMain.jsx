import React from "react";
import Image from "./Image";
import Heading from "./Heading";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const SingleProdctMain = ({
  imgSrc,
  imgAlt,
  prodctTitle,
  prodctCtgry,
  prodctPrize,
}) => {
  return (
    <>
      <div className={"group relative"}>
        <Link>
          <Image
            src={imgSrc}
            alt={imgAlt}
            className={"w-[330px] h-[400px] object-cover"}
          />
        </Link>

        <Link to={"/"}>
          <div className="w-[280px] py-4 text-center bg-white absolute left-[50%] -translate-x-[50%] bottom-32 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
            <Heading
              text={"add to cart"}
              as={"p"}
              className={"text-[#222222] text-lg font-medium uppercase"}
            />
          </div>
        </Link>

        <div className="">
          <div className="flex items-center justify-between">
            <Heading
              text={prodctCtgry}
              as={"p"}
              className={"text-[#767676] text-sm font-normal pt-5 pb-4"}
            />
            <Link>
              <CiHeart className={"text-[#767676] text-2xl font-bold"} />
            </Link>
          </div>
          <Heading
            text={prodctTitle}
            as={"p"}
            className={"text-[#222222] text-base font-normal"}
          />
          <div className="flex items-center">
            <Heading
              text={prodctPrize}
              as={"p"}
              className={"text-[#222222] text-base font-normal pt-2"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProdctMain;
