import React from "react";

const AddQuizBtn = ({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "max-w-[200px] w-full flex gap-2 transition-all active:scale-90 justify-center py-2 rounded-xl shadow border-2 text-center " +
        className
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#141416"
        width={24}
        height={24}
      >
        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
      </svg>
      Savol qo'shish
    </button>
  );
};

export default AddQuizBtn;
