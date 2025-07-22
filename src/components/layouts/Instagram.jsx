import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "../Image";
import instaOne from "/src/assets/insta1.jpg";
import Heading from "../Heading";

const Instagram = () => {
  return (
    <>
      <div className="py-[50px]">
        <Container>
          <div className="text-center pb-11">
            <Heading
              text={"@UOMO"}
              as={"h3"}
              className={"text-[35px] text-[#222222] font-normal uppercase"}
            />
          </div>
          <ul className={"flex items-center justify-between pb-1.5"}>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
          </ul>
          <ul className={"flex items-center justify-between"}>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
            <li className="relative group">
              <Link>
                <Image
                  src={instaOne}
                  alt={"insta1.jpg"}
                  className={"w-[230px]"}
                />
                <div className="bg-amber-50 bg-opacity-50 opacity-0 absolute left-0 right-0 inset-0 group-hover:opacity-30 hover:transition-all duration-300"></div>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};

export default Instagram;
