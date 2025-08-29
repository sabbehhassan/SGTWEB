import resourcesData from "../../Data/ResourceData";
import StarsBackground from "../Starsbg"; // stars wala component

export default function ResourcesDetail() {
  return (
    <div className="relative bg-black text-white min-h-screen py-12 px-4 sm:px-6">
      {/* Stars Background */}
      <StarsBackground />

      {/* Heading Section */}
      <div className="text-center mb-12 relative z-10 px-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Explore Our <span className="text-purple-500">Resources</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto text-gray-300">
          Empowering You with Skills for the Future
        </p>
        <p className="mt-2 text-sm sm:text-base text-gray-400 max-w-3xl mx-auto">
          Discover our carefully curated resources designed to equip you with
          the knowledge and skills to thrive in today’s fast-paced digital
          world. Whether you're building websites, managing finances, designing
          interfaces, mastering AI, or running an Amazon business, we provide
          the expertise you need to succeed.
        </p>
      </div>

      {/* Resources List */}
      <div className="space-y-12 relative z-10">
        {resourcesData.map((resource) => (
          <div
            key={resource.id}
            className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row md:h-[480px]"
          >
            {/* Background Image */}
            <div className="w-full md:w-1/2 h-[220px] md:h-full">
              <img
                src={resource.image}
                alt={resource.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Box */}
            <div className="w-full md:w-1/2 flex items-center p-4 sm:p-6 md:p-8 bg-white h-full">
              <div className="text-left w-full">
                {/* Resource Name */}
                <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">
                  {resource.name}
                </h2>

                {/* Short Description */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-black">
                  {resource.shortDesc}
                </h3>

                {/* Long Description */}
                <p className="text-black text-sm sm:text-base leading-relaxed">
                  {resource.longDesc}
                </p>

                {/* Projects */}
                <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-black list-disc list-inside text-sm sm:text-base">
                  {resource.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>

                {/* Dynamic Button */}
                {resource.buttonText && resource.buttonLink && (
                  <div className="mt-4 sm:mt-6">
                    <a
                      href={resource.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-md hover:opacity-90 text-sm sm:text-base text-white"
                    >
                      {resource.buttonText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
