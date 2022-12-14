import React from "react";
import { useCountdown } from "./countdown";

const ShowCounter = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex items-center">
      {hours < 10 ? "0" + hours : hours}
      <p>:</p>
      {minutes < 10 ? "0" + minutes : minutes}
      <p>:</p>
      {seconds < 10 ? "0" + seconds : seconds}
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return "00:00:00";
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
