import baseUrl from "@/utils/baseUrl";
import { realDB } from "@/utils/firebase";
import { onValue, ref } from "firebase/database";

const getData = async (
  setDatas: (a: any) => void,
  setLoading?: (a: boolean) => void
) => {
  let reference = ref(realDB, "/tests");
  onValue(reference, (snap) => {
    let data = snap.val();
    setDatas(data);
    if (setLoading) setLoading(false);
  });
};

export default getData;
