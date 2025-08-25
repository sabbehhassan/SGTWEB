import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const AboutUs = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaGFzc2Fuc3ViYmVoIiwiYSI6ImNsenM3MWV2cjFnN2YyanB6emFjeTBncWkifQ.8IOwn6CXTEi-2uPgqN_Hkw";

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [74.3409363, 35.9114862], // Silicon Global Tech coordinates (Gilgit)
      zoom: 15,
    });

    new mapboxgl.Marker()
      .setLngLat([74.3409363, 35.9114862])
      .setPopup(new mapboxgl.Popup().setHTML("<h3>Silicon Global Tech</h3>"))
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Left Side - Text Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <h3 className="italic text-lg md:text-xl mb-6">
            About Himalya Geo Lab&apos;s And It&apos;s Innovative IT Solutions
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We are a dynamic and innovative company founded on January 10, 2023,
            with a vision to provide exceptional products and services to our
            clients. Our goal is to offer reliable solutions that meet the
            ever-changing demands of the market and exceed our client's
            expectations.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            Committed to innovation and customer-centricity, we embrace
            opportunities and challenges. Grateful for our stakeholders' trust,
            we're on an exciting journey to create a legacy of excellence and
            enduring impact.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-lg transition">
            More Details
          </button>
        </div>

        {/* Right Side - Mapbox Map */}
        <div
          ref={mapContainer}
          className="
            w-full md:w-[70%] lg:w-[35%] 
            h-[300px] md:h-[400px] 
            rounded-2xl overflow-hidden shadow-lg 
            md:ml-auto
          "
        />
      </div>
    </section>
  );
};

export default AboutUs;
