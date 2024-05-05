"use client"
import { ReactNode } from "react";

const IconButton = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "p-2 bg-text max-w-[40px] flex items-center justify-center mt-1 rounded-lg active:scale-90 transition-all " +
        className
      }
    >
      {children}
    </button>
  );
};

export default IconButton;
