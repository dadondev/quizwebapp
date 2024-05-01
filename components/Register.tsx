import Image from "next/image";
import { useState } from "react";
import AuthInput from "./AuthInput";
import registerUser from "@/functions/RegisterForm";
import { useRouter } from "next/navigation";

const Register = () => {
  const [type, setType] = useState<"password" | "text">("password");
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [pass1, setPass1] = useState<string>("");
  const [validate, setValidate] = useState<string[]>([]);
  const router = useRouter();
  const handleSubmit = () => {
    if (
      pass.length !== 0 &&
      name.length !== 0 &&
      pass1.length !== 0 &&
      pass1 === pass
    ) {
      setLoading(true);
      registerUser(
        {
          email: name,
          password: pass,
          type: "register",
        },
        setLoading
      ).then((e) => {
        if (e) {
          localStorage.setItem("testAuth", "true");
          router.push("/");
        }
      });
    } else if (pass.length === 0 && name.length === 0 && pass1.length === 0) {
      setValidate(["pass", "name", "pass1"]);
    } else if (pass.length === 0) {
      setValidate(["pass"]);
    } else if (name.length === 0) {
      setValidate(["name"]);
    } else if (pass1.length === 0) {
      setValidate(["pass1"]);
    } else if (pass1 !== pass) {
      setValidate(["pass", "pass1"]);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="max-w-[400px] w-full"
    >
      <article className="bg-transparent grid gap-3">
        <article className="relative">
          <AuthInput
            which="name"
            placeholder="Pochtangiz"
            type="email"
            name={name}
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
            placeholder="Parol..."
            name={pass}
            type={type}
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
        <article className="relative">
          <AuthInput
            which="pass1"
            name={pass1}
            type={type}
            placeholder="Parolni qayta kiriting..."
            setName={setPass1}
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
                className="mx-auto max-w-[28px] block"
                src={"/loading.svg"}
                alt="loading"
                width={28}
                height={28}
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

export default Register;
