import { getData } from "./db";

export async function GET() {
  let data: any[] = [];
  data = await getData();
  console.log(data);

  return Response.json(data);
}
