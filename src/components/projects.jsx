import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A basic portfolio built with HTML, CSS and JS.",
    liveLink: "https://nirmitadebnath.github.io/PORTFOLIO/",
    codeLink: "https://github.com/NirmitaDebnath/PORTFOLIO",
  },
  {
    title: "Netflix Clone",
    description: "A simple clone app built with HTML, CSS, JS.",
    liveLink: "https://nirmitadebnath.github.io/NetflixWebsiteClone/",
    codeLink: "https://github.com/NirmitaDebnath/NetflixWebsiteClone",
  },
  {
    title: "Shop Site",
    description: "A responsive shop website built with React and TailwindCSS.",
    liveLink: "https://nirmitadebnath.github.io/sarada-t/",
    codeLink: "https://github.com/NirmitaDebnath/sarada-t",
  },
  {
    title: "TicTacToe",
    description: "A simple tictactoe game built with HTML, CSS, JS",
    liveLink: "https://nirmitadebnath.github.io/TicTacToe/",
    codeLink: "https://github.com/NirmitaDebnath/TicTacToe",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-pink-400 hover:shadow-[0_0_20px]"
            >
              <h3 className="text-xl font-semibold text-pink-300 mb-3">{project.title}</h3>
              <p className="mb-6 text-gray-300 text-md">{project.description}</p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-pink-500 text-white px-3 py-2 rounded-md text-sm transition"
                >
                  Live <FaExternalLinkAlt />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm transition"
                >
                  Code <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
