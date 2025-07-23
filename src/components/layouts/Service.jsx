import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import IconCart from "../../assets/icons/IconCart";
import IconHeadphn from "../../assets/icons/IconHeadphn";
import IconShield from "../../assets/icons/IconShield";
import Heading from "../Heading";

const Service = () => {
  return (
    <>
      <div className="pt-[50px] pb-[100px]">
        <Container>
          <Flex className={"justify-around"}>
            <div className="text-center">
              <div className="flex justify-center">
                <IconCart className={""} />
              </div>

              <Heading
                text={"FAST AND FREE DELIVERY"}
                as={"h4"}
                className={"text-lg text-black font-medium uppercase pt-[30px] pb-[18px]"}
              />
              <Heading
                text={"Free delivery for all orders over $140"}
                as={"h4"}
                className={"text-[15px] text-[#767676] font-normal"}
              />
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <IconHeadphn />
              </div>

              <Heading
                text={"FAST AND FREE DELIVERY"}
                as={"h4"}
                className={"text-lg text-black font-medium uppercase pt-[30px] pb-[18px]"}
              />
              <Heading
                text={"Free delivery for all orders over $140"}
                as={"h4"}
                className={"text-[15px] text-[#767676] font-normal"}
              />
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <IconShield />
              </div>

              <Heading
                text={"FAST AND FREE DELIVERY"}
                as={"h4"}
                className={"text-lg text-black font-medium uppercase pt-[30px] pb-[18px]"}
              />
              <Heading
                text={"Free delivery for all orders over $140"}
                as={"h4"}
                className={"text-[15px] text-[#767676] font-normal"}
              />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Service;
