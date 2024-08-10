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
      <img className="title-img" src={title} />
      <div className="subtitle">BLOG BY devMARCO</div>
      {/* <div className="title-400">wars</div> */}
    </div>
  );
};
