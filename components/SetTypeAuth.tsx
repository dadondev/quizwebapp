"use client";
import { authType } from "@/utils/type";
const SetTypeAuth = ({
  type,
  text,
  setType,
}: {
  text: authType;
  type: authType;
  setType: (a: authType) => void;
}) => {
  return (
    <li
      onClick={() => setType(text)}
      className={
        "py-2 font-bold capitalize rounded-md transition-colors cursor-pointer " +
        (type === text ? "bg-bg" : "")
      }
    >
      {text}
    </li>
  );
};

export default SetTypeAuth;
