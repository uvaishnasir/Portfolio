import React from 'react';
import { techStack } from '../data/constants';

const TechStack = () => {
    const allTechs = [
        ...techStack.languages,
        ...techStack.frontend,
        ...techStack.backend,
        ...techStack.databases.slice(0, 2),
        ...techStack.cloudStorage.slice(0, 1)
    ];

    return (
        <div className="flex flex-wrap gap-3 mt-6 mb-8">
            {allTechs.map((tech, index) => (
                <span
                    key={index}
                    className="badge hover-scale cursor-pointer"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
};

export default TechStack;
