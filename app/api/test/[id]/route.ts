import testingResult from "@/functions/testingResult";
import { edit } from "../db";
import { onValue, ref } from "firebase/database";
import { realDB } from "@/utils/firebase";
import { Quiz } from "@/utils/type";

export async function GET(
  _: Response,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  let data: Quiz[] = [];
  let reference = ref(realDB, "/tests");
  onValue(reference, (snap) => {
    data = snap.val();
  });

  if (data && data?.find((e) => e.id === params.id)) {
    return Response.json(data.find((e) => e.id === params.id));
  } else {
    return Response.json("oops");
  }
}

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const res = await req.json();

  let data: Quiz = {
    id: "",
    name: "",
    quizs: [],
  };
  let reference = ref(realDB, "/tests");
  onValue(reference, (snap) => {
    data = snap.val().find((e: Quiz) => e.id === params.id);
  });

  if (data.id) {
    return Response.json(testingResult(data, res));
  }

  return Response.json("oops");
}

export async function PUT(req: Request) {
  const res = await req.json();
  return Response.json(edit(res));
}
