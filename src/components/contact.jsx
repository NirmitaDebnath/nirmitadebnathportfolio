export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8">
        {/* === Card 1: Buttons === */}
        <div className="w-full md:w-[45%] bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 text-white shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-pink-400 hover:shadow-[0_0_20px] text-center">
          <h2 className="text-lg font-bold mb-6">Quick Links</h2>
          <div className="flex flex-col gap-4">
            <a
              href="https://resume.io/r/VLCmN3pHx" // Replace with actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded text-sm transition"
            >
              📄 Resume
            </a>
            <a
              href="#projects" // Adjust based on your routing
              className="bg-orange-600 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded text-sm transition"
            >
              💼 My Projects
            </a>
            <a
              href="https://linkedin.com/in/yourprofile" // Replace with your actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded text-sm transition"
            >
              🔗 LinkedIn
            </a>
          </div>
        </div>

        {/* === Card 2: Contact Form === */}
        <div className="w-full md:w-[45%] bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/20 text-white shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-pink-400 hover:shadow-[0_0_20px]">
          <h2 className="text-lg font-bold mb-4 text-center">📬 Reach Me</h2>
          <form
            action="https://formspree.io/f/your-form-id" // Replace with your actual Formspree ID
            method="POST"
            className="space-y-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 rounded bg-white/80 text-black placeholder-gray-700 focus:outline-none text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 rounded bg-white/80 text-black placeholder-gray-700 focus:outline-none text-sm"
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Your Message"
              required
              className="w-full p-2 rounded bg-white/80 text-black placeholder-gray-700 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded text-sm"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
