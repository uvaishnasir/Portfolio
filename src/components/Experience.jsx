import { experience } from "../data/constants";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-semibold">
            Featured
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </div>

        {experience.map((exp) => (
          <div
            key={exp.id}
            className="bg-[#111111] rounded-2xl p-8 border border-gray-800 mb-8 hover:border-gray-700 hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {exp.company}
              </h3>
              <p className="text-lg text-blue-400 mb-3 font-semibold">
                {exp.role}
              </p>
              <p className="text-sm text-gray-500">
                {exp.duration} • {exp.location}
                {exp.current && (
                  <span className="ml-3 px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs font-semibold inline-block">
                    Current
                  </span>
                )}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {exp.responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-3 mb-4">
                  <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                  <span className="text-gray-400 leading-relaxed">{resp}</span>
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
