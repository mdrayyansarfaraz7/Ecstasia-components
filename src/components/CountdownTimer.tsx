"use client";
import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-03-08T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white text-center mt-40 sm:mt-36 md:mt-28  pb-6 px-2  sm:pt-6 sm:pb-8 sm:px-8  md:pt-8  lg:pt-40">
      <h1
        className="text-2xl sm:text-3xl md:text-6xl tracking-widest font-misteri"
        style={{
          textShadow: "0px 0px 2px #8F00FF, 0px 0px 8px #fff",
        }}
      >
        An Enchanted Journey Awaits You
      </h1>
      
      <div className="flex justify-center gap-3 items-center w-full mt-8 sm:mt-10 md:mt-12">
        
        {/* Left Butterfly */}
        <img
          src="https://utfs.io/f/1d67a71a-0062-4fe3-809b-63a52b6c7e3d-ny8zt8.png"
          alt="Butterfly Left"
          className="animate-float w-10 sm:w-16 md:w-32 lg:w-40"
        />

        {/* Countdown Timer */}
        <div className="flex gap-3 sm:gap-4 md:gap-6 text-lg sm:text-xl md:text-2xl font-semibold font-abhaya">
        <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-5xl">{timeLeft.days}</span>
            <span className="text-xs sm:text-sm md:text-lg">days</span>
          </div>
          <span className="text-3xl sm:text-4xl md:text-6xl font-misteri">:</span>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-5xl">{timeLeft.hours}</span>
            <span className="text-xs sm:text-sm md:text-lg">hours</span>
          </div>
          <span className="text-3xl sm:text-4xl md:text-6xl font-misteri">:</span>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-5xl">{timeLeft.minutes}</span>
            <span className="text-xs sm:text-sm md:text-lg">minutes</span>
          </div>
          <span className="text-3xl sm:text-4xl md:text-6xl font-misteri">:</span>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl md:text-5xl">{timeLeft.seconds}</span>
            <span className="text-xs sm:text-sm md:text-lg">seconds</span>
          </div>
        </div>

        {/* Right Butterfly */}
        <img
          src="https://utfs.io/f/a6da2bbc-e9e2-428d-8845-129f132520ba-ny8zt9.png"
          alt="Butterfly"
          className="animate-float  w-10 sm:w-16 md:w-32 lg:w-40"
        />
        
      </div>
    </div>
  );
};

export default CountdownTimer;
