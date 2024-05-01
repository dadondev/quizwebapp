import { ReactNode } from "react";

const QuizText = ({ children }: { children: ReactNode }) => {
  return (
    <article className="py-4 px-5 block max-w-[400px] select-none mx-auto bg-white rounded-lg">
      <p className="text-lg text-text font-medium">{children}</p>
    </article>
  );
};

export default QuizText;
