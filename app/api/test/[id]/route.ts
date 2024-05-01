import testingResult from "@/functions/testingResult";
import db from "../db";

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
  let data: any;
  data = db.tests.find((e) => e.id === params.id);

  if (data) {
    return Response.json(data);
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

  const test = db.tests.find((e) => e.id === params.id);

  if (test) {
    return Response.json(testingResult(test, res));
  }

  return Response.json("oops");
}
