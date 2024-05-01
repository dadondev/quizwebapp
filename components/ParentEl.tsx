"use client";

import { authType } from "@/utils/type";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import SetTypeAuth from "./SetTypeAuth";
import AuthGoogle from "./AuthGoogle";

const ParentEl = () => {
  const [auth, setAuth] = useState<authType>("login");
  return (
    <main className="h-full container px-4 sm:px-0 flex flex-col mx-auto justify-center items-center gap-5">
      <ul className="max-w-[400px] mx-auto bg-white grid grid-cols-[1fr_1fr] text-center w-full p-1 rounded-md">
        <SetTypeAuth setType={setAuth} text="login" type={auth} />
        <SetTypeAuth setType={setAuth} text="register" type={auth} />
      </ul>
      {auth === "login" ? <Login /> : <Register />}
      <AuthGoogle />
    </main>
  );
};

export default ParentEl;
