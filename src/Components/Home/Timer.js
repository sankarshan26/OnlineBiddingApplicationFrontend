import React, { useState, useEffect } from 'react';

const Timer = ({ endDate }) => {
  const [remainingTime, setRemainingTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDiff = endDate.getTime() - now.getTime();

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setRemainingTime({
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setRemainingTime({
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endDate]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex items-center justify-start">
      <div className="text-lg font-semibold text-grey-800">Ends in :</div>
      <div className="flex flex-col ml-2 text-red-500">
        <div className="text-xs font-medium">Hours</div>
        <div className="text-lg font-bold text-center ">{formatTime(remainingTime.hours)}</div>
      </div>
      <div className="flex flex-col mx-2 text-red-500">
        <div className="text-xs font-medium ">Minutes</div>
        <div className="text-lg font-bold text-center ">{formatTime(remainingTime.minutes)}</div>
      </div>
      <div className="flex flex-col text-red-500">
        <div className="text-xs font-medium ">Seconds</div>
        <div className="text-lg font-bold text-center">{formatTime(remainingTime.seconds)}</div>
      </div>
    </div>
  );
};

export default Timer;