import boltLogo from '../assets/bolt.png';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-black bg-opacity-80 text-xl py-4">
      <div className="grid grid-cols-5 items-center text-center max-w-7xl mx-auto px-4">
        
        {/* Home */}
        <a href="#home" className="hover:text-orange-400">Home</a>

        {/* About */}
        <a href="#about" className="hover:text-orange-400">About</a>

        {/* Logo (Clickable as Home) */}
        <div className="flex justify-center">
          <a href="#home">
            <img src={boltLogo} alt="Logo" className="h-10 w-10 object-contain hover:scale-105 transition-transform" />
          </a>
        </div>

        {/* Contact */}
        <a href="#contact" className="hover:text-orange-400">Contact</a>

        {/* Resume */}
        <a href="/resume.pdf" target="_blank" className="hover:text-orange-400">Resume</a>
      </div>
    </nav>
  );
}
