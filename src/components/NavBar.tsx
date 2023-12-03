import Link from "next/link";

export default function NavBar() {
  return (
    <header className="w-full max-w-[390px] m-auto">
      <nav className="flex justify-between items-center gap-6 py-2 px-6 h-[70px] ">
        <Link className="font-semibold text-base" href={"/"}>
          Portfolio
        </Link>
        <Link className="font-semibold text-base" href={"/resources"}>
          Resources
        </Link>
        <Link className="font-semibold text-base" href={"/about"}>
          About
        </Link>
      </nav>
    </header>
  );
}
