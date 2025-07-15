import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import catagryOne from "/src/assets/collection_grid_1.jpg";
import catagryTwo from "/src/assets/collection_grid_2.jpg";
import catagryThree from "/src/assets/collection_grid_3.jpg";
import catagryFour from "/src/assets/catagryFour.png";
import Heading from "../Heading";

const Catagories = () => {
  return (
    <>
      <div className="py-[55px]">
        <Container>
          <div className={"flex gap-x-7"}>
            <div className="w-[690px]">
              <Image src={catagryOne} alt={"catagryOne"} />
              <div className="">
                <Heading
                  text={"HOT LIST"}
                  as={"h4"}
                  className={""}
                />
                <h3 className={"text-[26px] text-[#222222] font-medium"}><span className={"text-[26px] text-[#222222] font-bold"}>WOMEN </span>COLLECTION</h3>
              </div>
            </div>
            <div className="w-[690px]">
              <Image src={catagryTwo} alt={"catagryTwo"} />
              <div className="flex justify-between mt-7">
                <Image
                  src={catagryThree}
                  alt={"catagryThree"}
                  className={"w-[330px]"}
                />
                <Image
                  src={catagryFour}
                  alt={"catagryFour"}
                  className={"w-[330px]"}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catagories;
