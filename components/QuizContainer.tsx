"use client";
import { ReactNode, useRef, useState } from "react";
import QuizAnswer from "./QuizAnswer";
import QuizText from "./QuizText";
import { useParams, useRouter } from "next/navigation";
import baseUrl from "@/utils/baseUrl";

const QuizContainer = ({ data, time }: { data: any; time: string }) => {
  const { id } = useParams();
  const router = useRouter();
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentVariant, setCurrentVariant] = useState("");
  const recordAnswers = useRef<string[]>([]);
  //   ----customazation
  const setRecordAnswers = (str: string) => {
    recordAnswers.current = [...recordAnswers.current, str];
    localStorage.setItem("ans", JSON.stringify(recordAnswers.current));
  };
  const giveResult = () => {
    fetch(baseUrl + "/" + (id as string), {
      method: "POST",
      body: JSON.stringify(recordAnswers.current),
      cache: "no-cache",
    }).finally(() => {
      localStorage.clear();
      router.push("/");
    });
  };

  return (
    <div className="px-4 lg:px-0">
      <p className="text-center text-xl font-bold text-text mb-3 mt-3">
        {currentQuiz + 1} of {data.length}
      </p>
      <QuizText>
        {data[currentQuiz] ? data[currentQuiz]?.question : ""}
      </QuizText>
      <div className="flex justify-between flex-wrap items-center pt-10 gap-5">
        {data[currentQuiz]?.variants
          ? Object.values(data[currentQuiz].variants).map((e, i) => (
              <QuizAnswer
                key={i}
                setVariant={setCurrentVariant}
                currentVariant={currentVariant}
                variant={
                  data[currentQuiz].variants[
                    Object.keys(data[currentQuiz]?.variants)[i]
                  ]
                }
              >
                {e as ReactNode}
              </QuizAnswer>
            ))
          : []}
      </div>
      <button
        onClick={() => {
          if (currentVariant) {
            setRecordAnswers(currentVariant);
            if (!data[currentQuiz + 1]) {
              giveResult();
              router.push("/");
            } else {
              setCurrentVariant("");
              setCurrentQuiz((prev) => prev + 1);
            }
          }
        }}
        className={
          "bg-text text-white font-bold px-5 py-2 rounded-xl transition-all max-w-[118px] block ml-auto mt-10 " +
          (currentVariant ? "active:scale-95" : "disabled:opacity-70")
        }
        disabled={!currentVariant}
      >
        {data[currentQuiz + 1] ? "Keyingisi" : "Yakunlash"}
      </button>
    </div>
  );
};

export default QuizContainer;
