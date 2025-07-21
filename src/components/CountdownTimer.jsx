import React from 'react'
import Countdown from "react-countdown";


const CompletionMessage = () => <span className="text-green-600 font-bold">✅ সময় শেষ!</span>;
const CountdownTimer = () => {
  return (
    <>
      <Countdown
      date={Date.now() + 5 * 24 * 60 * 60 * 1000} // এখন থেকে ১০ সেকেন্ড
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <CompletionMessage />;
        } else {
          return (
            <div className="flex gap-5 text-center">
              <div className="">
                <div className="text-3xl font-normal text-black">{days}</div>
                <div className="text-base text-[#767676] font-bold uppercase">Days</div>
              </div>
                <span className="text-3xl font-normal text-black">:</span>
              <div className="">
                <div className="text-3xl font-normal text-black">{hours}</div>
                <div className="text-base text-[#767676] font-bold uppercase">Hours</div>
              </div>
                <span className="text-3xl font-normal text-black">:</span>
              <div className="">
                <div className="text-3xl font-normal text-black">{minutes}</div>
                <div className="text-base text-[#767676] font-bold uppercase">Mins</div>
              </div>
                <span className="text-3xl font-normal text-black">:</span>
              <div className="">
                <div className="text-3xl font-normal text-black">{seconds}</div>
                <div className="text-base text-[#767676] font-bold uppercase">sec</div>
              </div>
            </div>
          );
        }
      }}
    />
    </>
  )
}

export default CountdownTimer