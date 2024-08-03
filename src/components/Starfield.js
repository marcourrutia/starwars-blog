import React, { useEffect } from "react";
const Starfield = () => {
  useEffect(() => {
    const starfield = document.getElementById("starfield");
    const stars = 200;

    for (let i = 0; i < stars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 5 + 5}s`;
      starfield.appendChild(star);
    }
  }, []);

  return <div className="starfield" id="starfield"></div>;
};

export default Starfield;
