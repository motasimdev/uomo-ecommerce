import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import SinglePrdct from "../SinglePrdct";
import prodOne from "/src/assets/product-0-1.jpg";
import prodTwo from "/src/assets/product-1-1.jpg";
import prodOThree from "/src/assets/product-2-1.jpg";
import prodFour from "/src/assets/product-3-1.jpg";
import Heading from "../Heading";

const LimitedAddition = () => {
  return (
    <>
      <div className="my-[50px]">
        <Container>
          <div className="flex items-center gap-x-2 justify-center mb-10">
            <Heading
              text={"LIMITED"}
              as={"h3"}
              className={"text-[35px] text-[#212529] font-normal uppercase"}
            />
            <Heading
              text={"EDITION"}
              as={"h3"}
              className={
                "text-[35px] text-[#212529] font-bold uppercase"
              }
            />
          </div>
          <Flex className={"justify-between"}>
            <SinglePrdct
              imgSrc={prodOne}
              imgAlt={"product-0-1.jpg"}
              prodctCtgry={"Dresses"}
              prodctTitle={"Hub Accent Mirror"}
              prodctPrize={"$29"}
            />
            <SinglePrdct
              imgSrc={prodTwo}
              imgAlt={"product-1-1.jpg"}
              prodctCtgry={"Dresses"}
              prodctTitle={"Hub Accent Mirror"}
              prodctPrize={"$29"}
            />
            <SinglePrdct
              imgSrc={prodOThree}
              imgAlt={"product-2-1.jpg"}
              prodctCtgry={"Dresses"}
              prodctTitle={"Hub Accent Mirror"}
              prodctPrize={"$29"}
            />
            <SinglePrdct
              imgSrc={prodFour}
              imgAlt={"product-3+-1.jpg"}
              prodctCtgry={"Dresses"}
              prodctTitle={"Hub Accent Mirror"}
              prodctPrize={"$29"}
            />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default LimitedAddition;
