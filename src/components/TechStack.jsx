import { techStack } from "../data/constants";

const TechStack = () => {
  const allTechs = [
    ...techStack.languages,
    ...techStack.frontend,
    ...techStack.backend,
    ...techStack.databases.slice(0, 2),
    ...techStack.cloudStorage.slice(0, 1),
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-8 mb-4">
      {allTechs.map((tech, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700 hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
