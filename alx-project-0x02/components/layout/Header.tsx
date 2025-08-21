import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex space-x-6">
      <Link href="/" className="hover:underline">Index</Link>
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
    </header>
  );
}
