// src/components/EnrollmentForm.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const EnrollmentForm = ({ course, onClose }) => {
  const [formData, setFormData] = useState({
    student_name: "",
    student_email: "",
    student_phone: "",
    student_cnic: "",
    student_dob: "",
    student_course: course || "",
  });

  const availableCourses = [
    "Web Development",
    "UI/UX Design",
    "AI & Deep Learning",
    "Bookkeeping",
    "Amazon Trading",
    "App Development",
    "Walmart Marketplace",
    "Shopify Store",
    "Trading & Investment",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lzaaz1d", // ✅ Your EmailJS service ID
        "template_4gsfgk4", // ✅ Your EmailJS template ID
        formData,
        "v7iYMfI0wo13cDRmW" // ✅ Your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Enrollment submitted successfully!");
          onClose();
        },
        (error) => {
          alert("❌ Failed to submit. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="p-6 rounded-xl shadow-lg bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-700 backdrop-blur-lg">
      <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
        Enroll in {course}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            name="student_name"
            required
            value={formData.student_name}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-gray-800/70 text-white rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="student_email"
            required
            value={formData.student_email}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-gray-800/70 text-white rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            name="student_phone"
            required
            value={formData.student_phone}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-gray-800/70 text-white rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* CNIC */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            CNIC
          </label>
          <input
            type="text"
            name="student_cnic"
            required
            value={formData.student_cnic}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-gray-800/70 text-white rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* DOB */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Date of Birth
          </label>
          <input
            type="date"
            name="student_dob"
            required
            value={formData.student_dob}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-gray-800/70 text-white rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
          />
        </div>

        {/* Course Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Select Course
          </label>
          <select
            name="student_course"
            value={formData.student_course}
            onChange={handleChange}
            className="w-full border border-gray-600 bg-gray-800/70 text-white rounded-lg p-2 mt-1 focus:ring-2 focus:ring-purple-500 outline-none"
            required
          >
            <option value="">-- Select a course --</option>
            {availableCourses.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EnrollmentForm;
