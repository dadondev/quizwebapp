"use client";
import MouseMove from "./MouseMove";

const MoveContainer = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (a: boolean) => void;
}) => {
  return (
    <article
      onClick={() => setShow(false)}
      className={
        "absolute top-[calc(100%+10px)] sm:top-[calc(100%+30px)] right-5 bg-white rounded-xl overflow-hidden py-1 transition-all " +
        (show ? "scale-100" : "scale-0")
      }
    >
      <MouseMove url="profile.svg" text="Profil" href="/profile" />
      <MouseMove
        url="logout.svg"
        text="Chiqish"
        href="/auth"
        onClick={() => localStorage.clear()}
      />
    </article>
  );
};

export default MoveContainer;
