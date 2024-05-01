"use client";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const Protect = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("testAuth") !== "true") {
      router.push("/auth");
    }
    setLoading(false);
  }, []);
  return loading ? (
    <main className="h-full flex justify-center items-center">
      <Loading />
    </main>
  ) : (
    <main className="h-full w-full bg-bg">{children}</main>
  );
};

export default Protect;
