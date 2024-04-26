"use client";

import { useRouter } from "next/navigation";
import MouseMove from "./MouseMove";

const MoveContainer = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (a: boolean) => void;
}) => {
  const router = useRouter();
  return (
    <article
      className={
        "absolute top-[calc(100%+10px)] sm:top-[calc(100%+30px)] right-5 bg-white rounded-xl overflow-hidden py-1 transition-all " +
        (show ? "scale-100" : "scale-0")
      }
    >
      <MouseMove
        url="logout.svg"
        text="Profil"
        onClick={() => {
          router.push("/hello");
          setShow(false);
        }}
      />
      <MouseMove
        url="logout.svg"
        text="Chiqish"
        onClick={() => {
          router.push("/auth");
          setShow(false);
        }}
      />
    </article>
  );
};

export default MoveContainer;
