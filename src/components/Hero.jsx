import { personalInfo } from "../data/constants";
import TechStack from "./TechStack";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 px-6 md:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#0F1419] dark:text-white">
            Hi, I'm {personalInfo.name.split(" ")[1]} — <br />
            <span className="gradient-text">A {personalInfo.title}.</span>
          </h1>

          <p className="text-lg md:text-xl text-[#536471] dark:text-[#6E767D] mb-10 max-w-3xl leading-relaxed">
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
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-base font-semibold bg-transparent text-[#0F1419] dark:text-white border-2 border-[#EFF3F4] dark:border-[#2F3336] rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-center no-underline"
            >
              Resume / CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
