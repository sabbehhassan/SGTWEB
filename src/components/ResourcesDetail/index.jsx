import resourcesData from "../../Data";
import StarsBackground from "../Starsbg"; // stars wala component

export default function ResourcesDetail() {
  return (
    <div className="relative bg-black text-white min-h-screen py-12 px-6">
      {/* Stars Background */}
      <StarsBackground />

      {/* Heading Section */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Explore Our <span className="text-purple-500">Resources</span>
        </h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300">
          Empowering You with Skills for the Future
        </p>
        <p className="mt-2 text-gray-400 max-w-3xl mx-auto">
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
            className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Background Image */}
            <img
              src={resource.image}
              alt={resource.name}
              className="w-full h-[380px] md:h-[420px] object-cover"
            />

            {/* Overlay Content Box */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/80 rounded-2xl p-8 max-w-4xl text-left my-6">
                <h3 className="text-xl font-semibold mb-4">
                  {resource.shortDesc}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {resource.longDesc}
                </p>
                <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
                  {resource.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-md hover:opacity-90">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
