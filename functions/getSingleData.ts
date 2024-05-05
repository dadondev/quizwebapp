import baseUrl from "@/utils/baseUrl";
import { realDB } from "@/utils/firebase";
import { Quiz } from "@/utils/type";
import { onValue, ref } from "firebase/database";

const getSingleData = async ({
  setDatas,
  id,
  setTime,
  setIndex,
}: {
  setDatas: (a: any) => void;
  id: string;
  setTime?: (a: any) => void;
  setIndex?: (a: number) => void;
}) => {
  const dbRef = ref(realDB, "/tests");

  let res: Quiz = {
    id: "",
    name: "",
    quizs: [],
  };
  onValue(dbRef, (snap) => {
    res = { ...snap.val().find((e: Quiz) => e.id === id) };
    let index = snap.val().findIndex((e: Quiz) => e.id === id);
    if (setIndex) {
      setIndex(index);
    }
    if (setTime && res.name) {
      let time =
        res.quizs.length > 9
          ? res.quizs.length + ":00"
          : "0" + res.quizs.length + ":00";
      setTime(time);
    }
    setDatas(res);
  });
};

export default getSingleData;
