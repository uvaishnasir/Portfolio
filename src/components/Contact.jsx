import { personalInfo } from "../data/constants";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-8 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#0F1419] dark:text-white">
            Hey, you scrolled this far, let's talk.
          </h2>
          <p className="text-[#536471] dark:text-[#6E767D] text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-3.5 text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all no-underline"
            >
              Email Me
            </a>
            <a
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 text-base font-semibold bg-transparent text-[#0F1419] dark:text-white border-2 border-[#EFF3F4] dark:border-[#2F3336] rounded-lg hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all no-underline"
            >
              View GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="p-6 bg-white dark:bg-[#16181C] rounded-xl border border-[#EFF3F4] dark:border-[#2F3336]">
              <p className="text-[#536471] text-sm mb-2 font-semibold uppercase tracking-wide">
                Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all no-underline"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="p-6 bg-white dark:bg-[#16181C] rounded-xl border border-[#EFF3F4] dark:border-[#2F3336]">
              <p className="text-[#536471] text-sm mb-2 font-semibold uppercase tracking-wide">
                Phone
              </p>
              <a
                href={`tel:+91${personalInfo.phone}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors no-underline"
              >
                +91 {personalInfo.phone}
              </a>
            </div>
            <div className="p-6 bg-white dark:bg-[#16181C] rounded-xl border border-[#EFF3F4] dark:border-[#2F3336]">
              <p className="text-[#536471] text-sm mb-2 font-semibold uppercase tracking-wide">
                Location
              </p>
              <p className="text-[#0F1419] dark:text-white">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
