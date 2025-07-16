import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const TrendyPrdcts = () => {
  return (
    <>
      <div className="my-[50px]">
        <Container>
          <div className="text-center pb-5">
            <h3 className={"text-[35px] text-[#212529] font-bold uppercase"}>
              <span
                className={"text-[35px] text-[#222222] font-normal uppercase"}
              >
                OUR TRENDY{" "}
              </span>
              PRODUCTS
            </h3>
          </div>
          <div className="pt-5 pb-5">
            <ul className={"flex gap-x-11"}>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  All
                </li>
              </Link>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all ease-in-out after:duration-300">
                  NEWARRIVALS
                </li>
              </Link>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                   BEST SELLER  
                </li>
              </Link>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  TOP RATING
                </li>
              </Link>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TrendyPrdcts;
