import { useState } from "react";
import { projects } from "../data/constants";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const allTechs = [
    ...(project.technologies.frontend || []),
    ...(project.technologies.backend || []),
    ...(project.technologies.database || []),
  ];

  return (
    <div className="bg-white dark:bg-[#16181C] rounded-2xl p-8 border border-[#EFF3F4] dark:border-[#2F3336] mb-8 hover:border-gray-300 dark:hover:border-zinc-700 hover:-translate-y-1 hover:shadow-xl transition-all">
      <div className="mb-6">
        {project.featured && (
          <span className="inline-block px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold mb-4">
            Featured
          </span>
        )}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#0F1419] dark:text-white">
          {project.title}
        </h3>
        <p className="text-[#536471] dark:text-[#6E767D] mb-4 text-lg">
          {project.subtitle}
        </p>

        {project.website && (
          <a
            href={`https://${project.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 text-sm font-mono hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            {project.website} →
          </a>
        )}
      </div>

      <p className="text-[#536471] dark:text-[#6E767D] mb-6 leading-relaxed">
        {project.description}
      </p>

      {isExpanded && (
        <div className="mb-6 space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide">
              Key Features
            </h4>
            {project.features.map((feature, index) => (
              <div key={index} className="flex gap-3 mb-3">
                <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                  ✓
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {project.responsibilities && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 uppercase tracking-wide">
                My Contributions
              </h4>
              {project.responsibilities.map((resp, index) => (
                <div key={index} className="flex gap-3 mb-3">
                  <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                    •
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-6">
        <h4 className="text-xs font-semibold text-[#536471] mb-3 uppercase tracking-wide">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {allTechs
            .slice(0, isExpanded ? allTechs.length : 6)
            .map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 text-[#0F1419] dark:text-[#6E767D] rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 dark:text-blue-400 text-sm font-semibold mt-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors bg-transparent border-none cursor-pointer p-0"
      >
        {isExpanded ? "Show Less" : "View Details"}{" "}
        <span
          className={`inline-block transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-8 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-[#536471] mb-3 font-semibold">
            Featured
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0F1419] dark:text-white">
            Projects
          </h2>
        </div>

        <div>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <div className="mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Other Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
