import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import Heading from "../Heading";

const Footer = () => {
  return (
    <>
      <div className="">
        <Container>
          <Flex>
            <div className="">
              <Image src={logo} alt={"logo"} />
              <div className="">
                <Heading
                  text={"1418 River Drive, Suite 35 Cottonhall, CA 9622"}
                  as={"h4"}
                  className={""}
                />
                <Heading text={"United States"} as={"h4"} className={""} />
                <Heading text={"sale@uomo.com"} as={"h4"} className={""} />
                <Heading text={"+1 246-345-0695"} as={"h4"} className={""} />
              </div>
            </div>
            <div className="">
              <Heading text={"Company"} as={"h3"} className={""} />
              <ul>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    About Us
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Careers
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Affiliates
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Blog
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Contact Us
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
              </ul>
            </div>
            <div className="">
              <Heading text={"Shop"} as={"h3"} className={""} />
              <ul>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    New Arrivals
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Accessories
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Men
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Women
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                      }
                    ></span>
                  </li>
                </Link>
                <Link to={"/"}>
                  <li className="group relative font-medium text-sm text-[#222222] uppercase">
                    Shop All
                    <span
                      className={
                        "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
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
