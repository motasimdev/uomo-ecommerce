import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import SinglePrdct from "../SinglePrdct";
import prdctOne from "/src/assets/product_1.jpg";
import prdctOne_1 from "/src/assets/product_1-1.jpg";
import prdctTwo from "/src/assets/product_2.jpg";
import prdctTwo_ from "/src/assets/product_2-1.jpg";
import prdctThree from "/src/assets/product_3.jpg";
import prdctThree_ from "/src/assets/product_3-1.jpg";
import prdctFour from "/src/assets/product_4.jpg";
import prdctFour_ from "/src/assets/product_4-1.jpg";

const TrendyPrdcts = () => {
  return (
    <>
      <div className="my-[50px]">
        <Container>
          <div className="text-center pb-5">
            <h3 className={"text-[35px] text-[#212529] font-bold uppercase"}>
              <span
                className={"text-[35px] text-[#222222] font-normal uppercase"}
              >
                OUR TRENDY{" "}
              </span>
              PRODUCTS
            </h3>
          </div>
          <div className="w-[485px] pt-5 pb-3 m-auto">
            <ul className={"flex justify-between"}>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase hover:text-[#222222] after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  All
                </li>
              </Link>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase hover:text-[#222222] after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all ease-in-out after:duration-300">
                  NEWARRIVALS
                </li>
              </Link>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase hover:text-[#222222] after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  BEST SELLER
                </li>
              </Link>
              <Link to={"/"}>
                <li className="relative text-base text-[#B5B5B5] font-medium uppercase hover:text-[#222222] after:bg-[#222222] after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                  TOP RATING
                </li>
              </Link>
            </ul>
          </div>
          <div className="pb-2 flex justify-between gap-x-2">
            <SinglePrdct
              imgSrc={prdctOne}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctOne_1}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Cropped Faux Leather Jacket"}
              prodctPrize={"$29"}
            />
            <SinglePrdct
              imgSrc={prdctTwo}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctTwo_}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Calvin Shorts"}
              prodctPrize={"$62"}
            />
            <SinglePrdct
              imgSrc={prdctThree}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctThree_}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Kirby T-Shirt"}
              prodctPrize={"$17"}
            />
            <SinglePrdct
              imgSrc={prdctFour}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctFour_}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Cableknit Shawl"}
              prodctPrize={
                <>
                  <div className={"flex items-center gap-x-3"}>
                    <span className={"line-through"}>$12</span>
                    <p className={"text-red-800"}>$100</p>
                  </div>
                </>
              }
            />
          </div>
          <div className="pb-2 flex justify-between gap-x-2">
            <SinglePrdct
              imgSrc={prdctOne}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctOne_1}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Cropped Faux Leather Jacket"}
              prodctPrize={"$29"}
            />
            <SinglePrdct
              imgSrc={prdctTwo}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctTwo_}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Calvin Shorts"}
              prodctPrize={"$62"}
            />
            <SinglePrdct
              imgSrc={prdctThree}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctThree_}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Kirby T-Shirt"}
              prodctPrize={"$17"}
            />
            <SinglePrdct
              imgSrc={prdctFour}
              imgAlt={"product_1.jpg"}
              imgHoverSrc={prdctFour_}
              imgHoverAlt={"product_1-1.jpg"}
              prodctCtgry={"Dress"}
              prodctTitle={"Cableknit Shawl"}
              prodctPrize={
                <>
                  <div className={"flex items-center gap-x-3"}>
                    <span className={"line-through"}>$12</span>
                    <p className={"text-red-800"}>$100</p>
                  </div>
                </>
              }
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TrendyPrdcts;
