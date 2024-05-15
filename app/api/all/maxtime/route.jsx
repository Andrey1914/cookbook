import { NextResponse } from "next/server";
import supabase from "@/db/client";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const { data, error } = await supabase.from("maxtime").select();

  console.log(searchParams);

  if (error) console.log("Failed to fetch data => API [/all/maxtime]", error);

  return NextResponse.json(data);
}
