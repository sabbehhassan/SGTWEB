import React from "react";

const CourseCard = ({ course, onClick, height = "h-56" }) => {
  return (
    <div
      onClick={() => onClick(course)}
      className="relative p-6 rounded-2xl cursor-pointer
      bg-white shadow-lg border border-gray-200
      hover:-translate-y-2 hover:scale-105 hover:shadow-2xl 
      flex flex-col transition-all duration-300"
    >
      <div className="flex justify-center mb-4">{course.icon}</div>
      <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
      <p className="text-gray-600 text-sm mt-2 flex-grow">{course.desc}</p>
      <img
        src={course.image}
        alt={course.name}
        className={`w-full ${height} object-cover mt-4 rounded-xl border border-gray-200 shadow-md`}
      />
    </div>
  );
};

export default CourseCard;
