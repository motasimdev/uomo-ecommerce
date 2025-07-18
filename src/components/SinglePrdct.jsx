import React from "react";
import Image from "./Image";

import prdctOne_O from "/src/assets/product_1.jpg";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const SinglePrdct = ({
  imgSrc,
  imgAlt,
  imgClassName,
  mainDivClassName
}) => {
  return (
    <>
      <div className={"group relative"}>
       
          <Image src={prdctOne_O} alt={"prdctOne_O"} className={"w-[330px] h-[400px] object-cover"}/>


        <div className="w-[280px] py-5 text-center bg-white absolute left-[50%] -translate-x-[50%] bottom-34 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
          <Link to={"/"}>
            <Heading
              text={"add to cart"}
              as={"p"}
              className={"text-[#222222] text-lg font-normal uppercase"}
              />
          </Link>
        </div>


        <div className="">
           <Heading
              text={"Dresses"}
              as={"p"}
              className={"text-[#767676] text-sm font-normal pt-5 pb-4"}
              />
           <Heading
              text={"Cropped Faux Leather Jacket"}
              as={"p"}
              className={"text-[#222222] text-base font-normal"}
              />
           <Heading
              text={"$29"}
              as={"p"}
              className={"text-[#222222] text-base font-normal pt-2"}
              />
        </div>
        {/* <div className="">
            <Heading text={productCatgry} as={"h3"} className={"text-[#767676] text-sm font-normal"}/>
            <Heading text={productTitle} as={"h4"} className={"text-[#767676] text-sm font-normal"}/>
            <Heading text={dproductPrize} as={"p"}/>
          
        </div> */}
      </div>
    </>
  );
};

export default SinglePrdct;
