"use client";
import Link from "next/link";
import MoveContainer from "./MoveContainer";
import { useEffect, useState } from "react";
import Badge from "./Badge";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.addEventListener("click", (e) => {
        e.stopPropagation();
        setShow(false);
      });
    }
  }, [show]);

  return (
    <header className="bg-white shadow-[0_-6px_10px_5px_rgba(0,0,0,0.3)]">
      <div className=" px-5 py-3 sm:py-4 sticky top-0 xl:max-w-[1310px] mx-auto">
        <div className="w-full flex relative justify-between container mx-auto">
          <article className="flex items-center gap-1 relative">
            <Link
              href={"/"}
              className="text-xl font-bold md:text-3xl text-text"
            >
              Test
            </Link>
            <Badge text="beta" />
          </article>
          <p
            onClick={() => setShow(true)}
            className="w-8 h-8 rounded-full flex items-center justify-center uppercase text-white bg-text cursor-pointer"
          >
            n
          </p>
          <MoveContainer show={show} setShow={setShow} />
        </div>
      </div>
    </header>
  );
};

export default Header;
