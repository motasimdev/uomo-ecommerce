import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "/src/assets/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUser, HiMiniBars3CenterLeft } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <div className="py-7">
        <Container>
          <Flex className={"justify-between"}>
            <div className="w-[20%]">
              <Link>
                <Image src={logo} alt={"logo"} />
              </Link>
            </div>

            <div className="">
              <div className="">
                <ul className={"flex items-center gap-x-10"}>
                  <Link to={"/"}>
                    <li className="group relative font-medium text-sm text-[#222222] uppercase">
                      Home
                      <span
                        className={
                          "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                        }
                      ></span>
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="group relative font-medium text-sm text-[#222222] uppercase">
                      shop
                      <span
                        className={
                          "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                        }
                      ></span>
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="group relative font-medium text-sm text-[#222222] uppercase">
                      Collection
                      <span
                        className={
                          "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                        }
                      ></span>
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="group relative font-medium text-sm text-[#222222] uppercase">
                      Journal
                      <span
                        className={
                          "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                        }
                      ></span>
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="group relative font-medium text-sm text-[#222222] uppercase">
                      LOOKBOOK
                      <span
                        className={
                          "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                        }
                      ></span>
                    </li>
                  </Link>
                  <Link to={"/"}>
                    <li className="group relative font-medium text-sm text-[#222222] uppercase">
                      Pages
                      <span
                        className={
                          "block absolute bg-black w-0 h-[2px] bottom-[-5px] left-0- group-hover:w-7 transition-[width] ease-in-out duration-300"
                        }
                      ></span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-x-7">
              <Link to={"/"}>
                <IoSearchOutline className={"w-5 h-5 text-[#222222]"} />
              </Link>

              <Link to={"/"}>
                <HiOutlineUser className={"w-5 h-5 text-[#222222]"} />
              </Link>

              <Link to={"/"}>
                <CiHeart className={"w-5 h-5 text-[#222222]"} />
              </Link>

              <Link to={"/"}>
                <RiShoppingBagLine className={"w-5 h-5 text-[#222222]"} />
              </Link>

              <Link to={"/"}>
                <HiMiniBars3CenterLeft className={"w-5 h-5 text-[#222222]"} />
              </Link>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
