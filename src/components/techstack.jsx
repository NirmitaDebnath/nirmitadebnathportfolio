export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4 text-lg">
        {[
          "⚛️ React",
          "🌬️ Tailwind CSS",
          "💾 MYSQL",
          "📦 Node.js",
          "☁️ Docker",
          "🔧 Kubernetes",
          "🧠 Java",
          " Python",
          " ML"
        ].map((tech, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-md text-white rounded-full hover:bg-pink-500/30 transition duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
