import React from "react";
import { FaPlus } from "react-icons/fa";

const HeroSection = () => {
  // Generate 20 random stars in bottom area only
  const stars = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 60 + 20}%`, // avoid edges
    bottom: `${Math.random() * 80 + 10}px`,
    size: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-black text-white min-h-screen px-4 md:px-6 overflow-hidden pt-4 sm:pt-20 md:pt-2">
      {/* Custom Thin Plus Icons */}
      <svg
        className="absolute left-6 md:left-70 top-1/2 text-blue-700 opacity-40"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5" // yahan stroke ko patla kar sakte ho
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>

      <svg
        className="absolute right-6 md:right-70 top-1/5 text-purple-700 opacity-40"
        width="100"
        height="100"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5" // patla line
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>

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
      <button
        className="mt-6 relative px-6 py-2 text-base font-semibold rounded-full 
  bg-gradient-to-r from-purple-600 to-blue-600 text-white 
  transition hover:opacity-90 
  before:absolute before:inset-0 before:rounded-full before:p-[2px] 
  before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 
  before:-z-10"
      >
        <span className="relative z-10">Get Started</span>
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

      {/* Stars (20 random, shining every 5s) */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white animate-star-shine"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              bottom: star.bottom,
              animationDelay: `${star.delay}s`,
            }}
          ></span>
        ))}
      </div>

      {/* Extra CSS for shine effect */}
      <style jsx>{`
        @keyframes star-shine {
          0%,
          90%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.6);
          }
        }
        .animate-star-shine {
          animation: star-shine 5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
