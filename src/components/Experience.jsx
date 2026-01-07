import { experience } from "../data/constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-8 bg-[#F7F9F9] dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-[#536471] mb-3 font-semibold">
            Featured
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1419] dark:text-white">
            Experience
          </h2>
        </div>

        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-white dark:bg-[#16181C] rounded-2xl p-8 border border-[#EFF3F4] dark:border-[#2F3336] mb-8 hover:border-gray-300 dark:hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#0F1419] dark:text-white">
                {exp.company}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mb-3 font-semibold">
                {exp.role}
              </p>
              <p className="text-sm text-[#536471] dark:text-[#6E767D]">
                {exp.duration} • {exp.location}
                {exp.current && (
                  <span className="ml-3 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold inline-block">
                    Current
                  </span>
                )}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-[#536471] dark:text-[#6E767D] mb-4 uppercase tracking-wide">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-[#0F1419] dark:text-[#6E767D] rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {exp.responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-3 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-[#536471] dark:text-[#6E767D] leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
