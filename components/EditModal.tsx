"use client";
import Title from "./Title";
import QuizVariant from "./QuizVariant";
import AddQuizBtn from "./AddQuizBtn";
import { useEffect, useState } from "react";
import { Quiz, Quizs } from "@/utils/type";
import { giveLetter } from "@/utils/alphabet";
import { Toaster, toast } from "sonner";
import { useParams } from "next/navigation";
import editData from "@/functions/editData";

const EditModal = ({
  datas,
  open,
  setOpen,
  question,
  variant,
  trueAnswer,
  id,
  setDatas,
  index,
}: {
  index: number;
  datas: Quiz;
  id: string;
  trueAnswer: number;
  question: string;
  variant: any;
  open: boolean;
  setDatas: (a: Quiz, b?: (prev: Quiz) => void) => void;
  setOpen: (a: boolean) => void;
}) => {
  const [quiz, setQuiz] = useState(question);
  const [trueVariant, setTrueVariant] = useState(trueAnswer);
  const [variants, setVariants] = useState<any>(variant);

  const params = useParams();
  // use hooks
  useEffect(() => {
    setQuiz(question);
    setTrueVariant(trueAnswer);
    setVariants(variant);
  }, [question, trueAnswer, variant]);
  // functions
  const handleSubmit = () => {
    let variantsContainer = Object.values(variants);
    if (variantsContainer.includes("")) {
      variantsContainer.forEach((e, i) => {
        if ((e as string).length === 0) {
          toast.warning(
            i +
              1 +
              "-variantga matn kiritilmadi! Iltimos matn kiriting yoki o'chirib tashlang!"
          );
        }
      });
    } else if (quiz.length === 0) {
      toast.warning(
        "Test uchun savol berilishi kerak! Iltimos savol kiriting!"
      );
    }

    if (
      !variantsContainer.includes("") &&
      quiz.length !== 0 &&
      variantsContainer.length >= 2
    ) {
      let editedData: Quizs = {
        question: quiz,
        trueAnswer: giveLetter(trueVariant),
        variants,
        id: id,
      };
      let newDatas: Quiz = { ...datas };
      newDatas.quizs = newDatas.quizs.map((e) => {
        if (e.id !== id) return e;
        return editedData;
      });
      editData({
        data: newDatas,
        id: params ? (params.id as string) : "",
        index,
      });
      setDatas(newDatas);
      setOpen(false);
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen(false);
        }}
        className={
          "bg-transparent/40 justify-center items-center absolute top-0 transition-all min-w-full min-h-dvh flex " +
          (open ? "scale-100" : "scale-0")
        }
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={
            "bg-white max-w-[calc(100%-10%)] sm:max-w-[750px] w-full rounded-lg px-3 py-4"
          }
        >
          <Title className="block mb-2">
            {datas.quizs.findIndex((e) => e.id === id) + 1}-savol
          </Title>
          <article>
            <textarea
              value={quiz}
              onChange={(e) => setQuiz(e.target.value)}
              className={
                "w-full outline-none focus:outline-none rounded-lg p-2 text-base max-h-[200px] min-h-[150px] border-2 focus:border-text transition-all " +
                (quiz.length === 0 ? "border-red-400" : "")
              }
              placeholder="Savolni kiriting..."
            ></textarea>
          </article>
          <article className="grid mt-3 gap-3">
            {variants &&
              Object.values(variants).map((e, i) => (
                <QuizVariant
                  toaster={toast}
                  variants={variants}
                  setVariants={setVariants}
                  setActive={setTrueVariant}
                  key={i}
                  active={trueVariant}
                  index={i}
                  value={e as string}
                />
              ))}
          </article>
          <article className="flex gap-3 justify-between pt-4 flex-col mini:flex-row">
            <AddQuizBtn
              className="text-sm mini:text-base items-center max-w-full mini:max-w-[200px]"
              onClick={() => {
                setVariants((prev: any) => ({
                  ...(prev as object),
                  [giveLetter(Object.keys(variants).length)]: "",
                }));
              }}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-text text-white justify-center rounded-xl shadow py-2 px-4 flex gap-1 items-center transition-all active:scale-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                width={20}
                height={20}
              >
                <path d="M7 19V13H17V19H19V7.82843L16.1716 5H5V19H7ZM4 3H17L21 7V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM9 15V19H15V15H9Z"></path>
              </svg>
              Saqlash
            </button>
          </article>
        </form>
      </div>
    </>
  );
};

export default EditModal;
