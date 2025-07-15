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
                <div className="group relative mt-2 w-[82px]">
                  <Link to={"/"}>
                    <Heading
                      text={"SHOP NOW"}
                      as={"p"}
                      className={"text-sm text-[#222222] font-medium uppercase"}
                    />
                    <span className="block absolute bottom-[-5px] left-0 bg-black w-[55px] h-[2px]">
                      <span className="block absolute bottom-0 left-[55px] bg-black w-0 h-[2px] group-hover:w-6 transition-[width] ease-in-out duration-300"></span>
                    </span>
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
                  <div className="group relative mt-2 w-[82px]">
                    <Link to={"/"}>
                      <Heading
                        text={"SHOP NOW"}
                        as={"p"}
                        className={
                          "text-sm text-[#222222] font-medium uppercase"
                        }
                      />
                      <span className="block absolute bottom-[-5px] left-0 bg-black w-[55px] h-[2px]">
                        <span className="block absolute bottom-0 left-[55px] bg-black w-0 h-[2px] group-hover:w-6 transition-[width] ease-in-out duration-300"></span>
                      </span>
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
                  <div className="group relative mt-2 w-[82px]">
                    <Link to={"/"}>
                      <Heading
                        text={"SHOP NOW"}
                        as={"p"}
                        className={
                          "text-sm text-[#222222] font-medium uppercase"
                        }
                      />
                      <span className="block absolute bottom-[-5px] left-0 bg-black w-[55px] h-[2px]">
                        <span className="block absolute bottom-0 left-[55px] bg-black w-0 h-[2px] group-hover:w-6 transition-[width] ease-in-out duration-300"></span>
                      </span>
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
                    <div className="group relative mt-2 w-[82px]">
                      <Link to={"/"}>
                        <Heading
                          text={"SHOP NOW"}
                          as={"p"}
                          className={
                            "text-sm text-[#222222] font-medium uppercase"
                          }
                        />
                        <span className="block absolute bottom-[-5px] left-0 bg-black w-[55px] h-[2px]">
                          <span className="block absolute bottom-0 left-[55px] bg-black w-0 h-[2px] group-hover:w-6 transition-[width] ease-in-out duration-300"></span>
                        </span>
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
