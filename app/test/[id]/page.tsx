"use client";
import Header from "@/components/Header";
import QuizContainer from "@/components/QuizContainer";
import getSingleData from "@/functions/getSingleData";
import { Quiz } from "@/utils/type";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState<Quiz>({
    id: "123",
    name: "uzb",
    quizs: [],
  });

  const [time, setTime] = useState("01:00");
  useEffect(() => {
    getSingleData({ setDatas, id: id as string, setTime });
  }, []);

  return (
    <main className="h-full">
      <section className="lg:max-w-[990px] xl:max-w-[1110px] mx-auto sticky top-0">
        <Header time={time} setTime={setTime} />
      </section>
      <section className="lg:max-w-[990px] xl:max-w-[1110px] mx-auto lg:px-8 pb-5 md:pb-0">
        <QuizContainer data={datas?.quizs} time={time} />
      </section>
    </main>
  );
};

export default page;
