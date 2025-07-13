import boltLogo from '../assets/bolt.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-80 text-base sm:text-lg py-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-5 sm:grid-cols-5 items-center text-center gap-4 sm:gap-0">
        {/* Home */}
        <a href="#home" className="hover:text-orange-400 sm:col-span-1">
          Home
        </a>

        {/* About */}
        <a href="#about" className="hover:text-orange-400 sm:col-span-1">
          About
        </a>

        {/* Logo */}
        <div className="flex justify-center sm:col-span-1">
          <a href="#home">
            <img
              src={boltLogo}
              alt="Logo"
              className="h-10 w-10 object-contain hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Contact */}
        <a href="#contact" className="hover:text-orange-400 sm:col-span-1">
          Contact
        </a>

        {/* Resume */}
        <a
          href="https://resume.io/r/VLCmN3pHx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange-400 sm:col-span-1"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
