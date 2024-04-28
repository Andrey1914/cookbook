"use client";

import { Search } from "lucide-react";
import SearchForm from "@/components/Navbar/SearchForm";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MobileSearch() {
  return (
    <Popover>
      <PopoverTrigger>
        <Search size={30} strokeWidth={1} color="#393E41" />
      </PopoverTrigger>
      <PopoverContent>
        <SearchForm />
      </PopoverContent>
    </Popover>
  );
}
