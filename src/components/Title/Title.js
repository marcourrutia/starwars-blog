import { useEffect, useState } from "react";
import "./Title.css";
import { title } from "../../assets/images";

export const Title = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);

  return (
    <div className={`title-container ${visible ? "visible" : ""}`}>
      <img className="title-img" src={title} alt="star wars title" />
      <div className="subtitle">GUIDE BY devMARCO</div>
    </div>
  );
};
