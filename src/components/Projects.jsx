import React, { useState } from 'react';
import { projects } from '../data/constants';

const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const allTechs = [
        ...(project.technologies.frontend || []),
        ...(project.technologies.backend || []),
        ...(project.technologies.database || [])
    ];

    return (
        <div className="card">
            <div className="mb-4">
                {project.featured && (
                    <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-semibold mb-3">
                        Featured
                    </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.subtitle}</p>

                {project.website && (
                    <a
                        href={`https://${project.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 text-sm font-mono"
                    >
                        {project.website} →
                    </a>
                )}
            </div>

            <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
            </p>

            {isExpanded && (
                <div className="space-y-4 animate-fade-in">
                    <div>
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                                    <span className="text-blue-400 mt-1">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {project.responsibilities && (
                        <div>
                            <h4 className="text-sm font-semibold text-gray-300 mb-3">My Contributions</h4>
                            <ul className="space-y-2">
                                {project.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}

            <div className="mt-6">
                <h4 className="text-xs font-semibold text-gray-500 mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                    {allTechs.slice(0, isExpanded ? allTechs.length : 6).map((tech, index) => (
                        <span key={index} className="badge text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-400 hover:text-blue-300 text-sm font-semibold mt-4"
            >
                {isExpanded ? 'Show Less' : 'View Details →'}
            </button>
        </div>
    );
};

const Projects = () => {
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-20">
            <div className="container-custom">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Featured</p>
                    <h2 className="text-4xl font-bold">Projects</h2>
                </div>

                <div className="grid grid-cols-1 gap-8 mb-12">
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {otherProjects.length > 0 && (
                    <>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-300">Other Projects</h3>
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
