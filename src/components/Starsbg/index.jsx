import React, { useEffect, useState } from "react";

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const initialStars = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * 250,
      size: Math.random() * 3 + 1,
    }));
    setStars(initialStars);

    const interval = setInterval(() => {
      setStars((prev) =>
        prev.map((s) => ({ ...s, blink: Math.random() > 0.5 }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-80 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute bg-white rounded-full transition-opacity duration-200 ${
            star.blink ? "opacity-0" : "opacity-100"
          }`}
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
};

export default StarsBackground;
