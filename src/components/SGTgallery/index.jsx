import React from "react";
import Pic1 from "../../assets/SGTgallery/SGT1.jpg";
import Pic2 from "../../assets/SGTgallery/SGT2.jpg";
import Pic3 from "../../assets/SGTgallery/SGT3.jpg";
import Pic4 from "../../assets/SGTgallery/SGT4.jpg";
import Pic5 from "../../assets/SGTgallery/SGT5.jpg";
import Pic6 from "../../assets/SGTgallery/SGT6.jpg";

const SGTGallery = () => {
  const images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8">
          SGT Gallery
        </h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          A glimpse of moments, events, and milestones at{" "}
          <strong>Silicon Global Tech</strong>. Our gallery showcases our
          workspace, achievements, and team spirit.
        </p>

        {/* Masonry Style Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`SGT Gallery ${index + 1}`}
              className="w-full rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SGTGallery;
