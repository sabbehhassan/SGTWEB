import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CourseCard from "../CourseCard";
import "swiper/css";

const MobileCourses = ({ courses, setSelectedCourse }) => {
  return (
    <div className="mt-10 lg:hidden">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 }, // 📱 Tablet → 2 cards
        }}
        pagination={{ clickable: true }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard
              course={course}
              onClick={setSelectedCourse}
              height="h-48"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileCourses;
