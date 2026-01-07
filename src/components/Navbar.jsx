import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-[#EFF3F4] dark:border-[#2F3336]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="gradient-text text-xl font-bold no-underline">
          Uvaish
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#experience"
            className="text-[#0F1419] dark:text-[#6E767D] no-underline hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="#projects"
            className="text-[#0F1419] dark:text-[#6E767D] no-underline hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-[#0F1419] dark:text-[#6E767D] no-underline hover:text-blue-600 dark:hover:text-white transition-colors"
          >
            About
          </a>

          <ThemeToggle />

          <a
            href="#contact"
            className="px-6 py-2.5 bg-blue-600 dark:bg-blue-600 text-white rounded-lg no-underline font-semibold hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#0F1419] dark:text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black border-t border-[#EFF3F4] dark:border-[#2F3336]">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#experience"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#0F1419] dark:text-[#6E767D] no-underline hover:text-blue-600 dark:hover:text-white transition-colors py-2"
            >
              Work
            </a>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#0F1419] dark:text-[#6E767D] no-underline hover:text-blue-600 dark:hover:text-white transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-[#0F1419] dark:text-[#6E767D] no-underline hover:text-blue-600 dark:hover:text-white transition-colors py-2"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-2.5 bg-blue-600 text-white rounded-lg no-underline font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
