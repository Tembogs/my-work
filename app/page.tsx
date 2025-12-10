export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Hi, I’m Temmy 👋
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          I’m a Frontend and a Backend Developer building websites with
          Next.js ,TypeScript, JavaScript, React, Tailwind CSS, Node.js, Express, MongoDb
        </p>

        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          View My Projects
        </button>
      </div>
    </main>
  );
}
