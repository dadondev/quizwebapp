"use client";
import { Quizs } from "@/utils/type";
import IconButton from "./IconButton";
import Title from "./Title";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";
import editData from "@/functions/editData";

const EditQuizCard = ({
  question,
  trueAnswer,
  id,
  variants,
  index,
  setOpen,
  setActiveData,
  edit,
}: Quizs) => {
  useEffect(() => {
    edit?.setDatas(edit?.datas);
  }, [edit?.datas]);
  return (
    <>
      <Toaster richColors position="top-right" />
      <article className="sm:px-6 sm:py-3 py-4 bg-white rounded-lg sm:rounded-3xl max-w-[200px] gap-3 sm:gap-0 sm:max-w-[850px] w-full mx-auto grid sm:flex sm:justify-between sm:items-center transition-all scale-100">
        <Title>{index ? index + 1 : 1}-savol</Title>
        <strong className="sm:text-xl leading-none text-lg text-center">
          {Object.keys(variants).length} ta variant
        </strong>
        <article className="flex gap-4 justify-center">
          <IconButton
            className="mx-0"
            onClick={() => {
              if (setActiveData && setOpen) {
                setActiveData({
                  question,
                  trueAnswer,
                  variants,
                  index,
                  id,
                });
                setOpen(true);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              width={20}
              height={20}
            >
              <path d="M15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89H6.41421L15.7279 9.57627ZM17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785L17.1421 8.16206ZM7.24264 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L7.24264 20.89Z"></path>
            </svg>
          </IconButton>
          <IconButton
            className="mx-0"
            onClick={() => {
              if (edit && edit.datas.quizs.length <= 1) {
                toast.warning("Hech bo'lmaganda 1ta variant bo'lishi kerak!");
              } else if (edit?.datas) {
                let newDatas = { ...edit?.datas };
                newDatas.quizs = newDatas.quizs?.filter((e) => e.id !== id);
                edit?.setDatas(newDatas);
                editData({
                  data: newDatas,
                  id,
                  index: Number(index),
                });
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              width={20}
              height={20}
            >
              <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
            </svg>
          </IconButton>
        </article>
      </article>
    </>
  );
};

export default EditQuizCard;
