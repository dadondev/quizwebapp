import baseUrl from "@/utils/baseUrl";

const getData = async (
  setDatas: (a: any) => void,
  setLoading?: (a: boolean) => void
) => {
  fetch(baseUrl)
    .then((e) => e.json())
    .then((e) => {
      setDatas(e);
    })
    .catch((e) => {
      throw e;
    });
  if (setLoading) {
    setLoading(false);
  }
};

export default getData;
