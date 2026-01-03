import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-[#EFF3F4] dark:border-[#2F3336]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#" className="gradient-text text-xl font-bold no-underline">
          Uvaish
        </a>

        <div className="flex items-center gap-6">
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
      </div>
    </nav>
  );
};

export default Navbar;
