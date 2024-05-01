import { getData } from "./db";

export async function GET() {
  return Response.json(getData());
}
