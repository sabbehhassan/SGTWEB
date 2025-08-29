import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Sabbeh from "../../assets/team/sabbeh.png";
import Shahid from "../../assets/team/shahid.jpg";
import Sami from "../../assets/team/sami.png";
import Hasnian from "../../assets/team/hasnain.png";
import Karrar from "../../assets/team/karrar.png";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sabbeh Hassan",
      role: "Developer",
      email: "sabbeh@example.com",
      image: Sabbeh,
      skills: ["React", "Node.js", "MongoDB"],
      experience:
        "Sabbeh Hassan is a passionate and skilled Full-Stack Developer with over 2.5 years of hands-on experience in building modern and scalable web applications. His journey in the tech world began with mastering the fundamentals of HTML and CSS, where he developed a solid foundation in creating clean and responsive user interfaces.With time, he moved into the world of JavaScript, unlocking the power of dynamic and interactive web development. Driven by curiosity and a hunger for growth, Sabbeh explored Django, reaching an intermediate level of proficiency and gaining valuable backend development experience.His real breakthrough came with Vue.js, where he advanced to an expert level, building highly efficient, user-friendly, and performance-driven front-end solutions. Leveraging his strong command of Vue.js, he contributed to projects that emphasized both usability and technical robustness.Later, Sabbeh expanded his skill set by diving deep into the MERN Stack (MongoDB, Express, React, Node.js). Through diverse projects, he honed his expertise in full-stack development, gaining professional-level proficiency in designing and implementing complete web solutions — from database modeling to backend APIs and front-end interfaces.Today, Sabbeh stands as a professional developer who thrives in solving complex problems, adopting the latest frameworks, and delivering products that exceed client expectations. His continuous learning mindset and hands-on experience make him a valuable contributor to any innovative tech team.",
    },
    {
      id: 2,
      name: "Hasnain-ullah",
      role: "AI & Data Science",
      email: "hasnain@example.com",
      image: Hasnian,
      skills: ["Python", "TensorFlow", "Machine Learning"],
      experience:
        "Hasnain specializes in AI & Data Science, building predictive models and deploying ML solutions for real-world problems.",
    },
    {
      id: 3,
      name: "Karrar Haider",
      role: "UX/UI Designer",
      email: "karrar@example.com",
      image: Karrar,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      experience:
        "Karrar has designed intuitive interfaces and user experiences for multiple startups and enterprise apps.",
    },
    {
      id: 4,
      name: "Shahid Farman",
      role: "Accounting & Bookkeeping",
      email: "shahid@example.com",
      image: Shahid,
      skills: ["QuickBooks", "Excel", "Financial Reporting"],
      experience:
        "Shahid has a strong background in finance and has worked on bookkeeping, audits, and business reports for SMEs.",
    },
    {
      id: 5,
      name: "Sammi Hassan",
      role: "e-Commerce",
      email: "sammi@example.com",
      image: Sami,
      skills: ["Shopify", "WooCommerce", "Digital Marketing"],
      experience:
        "Sammi has managed multiple eCommerce stores, optimizing sales funnels and customer journeys successfully.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null); // For modal

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(teamMembers.length - 4, 0) : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 4 >= teamMembers.length ? 0 : prev + 1));
  };

  // swipe handlers (mobile)
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();

    setTouchStart(null);
  };

  return (
    <section className="bg-black text-white py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The <span className="text-purple-500">People</span> Behind the{" "}
          <span className="text-purple-500">Vision</span>
        </h2>

        {/* --- Mobile View (1 card + swipe) --- */}
        <div
          className="block md:hidden relative"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg cursor-pointer"
            onClick={() => setSelectedMember(teamMembers[currentIndex])}
          >
            <img
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-purple-500"
            />
            <h3 className="text-xl font-semibold">
              {teamMembers[currentIndex].name}
            </h3>
            <p className="text-gray-400">{teamMembers[currentIndex].role}</p>
          </div>
        </div>

        {/* --- Desktop View (4 cards + arrows) --- */}
        <div className="hidden md:flex items-center justify-center relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-16 bg-transparent text-white p-2 hover:scale-110 transition"
          >
            <ChevronLeft size={40} />
          </button>

          {/* 4 visible cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
            {teamMembers.slice(currentIndex, currentIndex + 4).map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/40 transition cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full object-cover mb-5 border-4 border-purple-500"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-16 bg-transparent text-white p-2 hover:scale-110 transition"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>

      {/* --- Modal (Alert Style) --- */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
          <div className="bg-white text-black max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 rounded-2xl relative shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Profile */}
            <div className="flex flex-col items-center">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-purple-500 mb-4"
              />
              <h3 className="text-xl font-bold">{selectedMember.name}</h3>
              <p className="text-purple-600">{selectedMember.role}</p>
              <p className="text-gray-500 text-sm">{selectedMember.email}</p>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2">Skills</h4>
              <ul className="list-disc list-inside text-gray-700">
                {selectedMember.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Experience / Journey */}
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">Experience</h4>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {selectedMember.experience}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
