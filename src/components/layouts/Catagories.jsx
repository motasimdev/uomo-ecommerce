import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import catagryOne from "/src/assets/collection_grid_1.jpg";
import catagryTwo from "/src/assets/collection_grid_2.jpg";
import catagryThree from "/src/assets/collection_grid_3.jpg/";

const Catagories = () => {
  return (
    <>
      <div className="">
        <Container>
          <Flex>
            <div className="">
              <Image src={catagryOne} alt={"catagryOne"} />
            </div>
            <div className="">
              <Image src={catagryTwo} alt={"catagryTwo"} />
              <div className="">
                <Image src={catagryThree} alt={"catagryThree"} />
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Catagories;
