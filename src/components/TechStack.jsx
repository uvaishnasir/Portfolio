import { techStack } from "../data/constants";

const TechStack = () => {
  const allTechs = [
    ...techStack.languages,
    ...techStack.frontend,
    ...techStack.backend,
    ...techStack.databases,
    ...techStack.cloudStorage.slice(0, 3),
  ];

  return (
    <div className="flex flex-wrap gap-3 mt-8 mb-4">
      {allTechs.map((tech, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-gray-100 dark:bg-zinc-800 text-[#0F1419] dark:text-[#6E767D] rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;
