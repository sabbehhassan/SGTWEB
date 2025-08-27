import React from "react";

const CoursesHeading = ({ blur }) => {
  return (
    <div className={`${blur ? "blur-sm" : ""}`}>
      <h2 className="text-4xl font-extrabold text-white">
        From <span className="text-purple-400">Beginner</span> to{" "}
        <span className="text-blue-400">Pro</span>
        <br />
        <span>Unlock Your Tech Potential</span>
      </h2>
      <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
        Whether you’re starting out or leveling up, our tech courses are
        designed to give you practical skills that employers and innovators
        value.
      </p>
    </div>
  );
};

export default CoursesHeading;
