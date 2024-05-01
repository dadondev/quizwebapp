import baseUrl from "@/utils/baseUrl";

const getSingleData = async ({
  setDatas,
  id,
  setTime,
}: {
  setDatas: (a: any) => void;
  id: string;
  setTime?: (a: any) => void;
}) => {
  const req = await fetch(baseUrl + "/" + id, {
    cache: "no-store",
  });
  const res = await req.json();
  if (setTime) {
    let time =
      res.quizs.length > 9
        ? res.quizs.length + ":00"
        : "0" + res.quizs.length + ":00";
    setTime(time);
  }
  setDatas(res);
};

export default getSingleData;
