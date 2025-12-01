import React from 'react';
import { personalInfo, socialLinks } from '../data/constants';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0f0f0f]">
            <div className="container-custom">
                <div className="mb-12">
                    <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">About</p>
                    <h2 className="text-4xl font-bold">Me</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">{personalInfo.about.fullName}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {personalInfo.description}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-3 text-gray-300">Education</h4>
                            <div className="space-y-1">
                                <p className="font-semibold">{personalInfo.about.education.degree}</p>
                                <p className="text-gray-400">{personalInfo.about.education.institution}</p>
                                <p className="text-sm text-gray-500">
                                    {personalInfo.about.education.location} | {personalInfo.about.education.duration} | CGPA: {personalInfo.about.education.cgpa}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-3 text-gray-300">Certifications</h4>
                            <ul className="space-y-2">
                                {personalInfo.about.certifications.map((cert, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-400">
                                        <span className="text-blue-400 mt-1">•</span>
                                        <span>
                                            <strong className="text-gray-300">{cert.name}</strong> – {cert.issuer}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-semibold mb-3 text-gray-300">Achievements</h4>
                            <ul className="space-y-3">
                                {personalInfo.about.achievements.map((achievement, index) => (
                                    <li key={index} className="flex items-start gap-2 text-gray-400">
                                        <span className="text-blue-400 mt-1">✓</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-gray-300">Connect with me</h4>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover-scale"
                                    >
                                        <img
                                            src={social.icon}
                                            alt={social.name}
                                            className="w-10 h-10 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
