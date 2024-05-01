import { useRouter } from "next/router";

const targetter = (a: string) => {
  const router = useRouter();
  router.push(a);
};
export default targetter;
