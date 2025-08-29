// src/components/TeamSection.jsx
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Globe,
  Linkedin,
  Github,
  Phone,
  Briefcase,
} from "lucide-react";
import teamMembers from "../../Data/TeamData"; // ✅ Correct path

const TABS = [
  { key: "bio", label: "Bio" },
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
  { key: "awards", label: "Awards" },
  { key: "researchInterest", label: "Research Interest" },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeTab, setActiveTab] = useState("bio");

  const prevSlide = () => {
    setCurrentIndex((p) =>
      p === 0 ? Math.max(teamMembers.length - 4, 0) : p - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((p) => (p + 4 >= teamMembers.length ? 0 : p + 1));
  };

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStart == null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  return (
    <section className="bg-black text-white py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The <span className="text-purple-500">People</span> Behind the{" "}
          <span className="text-purple-500">Vision</span>
        </h2>

        {/* Mobile */}
        <div
          className="block md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg cursor-pointer"
            onClick={() => {
              setSelectedMember(teamMembers[currentIndex]);
              setActiveTab("bio");
            }}
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

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center relative">
          <button
            onClick={prevSlide}
            className="absolute -left-16 text-white p-2 hover:scale-110"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
            {teamMembers.slice(currentIndex, currentIndex + 4).map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/40 transition cursor-pointer"
                onClick={() => {
                  setSelectedMember(member);
                  setActiveTab("bio");
                }}
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

          <button
            onClick={nextSlide}
            className="absolute -right-16 text-white p-2 hover:scale-110"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
          <div className="bg-white text-black max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 rounded-2xl relative shadow-2xl">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center mb-6">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-purple-500 mb-4"
              />
              <h3 className="text-xl font-bold">{selectedMember.name}</h3>
              <p className="text-purple-600">{selectedMember.role}</p>
              <p className="text-gray-500 text-sm">{selectedMember.email}</p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 border-b pb-2 mb-4">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-md ${
                    activeTab === t.key
                      ? "border-b-2 border-purple-500 text-purple-600"
                      : "text-gray-600 hover:text-purple-500"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="text-gray-700 leading-relaxed">
              {Array.isArray(selectedMember[activeTab]) ? (
                <ul className="list-disc pl-5">
                  {selectedMember[activeTab].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{selectedMember[activeTab]}</p>
              )}
            </div>

            {/* Portfolio Buttons */}
            {selectedMember.portfolio && (
              <div className="flex justify-center gap-3 mt-6 flex-wrap">
                {selectedMember.portfolio.website && (
                  <a
                    href={selectedMember.portfolio.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                  >
                    <Globe size={18} /> Website
                  </a>
                )}
                {selectedMember.portfolio.linkedin && (
                  <a
                    href={selectedMember.portfolio.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                )}
                {selectedMember.portfolio.github && (
                  <a
                    href={selectedMember.portfolio.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
                )}
                {selectedMember.portfolio.whatsapp && (
                  <a
                    href={selectedMember.portfolio.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    <Phone size={18} /> WhatsApp
                  </a>
                )}
                {selectedMember.portfolio.fiver && (
                  <a
                    href={selectedMember.portfolio.fiver}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                  >
                    <Briefcase size={18} /> Fiverr
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;
