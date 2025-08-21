import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex space-x-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
}
