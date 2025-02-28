import { nowToHHMM } from "../../utils/date-time";
import { Txt } from "../txt/Txt";
import { s } from "./Clock.style";
import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
}
