"use client";

import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { isValid },
  } = useForm();

  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        router.push(`/recipes/search/${data.search}`);
        resetField("search");
      })}
    >
      <div className="flex items-center space-x-2">
        <Input
          {...register("search", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
          id="search"
          name="search"
          type="text"
          placeholder="Search recipe"
          className="lg:w-80 transition-all"
          required
          onKeyDown={() => {
            if (keyCode === 32) {
              stopPropagation();
            }
          }}
        />
        <Button
          id="search-btn"
          variant="outline"
          type="submit"
          className=" text-slate-50 p-2"
          disabled={!isValid}
        >
          <Search size={30} strokeWidth={1} color="#393E41" />
        </Button>
      </div>
    </form>
  );
}
