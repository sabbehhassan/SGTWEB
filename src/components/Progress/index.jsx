import React from "react";

const stats = [
  { number: "100+", label: "Client Satisfaction" },
  { number: "79+", label: "Happy Clients" },
  { number: "53+", label: "Clients & Partners" },
  { number: "79+", label: "Projects Completed" },
];

const ProgressStats = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg py-6 hover:shadow-lg hover:shadow-purple-200 transition"
          >
            {/* Gradient Text */}
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {stat.number}
            </h3>
            <p className="font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgressStats;
