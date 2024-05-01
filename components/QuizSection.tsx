import { Quiz } from "@/utils/type";
import Link from "next/link";

const QuizSection = ({ name, quizs, id }: Quiz) => {
  return (
    <div className="grid px-4 py-4 rounded-xl bg-white max-w-[300px] w-full">
      <span className="text-[21px] font-bold text-text block mb-3">{name}</span>
      <article className=" flex justify-between">
        <ul className="grid justify-between">
          <li className="text-lg leading-none text-textGray">Savollar soni</li>
          <li className="text-lg leading-none">{quizs.length} ta</li>
        </ul>
        <Link
          href={"/test/" + id}
          className="pt-[8px] pb-[10px] px-6 bg-text inline-block font-bold text-white lg:hover:opacity-80 rounded-xl transition-all active:scale-90"
        >
          Boshlash
        </Link>
      </article>
    </div>
  );
};

export default QuizSection;
