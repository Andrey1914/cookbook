import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Loader2 size={48} className="mr-2 mt-10 animate-spin" />
    </div>
  );
}
