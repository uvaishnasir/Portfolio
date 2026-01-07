import { personalInfo, socialLinks } from "../data/constants";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 md:px-8 bg-[#F7F9F9] dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-[#536471] mb-3 font-semibold">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1419] dark:text-white">
            Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5 text-[#0F1419] dark:text-white">
                {personalInfo.about.fullName}
              </h3>
              <p className="text-[#536471] dark:text-[#6E767D] leading-relaxed text-lg">
                {personalInfo.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#0F1419] dark:text-white">
                Education
              </h4>
              <div className="bg-white dark:bg-[#16181C] p-6 rounded-xl border border-[#EFF3F4] dark:border-[#2F3336]">
                <p className="font-semibold text-lg mb-2 text-[#0F1419] dark:text-white">
                  {personalInfo.about.education.degree}
                </p>
                <p className="text-[#536471] dark:text-[#6E767D]">
                  {personalInfo.about.education.institution}
                </p>
                <p className="text-sm text-[#536471] mt-2">
                  {personalInfo.about.education.location} |{" "}
                  {personalInfo.about.education.duration} | CGPA:{" "}
                  {personalInfo.about.education.cgpa}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Certifications
              </h4>
              <div className="space-y-3">
                {personalInfo.about.certifications.map((cert, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                      •
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">
                      <strong className="text-gray-900 dark:text-white">
                        {cert.name}
                      </strong>{" "}
                      – {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Achievements
              </h4>
              <div className="space-y-4">
                {personalInfo.about.achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                      ✓
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-5 text-gray-900 dark:text-white">
                Connect with me
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-12 h-12 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
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
