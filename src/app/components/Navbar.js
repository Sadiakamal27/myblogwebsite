import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">ABC Blog</h1>
      <div className="space-x-4">
        <Link href="/watch" className="text-gray-700 hover:text-black">Watch</Link>
        <Link href="/about" className="text-gray-700 hover:text-black">About</Link>
        <Link href="/ministries" className="text-gray-700 hover:text-black">Ministries</Link>
        <Link href="/next-steps" className="text-gray-700 hover:text-black">Next Steps</Link>
        <Link href="/be-our-guest">
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
            Be Our Guest
          </button>
        </Link>
      </div>
    </nav>
  );
}
