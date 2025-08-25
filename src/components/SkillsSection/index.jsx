import React from "react";
import {
  Code,
  Brain,
  ShoppingCart,
  BookOpen,
  Palette,
  Smartphone,
  Store,
  Bitcoin,
} from "lucide-react";

const skills = [
  {
    title: "Web Development",
    desc: "Building responsive and dynamic websites with modern technologies.",
    icon: <Code size={32} className="text-blue-400" />,
  },
  {
    title: "AI & Deep Learning",
    desc: "Harnessing artificial intelligence to build smart solutions.",
    icon: <Brain size={32} className="text-purple-400" />,
  },
  {
    title: "Amazon Selling",
    desc: "Learn strategies to scale your Amazon business effectively.",
    icon: <ShoppingCart size={32} className="text-green-400" />,
  },
  {
    title: "Bookkeeping",
    desc: "Master financial records and business accounting systems.",
    icon: <BookOpen size={32} className="text-yellow-400" />,
  },
  {
    title: "UI/UX Design",
    desc: "Designing modern, user-friendly, and engaging interfaces.",
    icon: <Palette size={32} className="text-pink-400" />,
  },
  {
    title: "Walmart Selling",
    desc: "Grow your e-commerce business on Walmart marketplace.",
    icon: <Store size={32} className="text-cyan-400" />,
  },
  {
    title: "Crypto Trading",
    desc: "Learn how to trade and invest in cryptocurrencies.",
    icon: <Bitcoin size={32} className="text-orange-400" />,
  },
  {
    title: "App Development",
    desc: "Develop powerful mobile and desktop applications.",
    icon: <Smartphone size={32} className="text-red-400" />,
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Master <span className="text-purple-500">Essential</span> Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 text-center border border-gray-800 shadow-lg hover:shadow-purple-500/20 transition relative"
            >
              <div className="flex justify-center mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>
              <button className="px-4 py-2 rounded-lg text-white border border-purple-500 hover:bg-purple-600 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
