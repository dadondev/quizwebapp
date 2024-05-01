import baseUrl from "@/utils/baseUrl";

const registerUser = async (a: any, setLoading: (e: boolean) => void) => {
  const req = await fetch(baseUrl + "/auth", {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify(a),
  });
  const res = await req.json();
  setLoading(false);
  return res === a.email;
};

export default registerUser;
