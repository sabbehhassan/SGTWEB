import React from "react";
import CourseCard from "../CourseCard";

const DesktopCourses = ({
  currentCourses,
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  setSelectedCourse,
}) => {
  return (
    <div className="hidden lg:block relative mt-14">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="absolute left-5 top-1/2 -translate-y-1/2 
        text-white text-4xl px-2 disabled:text-gray-700 
        hover:scale-125 transition z-10"
      >
        ❮
      </button>

      <div className="grid gap-10 grid-cols-3 mx-16">
        {currentCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={setSelectedCourse}
            height="h-56"
          />
        ))}
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="absolute right-5 top-1/2 -translate-y-1/2 
        text-white text-4xl px-2 disabled:text-gray-700 
        hover:scale-125 transition z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default DesktopCourses;
