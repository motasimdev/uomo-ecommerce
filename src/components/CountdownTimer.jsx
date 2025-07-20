import React from 'react'
import Countdown from "react-countdown";


const CompletionMessage = () => <span className="text-green-600 font-bold">✅ সময় শেষ!</span>;
const CountdownTimer = () => {
  return (
    <>
      <Countdown
      date={Date.now() + 10000} // এখন থেকে ১০ সেকেন্ড
      renderer={({ minutes, seconds, completed }) => {
        if (completed) {
          return <CompletionMessage />;
        } else {
          return (
            <span className="text-2xl font-semibold">
              ⏳ {minutes}:{seconds < 10 ? `0${seconds}` : seconds} মিনিট বাকি
            </span>
          );
        }
      }}
    />
    </>
  )
}

export default CountdownTimer