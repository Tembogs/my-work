import Image from "next/image";
import profilePic from "@/public/profile.jpg"; // we’ll add this next

export default function AboutPage() {
  return (
    <main className="min-h-screen p-10 flex flex-col md:flex-row items-center gap-10 bg-gray-100">
      
      {/* Profile Image */}
      <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg mt-10 md:mt-none">
        <Image
          src={profilePic}
          alt="Temmy Ezekiel"
          fill
          className="object-cover"
        />
      </div>

      {/* About Text */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Hi, I’m Temmy, a frontend developer passionate about building modern and responsive web applications using Next.js, TypeScript, and Tailwind CSS.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-black">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-blue-500 text-white rounded-full hover:scale-110 transition">Next.js</span>
          <span className="px-3 py-1 bg-green-500 text-white rounded-full hover:scale-110 transition">TypeScript</span>
          <span className="px-3 py-1 bg-purple-500 text-white rounded-full hover:scale-110 transition">Tailwind CSS</span>
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-full hover:scale-110 transition">React</span>
        </div>
      </div>

    </main>
  );
}
