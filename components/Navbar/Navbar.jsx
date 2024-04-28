import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Navbar/Menu";
import SearchForm from "@/components/Navbar/SearchForm";
import MobileSearch from "@/components/Navbar/MobileSearch";

export default function Navbar() {
  return (
    <nav id="nav-container" className="pt-2 flex justify-between items-center">
      <Link href="/">
        <Image
          id="logo"
          src="/logo.svg"
          width={100}
          height={50}
          alt="ReciFood"
        />
      </Link>
      {/* Desktop */}
      <div className="hidden lg:block">
        <SearchForm />
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <MobileSearch />
      </div>
      <Menu />
    </nav>
  );
}
