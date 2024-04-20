import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET(req, { params: { name } }) {
  const searchParams = req.nextUrl.searchParams;
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const { data, error } = await supabase
    .from("recipes")
    .select(
      "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
    )
    .textSearch("name", decodeURI(name), {
      type: "websearch",
      config: "english",
    })
    .range(start, end);

  if (error) console.log(error);

  return NextResponse.json(data);
}
