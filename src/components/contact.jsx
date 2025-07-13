import {
  faGithub,
  faLinkedin,
  faInstagram,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileAlt,
  faFolderOpen,
  faImage,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between">
        {/* === Quick Links === */}
        <div className="w-full lg:w-[45%] text-center">
          <h2 className="text-md sm:text-2xl font-bold mb-6">🔗 Quick Links</h2>

          {/* Row 1: Full Label Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <FullButton
              href="https://resume.io/r/VLCmN3pHx"
              icon={faFileAlt}
              label="Resume"
            />
            <FullButton
              href="https://github.com/NirmitaDebnath?tab=repositories"
              icon={faFolderOpen}
              label="Projects"
            />
            <FullButton
              href="https://drive.google.com/file/d/1pCLBJSpB6NIHM41se2Us50g5nH-wYjAS/view"
              icon={faImage}
              label="Gallery"
            />
          </div>

          {/* Row 2: Icon Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <CleanIconButton
              href="https://github.com/NirmitaDebnath"
              icon={faGithub}
              label="GitHub"
            />
            <CleanIconButton
              href="https://linkedin.com/in/nirmita-debnath-5a1b52201/"
              icon={faLinkedin}
              label="LinkedIn"
            />
            <CleanIconButton
              href="mailto:nirmitadebnath7217@gmail.com"
              icon={faEnvelope}
              label="Email"
            />
            <CleanIconButton
              href="https://instagram.com/nirmitadebnath"
              icon={faInstagram}
              label="Instagram"
            />
            <CleanIconButton
              href="https://www.hackerrank.com/profile/nirmitadebnath71"
              icon={faHackerrank}
              label="HackerRank"
            />
            <CleanIconButton
              href="https://leetcode.com/u/nirmitadebnath7217/"
              icon={faCode}
              label="LeetCode"
            />
          </div>
        </div>

        {/* === Contact Form === */}
        <div className="w-full lg:w-[45%]">
          <h2 className="text-md sm:text-xl font-bold mb-4 text-center">Reach Me</h2>
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none text-sm"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="w-full bg-pink-400 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded text-sm transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FullButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 border border-pink-400 hover:border-pink-500 text-pink-200 hover:text-pink-950 px-4 py-2 rounded-full text-sm sm:text-md hover:bg-pink-400 transition"
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </a>
  );
}

function CleanIconButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className="text-pink-300 hover:text-orange-400 text-3xl transition-transform hover:scale-125"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
