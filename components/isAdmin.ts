import { auth } from "@/utils/firebase";

function isAdmin(router: any) {
  if (auth.currentUser?.email) {
    if (!localStorage.getItem("testAdmin")) {
      router.push("/");
    }
  } else {
    router.push("/auth");
  }
}
export default isAdmin;
