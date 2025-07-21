import React from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Container from "../Container";
import Countdown from "react-countdown";
import CountdownTimer from "../CountdownTimer";

const DealOfWeek = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/deal_timer_bg.png)] bg-cover bg-center bg-no-repeat pt-[215px] pb-[45px] mb-[50px]">
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
                  Spring{" "}
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
              className={"text-[70px] text-[#222222] font-bold uppercase py-10"}
            />
          </div>
          <div className="w-fit">
            <Link to={"/"}>
              <Heading
                text={"SHOP NOW"}
                as={"p"}
                className={"relative pb-1 text-sm text-[#222222] font-medium uppercase after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-black hover:after:w-full after:transition-all ease-in-out after:duration-300"}
              />
            </Link>
          </div>
          <div className="mt-[110px]">
            <CountdownTimer/>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DealOfWeek;
