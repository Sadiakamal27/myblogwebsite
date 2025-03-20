import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto p-6 text-justify">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Welcome to our platform! We are committed to providing insightful, valuable, and engaging content 
        that inspires and educates our audience. Our mission is to create a space where knowledge is 
        easily accessible, ideas are exchanged freely, and people feel empowered to grow both personally 
        and professionally. Whether you are here to explore new perspectives, gain deeper insights, or 
        simply stay informed, we aim to deliver high-quality content that meets your needs. Thank you for 
        being a part of our journey, and we look forward to growing together with you.
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
