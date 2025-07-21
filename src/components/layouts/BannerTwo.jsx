import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const BannerTwo = () => {
  return (
    <>
      <div className="my-[50px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[49%] pl-11 bg-[url(/src/assets/banner_1.jpg)] bg-center bg-cover bg-no-repeat pt-[240px] pb-[40px]">
              <Heading
                text={"STARTING AT $19"}
                as={"h4"}
                className={"text-lg text-white font-medium uppercase"}
              />
              <Heading
                text={"Women’s T-Shirts"}
                as={"h4"}
                className={"text-[26px] text-white font-medium pt-5 pb-7"}
              />
              <div className="w-fit">
               <Link to={"/"}>
                <Heading
                text={"SHOP NOW"}
                as={"p"}
                className={"relative pb-1 text-sm text-white font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-white hover:after:w-full after:transition-all ease-in-out after:duration-300"}
              />
               </Link>
              </div>
            </div>

            <div className="w-[49%] pl-11 bg-[url(/src/assets/banner_2.jpg)] bg-center bg-cover bg-no-repeat pt-[240px] pb-[40px]">
              <Heading
                text={"STARTİNG AT $39"}
                as={"h4"}
                className={"text-lg text-[#222222] font-medium uppercase"}
              />
              <Heading
                text={"Men’s Sportswear"}
                as={"h4"}
                className={"text-[26px] text-black font-medium pt-5 pb-7"}
              />
              <div className="w-fit">
               <Link to={"/"}>
                <Heading
                text={"SHOP NOW"}
                as={"p"}
                className={"relative pb-1 text-sm text-[#222222] font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-[#222222] hover:after:w-full after:transition-all ease-in-out after:duration-300"}
              />
               </Link>
              </div>
            </div>
            
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BannerTwo;
