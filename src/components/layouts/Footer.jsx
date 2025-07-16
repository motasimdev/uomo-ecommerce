import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import footerImg from "/src/assets/image 20.png";
import Heading from "../Heading";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="bg-[#E4E4E4] pt-[100px] pb-[14px]">
        <Container>
          <div className={"flex justify-between pb-[70px]"}>
            <div className="">
              <Image src={logo} alt={"logo"} />
              <div className="mt-[50px]">
                <Heading
                  text={"1418 River Drive, Suite 35 Cottonhall, CA 9622"}
                  as={"h4"}
                  className={"text-sm text-black font-normal"}
                />
                <Heading
                  text={"United States"}
                  as={"h4"}
                  className={"text-sm text-black font-normal"}
                />
                <div className="mt-10 mb-[50px]">
                  <Heading
                    text={"sale@uomo.com"}
                    as={"h4"}
                    className={"text-sm text-black font-medium"}
                  />
                  <Heading
                    text={"+1 246-345-0695"}
                    as={"h4"}
                    className={"text-sm text-black font-medium"}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <FaFacebookF className={"mr-7 cursor-pointer"} />
                <FaTwitter className={"mr-7 cursor-pointer"} />
                <FaInstagram className={"mr-7 cursor-pointer"} />
                <FaYoutube className={"mr-7 cursor-pointer"} />
                <FaPinterest className={"cursor-pointer"} />
              </div>
            </div>

            <div className="">
              <Heading
                text={"Company"}
                as={"h3"}
                className={"text-[#222222] font-medium text-lg pb-10 uppercase"}
              />
              <ul>
                <Link to={"/"}>
                  <li className="group relative font-normal text-sm text-[#222222] mb-[30px]">
                    About Us
                    <span
                      className={
                        "block absolute bg-black w-0 h-[1.5px] bottom-[-3px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-normal text-sm text-[#222222] mb-[30px]">
                    Careers
                    <span
                      className={
                        "block absolute bg-black w-0 h-[1.5px] bottom-[-3px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-normal text-sm text-[#222222] mb-[30px]">
                    Affiliates
                    <span
                      className={
                        "block absolute bg-black w-0 h-[1.5px] bottom-[-3px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-normal text-sm text-[#222222] mb-[30px]">
                    Blog
                    <span
                      className={
                        "block absolute bg-black w-0 h-[1.5px] bottom-[-3px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-normal text-sm text-[#222222]">
                    Contact Us
                    <span
                      className={
                        "block absolute bg-black w-0 h-[1.5px] bottom-[-3px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
              </ul>
            </div>
            {/* ==================== */}

            <div className="">
              <Heading
                text={"SHOP"}
                as={"h3"}
                className={"text-[#222222] font-medium text-lg pb-10"}
              />
              <ul>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative pb-1 w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:content-[''] after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-7 after:transition-all after:duration-300"
                    }
                  >
                    New Arrivals
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative pb-1 w-fit font-normal text-sm text-[#222222] after:absolute after:bg-black after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-7 after:transition-all after:duration-300 after:ease-in-out"
                    }
                  >
                   Accessories
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative pb-1 w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:content-[''] after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-7 after:transition-all after:duration-300"
                    }
                  >
                    Men
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative pb-1 w-fit font-normal text-sm text-[#222222] after:absolute after:bg-black after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-7 after:transition-all after:duration-300 after:ease-in-out"
                    }
                  >
                  Women
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative pb-1 w-fit font-normal text-sm text-[#222222] after:absolute after:bg-black after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-7 after:transition-all after:duration-300 after:ease-in-out"
                    }
                    >
                      Shop All
                  </Link>
                </li>
               
              </ul>
            </div>
            {/* ==================== */}
            <div className="">
              <Heading
                text={"HELP"}
                as={"h3"}
                className={"text-[#222222] font-medium text-lg pb-10"}
              />
              <ul className={""}>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 after:translate-y-1 hover:after:w-7 after:transition-all ease-in-out after:duration-300"
                    }
                  >
                    Customer Service
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 after:translate-y-1 hover:after:w-7 after:transition-all ease-in-out after:duration-300"
                    }
                  >
                    My Account
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative pb-1 w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:content-[''] after:absolute  after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 hover:after:w-7 after:transition-all ease-in-out after:duration-300"
                    }
                  >
                    Find a Store
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 after:translate-y-1 hover:after:w-7 after:transition-all ease-in-out after:duration-300"
                    }
                  >
                    Legal & Privacy
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 after:translate-y-1 hover:after:w-7 after:transition-all ease-in-out after:duration-300"
                    }
                  >
                    Contact
                  </Link>
                </li>
                <li className="mb-[30px]">
                  <Link
                    to={"/"}
                    className={
                      "relative w-fit font-normal text-sm text-[#222222] after:bg-[#222222] after:absolute after:h-[1.5px] after:w-0 after:bottom-0 after:left-0 after:translate-y-1 hover:after:w-7 after:transition-all ease-in-out after:duration-300"
                    }
                  >
                    Gift Card
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <div className="">
                <Heading
                  text={"SUBSCRIBE"}
                  as={"h4"}
                  className={"text-[#212529] font-medium text-lg pb-10"}
                />

                <div className="">
                  <Heading
                    text={"Be the first to get the latest news about trends,"}
                    as={"h4"}
                    className={"text-sm text-[#212529] font-normal"}
                  />
                  <Heading
                    text={"promotions, and much more!"}
                    as={"h4"}
                    className={"text-sm text-[#212529] font-normal"}
                  />
                </div>
              </div>
              <div className="relative mt-5 mb-12">
                <input
                  type="email"
                  name="footerEmail"
                  placeholder="Your email address"
                  className={"py-[15px] pl-3 w-[330px]"}
                />
                <button
                  className={
                    "py-4 px-5 absolute right-0 top-0 z-20 cursor-pointer text-sm text-[#222222] font-medium"
                  }
                >
                  Join
                </button>
              </div>
              <div className="">
                <Heading
                  text={"Secure payments"}
                  as={"h4"}
                  className={"text-[15px] text-[#222222] font-medium pb-5"}
                />
                <Image src={footerImg} alt={"footerImg"} />
              </div>
            </div>
          </div>
          <span className={"block h-[1px] bg-[#CFCDCD]"}></span>
          <Flex className={"mt-[40px] mb-[14px] justify-between"}>
            <div className="">
              <Heading
                text={"©2020 Uomo"}
                as={"h4"}
                className={"text-sm text-[#222222] font-normal"}
              />
            </div>
            <div className="flex items-center">
              <Heading
                text={"Language"}
                as={"h4"}
                className={"text-sm text-[#767676] font-normal"}
              />
              <Heading
                text={"United Kingdom  |  English"}
                as={"h4"}
                className={
                  "text-sm text-[#222222] font-normal pl-[25px] pr-[15px]"
                }
              />
              <IoIosArrowUp className={"cursor-pointer"} />
              <Heading
                text={"Currency"}
                as={"h4"}
                className={
                  "text-sm text-[#767676] font-normal pl-[30px] pr-[20px]"
                }
              />
              <Heading
                text={"USD"}
                as={"h4"}
                className={"text-sm text-[#222222] font-normal pr-[10px]"}
              />
              <IoIosArrowUp className={"cursor-pointer"} />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
