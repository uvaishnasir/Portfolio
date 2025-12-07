import { personalInfo, socialLinks } from "../data/constants";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3 font-semibold">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                {personalInfo.about.fullName}
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {personalInfo.description}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                Education
              </h4>
              <div className="bg-[#111111] p-6 rounded-xl border border-gray-800">
                <p className="font-semibold text-lg mb-2">
                  {personalInfo.about.education.degree}
                </p>
                <p className="text-gray-400">
                  {personalInfo.about.education.institution}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {personalInfo.about.education.location} |{" "}
                  {personalInfo.about.education.duration} | CGPA:{" "}
                  {personalInfo.about.education.cgpa}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                Certifications
              </h4>
              <div className="space-y-3">
                {personalInfo.about.certifications.map((cert, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                    <p className="text-gray-400">
                      <strong className="text-gray-300">{cert.name}</strong> –{" "}
                      {cert.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-300">
                Achievements
              </h4>
              <div className="space-y-4">
                {personalInfo.about.achievements.map((achievement, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-blue-400 mt-1 flex-shrink-0">✓</span>
                    <p className="text-gray-400 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-5 text-gray-300">
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
