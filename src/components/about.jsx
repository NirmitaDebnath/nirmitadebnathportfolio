import { useState, useEffect } from "react";

export default function About() {
  const [showEducation, setShowEducation] = useState(false);
  const [showWork, setShowWork] = useState(false);

  useEffect(() => {
    let timer;
    if (showEducation) {
      timer = setTimeout(() => setShowEducation(false), 10000);
    }
    return () => clearTimeout(timer);
  }, [showEducation]);

  useEffect(() => {
    let timer;
    if (showWork) {
      timer = setTimeout(() => setShowWork(false), 10000);
    }
    return () => clearTimeout(timer);
  }, [showWork]);

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-evenly gap-12">
          {/* === Education Card === */}
          <div
            onMouseEnter={() => setShowEducation(true)}
            className="group w-full md:w-[40%] max-w-md relative bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-pink-400 hover:shadow-[0_0_20px]"
          >
            {/* Pink Overlay */}
            {!showEducation && (
              <div className="absolute inset-0 bg-pink-400/20 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 z-10">
                <h3 className="text-2xl font-semibold text-white">Education</h3>
              </div>
            )}

            {/* Content Reveal */}
            <div
              className={`transition-all duration-1000 relative z-20 text-white space-y-2 text-md ${
                showEducation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h4 className="text-lg font-bold">🎓 B.Tech in Production Engineering</h4>
              <p>NIT Agartala, 2020 - 2024</p>
              <p>CGPA: 8.18</p>
              <h4 className="text-lg font-bold">🎓 Schooling</h4>
              <p>Hindi Higher Secondary School, Agartala, 2018 - 2020</p>
              <p>XII (AISSCE): 83.3%</p>
              <p>Holy Cross School, Agartala, 2005 - 2018</p>
              <p>X (CISCE): 86.6%</p>
            </div>
          </div>

          {/* === Work Card === */}
          <div
            onMouseEnter={() => setShowWork(true)}
            className="group w-full md:w-[40%] max-w-md relative bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/20 overflow-hidden transform transition-all duration-700 hover:-translate-y-2 hover:shadow-pink-400 hover:shadow-[0_0_20px]"
          >
            {/* Pink Overlay */}
            {!showWork && (
              <div className="absolute inset-0 bg-pink-400/20 backdrop-blur-sm flex items-center justify-center transition-all duration-1000 z-10">
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
              </div>
            )}

            {/* Content Reveal */}
            <div
              className={`transition-all duration-1000 relative z-20 text-white space-y-2 text-md ${
                showWork ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h4 className="text-lg font-bold">💼 Siemens Technology and Services Pvt. Ltd.</h4>
              <p>Graduate Trainee Engineer</p>
              <p>Apprentice (Technical)</p>
              <p>August 2024 – Present</p>
              <p>Worked with Kubernetes, CI/CD, Docker, Java, SpringBoot</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
