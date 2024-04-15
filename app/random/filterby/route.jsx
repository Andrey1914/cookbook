import { NextResponse } from "next/server";
import supabase from "@/db/client";

// export async function GET(req) {
//   const searchParams = req.nextUrl.searchParams;

//   const meal = searchParams.get("meal");
//   const diet = searchParams.get("diet");

//   let recipes;
//   let errorMessage;

//   if (meal !== null && diet === null) {
//     const { data, error } = await supabase
//       .from("recipes")
//       .select(
//         "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
//       )
//       .eq("course", meal);

//     recipes = data;
//     errorMessage = error;
//   } else if (meal !== null && diet !== null) {
//     const { data, error } = await supabase
//       .from("recipes")
//       .select(
//         "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
//       )
//       .eq("course", meal)
//       .eq("diet", diet);

//     recipes = data;
//     errorMessage = error;
//   }
//   if (errorMessage)
//     console.log(
//       "Failed to fetch filtered random recipe => API [/random/filterby?queryParams]",
//       errorMessage
//     );
//   return NextResponse.json(recipes);
// }

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const meal = searchParams.get("meal");
  const diet = searchParams.get("diet");

  let recipes;
  let errorMessage;

  const query = supabase
    .from("recipes")
    .select(
      "id, name, prepTimeInMins, cookTimeInMins, totalTimeInMins, servings, cuisine, course, diet, totalCaloriesInCal, link, imgURL"
    );

  if (meal !== null) {
    query.eq("course", meal);
    if (diet !== null) {
      query.eq("diet", diet);
    }
  } else if (diet !== null) {
    query.eq("diet", diet);
  }

  const { data, error } = await query;

  recipes = data;
  errorMessage = error;

  if (errorMessage) {
    console.log(
      "Failed to fetch filtered random recipe => API [/random/filterby?queryParams]",
      errorMessage
    );
  }

  return NextResponse.json(recipes);
}
