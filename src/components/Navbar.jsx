import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
            <div className="container-custom">
                <div className="flex items-center justify-between py-4">
                    <a href="#" className="text-xl font-bold gradient-text">
                        Uvaish
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#experience" className="link-hover text-gray-300 hover:text-white">
                            Work
                        </a>
                        <a href="#projects" className="link-hover text-gray-300 hover:text-white">
                            Projects
                        </a>
                        <a href="#about" className="link-hover text-gray-300 hover:text-white">
                            About
                        </a>
                        <a href="#contact" className="btn btn-primary text-sm px-6 py-2">
                            Contact
                        </a>
                    </div>

                    {/* Mobile menu button - simplified for now */}
                    <button className="md:hidden text-gray-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
