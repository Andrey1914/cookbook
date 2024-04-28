import RecipeGrid from "@/components/Recipes/RecipeGrid";

export default function RecipeCards({ filters }) {
  return (
    <div>
      <h3 className="text-lg font-medium my-4 sm:text-2xl">Recipes</h3>
      <RecipeGrid filters={filters} />
    </div>
  );
}
