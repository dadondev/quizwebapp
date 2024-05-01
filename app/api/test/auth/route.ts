import { lgnUser, rgtrUser } from "../db";

export async function POST(req: Request) {
  const body = await req.json();

  if (body.type === "register") {
    return Response.json(rgtrUser(body));
  } else if (body.type === "login") {
    return Response.json(lgnUser(body));
  }
  return "oops";
}
