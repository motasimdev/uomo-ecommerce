import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import Heading from "../Heading";
import { FaFacebookF, FaTwitter, FaInstagram,FaYoutube,FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#E4E4E4] pt-[100px] pb-[30px]">
        <Container>
          <Flex>
            <div className="">
              <Image src={logo} alt={"logo"} />
              <div className="mt-[50px]">
                <Heading
                  text={"1418 River Drive, Suite 35 Cottonhall, CA 9622"}
                  as={"h4"}
                  className={"text-sm text-black font-normal"}
                />
                <Heading text={"United States"} as={"h4"} className={"text-sm text-black font-normal"} />
                <div className="mt-10 mb-[50px]">
                  <Heading text={"sale@uomo.com"} as={"h4"} className={"text-sm text-black font-medium"} />
                <Heading text={"+1 246-345-0695"} as={"h4"} className={"text-sm text-black font-medium"} />
                </div>
              </div>
              <div className="flex items-center">
                  <FaFacebookF className={"mr-7"}/>
                  <FaTwitter className={"mr-7"}/>
                  <FaInstagram className={"mr-7"}/>
                  <FaYoutube  className={"mr-7"}/>
                  <FaPinterest/>
              </div>
            </div>


            <div className="">
              <Heading text={"Company"} as={"h3"} className={"text-[#222222] font-normal text-lg pb-10"} />
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
            <div className="">
              <Heading text={"Company"} as={"h3"} className={"text-[#222222] font-normal text-lg pb-10"} />
              <ul>
                <Link to={"/"}>
                  <li className="group relative font-normal text-sm text-[#222222] mb-[30px]">
                    New Arrivals
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
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
