import React from "react";
import { FaPlus } from "react-icons/fa";

const HeroSection = () => {
  // Random stars generate karne ke liye ek array
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100, // % position
    top: Math.random() * 100, // % position
    size: Math.random() * 3 + 1, // pixel size
    delay: Math.random() * 5, // animation delay
  }));

  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-black text-white h-[90vh] px-6 overflow-hidden">
      {/* Purple & Blue Plus Icons */}
      <FaPlus className="absolute left-60 top-1/2 text-blue-700 text-7xl opacity-40" />
      <FaPlus className="absolute right-60 top-1/5 text-purple-700 text-7xl opacity-40" />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold leading-snug">
        Building <span className="text-purple-500">Innovative</span> <br />
        Software Solutions
      </h1>

      {/* Subheading */}
      <p className="mt-4 max-w-2xl text-gray-300">
        We empower businesses with cutting-edge web, mobile, and AI-driven
        applications that accelerate growth and efficiency.
      </p>

      {/* Button */}
      <button className="mt-6 px-6 py-3 rounded-full border border-purple-500 hover:bg-purple-600 transition">
        Get Started
      </button>

      {/* Yellow Arc with Shadow Glow */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1000 200"
          className="w-full h-[240px]"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Glow Effect */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Gradient Arc */}
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="25%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="1" />
              <stop offset="75%" stopColor="#FFD700" stopOpacity="0.7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Arc Path */}
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
      <div className="absolute bottom-0 left-0 w-full h-[120px] overflow-hidden">
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
