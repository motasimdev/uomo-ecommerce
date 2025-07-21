import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import catagryOne from "/src/assets/collection_grid_1.jpg";
import catagryTwo from "/src/assets/collection_grid_2.jpg";
import catagryThree from "/src/assets/collection_grid_3.jpg";
import catagryFour from "/src/assets/catagryFour.png";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <>
      <div className="py-[55px]">
        <Container>
          <div className={"relative flex gap-x-7"}>
            <div className="w-[690px]">
              <Image src={catagryOne} alt={"catagryOne"} />
              <div className="absolute bottom-10 left-10">
                <Heading text={"HOT LIST"} as={"h4"} className={""} />
                <h3 className={"text-[26px] text-[#222222] font-medium"}>
                  <span className={"text-[26px] text-[#222222] font-bold"}>
                    WOMEN{" "}
                  </span>
                  COLLECTION
                </h3>
                <div className="mt-2 w-fit">
                  <Link to={"/"}>
                    <Heading
                      text={"SHOP NOW"}
                      as={"p"}
                      className={"relative pb-[5px] text-sm text-[#222222] font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[55px] after:h-[2px] after:bg-black hover:after:w-full after:transition-all ease-in-out after:duration-300"}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[690px]">
              <div className="relative">
                <Image src={catagryTwo} alt={"catagryTwo"} />
                <div className="absolute bottom-10 left-10">
                  <Heading text={"HOT LIST"} as={"h4"} className={""} />
                  <h3 className={"text-[26px] text-[#222222] font-medium"}>
                    <span className={"text-[26px] text-[#222222] font-bold"}>
                      MEN{" "}
                    </span>
                    COLLECTION
                  </h3>
                  <div className="mt-2 w-fit">
                    <Link to={"/"}>
                      <Heading
                        text={"SHOP NOW"}
                        as={"p"}
                        className={
                          "relative pb-[5px] text-sm text-[#222222] font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[55px] after:h-[2px] after:bg-black hover:after:w-full after:transition-all ease-in-out after:duration-300"
                        }
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-7 mt-7 relative">
                <Image
                  src={catagryThree}
                  alt={"catagryThree"}
                  className={"w-[330px]"}
                />
                <div className="absolute bottom-10 left-10">
                  <Heading text={"HOT LIST"} as={"h4"} className={""} />
                  <h3 className={"text-[26px] text-[#222222] font-medium"}>
                    <span className={"text-[26px] text-[#222222] font-bold"}>
                      KIDS{" "}
                    </span>
                    COLLECTION
                  </h3>
                  <div className="mt-2 w-fit">
                    <Link to={"/"}>
                      <Heading
                        text={"SHOP NOW"}
                        as={"p"}
                        className={
                          "relative pb-[5px] text-sm text-[#222222] font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[55px] after:h-[2px] after:bg-black hover:after:w-full after:transition-all ease-in-out after:duration-300"
                        }
                      />
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={catagryFour}
                    alt={"catagryFour"}
                    className={"w-[330px]"}
                  />
                  <div className="absolute bottom-10 left-10">
                    <h3 className={"text-[26px] text-[#222222] font-medium"}>
                      <span className={"text-[26px] text-[#222222] font-bold"}>
                        E-GIFT{" "}
                      </span>
                      CARDS
                    </h3>
                    <Heading text={"Surprise someone with the gift they really want."} as={"h4"} className={"w-[215px] my-4 leading-6 text-sm text-[#222222] font-normal"} />
                    <div className="mt-2 w-fit">
                      <Link to={"/"}>
                        <Heading
                          text={"SHOP NOW"}
                          as={"p"}
                          className={
                            "relative pb-[5px] text-sm text-[#222222] font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[55px] after:h-[2px] after:bg-black hover:after:w-full after:transition-all ease-in-out after:duration-300"
                          }
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Catagories;
