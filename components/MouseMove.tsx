"use client";
import Image from "next/image";

const MouseMove = ({
  url,
  text,
  onClick,
}: {
  url: string;
  text: string;
  onClick: () => void;
}) => {
  return (
    <p
      onClick={onClick}
      className="px-4 py-2 flex gap-4 font-bold hover:bg-bg transition-all capitalize cursor-pointer"
    >
      <Image src={url} alt="logout" width={20} height={20} />
      {text}
    </p>
  );
};

export default MouseMove;
