// import Loading from "@/app/loading";
import { ReactNode } from "react";

const Protect = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-full w-full bg-bg">
      {/* <Suspense fallback={<Loading />} children={children} /> */}
      {children}
    </main>
  );
};

export default Protect;
