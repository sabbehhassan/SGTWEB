import React from "react";
import FounderImg from "../../assets/team/kamil.jpg"; // founder ki pic import karo

const FounderSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Left Side - Founder Card */}
        <div className="bg-white text-black rounded-xl shadow-lg p-6 w-full md:w-1/3 flex flex-col items-center justify-center h-full">
          <img
            src={FounderImg}
            alt="Founder & CEO"
            className="w-75 h-75 object-cover rounded-xl mb-4 shadow-md"
          />
          <h3 className="text-xl font-bold">Kamil Hussain</h3>
          <p className="text-sm text-gray-700 mb-2">
            Designation: Founder & CEO
          </p>
          <p className="text-sm text-gray-700 mb-2">Phone: 92-0325 0099 345</p>
          <p className="text-sm text-gray-700">
            Email: kamilhussain340@gmail.com
          </p>
        </div>

        {/* Right Side - Description */}
        <div className="flex-1 bg-transparent flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Founder & CEO</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            <span className="font-semibold text-purple-400">
              Silicon Global Tech (SGT)
            </span>{" "}
            was officially incorporated on 10th November 2023, marking the
            beginning of a journey driven by innovation, technology, and
            excellence. At the heart of this vision stands our founder,{" "}
            <span className="font-semibold text-purple-400">Kamil Hussain</span>
            , a forward-thinking entrepreneur and strategist who laid the
            foundation of SGT as a hub of{" "}
            <span className="font-semibold text-purple-400">
              creativity, problem-solving, and digital transformation.
            </span>
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            With a strong belief in building sustainable solutions for the
            modern digital economy, Kamil Hussain envisioned SGT not just as a
            company, but as a <span className="italic">think tank</span> — a
            place where ideas evolve into impactful solutions. His leadership
            reflects a blend of technical expertise, strategic foresight, and a
            deep commitment to empowering businesses through cutting-edge
            technology and innovative practices.
          </p>
          <p className="text-gray-300 leading-relaxed mb-4">
            From the very beginning, he has emphasized quality, trust, and
            global standards, shaping SGT into an organization that values both
            technological advancement and ethical responsibility. Under his
            guidance, SGT has positioned itself as a catalyst for change,
            pushing boundaries in{" "}
            <span className="font-semibold text-purple-400">
              software development, UI/UX design, accounting tools, and digital
              solutions
            </span>{" "}
            .
          </p>
          <p className="text-gray-300 leading-relaxed">
            Today, SGT continues to grow as a testament to Kamil Hussain’s
            vision, serving clients with integrity and driving innovation that
            makes a real difference in the global tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
