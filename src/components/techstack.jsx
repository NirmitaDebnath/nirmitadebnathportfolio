export default function TechStack() {
  const techItems = [
    "⚛️ React",
    "🌬️ Tailwind CSS",
    "💾 MySQL",
    "📦 Node.js",
    "🐳 Docker",
    "☸️ Kubernetes",
    "☕ Java",
    "🐍 Python",
    "🧠 Machine Learning",
    "🌐 HTML, CSS, JS",
    "🔧 Git",
    "🐧 Linux",
    "🌿 Spring Boot",
  ];

  return (
    <section id="tech" className="py-16 px-4 sm:px-6">
      <div className="max-w-screen-lg mx-auto">
        <h4 className="text-md sm:text-2xl font-bold mb-8 text-center text-white">
          Tech Stack
        </h4>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm sm:text-base">
          {techItems.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-full hover:bg-pink-500/30 transition duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
