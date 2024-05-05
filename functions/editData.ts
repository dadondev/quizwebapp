
import { Quiz } from "@/utils/type";
import { getDatabase, ref, set } from "firebase/database";

async function editData({
  data,
  id,
  index,
}: {
  data: Quiz;
  id: string;
  index: number;
}) {
  const db = getDatabase();
  set(ref(db, "tests/" + index), data)
    .then(() => {
      // Data saved successfully!
    })
    .catch(() => {
      // The write failed...
    });
}

export default editData;
