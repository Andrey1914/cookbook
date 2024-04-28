import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function CategoryCard() {
  return (
    <div>
      <Image
        className="rounded-xl sm:rounded-3xl"
        src="/omlet.jpg"
        width={200}
        height={200}
        alt="Category Item"
      />
      <p className="text-center mt-2 font-medium">Biryani</p>
    </div>
  );
}
