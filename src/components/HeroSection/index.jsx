import React from "react";
import { FaPlus } from "react-icons/fa";

const HeroSection = () => {
  // Random stars generate karne ke liye ek array
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-black text-white min-h-screen px-4 md:px-6 overflow-hidden pt-4 sm:pt-20 md:pt-2">
      {/* Purple & Blue Plus Icons (Responsive position) */}
      <FaPlus className="absolute left-6 md:left-20 top-1/3 text-blue-700 text-4xl md:text-7xl opacity-40" />
      <FaPlus className="absolute right-6 md:right-20 top-1/5 text-purple-700 text-4xl md:text-7xl opacity-40" />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
        Building <span className="text-purple-500">Innovative</span> <br />
        Software Solutions
      </h1>

      {/* Subheading */}
      <p className="mt-4 max-w-lg sm:max-w-xl md:max-w-2xl text-gray-300 text-sm sm:text-base md:text-lg">
        We empower businesses with cutting-edge web, mobile, and AI-driven
        applications that accelerate growth and efficiency.
      </p>

      {/* Button */}
      <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 rounded-full border border-purple-500 hover:bg-purple-600 transition text-sm sm:text-base">
        Get Started
      </button>

      {/* Yellow Arc with Shadow Glow */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-[120px] sm:h-[180px] md:h-[240px]"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="75%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          <path
            d="M 0 200 Q 500 0 1000 200"
            stroke="url(#arcGradient)"
            strokeWidth="10"
            fill="transparent"
            filter="url(#glow)"
          />
        </svg>
      </div>

      {/* Stars strictly below arc */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] sm:h-[100px] md:h-[120px] overflow-hidden">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
