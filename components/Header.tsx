"use client";
import MoveContainer from "./MoveContainer";
import { useEffect, useState } from "react";
import Badge from "./Badge";

import { usePathname } from "next/navigation";
import Timer from "./Timer";
import NavLink from "./NavLink";

const Header = ({
  time,
  setTime,
}: {
  time?: string;
  setTime?: (str: string) => void;
}) => {
  const [show, setShow] = useState(false);
  const param = usePathname();
  let admin = true;
  useEffect(() => {
    if (show) {
      document.body.addEventListener("click", () => {
        setShow(false);
      });
    } else {
      document.body.removeEventListener("click", () => {});
    }
    return () => {
      document.body.removeEventListener("click", () => {});
    };
  }, [show]);

  return (
    <header className="lg:pt-5">
      <div className="lg:px-8 px-5 py-3 w-full sticky top-0 lg:max-w-[990px] xl:max-w-[1110px] lg:rounded-3xl lg:mx-auto bg-white shadow-[0_-6px_10px_5px_rgba(0,0,0,0.3)] lg:shadow-none">
        <div className="w-full flex relative justify-between items-center">
          <article className="flex items-center gap-1 relative">
            <span className="text-xl font-bold md:text-xl capitalize text-text">
              learnfly
            </span>
            <Badge text="beta" />
          </article>
          {!time ? (
            <ul className={"hidden items-center lg:flex relative gap-7"}>
              <NavLink text="Bosh sahifa" index={0} url="" />

              {admin ? (
                <>
                  <NavLink text="Yangi test" index={0} url="newtest" />
                  <NavLink text="Natijalar" index={1} url="results" />
                </>
              ) : (
                <>
                  <NavLink text="Natijalarim" index={1} url="myresults" />
                </>
              )}
            </ul>
          ) : (
            <Timer time={time} setTime={setTime} />
          )}

          <p
            onClick={() => setShow(true && "test" !== param.slice(1, 5))}
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
