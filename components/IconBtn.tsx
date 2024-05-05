"use client";

import Link from "next/link";
import { ReactNode } from "react";

const IconBtn = ({
  children,
  url,
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={url || ""}
      className={
        "p-2 bg-text max-w-[40px] flex items-center justify-center mx-auto mt-1 rounded-lg active:scale-90 transition-all " +
        className
      }
    >
      {children}
    </Link>
  );
};

export default IconBtn;
