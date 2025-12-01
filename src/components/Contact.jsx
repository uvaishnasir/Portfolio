import React from 'react';
import { personalInfo } from '../data/constants';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0f0f0f]">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">
                        Hey, you scrolled this far, let's talk.
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="btn btn-primary text-lg"
                        >
                            Email Me
                        </a>
                        <a
                            href={`https://${personalInfo.github}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline text-lg"
                        >
                            View GitHub
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                        <div>
                            <p className="text-gray-500 text-sm mb-2">Email</p>
                            <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:text-blue-300">
                                {personalInfo.email}
                            </a>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-2">Phone</p>
                            <a href={`tel:+91${personalInfo.phone}`} className="text-blue-400 hover:text-blue-300">
                                +91 {personalInfo.phone}
                            </a>
                        </div>
                        <div>
                            <p className="text-gray-500 text-sm mb-2">Location</p>
                            <p className="text-gray-300">{personalInfo.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
