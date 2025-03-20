import Link from "next/link";
import Image from "next/image";

export default function Blog1Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center">Understanding Faith in Daily Life</h1>
      <p className="text-gray-600 text-justify mt-10">Explore how faith shapes our everyday experiences.</p>
      
      <p className="mt-3 text-gray-700">
        Faith plays a vital role in shaping our daily decisions, interactions, and outlook on life.
        It helps us find peace in uncertainty, encourages us to help others, and strengthens our resolve 
        in tough situations. Through faith, we develop a deeper sense of purpose and belonging.
      </p>

      <div className="mt-5">
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-1 rounded-full text-lg hover:bg-blue-700 transition">
            Go to Home
          </button>
        </Link>
      </div>   </div>
  );
}
