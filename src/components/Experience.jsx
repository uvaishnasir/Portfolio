import React from 'react';
import { experience } from '../data/constants';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <div className="container-custom">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Featured</p>
                    <h2 className="text-4xl font-bold">Experience</h2>
                </div>

                <div className="space-y-8">
                    {experience.map((exp) => (
                        <div
                            key={exp.id}
                            className="card animate-slide-left"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
                                    <p className="text-lg text-blue-400 mb-2">{exp.role}</p>
                                    <p className="text-sm text-gray-500">
                                        {exp.duration} • {exp.location}
                                        {exp.current && <span className="ml-2 px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs">Current</span>}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies & Tools</h4>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, index) => (
                                        <span key={index} className="badge text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.responsibilities.map((resp, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-400">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
