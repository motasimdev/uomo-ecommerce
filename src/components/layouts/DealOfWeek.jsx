import React from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Container from "../Container";

const DealOfWeek = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/deal_timer_bg.png)] bg-cover bg-center pt-[215px] pb-[45px]">
        <Container>
          <div className="flex items-center gap-x-3">
            <span className="block h-0.5 w-10 bg-[#C32929]"></span>
            <Heading
              text={"DEAL OF THE WEEK"}
              as={"h4"}
              className={"text-sm text-[#C32929] font-medium uppercase"}
            />
          </div>
          <div className="">
            <Heading
              text={
                <>
                  Spring
                  <span
                    className={
                      "text-[70px] text-[#222222] font-normal uppercase"
                    }
                  >
                    Collection
                  </span>
                </>
              }
              as={"h3"}
              className={
                "text-[70px] text-[#222222] font-bold uppercase mt-[-15px]"
              }
            />
          </div>
          <div className="group relative w-[115px]">
            <Link to={"/"}>
              <Heading
                text={"SHOP NOW"}
                as={"p"}
                className={"text-sm text-[#222222] font-medium uppercase"}
              />
              <span className="block absolute bottom-[-5px] left-0 bg-black w-[90px] h-[2px]">
                <span className="block absolute bottom-[0] left-[90px] bg-black w-0 h-[2px] group-hover:w-5 transition-[width] ease-in-out duration-300"></span>
              </span>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DealOfWeek;
