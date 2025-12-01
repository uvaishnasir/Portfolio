import React from 'react';
import { personalInfo } from '../data/constants';
import TechStack from './TechStack';

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center pt-24 pb-12">
            <div className="container-custom animate-fade-in">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6">
                        Hi, I'm {personalInfo.name.split(' ')[1]} — <br />
                        <span className="gradient-text">A {personalInfo.title}.</span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-3xl leading-relaxed">
                        {personalInfo.tagline}
                    </p>

                    <TechStack />

                    <div className="flex gap-4 mt-8">
                        <a
                            href="#contact"
                            className="btn btn-primary"
                        >
                            Get in touch
                        </a>
                        <a
                            href="/assets/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Resume / CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
