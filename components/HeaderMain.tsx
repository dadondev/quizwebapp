"use client";
import getData from "@/functions/getData";
import QuizSection from "./QuizSection";
import { useEffect, useState } from "react";
const HeaderMain = () => {
  const [datas, setDatas] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(setDatas, setLoading);
  }, []);
  return loading ? (
    <main className="h-full pt-5 flex justify-center">
      <h1 className="text-xl">Loading...</h1>
    </main>
  ) : (
    <main className="h-full container mx-auto xl:max-w-[1310px]">
      <section
        className={
          "justify-center py-5 flex gap-[10px_15px] items-center flex-wrap scale-10 transition-all"
        }
      >
        {datas.length === 0 ? (
          <h1 className="text-xl">Hozircha testlar mavjud emas!</h1>
        ) : (
          datas.map((e, i) => <QuizSection {...e} key={i} />)
        )}
      </section>
    </main>
  );
};

export default HeaderMain;
