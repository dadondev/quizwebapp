"use client";

import { settingTimer } from "@/functions/setTimer";
import baseUrl from "@/utils/baseUrl";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Timer = ({
  time,
  setTime,
}: {
  time: string;
  setTime?: (str: string) => void;
}) => {
  const [timer, setTimer] = useState<string>(time);
  const timerRef = useRef<any | null>(null);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (timer !== "00:00") {
      timerRef.current = setInterval(() => {
        setTimer((prev) => settingTimer(prev.slice(0, 2), prev.slice(3)));
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  useEffect(() => {
    setTimer(time);
  }, [time]);

  useEffect(() => {
    if (timer === "00:00") {
      const answers = localStorage.getItem("ans");
      fetch(baseUrl + "/" + (id as string), {
        method: "POST",
        body: JSON.stringify(answers),
        cache: "no-cache",
      }).finally(() => {
        router.push("/");
      });
      clearInterval(timerRef.current);
    }
  }, [timer]);
  return (
    <article>
      <p
        className={
          "flex items-center text-3xl justify-center leading-none font-bold " +
          (timer <= "00:10" ? "animate-wave-handing" : "text-black")
        }
      >
        {timer}
      </p>
    </article>
  );
};

export default Timer;
