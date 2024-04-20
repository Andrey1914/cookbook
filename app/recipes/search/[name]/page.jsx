import SearchCards from "@/components/Recipes/Search/SearchCards";

export const metadata = {
  title: "CookBook - Search Result",
};

export default function SearchResult({ params: { name } }) {
  return (
    <>
      <div>
        <h2 className="text-lg font-medium mt-4 sm:text-2xl sm:mt-8">
          Searc result for{" "}
          <span className="font-bold">“{decodeURI(name)}”</span>
        </h2>
      </div>
      <SearchCards name={name} />
    </>
  );
}
