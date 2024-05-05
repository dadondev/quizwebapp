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
          className="pt-[8px] pb-[10px] px-3 bg-text inline-block font-bold text-white lg:hover:opacity-80 rounded-xl transition-all active:scale-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            width={20}
            height={20}
          >
            <path d="M6 20.1957V3.80421C6 3.01878 6.86395 2.53993 7.53 2.95621L20.6432 11.152C21.2699 11.5436 21.2699 12.4563 20.6432 12.848L7.53 21.0437C6.86395 21.46 6 20.9812 6 20.1957Z"></path>
          </svg>
        </Link>
      </article>
    </div>
  );
};

export default QuizSection;
