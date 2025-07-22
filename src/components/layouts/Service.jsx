import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import IconCart from "../../assets/icons/IconCart";
import Heading from "../Heading";

const Service = () => {
  return (
    <>
      <div className="pt-[50px] pb-[100px]">
        <Container>
          <Flex>
            <div className="text-center">
              
                <IconCart/>
              
              <Heading
                text={"FAST AND FREE DELIVERY"}
                as={"h4"}
                className={"text-lg text-black font-medium uppercase"}
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
