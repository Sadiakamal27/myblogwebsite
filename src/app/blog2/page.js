import Link from "next/link";

export default function Blog2Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center">The Role of AI in Streamlining Business Operations</h1>
      <p className="text-gray-600 text-justify mt-10">How artificial intelligence is transforming modern businesses.</p>
      
      <p className="mt-3 text-gray-700">
        Artificial Intelligence (AI) has revolutionized the way businesses operate by automating repetitive tasks, 
        enhancing decision-making processes, and improving customer experiences. From predictive analytics to 
        chatbots, AI-driven solutions help businesses increase efficiency, reduce costs, and drive innovation.
      </p>

      <div className="mt-5">
        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-1 rounded-full text-lg hover:bg-blue-700 transition">
            Go to Home
          </button>
        </Link>
      </div>   
    </div>
  );
}
