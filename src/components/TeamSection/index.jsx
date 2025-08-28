import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Sabbeh from "../../assets/team/sabbeh.png";
import Shahid from "../../assets/team/shahid.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sabbih Hassan",
      role: "Developer",
      image: Sabbeh,
    },
    {
      id: 2,
      name: "Hasnain-ullah",
      role: "AI & Data Science",
      image: Sabbeh,
    },
    {
      id: 3,
      name: "Karrar Haider",
      role: "UX/UI Designer",
      image: Shahid,
    },
    {
      id: 4,
      name: "Shahid Farman",
      role: "Accounting & Bookkeeping",
      image: Shahid,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black text-white py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The <span className="text-purple-500">People</span> Behind the{" "}
          <span className="text-purple-500">Vision</span>
        </h2>

        {/* --- Mobile View (1 card) --- */}
        <div className="block md:hidden relative">
          <div className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-lg">
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

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col items-center text-center bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-purple-500/40 transition"
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
    </section>
  );
};

export default TeamSection;
