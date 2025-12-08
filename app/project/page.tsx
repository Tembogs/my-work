import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js, TypeScript, and Tailwind CSS.",
    image: "/project1.jpg",
    link: "https://github.com/temmy/portfolio",
  },
  {
    title: "Task Manager",
    description: "A task manager app with CRUD features and local storage.",
    image: "/project2.jpg",
    link: "https://github.com/temmy/task-manager",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-black mb-8 mt-10">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
          >
            {/* Project Image */}
            <div className="w-full h-48 sm:h-56 lg:h-64 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 md:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-200 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </main>
  );
}
