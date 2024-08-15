import { useNavigate } from "react-router-dom";
import "./BackBtn.css";

export const BackBtn = () => {
  const navigation = useNavigate();
  return (
    <button
      className="btn-global-back foreground"
      onClick={() => navigation(-1)}
    >
      BACK
    </button>
  );
};
