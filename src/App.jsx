import './index.css';
import backgroundVideo from './assets/background.mp4';

import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import TechStack from './components/techstack';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="relative">
      {/* Fixed Full-Page Background Video */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* All Content on Top of Video */}
      <div className="relative z-10 font-mono text-violet-300">
        <Navbar />
        <main className="bg-black bg-opacity-50 ">
          <Hero />
          <TechStack />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
