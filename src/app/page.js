import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-100">
     
    

     {/* Hero Section */}
<div className="relative w-[97%] mx-auto h-[350px] md:h-[300px] flex items-center justify-center bg-black text-white rounded-2xl overflow-hidden shadow-lg">
  <Image 
    src="/blogcover.png" 
    alt="Blog Hero" 
    layout="fill" 
    objectFit="cover" 
    className="opacity-80 rounded-2xl"
  />
  <h1 className="text-3xl font-bold relative">Read Our Blog</h1>
</div>

{/* Blog Introduction */}
<div className="text-center mt-9 px-6">
        <h2 className="text-xl font-semibold">Weekly Articles with Insight</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our blog takes the message from the weekend and lays out next steps for you.
        </p>
      </div>
      {/* Blog Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-20">
        {/* Blog 1 */}
        <Link href="/blog1">
          <div className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-60">
              <Image src="/blog1.jpg" alt="Blog Post 1" layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">Understanding Faith</h2>
              <p className="text-gray-600 text-sm">How faith influences our daily lives.</p>
            </div>
          </div>
        </Link>

        {/* Blog 2 */}
        <Link href="/blog2">
          <div className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-60">
              <Image src="/blog2.jpg" alt="Blog Post 2" layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="p-3">
              <h2 className="text-lg font-semibold">The Role of AI in Business</h2>
              <p className="text-gray-600 text-sm">How AI is improving efficiency and innovation.</p>
            </div>
          </div>
        </Link>

        {/* Blog 3 */}
        <Link href="/blog3">
          <div className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative w-full h-60">
              <Image src="/blog3.jpg" alt="Blog Post 3" layout="fill" objectFit="cover" className="rounded-t-lg" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">Living with Purpose</h2>
              <p className="text-gray-600 text-sm">Finding true meaning in life.</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 mt-10 bg-white shadow-md">
        <p className="text-gray-500">© 2025 NB Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
