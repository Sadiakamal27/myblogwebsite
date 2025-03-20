import Link from "next/link";

export default function BeOurGuestPage() {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Be Our Guest</h1>
      <p className="text-gray-700 mb-4">We’d love to welcome you! Find out how to visit us.</p>
      
      <video controls className="mx-auto w-3/4 rounded-lg shadow-md">
        <source src="/be-our-guest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

       <div className="mt-4">
        <Link href="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
