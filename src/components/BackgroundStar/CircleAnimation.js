import { useEffect } from "react";
import "./CircleAnimation.css";

export const CircleAnimation = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.setCircleClean(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="circle-container">
      <div className="circle"></div>
    </div>
  );
};
