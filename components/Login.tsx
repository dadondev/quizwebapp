"use client";

import Image from "next/image";
import { useState } from "react";
import AuthInput from "./AuthInput";
import registerUser from "@/functions/RegisterForm";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [type, setType] = useState<"password" | "text">("password");
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [validate, setValidate] = useState<string[]>([]);
  const handleSubmit = () => {
    if (pass.length !== 0 && name.length !== 0) {
      setLoading(true);
      registerUser(
        {
          email: name,
          password: pass,
          type: "login",
        },
        setLoading
      ).then((e) => {
        if (e) {
          localStorage.setItem("testAuth", "true");
          router.push("/");
        }
      });
    } else if (pass.length === 0 && name.length === 0) {
      setValidate(["pass", "name"]);
    } else if (pass.length === 0) {
      setValidate(["pass"]);
    } else {
      setValidate(["name"]);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        // setLoading(false);
      }}
      className="max-w-[400px] w-full"
    >
      <article className="bg-transparent grid gap-3">
        <article className="relative">
          <AuthInput
            which="name"
            name={name}
            type="email"
            placeholder="Pochtani kiriting..."
            setName={setName}
            setValidate={setValidate}
            validate={validate}
          />
          <Image
            src={"/user.svg"}
            alt="user"
            width={28}
            height={28}
            className="absolute top-1/2 -translate-y-1/2 right-2"
          />
        </article>
        <article className="relative">
          <AuthInput
            which="pass"
            name={pass}
            type={type}
            placeholder="Parolni kiriting..."
            setName={setPass}
            setValidate={setValidate}
            validate={validate}
          />
          <Image
            onClick={() =>
              type === "password" ? setType("text") : setType("password")
            }
            src={type === "password" ? "/lock.svg" : "/lock-off.svg"}
            alt="show"
            width={28}
            height={28}
            className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
          />
        </article>
        <article>
          <button
            type="submit"
            disabled={loading}
            className={
              "max-w-[100px] bg-text rounded-lg w-full px-3 py-2 max-h-10 text-white mx-auto block transition-all " +
              (loading ? "opacity-80" : "active:scale-95")
            }
          >
            {loading ? (
              <Image
                alt="loading"
                src={"/loading.svg"}
                width={28}
                height={28}
                className="block max-w-[28px] mx-auto h-full"
              />
            ) : (
              "Kirish"
            )}
          </button>
        </article>
      </article>
    </form>
  );
};

export default Login;
