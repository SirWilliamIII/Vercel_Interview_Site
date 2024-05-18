import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/">Landing</Link>
      <Link href="/performance">Performance</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </div>
  );
}
