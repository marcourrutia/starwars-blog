import { useEffect, useState } from "react";
import "./Title.css";

export const Title = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 300);
  }, []);

  return (
    <div className={`title-container ${visible ? "visible" : ""}`}>
      <div className="title-400">star</div>
      <div className="subtitle">BLOG BY devMARCO</div>
      <div className="title-400">wars</div>
    </div>
  );
};
