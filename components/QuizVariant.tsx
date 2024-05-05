import { giveLetter } from "@/utils/alphabet";
import React, { useEffect, useState } from "react";
import IconButton from "./IconButton";

const QuizVariant = ({
  setVariants,
  active,
  index,
  value,
  setActive,
  variants,
  toaster,
}: {
  toaster: any;
  setVariants: (a: any) => void;
  active: number;
  index: number;
  value: string;
  setActive: (a: number) => void;
  variants: object;
}) => {
  const [text, setText] = useState(value);
  // use hooks
  useEffect(() => {
    setText(value);
  }, [value]);
  const changeText = (str: string) => {
    let prevVariants: any = { ...variants };
    prevVariants[giveLetter(index)] = str;
    setVariants(prevVariants);
  };
  const removeVariant = () => {
    let prevVariants: any = { ...variants };
    let newVariants = {};
    if (index !== active) {
      if (Object.keys(variants).length > 2) {
        let keys = Object.keys(variants).filter((_, i) => i !== index);
        keys.forEach((e, i) => {
          newVariants = {
            ...newVariants,
            [giveLetter(i)]: prevVariants[e],
          };
        });
        setVariants(newVariants);
        if (active > 0) {
          setActive(active - 1);
        }
      } else {
        toaster.warning("Variantlar soni kamida 2 ta bo'lishi kerak!");
      }
    } else {
      toaster.warning(
        "Siz to'gri javobdagi variantni o'chirmoqchisiz! Iltimos to'g'ri javobni almashtiring so'ng o'chiring!"
      );
    }
  };
  return (
    <>
      <article className="min-w-full hidden mini:grid-cols-[auto_1fr_auto] items-center px-3 py-4 rounded-xl shadow border-2 emini:grid">
        <p
          onClick={() => {
            setActive(index);
          }}
          className={
            "mr-3 rounded-full cursor-pointer w-5 transition-all h-5 border-[4px] " +
            (active === index ? "border-green-500" : "")
          }
        ></p>
        <input
          value={text}
          onChange={(e) => {
            changeText(e.target.value);
            setText(e.target.value);
          }}
          type="text"
          className="outline-none text-sm focus:outline-none focus:border-b-text border-b-2 transition-all lg:text-base mr-3"
        />
        <IconButton className="p-1 mt-0" onClick={removeVariant}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            width={16}
            height={16}
          >
            <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
          </svg>
        </IconButton>
      </article>
      <article className="min-w-full grid mini:grid-cols-[1fr_auto] items-center px-3 py-4 rounded-xl shadow border-2 emini:hidden">
        <input
          value={text}
          onChange={(e) => {
            changeText(e.target.value);
            setText(e.target.value);
          }}
          type="text"
          className="outline-none text-sm focus:outline-none focus:border-b-text border-b-2 transition-all lg:text-base"
        />
        <div className="flex justify-center pt-2 items-center gap-2">
          <p
            onClick={() => {
              setActive(index);
            }}
            className={
              " rounded-full cursor-pointer w-5 transition-all h-5 border-[4px] " +
              (active === index ? "border-green-500" : "")
            }
          ></p>
          <IconButton className="m-0" onClick={removeVariant}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fff"
              width={16}
              height={16}
            >
              <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z"></path>
            </svg>
          </IconButton>
        </div>
      </article>
    </>
  );
};

export default QuizVariant;
