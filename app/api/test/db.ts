import { realDB } from "@/utils/firebase";
import { Quiz } from "@/utils/type";
import { onValue, ref } from "firebase/database";

export const getData = async () => {
  let reference = ref(realDB, "/tests");
  let dataVariable: any[] = [];
  onValue(reference, (snapshot) => {
    dataVariable = snapshot.val();
  });
  return dataVariable;
};

export const edit = (data: Quiz) => {
  // let index = db.tests.findIndex((e) => e.id === data.id);
  // if (db.tests[index].id === data.id) {
  //   db.tests.push(data);
  //   return "Test was edited";
  // }
  // return "Test is not defined";
};

// export default db;
