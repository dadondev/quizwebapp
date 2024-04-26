"use client";

import { settingTimer } from "@/functions/setTimer";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState<string>("00:15");
  const timerRef = useRef<any | null>(null);
  const router = useRouter();

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
    if (timer === "00:00") {
      router.push("/");
      clearInterval(timerRef.current);
    }
  }, [timer]);
  return (
    <article className="bg-white inline-block px-4 pb-3 pt-1 rounded-bl-xl fixed right-0">
      <p
        className={
          "flex items-center text-3xl leading-nosne font-bold " +
          (timer <= "00:10" ? "animate-wave-handing" : "text-black")
        }
      >
        {timer}
      </p>
    </article>
  );
};

export default Timer;
