import Link from "next/link";

export default function Blog3Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center">Living with Purpose</h1>
      <p className="text-gray-600 text-justify mt-2">Discover the key to a fulfilling and meaningful life.</p>
      <img src="/pic.jpg" alt="Living with Purpose" className="w-full rounded-lg mt-6" />
      <p className="mt-4 text-gray-700">
        Living with purpose means finding meaning in what we do, whether in our careers, relationships, or personal growth...
      </p>
      <div className="mt-5">
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-1 rounded-full text-lg hover:bg-blue-700 transition">
            Go to Home
          </button>
        </Link>
      </div>    </div>
  );
}
