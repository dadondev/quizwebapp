"use client";
import { ReactNode } from "react";

export default function QuizAnswer({
  children,
  variant,
  setVariant,
  currentVariant,
  className,
}: {
  children: ReactNode;
  variant: string;
  setVariant: (a: string) => void;
  currentVariant: string;
  className?: string;
}) {
  const handleClick = () => {
    setVariant(variant);
  };
  return (
    <button
      onClick={handleClick}
      className={
        (variant === currentVariant
          ? "bg-orange-50 outline outline-4 outline-orange-100"
          : "") +
        " px-4 py-2 bg-white w-full rounded-lg capitalize text-left transition-all active:outline active:outline-4 active:outline-orange-100 " +
        className
      }
    >
      {children}
    </button>
  );
}
