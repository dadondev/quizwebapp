"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  text,
  url,
  index,
}: {
  text: string;
  index: number;
  url: string;
}) => {
  const pathName = usePathname();
  return (
    <li
      className={
        "z-[2] text-center text-black transition-all font-bold hover:text-black " +
        (pathName === "/" + url ? "text-black" : "text-black/40")
      }
    >
      <Link href={"/" + url}>{text}</Link>
    </li>
  );
};

export default NavLink;
