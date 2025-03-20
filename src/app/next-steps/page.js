import Link from "next/link";

export default function NextStepsPage() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Next Steps</h1>
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Your journey with us has just begun! Explore the next steps to deepen your 
        understanding, engage with our community, and grow further.
      </p>

      <div className="mt-6">
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
