"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { ReactNode } from "react";

const Providers = ({ children }: any) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#141416"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
