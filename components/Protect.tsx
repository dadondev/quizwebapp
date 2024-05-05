"use client";
import Loading from "@/app/loading";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

const Protect = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    auth.authStateReady().finally(() => setLoading(false));
  }, []);
  if (loading) {
    return (
      <main className="h-full flex justify-center items-center">
        <Loading />
      </main>
    );
  } else {
    if (auth.currentUser) {
      return <main className="h-full w-full bg-bg">{children}</main>;
    } else {
      router.push("/auth");
      return children;
    }
  }
};

export default Protect;
