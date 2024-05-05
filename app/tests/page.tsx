"use client";
import Header from "@/components/Header";
import QuizCard from "@/components/QuizCard";
import isAdmin from "@/components/isAdmin";
import getData from "@/functions/getData";
import { Quiz } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [datas, setDatas] = useState<Quiz[]>([]);
  const router = useRouter();
  useEffect(() => {
    isAdmin(router);
    getData(setDatas);
  }, []);
  return (
    <>
      <Header />
      <main className="px-5 container mx-auto pt-5 flex justify-center flex-wrap scale-100 transition-all">
        {datas.length > 0 && datas.map((e) => <QuizCard {...e} key={e.id} />)}
      </main>
    </>
  );
};

export default page;
