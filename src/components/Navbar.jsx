import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 dark:bg-white/90 backdrop-blur-sm border-b border-gray-800 dark:border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="gradient-text text-xl font-bold no-underline">
          Uvaish
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#experience"
            className="text-gray-300 dark:text-gray-700 no-underline hover:text-white dark:hover:text-black transition-colors"
          >
            Work
          </a>
          <a
            href="#projects"
            className="text-gray-300 dark:text-gray-700 no-underline hover:text-white dark:hover:text-black transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-300 dark:text-gray-700 no-underline hover:text-white dark:hover:text-black transition-colors"
          >
            About
          </a>

          <ThemeToggle />

          <a
            href="#contact"
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg no-underline font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
