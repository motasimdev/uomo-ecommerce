import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Heading from "../Heading";

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
                className={"text-[26px] text-white font-medium"}
              />
            </div>
            <div className="w-[49%] bg-[url(/src/assets/banner_1.jpg)] bg-center bg-cover bg-no-repeat pt-[240px] pb-[40px]"></div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BannerTwo;
