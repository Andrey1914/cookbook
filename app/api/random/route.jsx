import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  console.log(searchParams);

  const { data, error } = await supabase.from("random_recipe").select();

  if (error)
    console.log("Failed to fetch random recipe => API [/random]", error);

  return NextResponse.json(data);
}
