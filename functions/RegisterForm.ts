import { auth } from "@/utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
let admins = ["dadondev03@gmail.com", "dadondev@gmail.com"];

const registerUser = async (
  a: any,
  setLoading: (e: boolean) => void,
  b: any,
  type: "register" | "login",
  router: AppRouterInstance
) => {
  let user = false;
  setLoading(true);
  if (type === "register") {
    createUserWithEmailAndPassword(auth, a.email, a.password)
      .then((e) => {
        if (e.user.email) {
          if (admins.find((k) => k === e.user.email)) {
            localStorage.setItem("testAdmin", "true");
          }
          router.push("/");
          user = true;
          return true;
        } else {
          return false;
        }
      })
      .catch((e) => {
        b.error(e);
        throw e;
      });
  } else {
    signInWithEmailAndPassword(auth, a.email, a.password)
      .then((e) => {
        if (e.user.email) {
          if (admins.find((k) => k === e.user.email)) {
            localStorage.setItem("testAdmin", "true");
          }
          router.push("/");
          user = true;
          return true;
        } else {
          return false;
        }
      })
      .catch((e) => {
        b.error(e);
        throw e;
      });
  }

  return user;
};

export default registerUser;
