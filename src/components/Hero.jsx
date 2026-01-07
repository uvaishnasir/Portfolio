import { personalInfo } from "../data/constants";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 px-6 md:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto w-full mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-[#0F1419] dark:text-white">
              Hi, I'm {personalInfo.name.split(" ")[1]} — <br />
              <span className="gradient-text">A {personalInfo.title}.</span>
            </h1>

            <p className="text-sm md:text-base text-[#536471] dark:text-[#6E767D] mb-6 max-w-3xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <TechStack />

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href="#contact"
                className="px-8 py-3.5 text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all text-center no-underline"
              >
                Get in touch
              </a>
              <a
                href="/assets/CV.pdf"
                download="Mohd_Uvaish_CV.pdf"
                className="px-8 py-3.5 text-base font-semibold bg-transparent text-[#0F1419] dark:text-white border-2 border-[#EFF3F4] dark:border-[#2F3336] rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-center no-underline"
              >
                Resume / CV
              </a>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center items-center animate-fade-in-delayed mt-8 lg:mt-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="/assets/profile.jpg"
                alt={personalInfo.name}
                className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[460px] lg:w-96 lg:h-[540px] rounded-3xl object-cover border-4 border-white dark:border-[#16181C] shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
