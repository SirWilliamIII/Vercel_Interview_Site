import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto">
        <Link href="/">Interview Questions</Link>
      </nav>
    </div>
  );
}
