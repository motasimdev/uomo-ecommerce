import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import sliderOne from "/src/assets/slideshow-character1.png"
import Image from "../Image";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/bannerBg.png)] pt-[55px] mb-[55px]">
        <Container>
          <Flex>
            <div className="w-[65%]">
              <div className="flex items-center gap-x-3">
                <span className="block h-0.5 w-10 bg-[#C32929]"></span>
                <Heading
                  text={"NEW TREND"}
                  as={"h4"}
                  className={"text-sm text-[#C32929] font-medium uppercase"}
                />
              </div>
              <div className="">
                <Heading
                  text={"SUMMER SALE STYLISH "}
                  as={"h3"}
                  className={"text-[70px] text-[#222222] font-normal uppercase"}
                />
                <Heading
                  text={"WOMENS"}
                  as={"h3"}
                  className={"text-[70px] text-[#222222] font-bold uppercase mt-[-15px]"}
                />
              </div>    
              <div className="w-fit">
               <Link to={"/"}>
                <Heading
                  text={"DISCOVER MORE"}
                  as={"p"}
                  className={"relative pb-[5px] text-sm text-[#222222] font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[70px] after:h-[2px] after:bg-black hover:after:w-full after:transition-all ease-in-out after:duration-300"}
                />
               </Link>
              </div>
            </div>
            <div className="w-[35%]">
                <Image src={sliderOne} alt={"sliderOne"}/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
