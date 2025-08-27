import React from "react";
import EnrollForm from "../../components/EnrollmentForm";

const CoursePopup = ({ selectedCourse, showForm, setShowForm, closePopup }) => {
  if (!selectedCourse) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={closePopup}
      ></div>

      <div className="relative z-50 bg-white border border-gray-300 shadow-2xl rounded-xl p-8 w-11/12 max-w-3xl animate-slideDown">
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        >
          ✕
        </button>

        {!showForm ? (
          <>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="text-6xl">{selectedCourse.icon}</div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedCourse.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {selectedCourse.longDesc}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-3 rounded-lg bg-purple-600 text-white text-lg font-semibold hover:bg-purple-700 transition"
              >
                Enroll Now
              </button>
            </div>
          </>
        ) : (
          <EnrollForm course={selectedCourse.name} onClose={closePopup} />
        )}
      </div>
    </div>
  );
};

export default CoursePopup;
