import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/bannerBg.png)] pt-[55px]">
        <Container>
          <Flex>
            <div className="">
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
                  as={"h4"}
                  className={"text-[70px] text-[#222222] font-normal uppercase"}
                />
                <Heading
                  text={"WOMENS"}
                  as={"h4"}
                  className={"text-[70px] text-[#222222] font-bold uppercase mt-[-15px]"}
                />
              </div>
            </div>
            <div className=""></div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
