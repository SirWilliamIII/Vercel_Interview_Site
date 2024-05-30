import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto">
        <Link href="/">Interview Questions</Link>
        <div className="space-x-4 text-xl">
          <Link href="/aboutme">About Me</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/family">Family</Link>
          <Link href="/hobbies">Hobbies</Link>
        </div>
      </nav>
    </div>
  );
}
