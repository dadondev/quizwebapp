"use client";

import { useRouter } from "next/navigation";

const QuizSection = ({
  howMuch,
  id,
  title,
}: {
  title: string;
  id: string;
  howMuch: number;
}) => {
  const router = useRouter();
  return (
    <div className="grid px-4 py-4 rounded-xl bg-white max-w-[300px] w-full">
      <span className="text-[21px] font-bold text-text block mb-3">
        {title}
      </span>
      <article className=" flex justify-between">
        <ul className="grid justify-between">
          <li className="text-lg leading-none text-textGray">Savollar soni</li>
          <li className="text-lg leading-none">{howMuch} ta</li>
        </ul>
        <button
          onClick={() => {
            router.push("/" + id);
          }}
          className="pt-[8px] pb-[10px] px-6 bg-text text-white lg:hover:opacity-80 rounded-xl transition-all active:scale-90"
        >
          Boshlash
        </button>
      </article>
    </div>
  );
};

export default QuizSection;
