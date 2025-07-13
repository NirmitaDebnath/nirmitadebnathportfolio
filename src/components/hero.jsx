import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-10 sm:py-16"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">
        Hi, I'm Nirmita
      </h1>
      <p className="text-base sm:text-xl max-w-md sm:max-w-xl text-white mb-6">
        A corporate girl. I work with DevOps. I enjoy development — blending
        logic with creativity, creating meaningful solutions.
      </p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 text-orange-400 text-2xl sm:text-3xl">
        <a
          href="https://www.linkedin.com/in/nirmita-debnath-5a1b52201/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/NirmitaDebnath"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="mailto:nirmitadebnath7217@gmail.com"
          className="hover:text-pink-400 transition"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
}
